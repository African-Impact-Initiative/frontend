import { CloseOutlined, ErrorOutlineOutlined, PersonOutlineOutlined } from '@mui/icons-material'
import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

const EditLogoModal = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [formData, _] = useState({})

    const handleFileChange = (e: any) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = (event) => {
                const image = new Image()
                image.src = event!.target!.result as string
                image.onload = () => {
                    const maxWidth = 800
                    const maxHeight = 400
                    if (image.width <= maxWidth && image.height <= maxHeight)
                        setSelectedFile(file)
                    else
                        alert('Image dimensions must be max. 800x400px')

                }
            }
            reader.readAsDataURL(file)
        }
    }

    const handleFormSubmit = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
    }

    const handleUpload = () => {
        if (selectedFile)
            alert('Upload successful')
        else
            console.log('No file selected.')
    }

    return (
        <Box>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    padding: '24px',
                    // p: 4,
                    width: {md:'480px', xs: '100%'},
                    height: {md:'320px', xs: '100%'},
                    borderRadius: '12px'
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography
                        sx={{ fontWeight: '600', fontHeight: '28px', fontSize: '18px' }}
                    >
                        Add logo
                    </Typography>
                    <CloseOutlined
                        sx={{ color: '#667085', height: '30px', width: '30px' }}
                    />
                </Box>
                <Box>
                    <Typography
                        sx={{
                            fontWeight: '400',
                            fontHeight: '20px',
                            fontSize: '14px',
                            color: '#475467'
                        }}
                    >
                        Upload a logo for your company.
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', columnGap: '30px', marginTop: '20px',  flexDirection: {md: 'row', xs: 'column'} }}>
                    <Box
                        sx={{
                            border: '1px solid #EAECF0',
                            height: '64px',
                            width:'64px',
                            borderRadius: '100%',
                            backgroundColor: '#EAECF0',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: {xs: '20px', md: '0px'}

                        }}
                    >
                        <PersonOutlineOutlined
                            sx={{ height: '40px', width: '40px', color: '#475467' }}
                        />
                    </Box>
                    <Box
                        sx={{
                            border: '1px solid #EAECF0',
                            height: {md:'126px', xs: '100%'},
                            width: {md:'348px', xs: '100%'},
                            borderRadius: '12px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <Box>
                            <Box
                                sx={{
                                    border: '1px solid #EAECF0',
                                    borderRadius: '6px',
                                    height: '36px',
                                    width: '36px',
                                    justifyContent: 'center',
                                    boxShadow: 1
                                }}
                            >
                                <ErrorOutlineOutlined
                                    sx={{
                                        height: '26px',
                                        width: '28px',
                                        paddingTop: '6px',
                                        paddingLeft: '6px'
                                    }}
                                />
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                columnGap: '8px',
                                marginTop: '16px'
                            }}
                        >
                            <Typography variant='body1' sx={{ marginTop: '16px' }}>
                                {selectedFile ? `${selectedFile.name}` : ''}
                            </Typography>
                            <label htmlFor='file-upload'>
                                <input
                                    type='file'
                                    id='file-upload'
                                    style={{ display: 'none' }}
                                    onChange={handleFileChange}
                                />
                                <Box
                                    component='span'
                                    onClick={handleUpload}
                                    sx={{
                                        marginTop: '14px',
                                        color: '#B54708',
                                        fontWeight: '600',
                                        fontSize: '18px'
                                    }}
                                >
                                    Click to upload
                                </Box>
                            </label>
                            <Typography
                                sx={{
                                    color: '#475467',
                                    fontWeight: '400',
                                    fontSize: '14px',
                                    lineHeight: '20px'
                                }}
                            >
                                or drag and drop
                            </Typography>
                        </Box>
                        <Typography
                            sx={{
                                color: '#475467',
                                fontWeight: '400',
                                fontSize: '14px',
                                lineHeight: '20px'
                            }}
                        >
                            SVG, PNG, JPG or GIF (max. 800x400px)
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        columnGap: '20px',
                        justifyContent: 'flex-end',
                        marginTop: '30px',
                        flexDirection: {md: 'row', xs: 'column'}
                    }}
                >
                    <Button
                        size='large'
                        variant='outlined'
                        sx={{
                            border: '1px solid #D0D5DD',
                            borderRadius: '8px',
                            color: '#344054',
                            lineHeight: '20px',
                            fontSize: '16px',
                            fontWeight: '600',
                            height:  {md:'44px', xs: '100%'},
                            width: {md:'210px', xs: '100%'},
                            textTransform: 'none',
                            marginBottom: {xs: '20px', md: '0px'}
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleFormSubmit}
                        type='submit'
                        variant='contained'
                        sx={{
                            color: '#FFFFFF',
                            backgroundColor: '#DC6803',
                            borderRadius: '8px',
                            fontWeight: '600',
                            lineHeight: '20px',
                            fontSize: '16px',
                            height:  {md:'44px', xs: '100%'},
                            width: {md:'210px', xs: '100%'},
                            textTransform: 'none'
                        }}
                    >
                        Done
                    </Button>
                </Box>
            </Box>

        </Box>
    )
}

export default EditLogoModal
