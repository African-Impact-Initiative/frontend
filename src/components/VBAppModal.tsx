import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'

export interface IAppModalProps {
    open: boolean,
    handleClose: (e: React.MouseEvent<HTMLElement>) => void,
    height?: string,
    width?: string,
    children: JSX.Element,
}

const VBAppModal = ({ children, open, handleClose, height, width }: IAppModalProps) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: width? width: '70vw',
        height: height? height:'95vh',
        bgcolor: '#FFFFFF', // color
        border: '2px solid #FFFFFF',
        boxShadow: 24,
        borderRadius: 5,
        p: 3,
        overflow: 'auto',
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            style={{ backdropFilter: 'blur(5px)' }}
        >
            <Box sx={style}>{children}</Box>
        </Modal>
    )
}

export default VBAppModal
