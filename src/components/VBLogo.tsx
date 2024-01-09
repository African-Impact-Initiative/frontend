import { Box, Icon, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import PathConstants from '../navigation/pathConstants'
import logo from '../assets/mini_logo.png'

interface LogoProps {
    dark: boolean
}

const VBLogo = ({ dark }: LogoProps) => {
    const color = dark? '#101828' : '#FFFFFF'

    return (
        <Link to={PathConstants.home} style={{ textDecoration: 'none' }}>
            <Box sx={{  display: 'flex', alignItems: 'center', width: '150px', height: '30px'}}>
                <Icon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1}}>
                    <img src={logo} alt="logo" />
                </Icon>
                <Box>
                    <Typography variant="body1" sx={{ color: {color}, fontWeight: '600', fontSize: '18px', lineHeight: '28px' }}>Venture Build</Typography>
                </Box>
            </Box>
        </Link>
    )
}

export default VBLogo