import { ArticleOutlined, CalendarTodayOutlined, DescriptionOutlined, DomainOutlined, HelpCenterOutlined, HomeOutlined, MoneyOutlined, PlayCircleOutline, PublishOutlined, SettingsOutlined } from '@mui/icons-material'
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
    { id: 1, name: 'Home', to: PathConstants.adminHome, icon: HomeOutlined },
    { id: 2, name: 'Ventures', to: PathConstants.adminVentures , icon: DomainOutlined },
    { id: 3, name: 'Videos', to: PathConstants.adminVideos , icon: PlayCircleOutline },
    { id: 4, name: 'Templates', to: PathConstants.adminTemplates, icon: DescriptionOutlined },
    { id: 5, name: 'Articles', to: PathConstants.adminArticles, icon: ArticleOutlined },
    { id: 6, name: 'Events', to: PathConstants.adminEvents, icon: CalendarTodayOutlined },
    { id: 7, name: 'Support', to: '/#', icon: HelpCenterOutlined },
    { id: 8, name: 'Settings', to: '/#', icon: SettingsOutlined },
    { id: 9, name: 'Funding', to: PathConstants.adminFunding, icon: MoneyOutlined },
    { id: 10, name: 'Submissions', to: PathConstants.adminSubmissions, icon: PublishOutlined },
]