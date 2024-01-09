import { Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import bullet from '../assets/bullet.svg'

export interface IJumboPanelProps {
    right: boolean,
    image: string,
    title: string,
    icon: string,
    points: Array<string>,
    prompt: string
}

const JumboPanel = ({ icon, title, prompt, points, image, right }: IJumboPanelProps) => {
    return (
        <Box key={`info-section-${title}`} sx={{display: { xs: 'none', lg: 'flex' }, height: '70vh', overflowX: 'hidden', marginTop: '40px', marginBottom: '40px'}}>
            <Grid sx={{width: '100%', height: '100%'}} container spacing={0}>
                {!right && <Grid item lg={7} sx={{background: `url(${image}) no-repeat center left`, height: '100%', width: '100%', backgroundSize: 'contain'}}></Grid>}
                <Grid item lg={5} sx={{height: '100%', width: '100%', padding: '80px', display: 'flex !important', alignItems: 'left !important', justifyContent: 'center !important', flexDirection: 'column !important'}}>
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'left', width: '20%'}}>
                        <img src={icon} alt={'manage team icon'} style={{borderRadius: '50%', padding: '10px', width: '80px', height: '80px'}} />
                    </Box>

                    <Typography fontWeight='bold' variant='h4' component='div' gutterBottom>
                        {title}
                    </Typography>

                    <Typography sx={{display: {lg: 'none', xl: 'inline'}, fontSize: '120%'}} variant='subtitle1' component='div' gutterBottom>
                        {prompt}
                    </Typography>

                    <List dense={false}>
                        {
                            points.map((point, i) =>
                                <ListItem key={`${title}-point-${i}`}>
                                    <ListItemIcon>
                                        <img src={bullet} alt={'-'}/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={point}
                                    />
                                </ListItem>
                            )
                        }
                    </List>
                </Grid>
                {right && <Grid item lg={7} sx={{background: `url(${image}) no-repeat center right`, height: '100%', width: '100%', backgroundSize: 'contain'}}></Grid>}
            </Grid>
        </Box>
    )
}

export default JumboPanel