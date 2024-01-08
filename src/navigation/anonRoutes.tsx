import AboutUs from '../views/anon/ventureBuildIntro/AboutUs'
import ContactUs from '../views/anon/ventureBuildIntro/ContactUs'
import Home from '../views/anon/ventureBuildIntro/Home'
import Login from '../views/anon/registration/Login'
import Signup from '../views/anon/registration/Signup'
import VerificationSent from '../views/anon/registration/VerificationSent'
import ComposeAnonLayout from './hoc/ComposeAnonLayout'
import PathConstants from './pathConstants'
import { BasicRoute, Route } from './types/route'
import TermsOfUse from '../views/anon/onboarding/TermsOfUse'
import PersonalInfo from '../views/anon/onboarding/PersonalInfo'
import OnboardingPath from '../views/anon/onboarding/OnboardingPath'
import CompanyProfile from '../views/anon/onboarding/CompanyProfile'
import DevelopmentStage from '../views/anon/onboarding/DevelopmentStage'
import DevelopmentChallenges from '../views/anon/onboarding/DevelopmentChallenges'
import DevelopmentFundraising from '../views/anon/onboarding/DevelopmentFundraising'

export const anonRoutes: Array<Route> = [
    {
        title: 'Venture Build',
        path: PathConstants.home,
        component: ComposeAnonLayout(<Home />)(),
    },
    {
        title: 'About Us',
        path: PathConstants.about,
        component: ComposeAnonLayout(<AboutUs />)(),
    },
    {
        title: 'Contact Us',
        path: PathConstants.contactUs,
        component: ComposeAnonLayout(<ContactUs />)(),
    },
    {
        title: 'Login',
        path: PathConstants.login,
        component: ComposeAnonLayout(<Login />)(),
    },
    {
        title: 'Sign Up',
        path: PathConstants.signUp,
        component: ComposeAnonLayout(<Signup />)(),
    },
    {
        title: 'Verification Sent',
        path: PathConstants.signUpVerification,
        component: ComposeAnonLayout(<VerificationSent />)(),
    },
    {
        title: 'Terms of Use',
        path: PathConstants.terms,
        component: ComposeAnonLayout(<TermsOfUse />)(),
    },
    {
        title: 'Personal Information',
        path: PathConstants.personal,
        component: ComposeAnonLayout(<PersonalInfo />)(),
    },
    {
        title: 'Onboarding Path',
        path: PathConstants.onboarding,
        component: ComposeAnonLayout(<OnboardingPath />)(),
    },
    {
        title: 'Company Profile',
        path: PathConstants.companyProfile,
        component: ComposeAnonLayout(<CompanyProfile />)(),
    },
    {
        title: 'Development Stage',
        path: PathConstants.developmentStage,
        component: ComposeAnonLayout(<DevelopmentStage />)(),
    },
    {
        title: 'Company Challenges',
        path: PathConstants.developmentChallenges,
        component: ComposeAnonLayout(<DevelopmentChallenges />)(),
    },
    {
        title: 'Fundraising Stage',
        path: PathConstants.developmentFundraising,
        component: ComposeAnonLayout(<DevelopmentFundraising />)(),
    },
]

export const noUserPages: Array<BasicRoute> = [
    {
        title: 'Venture directory',
        path: PathConstants.community
    },
    {
        title: 'What we offer',
        path: PathConstants.community
    },
    {
        title: 'Why choose us',
        path: PathConstants.community
    },
    {
        title: 'Connect',
        path: PathConstants.community
    },
]

export const noUserFooterPages: Array<BasicRoute> = [
    ...noUserPages,
    {
        title: 'About Us',
        path: '/about/'
    },
    {
        title: 'Help',
        path: '/help/'
    },
]

export const permissions: Array<BasicRoute> = [
    {
        title: 'Terms',
        path: '/terms-of-use/'
    },
    {
        title: 'Privacy',
        path: '/privacy/'
    },
    {
        title: 'Cookies',
        path: '/cookies/'
    },
]