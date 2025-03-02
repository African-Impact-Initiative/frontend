import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IVBState, AppDispatch } from '../../store/store';
import { useAppSelector } from '../../hooks/redux';
import userService from '../../api/userService';
import User from '../../types/user';
import {
    Box,
    Typography,
    Button,
    Tabs,
    Tab,
    Paper,
    Avatar,
    Divider,
    Alert
} from '@mui/material';
import { InvitationResponse } from '../../types/invitation';
import organizationService from '../../api/organizationService';
import { setErrorNotification, setSuccessNotification } from '../../store/notificationReducer';

interface JoinRequest {
    id: number;
    user: number | User;
    organization: number;
    status: 'pending' | 'accepted' | 'declined';
    created_at: string;
  }

const InvitationManager = () => {
    const [sentInvitations, setSentInvitations] = useState<InvitationResponse[]>([]);
    const [joinRequests, setJoinRequests] = useState<JoinRequest[]>([]);
    const [error, setError] = useState('');
    const [tabValue, setTabValue] = useState(0);
    const user = useAppSelector(state => state.user);
    const currentOrganization = useSelector((state: IVBState) => state.userOrganization);
    const isAuthorized = user?.data?.owner || (user?.data?.coowner === currentOrganization?.data?.id);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };
    const dispatch = useDispatch<AppDispatch>();

    const fetchInvitations = async () => {
        try {
            const response = await userService.getInvitations();
            if (response.success && response.data) {
                const invitations = Array.isArray(response.data) ? response.data : [];
                const sent = invitations.filter(inv => 
                    inv.organization === currentOrganization.data?.id &&
                    inv.status === 'pending'  // Only show pending invitations
                );
                
                setSentInvitations(sent);
            }
        } catch (error) {
            console.error('Error fetching invitations:', error);
            setError('Failed to load invitations');
        }
    };
    // Fetch Join Requests for the organization
    const fetchJoinRequests = async () => {
        try {
          const response = await organizationService.getJoinRequestsForOrganization(currentOrganization.data.id);
          if (response.success && Array.isArray(response.data)) {
            const rawRequests: any[] = response.data; // raw join requests with user as number
            // For each join request, if `user` is a number, fetch the user details.
            const requestsWithUserData = await Promise.all(
              rawRequests.map(async (req) => {
                if (typeof req.user === 'number') {
                  const userResponse = await userService.retrieveSingle(req.user);
                  if (userResponse.success && userResponse.data) {
                    return { ...req, user: userResponse.data };
                  }
                }
                return req;
              })
            );
            setJoinRequests(requestsWithUserData);
          } else {
            dispatch(setErrorNotification('Failed to fetch join requests'));
          }
        } catch (error) {
          dispatch(setErrorNotification('Failed to fetch join requests'));
        }
    };

    useEffect(() => {
        if (isAuthorized && currentOrganization.data?.id) {
            fetchInvitations();
            fetchJoinRequests();
        }
    }, [isAuthorized, currentOrganization.data?.id]);

    const handleAcceptRequest = async (requestId: number) => {
        try {
          const response = await organizationService.acceptJoinRequest(requestId);
          if (response.success) {
            dispatch(setSuccessNotification('Join request accepted successfully'));
            // Remove the accepted request from the list by refreshing
            fetchJoinRequests();
          } else {
            dispatch(setErrorNotification('Failed to accept join request'));
          }
        } catch (error) {
          dispatch(setErrorNotification('Failed to accept join request'));
        }
    };
    
    const handleDeclineRequest = async (requestId: number) => {
        try {
          const response = await organizationService.declineJoinRequest(requestId);
          if (response.success) {
            dispatch(setSuccessNotification('Join request declined successfully'));
            // Remove the declined request from the list by refreshing
            fetchJoinRequests();
          } else {
            dispatch(setErrorNotification('Failed to decline join request'));
          }
        } catch (error) {
          dispatch(setErrorNotification('Failed to decline join request'));
        }
    };

    const handleWithdraw = async (invitationId: number) => {
        try {
            const response = await userService.withdrawInvitation(invitationId);
            if (response.success) {
                fetchInvitations();
            } else {
                setError('Failed to withdraw invitation');
            }
        } catch (error) {
            console.error('Error withdrawing invitation:', error);
            setError('Failed to withdraw invitation');
        }
    };

    const handleResend = async (invitationId: number) => {
        try {
            const response = await userService.resendInvitation(invitationId);
            if (response.success) {
                fetchInvitations();
            } else {
                setError('Failed to resend invitation');
            }
        } catch (error) {
            console.error('Error resending invitation:', error);
            setError('Failed to resend invitation');
        }
    };

    if (!isAuthorized) {
        return null;
    }

    // Only show join requests with pending status
    const pendingRequests = joinRequests.filter(request => request.status === 'pending');


    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ 
                borderRadius: '16px',
                border: '1px solid #EAECF0',
                overflow: 'hidden'
            }}>
                <Box sx={{ padding: '20px' }}>
                    <Typography variant="h6" sx={{
                        fontSize: '18px',
                        fontWeight: '600',
                        color: '#101828'
                    }}>
                        Manage invitations
                    </Typography>
                </Box>
                <Divider />
                
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs 
                        value={tabValue} 
                        onChange={handleTabChange}
                        sx={{
                            '& .MuiTab-root': {
                                textTransform: 'none',
                                fontSize: '14px',
                                fontWeight: '500'
                            }
                        }}
                    >
                        <Tab label="Requests" />
                        <Tab label="Sent" />
                    </Tabs>
                </Box>
    
                <Box sx={{ padding: 2 }}>
                    {tabValue === 0 && (
                        <>
                            {pendingRequests.length === 0 ? (
                                <Typography sx={{ 
                                    textAlign: 'center',
                                    color: '#475467',
                                    py: 4 
                                }}>
                                    No new requests
                                </Typography>
                            ) : (
                                pendingRequests.map((request) => (
                                    <Box key={request.id} sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        padding: 2,
                                        borderBottom: '1px solid #EAECF0'
                                    }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                            <Avatar>
                                                {typeof request.user === 'object' && request.user.firstName
                                                    ? request.user.firstName.charAt(0).toUpperCase()
                                                    : '?'}
                                            </Avatar>
                                            <Box>
                                                <Typography>
                                                    {typeof request.user === 'object'
                                                        ? `${request.user.firstName || ''} ${request.user.lastName || ''}`
                                                        : 'Unknown User'}
                                                </Typography>
                                                <Typography variant="caption" color="textSecondary">
                                                    {typeof request.user === 'object' ? request.user.email : ''}
                                                </Typography>
                                            </Box>
                                        </Box>
    
                                        <Box sx={{ display: 'flex', gap: 1 }}>
                                            <Button
                                                variant="outlined"
                                                size="small"
                                                onClick={() => handleAcceptRequest(request.id)}
                                                sx={{
                                                    textTransform: 'none',
                                                    borderColor: '#D0D5DD',
                                                    color: '#344054'
                                                }}
                                            >
                                                Accept
                                            </Button>
                                            <Button
                                                variant="outlined"
                                                size="small"
                                                color="error"
                                                onClick={() => handleDeclineRequest(request.id)}
                                            >
                                                Decline
                                            </Button>
                                        </Box>
                                    </Box>
                                ))
                            )}
                        </>
                    )}
    
                    {tabValue === 1 && (
                        sentInvitations.length === 0 ? (
                            <Typography sx={{ 
                                textAlign: 'center',
                                color: '#475467',
                                py: 4 
                            }}>
                                No invitations found
                            </Typography>
                        ) : (
                            sentInvitations.map((invitation) => (
                                <Box key={invitation.id} sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: 2,
                                    borderBottom: '1px solid #EAECF0'
                                }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Avatar>{invitation.email[0].toUpperCase()}</Avatar>
                                        <Typography>{invitation.email}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: 1 }}>
                                        <Button
                                            variant="outlined"
                                            onClick={() => handleWithdraw(invitation.id)}
                                            sx={{
                                                textTransform: 'none',
                                                borderColor: '#D0D5DD',
                                                color: '#344054'
                                            }}
                                        >
                                            Withdraw
                                        </Button>
                                        <Button
                                            variant="contained"
                                            onClick={() => handleResend(invitation.id)}
                                            sx={{
                                                textTransform: 'none',
                                                bgcolor: '#DC6803',
                                                '&:hover': {
                                                    bgcolor: '#E8822A'
                                                }
                                            }}
                                        >
                                            Resend
                                        </Button>
                                    </Box>
                                </Box>
                            ))
                        )
                    )}
                </Box>
    
                {error && (
                    <Alert severity="error" sx={{ margin: 2 }}>
                        {error}
                    </Alert>
                )}
            </Paper>
        </Box>
    );
};

export default InvitationManager;