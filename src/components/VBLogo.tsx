import { Box, Icon, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import PathConstants from '../navigation/pathConstants'
import logo from '../assets/logo.svg'

interface LogoProps {
    dark: boolean
}

const VBLogo = ({ dark }: LogoProps) => {
    const color = dark ? '#101828' : '#FFFFFF'

    return (
        <Link to={PathConstants.home} style={{ textDecoration: 'none' }}>
            <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Icon sx={{ mr: 1, height: '32px', width: '32px' }}>
                    <img src={logo} alt='logo' />
                </Icon>
                <Typography
                    variant='body1'
                    sx={{
                        display: { md: 'inline-block', xs: 'none' },
                        fontSize: '18px',
                        fontWeight: '600',
                        lineHeight: '28px',
                        color: { color }
                    }}
                >
                    Venture Build
                </Typography>
            </Box>
        </Link>
    )
}

export default VBLogo