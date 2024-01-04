import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import LinearProgress from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'

const VBLoading = () => {
    return (
        <Container sx={{ display: 'flex', justifyContent: 'center', width: '100vw' }}>
            <Container maxWidth='xl' sx={{
                width: '100vw',
                marginTop: '20vh',
                height: '51vh',
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <Typography variant='h5' gutterBottom>Loading...</Typography>
                <Box sx={{width: '100%'}}>
                    <LinearProgress sx={{color: '#000', width: '100%'}} />
                </Box>
            </Container>
        </Container>
    )
}

export default VBLoading