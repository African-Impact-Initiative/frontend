import React from 'react'
import { Box, IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ArrowForwardRounded, MoreHorizRounded } from '@mui/icons-material'

const ActionIcons: React.FC<{id : string}> = ({ id }) => {
    const navigate = useNavigate()
    return (
        <Box
            style={{
                display: 'flex',
                columnGap: '5px',
                height: '100%',
                color: 'rgba(71, 84, 103, 1)',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <IconButton>
                <MoreHorizRounded style={{ height: '20px', width: '20px', }} />
            </IconButton>
            
            <IconButton onClick={() => navigate(`/app/tasks/${id}`)}>
                <ArrowForwardRounded style={{ height: '20px', width: '20px' }} />
            </IconButton>

        </Box>
    )
}

export default ActionIcons