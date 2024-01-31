import { Upload } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React, { useRef } from 'react'

export interface IUploadContainerProps {
    handleOnChange: React.ChangeEventHandler<HTMLInputElement>
}

const VBUploadContainer = ({ handleOnChange }: IUploadContainerProps) => {
    const fileRef = useRef(null)

    return (
        <Box
            onClick={() => {
                if (fileRef.current)
                    console.log('clicked')
                    // fileRef.current.click()
            }}
            sx={{
                border: '2px solid rgba(220, 104, 3, 1)',
                borderRadius: '10px',
                height: '153px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '30px 0px',
                cursor: 'pointer',
            }}
        >
            <input
                type='file'
                onChange={handleOnChange}
                style={{ display: 'none' }}
                ref={fileRef}
            />
            <Upload sx={{ margin: '10px 0' }} />
            <Box sx={{ display: 'flex' }}>
                <Typography
                    sx={{
                        color: 'rgba(181, 71, 8, 1)',
                        fontWeight: 400,
                        fontSize: '14px',
                    }}
                >
                    Click to upload
                </Typography>
                <Typography
                    sx={{
                        color: 'rgba(71, 84, 103, 1)',
                        fontWeight: 400,
                        fontSize: '14px',
                    }}
                >
                    or drag and drop
                </Typography>
            </Box>
            <Box>
                <Typography
                    sx={{
                        color: 'rgba(71, 84, 103, 1)',
                        fontWeight: 400,
                        fontSize: '12px',
                    }}
                >
                    Most document formats are accepted.
                </Typography>
            </Box>
        </Box>
    )
}

export default VBUploadContainer