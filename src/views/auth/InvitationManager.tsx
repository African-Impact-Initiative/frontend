import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IVBState, AppDispatch } from '../../store/store';
import { useAppSelector } from '../../hooks/redux';
import userService from '../../api/userService';
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

const InvitationManager = () => {
    const [sentInvitations, setSentInvitations] = useState<InvitationResponse[]>([]);
    const [error, setError] = useState('');
    const [tabValue, setTabValue] = useState(0);
    const user = useAppSelector(state => state.user);
    const currentOrganization = useSelector((state: IVBState) => state.userOrganization);

    const isAuthorized = user?.data?.owner || (user?.data?.coowner === currentOrganization?.data?.id);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    const fetchInvitations = async () => {
        try {
            const response = await userService.getInvitations();
            if (response.success && response.data) {
                const invitations = Array.isArray(response.data) ? response.data : [];
                console.log(invitations)
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

    useEffect(() => {
        if (isAuthorized && currentOrganization.data?.id) {
            fetchInvitations();
        }
    }, [isAuthorized, currentOrganization.data?.id]);

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
                        <Typography sx={{ 
                            textAlign: 'center',
                            color: '#475467',
                            py: 4 
                        }}>
                            No new requests
                        </Typography>
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