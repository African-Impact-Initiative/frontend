import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { Box, Button, Modal, Typography, IconButton, Divider, Link } from '@mui/material'
import FileUploadIcon from '@mui/icons-material/FileUpload'
import { getFileIcon, formatFileSize } from '../../utils/fileUtils'

export interface FileUploadModalProps {
    isOpen: boolean;
    onClose: () => void;
    onFileChange: (file: File | null) => void;
    onSubmit: () => void;
}

const FileUploadModal = ({ isOpen, onClose, onFileChange, onSubmit }: FileUploadModalProps) => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const fileInputRef = useRef<HTMLInputElement | null>(null)
    const [file, setFile] = useState<File | null>(null)
    const [fileUrl, setFileUrl] = useState<string | null>(null)

    

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFile(event.target.files[0])
            onFileChange(event.target.files[0])
        }
        setErrorMessage(null)
    }

    // remove file detail in the modal
    const handleRemoveFile = () => {
        setFile(null)
        onFileChange(null)
    }

    const handleBrowseFiles = () => {
        if (fileInputRef.current) fileInputRef.current.click()
    }

    const handleClose = () => {
        handleRemoveFile() // remove file detail in the modal
        onClose() // close modal from parent component
    }

    const handleSubmit = () => {
        handleRemoveFile() // remove file detail in the modal
        onSubmit() // submit file in the parent component
    }

    useEffect(() => {
        if (file) {
            const url = URL.createObjectURL(file)
            setFileUrl(url)
            return () => URL.revokeObjectURL(url)
        } else setFileUrl(null)
    }, [file])

    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            aria-labelledby='modal-title'
            aria-describedby='modal-description'
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '550px',
                    backgroundColor: '#ffffff',
                    padding: '24px',
                    borderRadius: '12px',
                }}
            >
                <Box sx={{ alignItems: 'center', marginBottom: '20px' }}>
                    <Typography
                        gutterBottom
                        sx={{
                            fontSize: '18px',
                            fontWeight: '600',
                            lineHeight: '28px',
                            color: '#101828'
                        }}>
                        Media Upload
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '14px',
                            fontWeight: '400',
                            lineHeight: '20px',
                            color: '#475467'
                        }}
                    >
                        Add your documents here, and you can upload up to 5 files max
                    </Typography>
                </Box>

                <Box
                    sx={{
                        border: '1px dashed orange',
                        borderRadius: '5px',
                        padding: '20px',
                        textAlign: 'center',
                        cursor: 'pointer',
                        marginBottom: '20px'
                    }}
                >
                    <FileUploadIcon sx={{ width: '60px', height: '60px' }} />
                    <Typography variant='body2' color='textSecondary'>
                        Drag your file to start uploading
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center', justifyContent: 'center' }}>
                        <Divider sx={{ width: '80px' }} />
                        <Typography variant='body2' color='textSecondary' sx={{ my: 1 }}>
                            OR
                        </Typography>
                        <Divider sx={{ width: '80px' }} />
                    </Box>

                    <Button
                        sx={{
                            color: '#DC6803',
                            backgroundColor: '#ffffff',
                            border: '1px solid #DC6803',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontWeight: '600',
                            fontSize: '14px',
                            lineHeight: '20px',
                            textTransform: 'none',
                            paddingLeft: '10px',
                            paddingRight: '10px',
                        }}
                        onClick={handleBrowseFiles}
                    >
                        Browse files
                        <input type='file' hidden ref={fileInputRef} onChange={handleFileChange} />
                    </Button>
                </Box>

                {file && (
                    <Box sx={{ display: 'flex', alignItems: 'center', border: '1px solid #E7E7E7', borderRadius: '8px', marginBottom: '20px', padding: '15px' }}>
                        <img src={getFileIcon(file.name)} style={{ width: 40, height: 40, marginRight: 16 }} />
                        <Box sx={{ flexGrow: 1 }}>
                            {fileUrl && <Link href={fileUrl} target='_blank' rel='noopener noreferrer' underline='hover'>
                                <Typography variant='body1'>{file.name}</Typography>
                            </Link>}
                            {!fileUrl && <Typography variant='body1'>{file.name}</Typography>}
                            <Typography variant='body2' color='textSecondary'>{formatFileSize(file.size)}</Typography>
                        </Box>
                        <IconButton onClick={handleRemoveFile}>

                        </IconButton>
                    </Box>
                )}

                {errorMessage && (
                    <Box
                        sx={{
                            mt: 2,
                            p: 1,
                            backgroundColor: '#FFEFEF',
                            color: '#D32F2F',
                            borderRadius: 1,
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant='body2'>{errorMessage}</Typography>
                        <Button onClick={() => setErrorMessage(null)} sx={{ color: '#D32F2F' }}>
                            Dismiss
                        </Button>
                    </Box>
                )}
                <Typography variant='body2' color='textSecondary' sx={{ marginBottom: '0' }}>
                    Only support .pdf, .doc, .docx, and .zip files.
                </Typography>
                <Typography variant='body2' color='textSecondary' sx={{ textDecoration: 'underline', marginBottom: '20px' }}>
                    Note: uploading a new file overwrites any previously submitted file.
                </Typography>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button
                        sx={{
                            color: '#344054',
                            backgroundColor: '#ffffff',
                            width: '100px',
                            height: '40px',
                            border: '1px solid #D0D5DD',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontWeight: '600',
                            fontSize: '14px',
                            lineHeight: '20px',
                            textTransform: 'none',
                        }}
                        onClick={handleClose}
                    >
                        Cancel
                    </Button>
                    <Button
                        sx={{
                            color: '#FFFFFF',
                            backgroundColor: '#DC6803',
                            width: '100px',
                            height: '40px',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontWeight: '600',
                            fontSize: '14px',
                            lineHeight: '20px',
                            textTransform: 'none',
                        }}
                        onClick={handleSubmit}
                    >
                        Upload
                    </Button>

                </Box>
            </Box>

        </Modal >
    )
}

export default FileUploadModal
