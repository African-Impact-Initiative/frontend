import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { Button, SvgIconTypeMap } from '@mui/material'
import { CloseOutlined, ContentCopy } from '@mui/icons-material'
import { VBIconButton } from './VBButtons'
import { OverridableComponent } from '@mui/material/OverridableComponent'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#FFFFFF', // color
    //   border: "2px solid #000",
    boxShadow: 24,
    borderRadius: 5,
    p: 4,
}

export interface IResourceUploadSuccessProps {
    open: boolean,
    handleClose: (e: React.MouseEvent<HTMLElement>) => void,
    type: string,
    thumbnail?: string,
    Icon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
        muiName: string;
    }
}

const VBResourcesUploadSuccess = ({ open, handleClose, type, thumbnail, Icon }: IResourceUploadSuccessProps) => {
    return (
        <Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{ backdropFilter: 'blur(5px)' }}
            >
                <Box sx={style}>
                    <Box>
                        {(thumbnail || Icon) && (
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                {thumbnail && <Box>
                                    <img src={thumbnail} alt="upload" />
                                </Box>}
                                {Icon && <Icon />}
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
                        )}
                    </Box>
                    <Box sx={{ margin: '10px 0', textAlign: 'center' }}>
                        <Typography
                            sx={{
                                color: 'rgba(16, 24, 40, 1)',
                                fontWeight: 600,
                                fontSize: '18px',
                                lineHeight: '28px',
                            }}
                        >
                            {type} uploaded!
                        </Typography>
                        <Typography
                            sx={{
                                color: 'rgba(71, 84, 103, 1)',
                                fontWeight: 400,
                                fontSize: '14px',
                                lineHeight: '20px',
                            }}
                        >
              This {type} has been uploaded. You will be able to edit this
                            {type} and republish changes.
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            columnGap: '10px',
                            marginTop: '30px'
                        }}
                    >
                        <Button
                            sx={{
                                width: '100%',
                                height: '44px',
                                border: '1px solid rgba(208, 213, 221, 1)',
                                borderRadius: '8px',
                                textTransform: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
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
                                <ContentCopy /> Copy link
                            </Typography>
                        </Button>
                        <Button
                            sx={{
                                width: '100%',
                                height: '44px',
                                border: '1px solid #FFFFFF',
                                borderRadius: '8px',
                                background: 'rgba(220, 104, 3, 1)',
                                textTransform: 'none',
                                '&:hover': { backgroundColor: '#E8822A' },
                            }}
                            onClick={handleClose}
                        >
                            <Typography
                                sx={{
                                    color: '#FFFFFF',
                                    fontWeight: 600,
                                    fontSize: '16px',
                                }}
                            >
                                Finish
                            </Typography>
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </Box>
    )
}

export default VBResourcesUploadSuccess