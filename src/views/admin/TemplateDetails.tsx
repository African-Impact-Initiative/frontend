import {
    Box,
    Button,
    Divider,
    MenuItem,
    TextField,
    Typography,
} from '@mui/material'
import React, { useState } from 'react'
import {
    ArrowBack,
    ArrowBackIos,
    ArrowForward,
    ContentCopy,
    DeleteOutline,
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import UploadImage from '../../../../assets/Image_upload.png'
import UploadContainer from '../../../upload/UploadContainer'
import thumbanil1 from '../../../../assets/resources_temp_03.png'
import { BlogToBase64 } from '../../../utils/BlogToBase64'

const categories = [
    { label: 'science', value: 'science' },
    { label: 'commercial', value: 'commercial' },
    { label: 'Art', value: 'Art' },
]

const visibility = [
    { label: 'public', value: 'public' },
    { label: 'private', value: 'private' },
]

export default function TemplateDetails() {
    const [status, setStatus] = React.useState(false)
    const [imagePreview, setImagePreview] = useState(thumbanil1)

    const navigate = useNavigate()

    const handleFileUploadChange = (e, type) => {
        try {
            const files = e.target.files || []

            console.log(files, 'files__')

            if (files.length == 0) 
                return
      

            console.log(files[0])

            BlogToBase64(files[0], (err, res) => {
                console.log(res, 'image') // base64 `data:image/...` String result.
                setImagePreview(res)
            })
        } catch (err) {
            console.log(err, 'eoror')
        }
    }
    return (
        <Box>
            <Button
                sx={{ textTransform: 'none', display: 'flex', columnGap: '10px' }}
                onClick={() => navigate(-1)}
            >
                <ArrowBackIos
                    style={{ color: 'rgba(208, 213, 221, 1)', fontSize: '20px' }}
                />
                <Typography
                    sx={{
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: 500,
                        lineHeight: '20px',
                    }}
                >
          Templates
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
            Template Details
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
                            navigate('/admin/templates')
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
                        }}
                        onClick={() => {
                            navigate('/admin/templates')
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
            <Box>
                <Typography
                    sx={{
                        color: 'rgba(52, 64, 84, 1)',
                        fontWeight: 600,
                        fontSize: '16px',
                    }}
                >
          Settings
                </Typography>
                <Box
                    sx={{
                        // border: "1px solid rgba(234, 236, 240, 1)",
                        borderRadius: '12px',
                        display: 'flex',
                        rowGap: '20px',
                        padding: '20px',
                        background: 'rgba(249, 250, 251, 1)',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        columnGap: '10px',
                        marginTop: '10px',
                    }}
                >
                    <Box sx={{ width: '100%' }}>
                        <Typography
                            sx={{
                                fontSize: '14px',
                                fontWeight: 500,
                                color: 'rgba(71, 84, 103, 1)',
                                marginBottom: '10px',
                            }}
                        >
              Category <span style={{ color: 'red' }}>*</span>
                        </Typography>
                        <TextField
                            // value={status}
                            select
                            label="Categories"
                            // size="large"
                            onChange={(e) => setStatus(e.target.value)}
                            sx={{
                                width: '100%',
                                height: '44px',
                            }}
                        >
                            <MenuItem value="">
                                <em>English</em>
                            </MenuItem>
                            {categories.map((state) => (
                                <MenuItem key={state.value} value={state.value}>
                                    {state.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <Typography
                            sx={{
                                fontSize: '14px',
                                fontWeight: 500,
                                color: 'rgba(71, 84, 103, 1)',
                                marginBottom: '10px',
                            }}
                        >
              Visibility <span style={{ color: 'red' }}>*</span>
                        </Typography>
                        <TextField
                            // value={status}
                            select
                            label="Visibility"
                            // size="large"
                            // onChange={(e) => setStatus(e.target.value)}
                            sx={{
                                width: '100%',
                                height: '44px',
                            }}
                        >
                            <MenuItem value="">
                                <em>Public</em>
                            </MenuItem>
                            {visibility.map((state) => (
                                <MenuItem key={state.value} value={state.value}>
                                    {state.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <Typography
                            sx={{
                                fontSize: '14px',
                                fontWeight: 500,
                                color: 'rgba(71, 84, 103, 1)',
                                marginBottom: '5px',
                                // border: "2px solid red",
                            }}
                        >
              Template link
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                border: '1px solid rgba(208, 213, 221, 1)',
                                height: '50px',
                                borderRadius: '8px',
                                background: '#FFFFFF',
                                // border: "2px solid red",
                            }}
                        >
                            <Box sx={{ flex: '1/2', paddingLeft: '4px' }}>
                                <input
                                    style={{
                                        width: '207px',
                                        border: 'none',
                                        outline: 'none',
                                        borderBottom: '0px',
                                        height: '100%',
                                    }}
                                    value={'venturebuild.com/resou'}
                                />
                            </Box>

                            <Box
                                sx={{
                                    borderLeft: '1px solid rgba(208, 213, 221, 1)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '100%',
                                    flex: '1',
                                    cursor: 'pointer',
                                }}
                            >
                                <ContentCopy />
                                <Typography
                                    sx={{
                                        fontSize: '14px',
                                        fontWeight: 500,
                                        color: 'rgba(71, 84, 103, 1)',
                                    }}
                                >
                  Copy{' '}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    marginTop: '30px',
                    display: 'flex',
                    columnGap: '20px',
                    justifyContent: 'space-between',
                }}
            >
                <Box sx={{ flex: '1' }}>
                    <Box>
                        <Typography
                            sx={{
                                fontSize: '14px',
                                fontWeight: 600,
                                color: 'rgba(52, 64, 84, 1)',
                                marginBottom: '10px',
                            }}
                        >
              Title *
                        </Typography>
                        <TextField sx={{ width: '100%' }} />
                    </Box>

                    <Divider sx={{ margin: '15px 0' }} />
                    <Box>
                        <Typography
                            sx={{
                                fontSize: '14px',
                                fontWeight: 600,
                                color: 'rgba(52, 64, 84, 1)',
                            }}
                        >
              Description
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '14px',
                                fontWeight: 400,
                                color: 'rgba(71, 84, 103, 1)',
                            }}
                        >
              Tell viewers about this template.
                        </Typography>

                        <textarea
                            style={{
                                width: '100%',
                                border: '1px solid rgba(208, 213, 221, 1)',
                                borderRadius: '8px',
                            }}
                            rows={5}
                            onChange={(e)=> {
                                console.log(e)
                            }}
                        />
                    </Box>
                    <Divider sx={{ margin: '15px 0' }} />
                    <Box>
                        <Typography
                            sx={{
                                fontSize: '14px',
                                fontWeight: 600,
                                color: 'rgba(52, 64, 84, 1)',
                            }}
                        >
              Thumbnail *
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '14px',
                                fontWeight: 400,
                                color: 'rgba(71, 84, 103, 1)',
                            }}
                        >
              Upload a picture that shows what is in this template.
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                marginTop: '20px',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Box sx={{ flex: 1 }}>
                                {imagePreview != '' ? (
                                    <img
                                        src={imagePreview}
                                        alt="thumbnail"
                                        width={'276px'}
                                        height={'176px'}
                                    />
                                ) : (
                                    ''
                                )}
                            </Box>
                            <Box sx={{ flex: 1 }}>
                                <UploadContainer handleOnChange={handleFileUploadChange} />
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ flex: '2/3' }}>
                    <Typography
                        sx={{
                            fontSize: '14px',
                            fontWeight: 600,
                            color: 'rgba(52, 64, 84, 1)',
                            marginBottom: '10px',
                        }}
                    >
            Preview
                    </Typography>
                    <Box
                        sx={{
                            borderRadius: '16px',
                            backgroundImage: `url(${UploadImage})`,
                            backgroundSize: '100% 100%',
                            backgroundRepeat: 'no-repeat',
                            height: '400px',
                            border: '1px solid #ccc',
                        }}
                    ></Box>
                    <Box
                        sx={{
                            background: 'rgba(249, 250, 251, 1)',
                            display: 'flex',
                            justifyContent: 'space-around',
                            padding: '10px',
                            marginTop: '10px',
                            borderRadius: '10px',
                        }}
                    >
                        <Button
                            sx={{
                                background: 'rgba(255, 255, 255, 1)',
                                border: '1px solid rgba(208, 213, 221, 1)',
                                width: '36px',
                                height: '36px',
                            }}
                        >
                            <ArrowBack />
                        </Button>
                        <Typography>Page 1 of 10</Typography>
                        <Button
                            sx={{
                                background: 'rgba(255, 255, 255, 1)',
                                border: '1px solid rgba(208, 213, 221, 1)',
                                width: '36px',
                                height: '36px',
                            }}
                        >
                            <ArrowForward />
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
