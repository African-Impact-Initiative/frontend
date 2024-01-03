import { Box, Typography } from '@mui/material'

const PageNotFound = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Typography variant='h2'>404 - Page Not Found</Typography>
            <Typography variant='body1'>The page you are looking for does not exist.</Typography>
        </Box>
    )
}

export default PageNotFound
