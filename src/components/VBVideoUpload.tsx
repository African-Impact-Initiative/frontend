import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { CloseOutlined, ContentCopy } from '@mui/icons-material'
import { Divider, TextField } from '@mui/material'

import UploadContainer from './VBUploadContainer'
import tempVideo from '../assets/video_thumbnail_temp.png'
import { BlogToBase64 } from '../utils/blogToBase64'
import { useState } from 'react'
import { VBIconButton } from './VBButtons'
import { VBSelect } from './VBForms'


const categories = [
    { label: 'science', value: 'science' },
    { label: 'commercial', value: 'commercial' },
    { label: 'Art', value: 'Art' },
]

const visibility = [
    { label: 'public', value: 'public' },
    { label: 'private', value: 'private' },
]

export interface IVBUploadVideoProps {
    handleClose: (e: React.MouseEvent<HTMLElement>) => void,
    action: (e: React.MouseEvent<HTMLElement>) => void
}

const VBVideoUpload = ({ handleClose, action }: IVBUploadVideoProps) => {
    const [status, setStatus] = useState('')
    const [imagePreview, setImagePreview] = useState<string | null>(null)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleFileUploadChange = (e: any) => {
        try {
            const files = e.target.files || []

            console.log(files, 'files__')

            if (files.length == 0)
                return


            console.log(files[0])

            BlogToBase64(files[0], (err, res) => {
                console.log(res, 'image') // base64 `data:image/...` String result.
                console.log(err)
                setImagePreview(res as string)
            })
        } catch (err) {
            console.log(err, 'eoror')
        }
    }

    return (
        <>
            <Box>
                <Box>
                    <Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Typography
                                id='modal-modal-title'
                                variant='h6'
                                component='h2'
                                sx={{
                                    color: 'rgba(16, 24, 40, 1)',
                                    fontWeight: 600,
                                    fontSize: '18px',
                                }}
                            >
                                Upload videos
                            </Typography>
                            <Box>
                                <VBIconButton
                                    Icon={CloseOutlined}
                                    aria={{
                                        label: 'close',
                                        controls: 'close',
                                        popup: false
                                    }}
                                    onClick={handleClose}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Divider sx={{ margin: '20px 0' }} />

                <Box
                    sx={{
                        display: 'flex',
                        columnGap: '20px',
                        justifyContent: 'space-between',
                    }}
                >
                    <Box sx={{ flex: '1.5' }}>
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
                                Tell viewers about this video.
                            </Typography>

                            <textarea
                                style={{
                                    width: '100%',
                                    border: '1px solid rgba(208, 213, 221, 1)',
                                    borderRadius: '8px',
                                }}
                                rows={5}
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
                                Upload a picture that shows what's in this video.
                            </Typography>
                            <UploadContainer handleOnChange={handleFileUploadChange} />
                        </Box>
                        <Box sx={{ flex: 1 }}>
                            {imagePreview && imagePreview != '' ? (
                                <img src={imagePreview} alt='thumbnail' width={'276px'} height={'196px'} />
                            ) : (
                                ''
                            )}
                        </Box>
                    </Box>
                    <Box sx={{ flex: '1' }}>
                        <Typography
                            sx={{
                                fontSize: '14px',
                                fontWeight: 600,
                                color: 'rgba(52, 64, 84, 1)',
                                marginBottom: '10px',
                            }}
                        >
                            Preview & Settings
                        </Typography>
                        <Box
                            sx={{
                                border: '1px solid rgba(234, 236, 240, 1)',
                                borderRadius: '12px',
                                display: 'flex',
                                rowGap: '20px',
                                flexDirection: 'column',
                                padding: '20px',
                            }}
                        >
                            <Box
                                sx={{
                                    borderRadius: '16px',
                                    backgroundImage: `url(${tempVideo})`,
                                    backgroundSize: '100% 100%',
                                    backgroundRepeat: 'no-repeat',
                                    height: '202px',
                                    border: '1px solid #ccc',
                                }}
                            ></Box>
                            <Box>
                                <Typography
                                    sx={{
                                        fontSize: '14px',
                                        fontWeight: 500,
                                        color: 'rgba(71, 84, 103, 1)',
                                        font: 'inter',
                                    }}
                                >
                                    File name
                                </Typography>

                                <Typography
                                    sx={{
                                        fontSize: '16px',
                                        fontWeight: 500,
                                        color: 'rgba(52, 64, 84, 1)',
                                        font: 'inter',
                                    }}
                                >
                                    Resources_templates_05.docx
                                </Typography>
                            </Box>
                            <Box>
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
                                <VBSelect
                                    label='Categories'
                                    size='small'
                                    setter={setStatus}
                                    list={categories}
                                    value={status}
                                    required={false}
                                />
                            </Box>
                            <Box>
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
                                <VBSelect
                                    label='Visibility'
                                    size='small'
                                    setter={setStatus}
                                    list={visibility}
                                    value={status}
                                    required={false}
                                />
                            </Box>
                            <Box>
                                <Typography
                                    sx={{
                                        fontSize: '14px',
                                        fontWeight: 500,
                                        color: 'rgba(71, 84, 103, 1)',
                                        marginBottom: '5px',
                                    }}
                                >
                                    Video link
                                </Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        border: '1px solid rgba(208, 213, 221, 1)',
                                        height: '44px',
                                        borderRadius: '8px',
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
                </Box>

                <Divider sx={{ margin: '30px 0' }} />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        columnGap: '10px',
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: '14px',
                            fontWeight: 600,
                            color: 'rgba(71, 84, 103, 1)',
                        }}
                    >
                        Video details can be edited later
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            columnGap: '9px',
                            alignItems: 'center',
                        }}
                    >
                        <Button
                            sx={{
                                height: '44px',
                                border: '1px solid rgba(208, 213, 221, 1)',
                                borderRadius: '8px',
                                textTransform: 'none',
                            }}
                            onClick={handleClose}
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
                            onClick={action}
                        >
                            <Typography
                                sx={{
                                    color: '#FFFFFF',
                                    fontWeight: 600,
                                    fontSize: '16px',
                                }}
                            >
                                Upload
                            </Typography>
                        </Button>
                    </Box>
                </Box>
            </Box>
            {/* </Modal> */}
        </>
    )
}

export default VBVideoUpload