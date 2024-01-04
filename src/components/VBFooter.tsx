import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Icon from '@mui/material/Icon'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import logo from '../assets/logo.svg'

import { useEffect, useState } from 'react'
import { useAppSelector } from '../hooks/redux'
import { noUserFooterPages, permissions } from '../navigation/anonRoutes'
import { footerPages } from '../navigation/authRoutes'
import PathConstants from '../navigation/pathConstants'

const Footer = () => {
    const [pages, setPages] = useState(noUserFooterPages)
    const user = useAppSelector(state => state.user)

    useEffect(() => {
        if (user && !user.anon)
            setPages(footerPages)
        else
            setPages(noUserFooterPages)
    }, [user])

    return (
        <Box sx={{width: '100%', backgroundColor: '#0C111D', padding: {md:'50px', xs: '0px'}}}>
            <Container maxWidth='xl' sx={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center', }}>
                <Box sx={{columnGap: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: {xs:'20px'}}}>
                    <Link href={PathConstants.home} rel='noreferrer' underline='none' >
                        <Icon sx={{width: '100%', height: '100%'}}>
                            <img src={logo} alt="logo" />
                        </Icon>
                    </Link>
                    <Link href={PathConstants.home} rel='noreferrer' underline='none' >
                        <Typography variant='body1' sx={{fontWeight: '600', fontSize: '18px', lineHeight: '28px', color: '#FFFFFF'}}>Venture Build</Typography>
                    </Link>
                </Box>
                <Box sx={{marginTop: '10px'}}>
                    <Grid container spacing={3}>
                        {pages.map(page =>
                            <Grid key={page.title} item>
                                <Link href={page.path} rel='noreferrer' underline='none' sx={{borderRadius: '5px', transition: 'ease 0.5s','&:hover': {color: '#DC6803'}, color: '#EAECF0', fontWeight: '600', fontSize: '16px', lineHeight: '24px'}}>
                                    {page.title}
                                </Link>
                            </Grid>
                        )}
                    </Grid>
                </Box>
                <Divider sx={{width: '100%', marginTop: '40px', marginBottom: '10px', backgroundColor: '#667085'}} />
                <Box sx={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                    <Box sx={{marginTop: '10px', color: '#D0D5DD', fontSize: '14px', lineHeight: '24px'}}>
                        <Typography variant='body1'>&copy; 2023 Venture Build. All rights reserved</Typography>
                    </Box>
                    <Box sx={{marginTop: '10px', display: 'flex', columnGap: '10px'}}>
                        {permissions.map(perm =>
                            <Link key={perm.title} href={perm.path} rel='noreferrer' underline='none' sx={{borderRadius: '5px', transition: 'ease 0.5s','&:hover': {color: '#DC6803'},  color: '#667085', fontWeight: '400', fontSize: '16px', lineHeight: '24px'}}>
                                {perm.title}
                            </Link>
                        )}
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer