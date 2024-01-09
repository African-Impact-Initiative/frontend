import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { ArrowBack, ArrowForward, CloseOutlined, ContentCopy } from '@mui/icons-material'
import { Divider, MenuItem, TextField } from '@mui/material'

import UploadImage from '../assets/image_upload.png'
import VBAppModal from './VBAppModal'
import VBUploadContainer from './VBUploadContainer'
import { VBIconButton } from './VBButtons'

export interface IResourceUploadProps {
    open: boolean,
    handleClose: (e: React.MouseEvent<HTMLElement>) => void,
    action: (e: React.MouseEvent<HTMLElement>) => void,
}

const VBResourceUpload = ({ open, handleClose, action }: IResourceUploadProps) => {
    const categories = [
        { label: 'science', value: 'science' },
        { label: 'commercial', value: 'commercial' },
        { label: 'Art', value: 'Art' },
    ]

    const visibility = [
        { label: 'public', value: 'public' },
        { label: 'private', value: 'private' },
    ]

    return (
        <VBAppModal
            open={open}
            handleClose={handleClose}
            width="75vw"
            height="85vh"
        >
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
                                id="modal-modal-title"
                                variant="h6"
                                component="h2"
                                sx={{
                                    color: 'rgba(16, 24, 40, 1)',
                                    fontWeight: 600,
                                    fontSize: '18px',
                                }}
                            >
                                Upload templates
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

                <Divider sx={{ margin: '30px 0' }} />

                <Box
                    sx={{
                        display: 'flex',
                        columnGap: '20px',
                        justifyContent: 'space-between',
                    }}
                >
                    <Box sx={{ flex: '1', }}>
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
                                Upload a picture that shows what s in this template.
                            </Typography>
                            <VBUploadContainer handleOnChange={() => console.log('temp action')} />
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
                            Settings
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
                                <TextField
                                    select
                                    label="Categories"
                                    // size="large"
                                    onChange={(e) => console.log(e.target.value)}
                                    sx={{
                                        width: '100%',
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
                                <TextField
                                    // value={status}
                                    select
                                    label="Visibility"
                                    // size="large"
                                    onChange={(e) => console.log(e.target.value)}
                                    sx={{
                                        width: '100%',
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
                            <Box>
                                <Typography
                                    sx={{
                                        fontSize: '14px',
                                        fontWeight: 500,
                                        color: 'rgba(71, 84, 103, 1)',
                                        marginBottom: '5px',
                                    }}
                                >
                                    Template link
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
                    <Box sx={{ flex: '1' }}>
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
                        Template details can be edited later
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
        </VBAppModal>
    )
}

export default VBResourceUpload