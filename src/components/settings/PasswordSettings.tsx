import { DesktopWindowsOutlined } from '@mui/icons-material'
import {
    Button,
    Divider,
    InputBase,
    Paper,
    Typography
} from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'

const PasswordSettings = () => {
    const [password] = useState('')
    const [confirmPassword] = useState('')
    const [, setError] = useState('')

    const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault()
        if (password !== confirmPassword) setError('Passwords don\'t match')
        else
            setError('')
    }

    return (
        <Box>
            <Box
                sx={{

                    justifyContent: 'space-between',
                    padding: { xs: '0px', md: '20px' },
                    flexDirection: { xs: 'column', md: 'column' },
                    display: 'flex',

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
                        Password
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
                        Please enter your current password to change your password.
                    </Typography>
                </Box>
                <Divider />
                <Box
                    sx={{
                        display: 'flex',
                        padding: { xs: '0px', md: '20px' },
                        flexDirection: { xs: 'column', md: 'row' },
                        marginTop: { xs: '20px', md: '0' },
                        justifyContent: { xs: 'flex-start', md: 'space-between' },
                        width: { md: '75.5%', xs: '100%' },
                    }}
                >
                    <Box sx={{ textAlign: { md: 'left', xs: 'left' } }}>
                        <Typography
                            sx={{
                                color: '#344054',
                                fontWeight: '600',
                                fontSize: '14px',
                                lineHeight: '20px',

                            }}
                        >
                            Current password
                        </Typography>
                    </Box>
                    <Box>
                        <Box
                            sx={{
                                marginTop: '12px',
                                display: 'flex',
                                justifyContent: { xs: 'flex-center', md: 'flex-center' },
                                width: '100%'
                            }}
                        >
                            <Paper
                                component="form"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    width: { xs: '100%', md: 512 },
                                    height: 44,
                                    borderRadius: 2,
                                    boxShadow: 0,
                                    border: '1px solid #D0D5DD'
                                }}
                            >
                                <InputBase
                                    sx={{ ml: 2, flex: 1, fontSize: 20 }}
                                    placeholder="**********"
                                    inputProps={{ 'aria-label': 'password' }}
                                    type="password"
                                // value={newconfirmPassword}
                                // onChange={setNewConfirmPassword}
                                />
                            </Paper>
                        </Box>
                    </Box>
                </Box>
                <Divider />
                <Box
                    sx={{
                        display: 'flex',
                        padding: { xs: '0px', md: '20px' },
                        flexDirection: { xs: 'column', md: 'row' },
                        marginTop: { xs: '20px', md: '0' },
                        justifyContent: { xs: 'flex-start', md: 'space-between' },
                        width: { md: '75.5%', xs: '100%' },
                    }}
                >
                    <Box sx={{ textAlign: { md: 'left', xs: 'left' } }}>
                        <Typography
                            sx={{
                                color: '#344054',
                                fontWeight: '600',
                                fontSize: '14px',
                                lineHeight: '20px',
                                textAlign: 'left',
                            }}
                        >
                            New password
                        </Typography>
                    </Box>
                    <Box>
                        <Box
                            sx={{
                                marginTop: '12px',
                                display: 'flex',
                                justifyContent: { xs: 'flex-center', md: 'flex-center' },
                                width: '100%'
                            }}
                        >
                            <Paper
                                component="form"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    width: { xs: '100%', md: 512 },
                                    height: 44,
                                    borderRadius: 2,
                                    boxShadow: 0,
                                    border: '1px solid #D0D5DD'
                                }}
                            >
                                <InputBase
                                    sx={{ ml: 2, flex: 1, fontSize: 20 }}
                                    placeholder="**********"
                                    inputProps={{ 'aria-label': 'password' }}
                                    type="password"
                                // value={newconfirmPassword}
                                // onChange={setNewConfirmPassword}
                                />
                            </Paper>
                        </Box>
                        <Box sx={{ textAlign: 'start'}}>
                            <Typography
                                sx={{
                                    fontSize: '14px',
                                    marginTop: '14px',
                                    fontWeight: '400',
                                    lineHeight: '30px',
                                    color: '#475467',

                                }}
                            >
                            Your new password must be more than 8 characters.
                            </Typography></Box>

                    </Box>
                </Box>
                <Divider />
                <Box
                    sx={{
                        display: 'flex',
                        padding: { xs: '0px', md: '20px' },
                        flexDirection: { xs: 'column', md: 'row' },
                        marginTop: { xs: '20px', md: '0' },
                        justifyContent: { xs: 'flex-start', md: 'space-between' },
                        width: { md: '75.5%', xs: '100%' },
                    }}
                >
                    <Box sx={{ textAlign: { md: 'left', xs: 'left' } }}>
                        <Typography
                            sx={{
                                color: '#344054',
                                fontWeight: '600',
                                fontSize: '14px',
                                lineHeight: '20px',
                                textAlign: 'left',
                            }}
                        >
                            Confirm new password
                        </Typography>
                    </Box>
                    <Box>
                        <Box
                            sx={{
                                marginTop: '12px',
                                display: 'flex',
                                justifyContent: { xs: 'flex-center', md: 'flex-center' },
                                width: '100%'
                            }}
                        >
                            <Paper
                                component="form"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    width: { xs: '100%', md: 512 },
                                    height: 44,
                                    borderRadius: 2,
                                    boxShadow: 0,
                                    border: '1px solid #D0D5DD'
                                }}
                            >
                                <InputBase
                                    sx={{ ml: 2, flex: 1, fontSize: 20 }}
                                    placeholder="**********"
                                    inputProps={{ 'aria-label': 'password' }}
                                    type="password"
                                // value={newconfirmPassword}
                                // onChange={setNewConfirmPassword}
                                />
                            </Paper>
                        </Box>
                    </Box>
                </Box>
                <Divider />
                <Box sx={{ padding: '20px' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            columnGap: '20px',
                            justifyContent: 'flex-end'
                        }}
                    >
                        <Button
                            size="large"
                            variant="outlined"
                            sx={{
                                border: '1px solid #D0D5DD',
                                borderRadius: '10px',
                                color: '#344054',
                                lineHeight: '20px',
                                fontSize: '14px',
                                fontWeight: '600',
                                height: '40px',
                                width: { xs: '100%', md: 80 },
                                textTransform: 'none'
                            }}
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={handleSubmit}
                            type="submit"
                            variant="contained"
                            sx={{
                                color: '#FFFFFF',
                                backgroundColor: '#DC6803',
                                borderRadius: '10px',
                                fontWeight: '600',
                                lineHeight: '20px',
                                height: '40px',
                                width: { xs: '100%', md: 152 },
                                textTransform: 'none',
                                fontSize: { md: '14px', xs: '12px' }
                            }}
                        >
                            Update password
                        </Button>
                    </Box>
                    <Box sx={{ marginTop: '30px', display: 'flex', flexDirection: 'column', textAlign: { md: 'left', xs: 'left' } }}>
                        <Typography
                            sx={{
                                lineHeight: '28px',
                                color: '#101828',
                                fontWeight: '600',
                                fontSize: '18px'
                            }}>
                            Where you’re logged in
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: { md: '14px', xs: '12px' },
                                lineHeight: '28px',
                                color: '#475467',
                                fontWeight: '400'
                            }}
                        >
                            We’ll alert you via sienna@dataprime.com if there is any unusual
                            activity on your account.
                        </Typography>
                    </Box>
                </Box>
                <Divider />
                <Box sx={{ padding: { xs: '0px', md: '20px' }, textAlign: { md: 'left', xs: 'left' }, flexDirection: { xs: 'column', md: 'column' }, }}>
                    <Box sx={{ display: 'flex', columnGap: '20px', flexDirection: { xs: 'column', md: 'row' },  }}>
                        <Box sx={{display: 'flex', alignItems: 'center', columnGap: '10px'}}>
                            <DesktopWindowsOutlined sx={{ color: '#667085' }} />
                            <Typography
                                sx={{
                                    lineHeight: '20px',
                                    color: '#344054',
                                    fontWeight: '500',
                                    fontSize: '14px',
                                    marginTop: {xs: '10px'}
                                }}
                            >
                            2023 Macbook Pro 16-inch
                            </Typography>
                        </Box>
                        <Box sx={{}}>
                            <Box
                                sx={{
                                    width: '88px',
                                    height: '22px',
                                    border: '1px solid #D0D5DD',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '8px',
                                    columnGap: '8px',
                                    marginTop: {xs: '10px'}

                                }}
                            >
                                <Box
                                    sx={{
                                        border: '1px solid green',
                                        height: '6px',
                                        width: '6px',
                                        backgroundColor: 'green',
                                        borderRadius: '20px',
                                    }}
                                ></Box>
                                <Typography
                                    sx={{ color: '#344054', fontWeight: '500', fontSize: '12px',  }}
                                >
                                    Active now
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{marginTop: {xs: '10px'}}}>
                        <Typography
                            sx={{
                                lineHeight: '20px',
                                color: '#475467',
                                fontSize: '14px',
                                fontWeight: '400'
                            }}
                        >Toronto, Canada • Aug 22 at 10:40am</Typography>
                    </Box>
                </Box>
                <Divider />
                <Box sx={{ padding: { xs: '0px', md: '20px' }, textAlign: { md: 'left', xs: 'left' }, flexDirection: { xs: 'column', md: 'column' }, }}>
                    <Box sx={{ display: 'flex', columnGap: '20px', flexDirection: { xs: 'column', md: 'row' },  }}>
                        <Box sx={{display: 'flex', alignItems: 'center', columnGap: '10px'}}>
                            <DesktopWindowsOutlined sx={{ color: '#667085' }} />
                            <Typography
                                sx={{
                                    lineHeight: '20px',
                                    color: '#344054',
                                    fontWeight: '500',
                                    fontSize: '14px',
                                    marginTop: {xs: '10px'}
                                }}
                            >
                            2023 Macbook Pro 15-inch
                            </Typography>
                        </Box>
                        <Box sx={{}}>
                            <Box
                                sx={{
                                    width: '88px',
                                    height: '22px',
                                    border: '1px solid #D0D5DD',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '8px',
                                    columnGap: '8px',
                                    marginTop: {xs: '10px'}

                                }}
                            >
                                <Box
                                    sx={{
                                        border: '1px solid green',
                                        height: '6px',
                                        width: '6px',
                                        backgroundColor: 'green',
                                        borderRadius: '20px',
                                    }}
                                ></Box>
                                <Typography
                                    sx={{ color: '#344054', fontWeight: '500', fontSize: '12px',  }}
                                >
                                    Active now
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{marginTop: {xs: '10px'}}}>
                        <Typography
                            sx={{
                                lineHeight: '20px',
                                color: '#475467',
                                fontSize: '14px',
                                fontWeight: '400'
                            }}
                        >Toronto, Canada • 16 Aug at 04:20am</Typography>
                    </Box>
                </Box>
                <Divider />
            </Box>
        </Box>

    )
}

export default PasswordSettings
