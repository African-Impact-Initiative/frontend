import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import userService from '../../api/userService';
import {
    Box,
    Paper,
    Typography,
    Button,
    CircularProgress,
    Alert
} from '@mui/material';
import PathConstants from '../../navigation/pathConstants';

const JoinOrganization = () => {
    const { token } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [invitation, setInvitation] = useState(null);

    useEffect(() => {
        verifyInvitation();
    }, [token]);

    const verifyInvitation = async () => {
        try {
            const response = await userService.getInvitation(token);
            if (response.success && response.data) {
                setInvitation(response.data);
            } else {
                setError('Invalid or expired invitation');
            }
        } catch (error) {
            setError('Failed to verify invitation');
        } finally {
            setLoading(false);
        }
    };

    const handleJoin = async () => {
        try {
            setLoading(true);
            const response = await userService.processInvitation(token, 'accept');
            if (response.success) {
                navigate(PathConstants.home);
            } else {
                setError('Failed to join organization');
            }
        } catch (error) {
            setError('Failed to join organization');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            padding: '20px'
        }}>
            <Paper sx={{
                width: '100%',
                maxWidth: '500px',
                borderRadius: '16px',
                border: '1px solid #EAECF0',
                overflow: 'hidden'
            }}>
                <Box sx={{ padding: '20px' }}>
                    <Typography variant="h6" sx={{
                        fontSize: '18px',
                        fontWeight: '600',
                        color: '#101828',
                        marginBottom: 2
                    }}>
                        Join Organization
                    </Typography>

                    {error ? (
                        <Alert severity="error" sx={{ marginTop: 2 }}>
                            {error}
                        </Alert>
                    ) : invitation ? (
                        <Box>
                            <Typography sx={{
                                color: '#475467',
                                marginBottom: 3
                            }}>
                                You've been invited to join{' '}
                                <Box component="span" sx={{ fontWeight: 600 }}>
                                    {invitation.organization_name}
                                </Box>
                            </Typography>
                            <Box sx={{ 
                                display: 'flex',
                                gap: 2,
                                marginTop: 3
                            }}>
                                <Button
                                    variant="outlined"
                                    onClick={() => navigate('/')}
                                    sx={{
                                        textTransform: 'none',
                                        borderColor: '#D0D5DD',
                                        color: '#344054'
                                    }}
                                >
                                    Decline
                                </Button>
                                <Button
                                    variant="contained"
                                    onClick={handleJoin}
                                    sx={{
                                        textTransform: 'none',
                                        bgcolor: '#DC6803',
                                        '&:hover': {
                                            bgcolor: '#E8822A'
                                        }
                                    }}
                                >
                                    Join Organization
                                </Button>
                            </Box>
                        </Box>
                    ) : null}
                </Box>
            </Paper>
        </Box>
    );
};

export default JoinOrganization;