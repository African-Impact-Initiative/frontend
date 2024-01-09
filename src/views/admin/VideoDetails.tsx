import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import VideoUpload from '../../../Admin/ResourcesUpload/VideoUpload'
import { useNavigate } from 'react-router-dom'
import { ArrowBackIos, DeleteOutline } from '@mui/icons-material'

export default function VideoDetails() {
    const [open, setOpen] = React.useState(true)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const navigate = useNavigate()

    return (
        <Box>
            <Button sx={{ textTransform: 'none', display: 'flex', columnGap: '10px' }} onClick={() => navigate(-1)}>
                <ArrowBackIos style={{ color: 'rgba(208, 213, 221, 1)', fontSize: '20px' }} />
                <Typography
                    sx={{
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: 500,
                        lineHeight: '20px',
                    }}
                >
                    Video
                </Typography>
            </Button>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    margin: '20px 0',
                }}
            >
                <Box>
                    <Typography
                        sx={{
                            color: 'rgba(16, 24, 40, 1)',
                            fontWeight: 600,
                            fontSize: '30px',
                            lineHeight: '38px',
                        }}
                    >
                        Video Details
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', columnGap: '10px', alignItems: 'center' }}>
                    <DeleteOutline sx={{ cursor: 'pointer' }} />
                    <Button
                        sx={{
                            height: '44px',
                            border: '1px solid rgba(208, 213, 221, 1)',
                            borderRadius: '8px',
                            textTransform: 'none',
                        }}
                        onClick={() => {
                            navigate('/admin/videos')
                        }}
                    >
                        <Typography
                            sx={{
                                color: 'rgba(52, 64, 84, 1)',
                                fontWeight: 600,
                                fontSize: '16px',
                            }}
                        >
                            Cancel
                        </Typography>
                    </Button>
                    <Button
                        sx={{
                            height: '44px',
                            border: '1px solid #FFFFFF',
                            borderRadius: '8px',
                            background: 'rgba(220, 104, 3, 1)',
                            textTransform: 'none',
                            '&:hover': { backgroundColor: '#E8822A' },
                        }}
                        onClick={() => {
                            navigate('/admin/videos')
                        }}
                    >
                        <Typography
                            sx={{
                                color: '#FFFFFF',
                                fontWeight: 600,
                                fontSize: '16px',
                            }}
                        >
                            Save Changes
                        </Typography>
                    </Button>
                </Box>
            </Box>

            <VideoUpload />
        </Box>
    )
}
