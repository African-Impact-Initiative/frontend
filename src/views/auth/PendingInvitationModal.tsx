import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
    Box,
    IconButton,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import userService from '../../api/userService';
import { setErrorNotification, setSuccessNotification } from '../../store/notificationReducer';

interface PendingInvitationModalProps {
    open: boolean;
    onClose: () => void;
    invitation: {
        id: number;
        organization: {
            id: number;
            name: string;
            organization_name: string;
            invited_by_name: string;
            invited_by_email: string;
            logo?: string;
        };
        invited_by: {
            firstName: string;
            lastName: string;
            email: string;
        };
    } | null;
}

const PendingInvitationModal = ({ open, onClose, invitation }: PendingInvitationModalProps) => {
    const dispatch = useDispatch();

    if (!invitation) return null;

    const handleAccept = async () => {
        try {
            const response = await userService.acceptInvitation(invitation.id);
            if (response.success) {
                dispatch(setSuccessNotification('Invitation accepted successfully'));
                onClose();
                window.location.reload(); // Refresh to update organization status
            } else {
                throw new Error(response.error || 'Failed to accept invitation');
            }
        } catch (error) {
            dispatch(setErrorNotification('Failed to accept invitation'));
        }
    };

    const handleDeny = async () => {
        try {
            const response = await userService.declineInvitation(invitation.id);
            if (response.success) {
                dispatch(setSuccessNotification('Invitation declined'));
                onClose();
            } else {
                throw new Error(response.error || 'Failed to decline invitation');
            }
        } catch (error) {
            dispatch(setErrorNotification('Failed to decline invitation'));
        }
    };
    console.log(invitation)

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="xs"
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
                <Typography sx={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#101828'
                }}>
                    Pending invitation
                </Typography>
                <IconButton onClick={onClose} size="small">
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <DialogContent sx={{ padding: '20px' }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2
                }}>
                    <Box sx={{
                        width: 80,
                        height: 80,
                        backgroundColor: '#F2F4F7',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '24px',
                        fontWeight: '500',
                        color: '#344054'
                    }}>
                        {invitation.organizationName.charAt(0)}
                    </Box>

                    <Typography variant="h6" sx={{
                        color: '#101828',
                        textAlign: 'center'
                    }}>
                        {invitation.organizationName}
                    </Typography>

                    <Typography sx={{
                        color: '#475467',
                        textAlign: 'center',
                        fontSize: '14px'
                    }}>
                        {invitation.invitedByName} ({invitation.invitedByEmail}) invited
                        you to join <span style={{ color: '#DC6803' }}>{invitation.organizationName}</span>
                    </Typography>
                </Box>
            </DialogContent>

            <DialogActions sx={{ 
                padding: '20px',
                gap: '12px',
                justifyContent: 'center'
            }}>
                <Button
                    onClick={handleDeny}
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
                    Deny
                </Button>
                <Button
                    onClick={handleAccept}
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
                    Accept Invitation
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default PendingInvitationModal;