import AboutUs from '../views/anon/ventureBuildIntro/AboutUs'
import ContactUs from '../views/anon/ventureBuildIntro/ContactUs'
import Home from '../views/anon/ventureBuildIntro/Home'
import Login from '../views/anon/registration/Login'
import Signup from '../views/anon/registration/Signup'
import VerificationSent from '../views/anon/registration/VerificationSent'
import ComposeAnonLayout from './hoc/ComposeAnonLayout'
import PathConstants from './pathConstants'
import { BasicRoute, Route } from './types/route'

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