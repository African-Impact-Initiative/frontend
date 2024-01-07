import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined'
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined'
import ListOutlinedIcon from '@mui/icons-material/ListOutlined'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setErrorNotification } from '../../../reducers/notificationReducer'
import { PAGES } from '../../navigation/routes'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import { SvgIconTypeMap } from '@mui/material'

interface LeftSidebarWithViewProps {
    Component: JSX.Element,
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string },
    page: string,
    title: string,
    tagline: string
}

const VBLeftSidebarWithView = ({component, page}) => {
    const Component = component
    const user = useSelector(state => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (user) {
            if (user.anon) {
                dispatch(setErrorNotification('Forbidden: Not logged in'))
                navigate(PAGES.home.path)
            }
        }
    }, [user, dispatch, navigate])

    return (
        <Container maxWidth='xl'>
            <Typography variant='h2' sx={{marginBottom: '10px', marginTop: '30px'}}>
                Welcome aboard {user.first_name}!
            </Typography>
            <Typography variant='p'>
                Your venture building journey starts here.
            </Typography>
            <Divider light sx={{marginBottom: '20px', marginTop: '10px'}}/>
            <Grid sx={{width: '100%', height: '100%'}} container spacing={3}>
                <Grid item lg={3} sx={{height: '100%', width: '100%', display: 'flex !important', alignItems: 'center !important', justifyContent: 'center !important', flexDirection: 'column !important'}}>
                    <List component="nav" aria-label="main mailbox folders" sx={{width: '100%'}}>
                        <ListItemButton
                            disabled={PAGES.terms.title != page}
                        >
                            <ListItemIcon>
                                <LibraryBooksOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Terms of Use" secondary="Please read before proceeding" />
                        </ListItemButton>
                        <ListItemButton
                            disabled={PAGES.personal.title != page}
                        >
                            <ListItemIcon>
                                <PermIdentityOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Personal Information" secondary="Tell us more about you" />
                        </ListItemButton>
                        <ListItemButton
                            disabled={PAGES.onboarding.title != page}
                        >
                            <ListItemIcon>
                                <ListOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Onboarding Path" secondary="Choose your onboarading path" />
                        </ListItemButton>
                        <ListItemButton
                            disabled={PAGES.companyProfile.title != page}
                        >
                            <ListItemIcon>
                                <ErrorOutlineOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Company Profile" secondary="Create your startup profile" />
                        </ListItemButton>
                    </List>
                </Grid>
                <Grid item lg={9} sx={{height: '100%', width: '100%'}}>
                    <Component user={user}/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default VBLeftSidebarWithView