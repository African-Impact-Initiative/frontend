import { Box, Icon, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import PathConstants from '../routes/pathConstants'
import logo from '../assets/logo.svg'

const VBLogo = () => {
    return (
        <Link to={PathConstants.home} style={{textDecoration: 'none'}}>
            <Box sx={{  display: 'flex', alignItems: 'center', marginRight: '20px'}}>
                <Icon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1}}>
                    <img src={logo} alt="logo" />
                </Icon>
                <Box>
                    <Typography variant="body1" sx={{ color: '#101828', fontWeight: '600', fontSize: '18px', lineHeight: '28px' }}>Venture Build</Typography>
                </Box>
            </Box>
        </Link>
    )
}

export default VBLogo