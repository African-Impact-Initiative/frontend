import AboutUs from '../views/anon/intro/AboutUs'
import ContactUs from '../views/anon/intro/ContactUs'
import Home from '../views/anon/intro/Home'
import Login from '../views/anon/registration/Login'
import Signup from '../views/anon/registration/Signup'
import VerificationSent from '../views/anon/registration/VerificationSent'
import ComposeAnonLayout from './hoc/ComposeAnonLayout'
import PathConstants from './pathConstants'
import { BasicRoute, Route } from './types/route'
import VentureDirectory from '../views/anon/intro/VentureDirectory'
import PublicProfilePage from '../views/anon/intro/PublicProfilePage'

export const anonRoutes: Array<Route> = [
    {
        title: 'Venture Build',
        path: PathConstants.home,
        component: ComposeAnonLayout(<Home />)(),
    },
    {
        title: 'Public Profile',
        path: PathConstants.publicProfile,
        component: ComposeAnonLayout(<PublicProfilePage />)(),
    },
    {
        title: 'About Us',
        path: PathConstants.about,
        component: ComposeAnonLayout(<AboutUs />)(),
    },
    {
        title: 'Venture Directory',
        path: PathConstants.ventureDirectory,
        component: ComposeAnonLayout(<VentureDirectory />)(),
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
        title: 'Dashboard',
        path: PathConstants.community
    },
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
        title: '',
        path: '/about/'
    },
    {
        title: '',
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