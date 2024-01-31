import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined'
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined'
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'

import { useNavigate } from 'react-router-dom'
import PathConstants from '../../../navigation/pathConstants'
import { useAppSelector } from '../../../hooks/redux'
import VBLeftSidebarWithView from '../../../components/VBLeftSideBarWithView'
import { onboardingPath, userOnboardingOutline } from './utils'

const OnboardingPath = () => {
    const user = useAppSelector(state => state.user)
    const navigate = useNavigate()
    const nextPage = () => navigate(PathConstants.companyProfile)
    const cancel = () => navigate(PathConstants.home)
    const tempAction = () => console.log('Clicked button')

    const items = [
        {
            primary: 'Create a new organization',
            secondary: 'Start a new venture and make your mark',
            Icon: TipsAndUpdatesOutlinedIcon,
            action: nextPage,
        },
        {
            primary: 'Join an existing organization',
            secondary: 'Become part of an existing organization with room to grow',
            Icon: PersonAddAlt1OutlinedIcon,
            action: tempAction,
        },
        {
            primary: 'Join as an investor',
            secondary: 'Discover and promote promising startups as an investor',
            Icon: LocalAtmOutlinedIcon,
            action: tempAction,
        },
        {
            primary: 'Just look around',
            secondary: 'Browse and explore our thriving community',
            Icon: VisibilityOutlinedIcon,
            action: tempAction,
        },
    ]

    const UserOnboardingPath = (
        <Box>
            <Typography variant='h4' sx={{marginBottom: '10px'}}>
                Onboarding Path
            </Typography>
            <Typography>
                We&apos;re delighted to have you join Venture Build. Please select one of the following options below to proceed.
            </Typography>
            <Divider light sx={{marginBottom: '20px', marginTop: '10px'}}/>
            <List component='nav' aria-label='main mailbox folders' sx={{width: '100%'}}>
                {
                    items.map((item, i) =>
                        <ListItemButton key={`path-choice-${i}`} onClick={item.action} sx={{padding: '20px', border: 'solid 1px #C4C4C4', borderRadius: '20px', margin: '10px'}}>
                            <ListItemIcon>
                                <item.Icon sx={{color: '#DC6803', backgroundColor: '#FEF0C7', padding: '5px', borderRadius: '10px', width: '40px', height: '40px'}} />
                            </ListItemIcon>
                            <ListItemText primary={item.primary} secondary={item.secondary} />
                        </ListItemButton>
                    )
                }
            </List>
            <Divider light sx={{marginBottom: '10px', marginTop: '20px'}} />
            <Box sx={{marginBottom: '20px', display: 'flex', justifyContent: 'end'}}>
                <Button variant='outlined' sx={{marginRight: '10px'}} onClick={() => cancel()}>Cancel</Button>
                <Button variant='contained' sx={{color: '#fff', backgroundColor: '#DC6803', '&:hover': { backgroundColor: '#E8822A'}}} onClick={() => nextPage()}>Continue</Button>
            </Box>
        </Box>
    )

    return <VBLeftSidebarWithView Component={UserOnboardingPath} componentTitle={onboardingPath.title} title={userOnboardingOutline.title(user.data!.firstName)} tagline={userOnboardingOutline.tagline} list={userOnboardingOutline.list} />
}

export default OnboardingPath