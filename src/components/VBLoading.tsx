import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import LinearProgress from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'

const VBLoading = () => {
    return (
        <Container maxWidth='lg' sx={{
            width: '100%',
            marginTop: '20vh',
            height: '51vh',
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            <Typography variant='h5' gutterBottom>Loading...</Typography>
            <Box sx={{width: '100%'}}>
                <LinearProgress sx={{color: '#000'}} />
            </Box>
        </Container>
    )
}

export default VBLoading