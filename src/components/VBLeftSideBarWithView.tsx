import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'

import { OverridableComponent } from '@mui/material/OverridableComponent'
import { SvgIconTypeMap } from '@mui/material'

type SideBarListItems = {
    title: string,
    secondary: string
    Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string },
}

interface ILeftSidebarWithViewProps {
    Component: JSX.Element,
    title: string,
    tagline: string,
    list: Array<SideBarListItems>
}

const VBLeftSidebarWithView = ({Component, title, tagline, list}: ILeftSidebarWithViewProps) => {
    return (
        <Container maxWidth='xl'>
            <Typography variant='h2' sx={{marginBottom: '10px', marginTop: '30px'}}>
                {title}
            </Typography>
            <Typography>
                {tagline}
            </Typography>
            <Divider light sx={{marginBottom: '20px', marginTop: '10px'}}/>
            <Grid sx={{width: '100%', height: '100%'}} container spacing={3}>
                <Grid item lg={3} sx={{height: '100%', width: '100%', display: 'flex !important', alignItems: 'center !important', justifyContent: 'center !important', flexDirection: 'column !important'}}>
                    <List component="nav" aria-label="main mailbox folders" sx={{width: '100%'}}>
                        {
                            list.map(item =>
                                <ListItemButton key={item.title} disabled={title === item.title}>
                                    <ListItemIcon>
                                        <item.Icon />
                                    </ListItemIcon>
                                    <ListItemText primary={item.title} secondary={item.secondary} />
                                </ListItemButton>)
                        }
                    </List>
                </Grid>
                <Grid item lg={9} sx={{height: '100%', width: '100%'}}>
                    {Component}
                </Grid>
            </Grid>
        </Container>
    )
}

export default VBLeftSidebarWithView