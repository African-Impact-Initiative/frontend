import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

const TaskDetails = () => {
    const { id } = useParams<{ id: string }>()

    const task = {
        id: '1',
    }

    return (
        <Box sx={{ padding: '20px' }}>
            Task details here
        </Box>
    )
}

export default TaskDetails