import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../store/appUserReducer'

import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { noUserPages } from '../navigation/anonRoutes'
import { navPages } from '../navigation/authRoutes'
import PathConstants from '../navigation/pathConstants'
import VBLogo from './VBLogo'

const VBNavBar = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [anchorElNav, setAnchorElNav] = useState(null)
    const [pages, setPages] = useState(noUserPages)
    const user = useAppSelector(state => state.user)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleOpenNavMenu = (event: any) => {
        setAnchorElNav(event.currentTarget)
    }

    useEffect(() => {
        if (user && !user.anon)
            setPages(navPages)
        else
            setPages(noUserPages)
    }, [user])

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    const logoutHandler = () => {
        dispatch(logout())
        navigate(PathConstants.home)
    }

    return (
        <AppBar position="fixed" sx={{boxShadow: 2, backgroundColor: '#FFF', zIndex: '100000000', marginBottom: '20px'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{  display: 'flex', alignItems: 'center' }}>
                        <VBLogo dark={true} />
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <Link key={page.title} to={page.path} style={{textDecoration: 'none'}}>
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center" >{page.title}</Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>
                    <VBLogo dark={true} />
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', justifyContent: 'end' } }}>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, display: {sm: 'block', md: 'none'} }}
                        >
                            Login
                        </Button>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Link key={page.title} to={page.path} style={{textDecoration: 'none',  }}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, display: 'block', ml: 1 ,textTransform: 'none', color: '#475467', fontWeight: '600', fontSize: '16px', lineHeight: '24px' }}
                                >
                                    {page.title}
                                </Button>
                            </Link>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'end'}}}>
                        {user && !user.anon?
                            <Button
                                onClick={logoutHandler}
                                sx={{ my: 2, display: 'block', mr: 1, color: '#fff', backgroundColor: '#DC6803', '&:hover': { backgroundColor: '#E8822A'}}}
                                variant='contained'
                            >
                                    Logout
                            </Button>
                            :
                            <>
                                <Link to={PathConstants.login} style={{textDecoration: 'none'}}>
                                    <Button
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, display: 'block', mr: 1 , textTransform: 'none', color: '#475467', fontWeight: '600', fontSize: '16px', lineHeight: '24px'}}
                                    >
                                        Login
                                    </Button>
                                </Link>
                                <Link to={PathConstants.signUp} style={{textDecoration: 'none'}}>
                                    <Button
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, display: 'block', color: '#fff', backgroundColor: '#DC6803', '&:hover': { backgroundColor: '#E8822A'}, borderRadius: '8px', fontSize: '16px', height: '40px', width: '100px', fontWeight: '600', textTransform: 'none' }}
                                        variant='contained'
                                    >
                                       Join now
                                    </Button>
                                </Link>
                            </>
                        }
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default VBNavBar
