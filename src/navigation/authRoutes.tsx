import CompanyProfile from '../views/anon/onboarding/CompanyProfile'
import DevelopmentChallenges from '../views/anon/onboarding/DevelopmentChallenges'
import DevelopmentFundraising from '../views/anon/onboarding/DevelopmentFundraising'
import DevelopmentStage from '../views/anon/onboarding/DevelopmentStage'
import OnboardingPath from '../views/anon/onboarding/OnboardingPath'
import PersonalInfo from '../views/anon/onboarding/PersonalInfo'
import TermsOfUse from '../views/anon/onboarding/TermsOfUse'
import ComposeAuthWithNavBarLayout from './hoc/ComposeAuthWithNavBarLayout'
import AuthLayout from './layouts/AuthLayout'
import PathConstants from './pathConstants'
import { BasicRoute } from './types/route'

// renders Component without any wrapper
export const authRoutes = [
    {
        title: 'Home',
        path: '/app/dashboard',
        component: AuthLayout(Dashboard),
        exact: true,
    },
    {
        title: 'Tasks',
        path: '/app/tasks',
        component: AuthLayout(TaskPage),
        exact: true,
    },
    {
        title: 'Resources',
        path: '/app/resources',
        component: AuthLayout(Resources),
        exact: true,
    },
    {
        title: 'Resources Details',
        path: '/app/resources/video/:id',
        component: AuthLayout(ResourcesDetails),
        exact: true,
    },
    {
        title: 'Resources Video Details',
        path: '/app/resources/template/:id',
        component: AuthLayout(TemplateDetails),
        exact: true,
    },
    {
        title: 'Resources Article Details',
        path: '/app/resources/article/:id',
        component: AuthLayout(ArticleDetails),
        exact: true,
    },
    {
        title: 'Settings Page',
        path: '/app/settings',
        component: AuthLayout(Settings),
        exact: true,
    },
    {
        title: 'Team Page',
        path: '/app/teamPage',
        component: AuthLayout(TeamPage),
        exact: true,
    },

    {
        title: 'Compaany Edit Page',
        path: '/app/companyEditPage/:id',
        component: AuthLayout(CompanyEditPage),
        exact: true,
    },
    {
        title: 'Private View Update',
        path: '/app/privateViewUpdate',
        component: AuthLayout(PrivateViewUpdate),
        exact: true,
    },
    {
        title: 'Public Company View',
        path: '/app/publicCompanyView',
        component: AuthLayout(PublicCompanyView),
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