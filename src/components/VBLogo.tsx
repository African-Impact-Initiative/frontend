import { Box, Icon, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import PathConstants from '../navigation/pathConstants'
import logo from '../assets/logo.svg'

interface LogoProps {
    textColor: string
}

/* changes to VBLogo  affects other pages. TODO: create seperate VBLogo for the sidebar. */

const VBLogo = ({ textColor }: LogoProps) => {
    return (
        <Link to={PathConstants.home} style={{ textDecoration: 'none' }}>
            <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Icon sx={{ height: '32px', width: '32px' }}>
                    <img src={logo} alt='logo' />
                </Icon>
                <Typography
                    variant='body1'
                    sx={{
                        display: { md: 'inline-block', xs: 'none' },
                        fontSize: '18px',
                        fontWeight: '600',
                        lineHeight: '28px',
                        color: `${ textColor }`
                    }}
                >
                    Venture Build
                </Typography>
            </Box>
        </Link>
    )
}

export default VBLogo