import React, { useState, useEffect } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
    TextField,
    MenuItem,
    Box,
    IconButton,
} from '@mui/material';
import {
    Close as CloseIcon,
    PersonAddAlt1Outlined,
} from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { IVBState, AppDispatch } from '../../store/store';
import { useAppSelector } from '../../hooks/redux';
import userService from '../../api/userService';
const InvitationModal = ({ open, onClose }) => {
    const [selectedEmail, setSelectedEmail] = useState('');
    const [availableUsers, setAvailableUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const currentOrganization = useSelector((state: IVBState) => state.userOrganization);
    const user = useAppSelector(state => state.user);
    const members = useSelector((state: IVBState) => state.users);

    const isAuthorized = user?.data?.owner || (user?.data?.coowner === currentOrganization?.data?.id);

    useEffect(() => {
        if (open && isAuthorized) {
            fetchAvailableUsers();
        }
    }, [open, isAuthorized]);

    const fetchAvailableUsers = async () => {
        try {
            const response = await userService.getAll();
            if (response.success && response.data) {
                const pendingInvitations = await userService.getInvitations();
                const pendingEmails = pendingInvitations.data
                    ?.filter(inv => inv.status === 'pending')
                    .map(inv => inv.email) || [];
                // Filter out users who are already in the organization
                const availableUsers = Array.isArray(response.data) 
                    ? response.data.filter(user => 
                        // User has no organization at all
                        !user.organization &&
                        // And is not in the current organization
                        user.organization !== currentOrganization.data?.id &&
                        !pendingEmails.includes(user.email)
                    )
                    : [];
                console.log(availableUsers)
                setAvailableUsers(availableUsers);
            } else {
                throw new Error(response.error || 'Failed to fetch users');
            }
        } catch (error) {
            console.error('Failed to fetch users:', error);
            setError('Failed to load available users');
        }
    };

    const handleSendInvite = async () => {
        if (!selectedEmail) return;
        if (!isAuthorized) {
            setError("You don't have permission to invite members");
            return;
        }

        setLoading(true);
        setError('');

        try {
            const response = await userService.sendInvitation({
                email: selectedEmail,
                organization: currentOrganization.data?.id
            });

            if (response.success) {
                onClose();
                window.location.reload();
            } else {
                throw new Error(response.error || 'Failed to send invitation');
            }
        } catch (error) {
            setError('Failed to send invitation. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="sm"
            fullWidth
            PaperProps={{
                sx: {
                    borderRadius: '12px',
                }
            }}
        >
            <DialogTitle sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px',
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <PersonAddAlt1Outlined sx={{ color: '#344054' }} />
                    <Typography sx={{
                        fontSize: '18px',
                        fontWeight: '600',
                        color: '#101828'
                    }}>
                        Add a team member
                    </Typography>
                </Box>
                <IconButton onClick={onClose} size="small">
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <DialogContent sx={{ padding: '20px' }}>
                <Typography sx={{
                    marginBottom: '6px',
                    fontSize: '14px',
                    fontWeight: '500',
                    lineHeight: '20px',
                    color: '#344054'
                }}>
                    Email address
                </Typography>
                <TextField
                    select
                    fullWidth
                    value={selectedEmail}
                    onChange={(e) => setSelectedEmail(e.target.value)}
                    size="small"
                    error={!!error}
                    helperText={error}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '8px',
                        }
                    }}
                >
                    <MenuItem value="">
                        <em style={{ color: '#667085' }}>Select an email</em>
                    </MenuItem>
                    {availableUsers.map((user) => (
                        <MenuItem key={user.email} value={user.email}>
                            {`${user.firstName} ${user.lastName} (${user.email})`}
                        </MenuItem>
                    ))}
                </TextField>
            </DialogContent>

            <DialogActions sx={{ 
                padding: '20px',
                gap: '12px'
            }}>
                <Button
                    onClick={onClose}
                    sx={{
                        color: '#344054',
                        fontSize: '14px',
                        fontWeight: '600',
                        textTransform: 'none',
                        border: '1px solid #D0D5DD',
                        borderRadius: '8px',
                        padding: '10px 18px',
                        '&:hover': {
                            backgroundColor: '#F9FAFB',
                            border: '1px solid #D0D5DD'
                        }
                    }}
                >
                    Cancel
                </Button>
                <Button
                    onClick={handleSendInvite}
                    disabled={!selectedEmail || loading || !isAuthorized}
                    sx={{
                        backgroundColor: '#DC6803',
                        color: 'white',
                        fontSize: '14px',
                        fontWeight: '600',
                        textTransform: 'none',
                        borderRadius: '8px',
                        padding: '10px 18px',
                        '&:hover': {
                            backgroundColor: '#E8822A'
                        }
                    }}
                >
                    {loading ? 'Sending...' : 'Send invite'}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default InvitationModal;