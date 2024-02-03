import TemplateDetails from '../views/admin/TemplateDetails'
import CompanyProfile from '../views/anon/onboarding/CompanyProfile'
import DevelopmentChallenges from '../views/anon/onboarding/DevelopmentChallenges'
import DevelopmentFundraising from '../views/anon/onboarding/DevelopmentFundraising'
import DevelopmentStage from '../views/anon/onboarding/DevelopmentStage'
import OnboardingPath from '../views/anon/onboarding/OnboardingPath'
import PersonalInfo from '../views/anon/onboarding/PersonalInfo'
import TermsOfUse from '../views/anon/onboarding/TermsOfUse'
import ArticleDetails from '../views/auth/ArticleDetails'
import CompanyEditPage from '../views/auth/CompanyEditPage'
import Dashboard from '../views/auth/Dashboard'
import PrivateViewUpdate from '../views/auth/PrivateViewUpdate'
import PublicCompanyView from '../views/auth/PublicCompanyView'
import Resources from '../views/auth/Resource'
import ResourcesDetails from '../views/auth/ResourcesDetails'
import Settings from '../views/auth/Settings'
import TaskPage from '../views/auth/TaskPage'
import TeamPage from '../views/auth/TeamPage'
import ComposeAuthLayout from './hoc/ComposeAuthLayout'
import ComposeAuthWithNavBarLayout from './hoc/ComposeAuthWithNavBarLayout'
import PathConstants from './pathConstants'
import { BasicRoute } from './types/route'

// renders Component without any wrapper
export const authRoutes = [
    {
        title: 'Home',
        path: PathConstants.dashboard,
        Component: ComposeAuthLayout(Dashboard),
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
        title: 'Compaany Edit Page',
        path: PathConstants.companyEditPage,
        Component: ComposeAuthLayout(CompanyEditPage),
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