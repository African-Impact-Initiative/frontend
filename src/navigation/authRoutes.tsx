import { BookOutlined, BookmarkOutlined, CalendarMonthOutlined, DashboardOutlined, MoneyOutlined, PeopleAltOutlined, SettingsOutlined, SupportAgentOutlined } from '@mui/icons-material'
import HomeIcon from '../assets/sidebar_icons/home.svg'
import TasksIcon from '../assets/sidebar_icons/tasks.svg'
import FundraisingIcon from '../assets/sidebar_icons/fundraising.svg'
import EventsIcon from '../assets/sidebar_icons/events.svg'
import ResourcesIcon from '../assets/sidebar_icons/resources.svg'
import SettingsIcon from '../assets/sidebar_icons/settings.svg'
import SupportIcon from '../assets/sidebar_icons/support.svg'
import TeamIcon from '../assets/sidebar_icons/team.svg'
import TemplateDetails from '../views/admin/TemplateDetails'
import CompanyProfile from '../views/anon/onboarding/CompanyProfile'
import DevelopmentChallenges from '../views/anon/onboarding/DevelopmentChallenges'
import DevelopmentFundraising from '../views/anon/onboarding/DevelopmentFundraising'
import DevelopmentStage from '../views/anon/onboarding/DevelopmentStage'
import OnboardingPath from '../views/anon/onboarding/OnboardingPath'
import PersonalInfo from '../views/anon/onboarding/PersonalInfo'
import TermsOfUse from '../views/anon/onboarding/TermsOfUse'
import ArticleDetails from '../views/auth/ArticleDetails'
import EditPublicProfilePage from '../views/auth/EditPublicProfilePage'
import Dashboard from '../views/auth/Dashboard'
import PrivateViewUpdate from '../views/auth/PrivateViewUpdate'
import PublicCompanyView from '../views/auth/PublicCompanyView'
import Resources from '../views/auth/Resource'
import ResourcesDetails from '../views/auth/ResourcesDetails'
import TaskDetails from '../views/auth/TaskDetails'
import Settings from '../views/auth/Settings'
import TaskPage from '../views/auth/TaskPage'
import TeamPage from '../views/auth/TeamPage'
import TestTeamPage from '../views/auth/TestTeam'
import SupportPage from '../views/auth/SupportPage'
import ComposeAuthLayout from './hoc/ComposeAuthLayout'
import ComposeAuthWithNavBarLayout from './hoc/ComposeAuthWithNavBarLayout'
import PathConstants from './pathConstants'
import { BasicRoute } from './types/route'
import FundingOpportunitiesPage from '../views/auth/FundingOpportunitiesPage'
import JoinOrganization from '../views/auth/JoinOrganization'

// renders Component without any wrapper
export const authRoutes = [
    {
        title: 'Home',
        path: PathConstants.dashboard,
        Component: ComposeAuthLayout(Dashboard),
        exact: true,
    },
    {
        title: 'Funding',
        path: PathConstants.funding,
        Component: ComposeAuthLayout(FundingOpportunitiesPage),
        exact: true,
    },
    {
        title: 'Tasks',
        path: PathConstants.tasks,
        Component: ComposeAuthLayout(TaskPage),
        exact: true,
    },
    {
        title: 'Resources',
        path: PathConstants.resources,
        Component: ComposeAuthLayout(Resources),
        exact: true,
    },
    {
        title: 'Resources Details',
        path: PathConstants.videos,
        Component: ComposeAuthLayout(ResourcesDetails),
        exact: true,
    },
    {
        title: 'Resources Video Details',
        path: PathConstants.templates,
        Component: ComposeAuthLayout(TemplateDetails),
        exact: true,
    },
    {
        title: 'Resources Article Details',
        path: PathConstants.articles,
        Component: ComposeAuthLayout(ArticleDetails),
        exact: true,
    },
    {
        title: 'Task Details',
        path: PathConstants.taskDetails,
        Component: ComposeAuthLayout(TaskDetails),
        exact: true,
    },
    {
        title: 'Support Page',
        path: PathConstants.support,
        Component: ComposeAuthLayout(SupportPage),
        exact: true,
    },
    {
        title: 'Settings Page',
        path: PathConstants.settings,
        Component: ComposeAuthLayout(Settings),
        exact: true,
    },
    {
        title: 'Team Page',
        path: PathConstants.teamPage,
        Component: ComposeAuthLayout(TeamPage),
        exact: true,
    },
    {
        title: 'Test Team Page',
        path: PathConstants.testteamPage,
        Component: ComposeAuthLayout(TestTeamPage),
        exact: true,
    },
    {
        title: 'Company Edit Page',
        path: PathConstants.companyEditPage,
        Component: ComposeAuthLayout(EditPublicProfilePage),
        exact: true,
    },
    {
        title: 'Private View Update',
        path: PathConstants.privateViewUpdate,
        Component: ComposeAuthLayout(PrivateViewUpdate),
        exact: true,
    },
    {
        title: 'Public Company View',
        path: PathConstants.publicCompanyView,
        Component: ComposeAuthLayout(PublicCompanyView),
        exact: true,
    },
]

export const authNavBarRoutes = [
    {
        title: 'Terms of Use',
        path: PathConstants.terms,
        component: ComposeAuthWithNavBarLayout(<TermsOfUse />)(),
    },
    {
        title: 'Personal Information',
        path: PathConstants.personal,
        component: ComposeAuthWithNavBarLayout(<PersonalInfo />)(),
    },
    {
        title: 'Onboarding Path',
        path: PathConstants.onboarding,
        component: ComposeAuthWithNavBarLayout(<OnboardingPath />)(),
    },
    {
        title: 'Company Profile',
        path: PathConstants.companyProfile,
        component: ComposeAuthWithNavBarLayout(<CompanyProfile />)(),
    },
    {
        title: 'Development Stage',
        path: PathConstants.developmentStage,
        component: ComposeAuthWithNavBarLayout(<DevelopmentStage />)(),
    },
    {
        title: 'Company Challenges',
        path: PathConstants.developmentChallenges,
        component: ComposeAuthWithNavBarLayout(<DevelopmentChallenges />)(),
    },
    {
        title: 'Fundraising Stage',
        path: PathConstants.developmentFundraising,
        component: ComposeAuthWithNavBarLayout(<DevelopmentFundraising />)(),
    },
]

export const sideBarLinks = [
    { id: 1, name: 'Home', to: PathConstants.dashboard, icon: HomeIcon },
    { id: 2, name: 'Resources', to: PathConstants.resources, icon: ResourcesIcon },
    { id: 3, name: 'Tasks', to: PathConstants.tasks, icon: TasksIcon },
    { id: 4, name: 'Funding Opportunities', to: PathConstants.funding, icon: MoneyOutlined },
    { id: 5, name: 'Team', to: PathConstants.teamPage, icon: TeamIcon },
    { id: 6, name: 'Support', to: PathConstants.support, icon: SupportIcon },
    { id: 7, name: 'Settings', to: PathConstants.settings, icon: SettingsIcon },
]

export const navPages: Array<BasicRoute> = [
    {
        title: 'Dashboard',
        path: PathConstants.dashboard
    },
    {
        title: 'Venture directory',
        path: PathConstants.ventureDirectory
    },
    {
        title: 'What we offer',
        path: PathConstants.offer
    },
    {
        title: 'Why choose us',
        path: PathConstants.about
    },
    {
        title: 'Connect',
        path: PathConstants.contactUs
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