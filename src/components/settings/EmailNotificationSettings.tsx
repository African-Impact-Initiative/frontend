import { Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'

const EmailNotificationSettings = () => {
    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: { xs: '0px', md: '20px' },
                    flexDirection: { xs: 'column', md: 'column' }

                }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'start',
                        marginBottom: '16px'
                    }}>
                    <Typography
                        sx={{
                            color: '#101828',
                            fontWeight: '600',
                            fontSize: '18px',
                            lineHeight: '28px',
                            textAlign: 'left'
                        }}
                    >
                        Email notifications
                    </Typography>
                    <Typography
                        sx={{
                            color: '#475467',
                            fontWeight: '400',
                            fontSize: { md: '14px', xs: '10px' },
                            lineHeight: '20px',
                            textAlign: { md: 'left', xs: 'left' }
                        }}
                    >
                        Get emails to find out what’s going on when you’re not online. You can
                        turn them off anytime.
                    </Typography>
                </Box>
                <Divider />
                <Box
                    sx={{
                        display: 'flex',
                        padding: { xs: '0px', md: '20px' },
                        flexDirection: { xs: 'column', md: 'row' },
                        width: { md: '75.5%', xs: '100%' },
                        justifyContent: { xs: 'flex-start', md: 'space-between' },

                    }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: { xs: 'left' },
                        marginTop: { xs: '20px' }
                    }}>
                        <Typography
                            sx={{
                                color: '#344054',
                                fontWeight: '600',
                                fontSize: '14px',
                                lineHeight: '20px',
                                textAlign: 'left'
                            }}
                        >
                            Notifications from Venture Build
                        </Typography>
                        <Typography
                            sx={{
                                color: '#475467',
                                fontWeight: '400',
                                fontSize: '14px',
                                lineHeight: '20px'
                            }}
                        >
                            Receive the latest news, system updates, <br /> tips, and feedback survey from us.                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            width: { md: '60%', xs: '100%' },
                            marginTop: '12px',
                            display: 'flex',
                            rowGap: '20px',
                            flexDirection: { xs: 'column', md: 'column' },

                        }}
                    >
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        defaultChecked
                                        sx={{
                                            color: '#D0D5DD',
                                            '&.Mui-checked': {
                                                color: '#DC6803'
                                            }
                                        }}
                                    />
                                }
                                label={
                                    <Box sx={{ textAlign: { md: 'left', xs: 'left' } }}>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontSize: '14px',
                                                fontWeight: '500',
                                                color: '#344054',
                                                lineHeight: '20px',
                                            }}
                                        >
                                            News and updates
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: '#475467',
                                                fontSize: '14px',
                                                fontWeight: '400',
                                                lineHeight: '20px',
                                                marginBottom: '16px'
                                            }}
                                        >
                                            News about product and feature updates.
                                        </Typography>
                                    </Box>
                                }
                            />

                            <FormControlLabel
                                control={
                                    <Checkbox
                                        defaultChecked
                                        sx={{
                                            color: '#D0D5DD',
                                            '&.Mui-checked': {
                                                color: '#DC6803'
                                            }
                                        }}
                                    />
                                }
                                label={
                                    <Box sx={{ textAlign: { md: 'left', xs: 'left' } }}>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontSize: '14px',
                                                fontWeight: '500',
                                                color: '#344054',
                                                lineHeight: '20px',
                                            }}
                                        >
                                            Tips and tutorials
                                        </Typography>
                                        <Typography variant="body1"
                                            sx={{
                                                color: '#475467',
                                                fontSize: '14px',
                                                fontWeight: '400',
                                                lineHeight: '20px',
                                                marginBottom: '16px'
                                            }}>
                                            Tips on getting more out of Venture Build.
                                        </Typography>
                                    </Box>
                                }
                            />

                            <FormControlLabel
                                control={
                                    <Checkbox
                                        defaultChecked
                                        sx={{
                                            color: '#D0D5DD',
                                            '&.Mui-checked': {
                                                color: '#DC6803'
                                            }
                                        }}
                                    />
                                }
                                label={
                                    <Box sx={{ textAlign: { md: 'left', xs: 'left' } }}>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontSize: '14px',
                                                fontWeight: '500',
                                                color: '#344054',
                                                lineHeight: '20px'
                                            }}
                                        >
                                            Recommendations
                                        </Typography>
                                        <Typography variant="body1" sx={{
                                            color: '#475467',
                                            fontSize: '14px',
                                            fontWeight: '400',
                                            lineHeight: '20px',
                                        }}>
                                            Resources such as articles and courses
                                        </Typography>
                                        <Typography variant="body1" sx={{
                                            color: '#475467',
                                            fontSize: '14px',
                                            fontWeight: '400',
                                            lineHeight: '20px',
                                            marginBottom: '16px'
                                        }}>recommended for your team.</Typography>
                                    </Box>
                                }
                            />

                            <FormControlLabel
                                control={
                                    <Checkbox
                                        defaultChecked
                                        sx={{
                                            color: '#D0D5DD',
                                            '&.Mui-checked': {
                                                color: '#DC6803'
                                            }
                                        }}
                                    />
                                }
                                label={
                                    <Box sx={{ textAlign: { md: 'left', xs: 'left' } }}>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontSize: '14px',
                                                fontWeight: '500',
                                                color: '#344054',
                                                lineHeight: '20px'
                                            }}
                                        >
                                            Feedback survey
                                        </Typography>
                                        <Typography variant="body1"
                                            sx={{
                                                color: '#475467',
                                                fontSize: '14px',
                                                fontWeight: '400',
                                                lineHeight: '20px',
                                            }}>
                                            Participate in our user feedback survey
                                        </Typography>
                                        <Typography variant='body1' sx={{
                                            color: '#475467',
                                            fontSize: '14px',
                                            fontWeight: '400',
                                            lineHeight: '20px',
                                        }} >
                                            and help us improve Venture Build’s user experience.
                                        </Typography>
                                    </Box>
                                }
                            />
                        </FormGroup>
                    </Box>
                </Box>
                <Divider />
                <Box
                    sx={{
                        display: 'flex',
                        padding: { xs: '0px', md: '20px' },
                        flexDirection: { xs: 'column', md: 'row' },
                        width: { md: '75.5%', xs: '100%' },
                        justifyContent: { xs: 'flex-start', md: 'space-between' },
                    }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: { xs: 'left' },
                            marginTop: { xs: '20px' }
                        }}>
                        <Typography
                            sx={{
                                color: '#344054',
                                fontSize: '14px',
                                fontWeight: '600',
                                lineHeight: '30px'
                            }}
                        >
                            Messages
                        </Typography>
                        <Typography
                            sx={{
                                color: '#344054',
                                fontSize: '14px',
                                fontWeight: '400',
                                lineHeight: '20px'
                            }}
                        >
                            These are notifications for mentions, <br /> replies, and direct messages.
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            width: { md: '60%', xs: '100%' },
                            marginTop: '12px',
                            display: 'flex',
                            rowGap: '20px',
                            flexDirection: { xs: 'column', md: 'column' },

                        }}
                    >
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        defaultChecked
                                        sx={{
                                            color: '#D0D5DD',
                                            '&.Mui-checked': {
                                                color: '#DC6803'
                                            }
                                        }}
                                    />
                                }
                                label={
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontSize: '14px',
                                            fontWeight: '500',
                                            color: '#344054',
                                            lineHeight: '20px'
                                        }}
                                    >
                                        I’m mentioned in a message
                                    </Typography>
                                }
                            />

                            <FormControlLabel
                                control={
                                    <Checkbox
                                        defaultChecked
                                        sx={{
                                            color: '#D0D5DD',
                                            '&.Mui-checked': {
                                                color: '#DC6803'
                                            }
                                        }}
                                    />
                                }
                                label={
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontSize: '14px',
                                            fontWeight: '500',
                                            color: '#344054',
                                            lineHeight: '20px'
                                        }}
                                    >
                                        Someone replies to my message
                                    </Typography>
                                }
                            />

                            <FormControlLabel
                                control={
                                    <Checkbox
                                        defaultChecked
                                        sx={{
                                            color: '#D0D5DD',
                                            '&.Mui-checked': {
                                                color: '#DC6803'
                                            }
                                        }}
                                    />
                                }
                                label={
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontSize: '14px',
                                            fontWeight: '500',
                                            color: '#344054',
                                            lineHeight: '20px'
                                        }}
                                    >
                                        Someone sends me a direct message
                                    </Typography>
                                }
                            />
                        </FormGroup>
                    </Box>
                </Box>
                <Divider />
                <Box
                    sx={{
                        display: 'flex',
                        padding: { xs: '0px', md: '20px' },
                        flexDirection: { xs: 'column', md: 'row' },
                        width: { md: '75.5%', xs: '100%' },
                        justifyContent: { xs: 'flex-start', md: 'space-between' },
                    }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: { xs: 'left' },
                            marginTop: { xs: '20px' }
                        }}>
                        <Typography
                            sx={{
                                color: '#344054',
                                fontSize: '14px',
                                fontWeight: '600',
                                lineHeight: '30px'
                            }}
                        >
                            Roles & tasks
                        </Typography>
                        <Typography
                            sx={{
                                color: '#344054',
                                fontSize: '14px',
                                fontWeight: '400',
                                lineHeight: '20px'
                            }}
                        >
                            These are notifications for roles and <br /> tasks you are assigned.                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            width: { md: '60%', xs: '100%' },
                            marginTop: '12px',
                            display: 'flex',
                            rowGap: '20px',
                            flexDirection: { xs: 'column', md: 'column' },


                        }}
                    >
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        defaultChecked
                                        sx={{
                                            color: '#D0D5DD',
                                            '&.Mui-checked': {
                                                color: '#DC6803'
                                            }
                                        }}
                                    />
                                }
                                label={
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontSize: '14px',
                                            fontWeight: '500',
                                            color: '#344054',
                                            lineHeight: '20px'
                                        }}
                                    >
                                        I’m assigned a role
                                    </Typography>
                                }
                            />

                            <FormControlLabel
                                control={
                                    <Checkbox
                                        defaultChecked
                                        sx={{
                                            color: '#D0D5DD',
                                            '&.Mui-checked': {
                                                color: '#DC6803'
                                            }
                                        }}
                                    />
                                }
                                label={
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontSize: '14px',
                                            fontWeight: '500',
                                            color: '#344054',
                                            lineHeight: '20px'
                                        }}
                                    >
                                        I’m assigned a task
                                    </Typography>
                                }
                            />

                            <FormControlLabel
                                control={
                                    <Checkbox
                                        defaultChecked
                                        sx={{
                                            color: '#D0D5DD',
                                            '&.Mui-checked': {
                                                color: '#DC6803'
                                            }
                                        }}
                                    />
                                }
                                label={
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontSize: '14px',
                                            fontWeight: '500',
                                            color: '#344054',
                                            lineHeight: '20px'
                                        }}
                                    >
                                        A task is overdue
                                    </Typography>
                                }
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        defaultChecked
                                        sx={{
                                            color: '#D0D5DD',
                                            '&.Mui-checked': {
                                                color: '#DC6803'
                                            }
                                        }}
                                    />
                                }
                                label={
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontSize: '14px',
                                            fontWeight: '500',
                                            color: '#344054',
                                            lineHeight: '20px'
                                        }}
                                    >
                                        A task status is updated
                                    </Typography>
                                }
                            />
                        </FormGroup>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default EmailNotificationSettings