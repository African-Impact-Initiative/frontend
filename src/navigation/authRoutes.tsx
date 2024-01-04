import PathConstants from "./pathConstants"
import { BasicRoute } from "./types/route"

// renders Component without any wrapper
export const authRoutes = [
]

export const sideBarLinks = [
    { id: 1, name: 'Home', to: '/app/dashboard', icon: 'dashBoardIcon' },
    { id: 2, name: 'Tasks', to: '/app/tasks', icon: 'projectIcon' },
    { id: 3, name: 'Courses', to: '/app/#', icon: 'SchoolOutlinedIcon' },
    { id: 4, name: 'Fundraising', to: '/app/#', icon: 'fundRaisingIcon' },
    { id: 5, name: 'Resources', to: '/app/resources', icon: 'ResourcesIcon' },
    { id: 6, name: 'Team', to: '/app/teampage', icon: 'PeopleAltOutlinedIcon' },
    { id: 7, name: 'Support', to: '/app/#', icon: 'SupportOutlinedIcon' },
    { id: 8, name: 'Settings', to: '/app/settings', icon: 'SettingsOutlinedIcon' },
]

export const navPages: Array<BasicRoute> = [
    {
        title: 'Home',
        path: PathConstants.home
    },
    {
        title: 'Dashboard',
        path: PathConstants.dashboard
    },
    {
        title: 'Resources',
        path: PathConstants.resources
    },
    {
        title: 'Community',
        path: PathConstants.community
    },

]

export const footerPages: Array<BasicRoute> = [
    ...navPages,
    {
        title: 'About Us',
        path: PathConstants.about
    },
    {
        title: 'Help',
        path: PathConstants.help
    },
]