import { ArticleOutlined, CalendarTodayOutlined, DescriptionOutlined, DomainOutlined, HelpCenterOutlined, HomeOutlined, MoneyOutlined, PlayCircleOutline, PublishOutlined, SettingsOutlined } from '@mui/icons-material'
import HomeIcon from '../assets/sidebar_icons/admin_home.svg'
import TasksIcon from '../assets/sidebar_icons/admin_tasks.svg'
import FundingIcon from '../assets/sidebar_icons/admin_funding.svg'
import EventsIcon from '../assets/sidebar_icons/admin_events.svg'
import VenturesIcon from '../assets/sidebar_icons/admin_ventures.svg'
import ResourcesIcon from '../assets/sidebar_icons/admin_resources.svg'
import AnnouncementsIcon from '../assets/sidebar_icons/admin_announcements.svg'
import RequestsIcon from '../assets/sidebar_icons/admin_requests.svg'
import SettingsIcon from '../assets/sidebar_icons/admin_settings.svg'
import Article from '../views/admin/Article'
import CreateArticle from '../views/admin/CreateArticle'
import Events from '../views/admin/Events'
import FundingOpportunuties from '../views/admin/FundingOpportunuties'
import Home from '../views/admin/Home'
import Submissions from '../views/admin/Submissions'
import TemplateDetails from '../views/admin/TemplateDetails'
import Templates from '../views/admin/Templates'
import Venture from '../views/admin/Venture'
import VideoDetails from '../views/admin/VideoDetails'
import Videos from '../views/admin/Videos'
import ComposeAdminLayout from './hoc/ComposeAdminLayout'
import PathConstants from './pathConstants'

export const adminRoutes = [
    {
        title: 'Home',
        path: PathConstants.adminHome,
        Component: ComposeAdminLayout(Home),
        exact: true,
    },
    {
        title: 'Video',
        path: PathConstants.adminVideos,
        Component: ComposeAdminLayout(Videos),
        exact: true,
    },
    {
        title: 'Video Details',
        path: PathConstants.adminVideo,
        Component: ComposeAdminLayout(VideoDetails),
        exact: true,
    },
    {
        title: 'Venture',
        path: PathConstants.adminVentures,
        Component: ComposeAdminLayout(Venture),
        exact: true,
    },
    {
        title: 'Templates',
        path: PathConstants.adminTemplates,
        Component: ComposeAdminLayout(Templates),
        exact: true,
    },
    {
        title: 'Template Details',
        path: PathConstants.adminTemplate,
        Component: ComposeAdminLayout(TemplateDetails),
        exact: true,
    },
    {
        title: 'Articles',
        path: PathConstants.adminArticles,
        Component: ComposeAdminLayout(Article),
        exact: true,
    },
    {
        title: 'Create Articles',
        path: PathConstants.adminCreateArticles,
        Component: ComposeAdminLayout(CreateArticle),
        exact: true,
    },
    {
        title: 'Articles',
        path: PathConstants.adminEvents,
        Component: ComposeAdminLayout(Events),
        exact: true,
    },
    {
        title: 'Funding',
        path: PathConstants.adminFunding,
        Component: ComposeAdminLayout(FundingOpportunuties),
        exact: true,
    },
    {
        title: 'Submissions',
        path: PathConstants.adminSubmissions,
        Component: ComposeAdminLayout(Submissions),
        exact: true,
    },
]

export const adminSideBarLinks = [
    { id: 1, name: 'Home', to: PathConstants.adminHome, icon: HomeIcon },
    { id: 2, name: 'Ventures', to: PathConstants.adminVentures , icon: VenturesIcon },
    { id: 3, name: 'Tasks', to: '/#' , icon: TasksIcon },
    { id: 4, name: 'Resources', to: '/#' , icon: ResourcesIcon },
    { id: 5, name: 'Funding', to: PathConstants.adminFunding, icon: FundingIcon },
    { id: 6, name: 'Events', to: PathConstants.adminEvents, icon: EventsIcon },
    { id: 7, name: 'Announcements', to: '/#', icon: AnnouncementsIcon },
    { id: 8, name: 'Requests', to: '/#', icon: RequestsIcon },
    { id: 9, name: 'Settings', to: '/#', icon: SettingsIcon },
]