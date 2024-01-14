import Article from "../views/admin/Article"
import CreateArticle from "../views/admin/CreateArticle"
import Events from "../views/admin/Events"
import FundingOpportunuties from "../views/admin/FundingOpportunuties"
import Home from "../views/admin/Home"
import Submissions from "../views/admin/Submissions"
import TemplateDetails from "../views/admin/TemplateDetails"
import Templates from "../views/admin/Templates"
import Venture from "../views/admin/Venture"
import VideoDetails from "../views/admin/VideoDetails"
import Videos from "../views/admin/Videos"
import ComposeAdminLayout from "./hoc/ComposeAdminLayout"

export const adminRoutes = [
    {
        title: 'Home',
        path: '/admin/home',
        component: ComposeAdminLayout(Home),
        exact: true,
    },
    {
        title: 'Video',
        path: '/admin/videos',
        component: ComposeAdminLayout(Videos),
        exact: true,
    },
    {
        title: 'Video Details',
        path: '/admin/videos/:id',
        component: ComposeAdminLayout(VideoDetails),
        exact: true,
    },
    {
        title: 'Venture',
        path: '/admin/ventures',
        component: ComposeAdminLayout(Venture),
        exact: true,
    },
    {
        title: 'Templates',
        path: '/admin/templates',
        component: ComposeAdminLayout(Templates),
        exact: true,
    },
    {
        title: 'Template Details',
        path: '/admin/templates/:id',
        component: ComposeAdminLayout(TemplateDetails),
        exact: true,
    },
    {
        title: 'Articles',
        path: '/admin/articles',
        component: ComposeAdminLayout(Article),
        exact: true,
    },
    {
        title: 'Create Articles',
        path: '/admin/articles/create',
        component: ComposeAdminLayout(CreateArticle),
        exact: true,
    },
    {
        title: 'Articles',
        path: '/admin/events',
        component: ComposeAdminLayout(Events),
        exact: true,
    },
    {
        title: 'Funding',
        path: '/admin/fundingOpportunuties',
        component: ComposeAdminLayout(FundingOpportunuties),
        exact: true,
    },
    {
        title: 'Submissions',
        path: '/admin/submissions',
        component: ComposeAdminLayout(Submissions),
        exact: true,
    },
]

export const adminSideBarLinks = [
    { id: 1, name: 'Home', to: '/admin/home', icon: 'HomeIcon' },
    { id: 2, name: 'Ventures', to: '/admin/ventures'  , icon: 'playIcon' },
    { id: 3, name: 'Videos', to: '/admin/videos', icon: 'playIcon' },
    { id: 4, name: 'Templates', to: '/admin/templates', icon: 'TemplateIcon' },
    { id: 5, name: 'Articles', to: '/admin/articles', icon: 'ArticleIcon' },
    { id: 6, name: 'Events', to: '/admin/events', icon: 'eventIcon' },
    { id: 7, name: 'Support', to: '/#', icon: 'supportIcon' },
    { id: 8, name: 'Settings', to: '/#', icon: 'settingsIcon' },
    { id: 9, name: 'Funding', to: '/admin/fundingOpportunuties', icon: 'fundingIcon' },
    { id: 10, name: 'Submissions', to: '/admin/Submissions', icon: 'TemplateIcon' },
]