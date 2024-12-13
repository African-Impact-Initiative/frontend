import AboutUs from '../views/anon/intro/AboutUs'
import ContactUs from '../views/anon/intro/ContactUs'
import Home from '../views/anon/intro/Home'
import WhatWeOffer from '../views/anon/intro/WhatWeOffer'
import Login from '../views/anon/registration/Login'
import Signup from '../views/anon/registration/Signup'
import VerificationSent from '../views/anon/registration/VerificationSent'
import ComposeAnonLayout from './hoc/ComposeAnonLayout'
import PathConstants from './pathConstants'
import { BasicRoute, Route } from './types/route'
import VentureDirectory from '../views/anon/intro/VentureDirectory'
import PublicProfilePage from '../views/anon/intro/PublicProfilePage'
import Privacy from '../views/anon/intro/Privacy'
import JoinOrganization from '../views/auth/JoinOrganization'

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
    {
        title: 'What We Offer',
        path: PathConstants.offer,
        component: ComposeAnonLayout(<WhatWeOffer />)(),

    },
    {
        title: 'Privacy',
        path: PathConstants.privacy,
        component: ComposeAnonLayout(<Privacy />)(),

    },
    {
        title: 'Join Organization',
        path: PathConstants.joinOrganization,
        component: ComposeAnonLayout(<JoinOrganization />)(),
    },
]

export const noUserPages: Array<BasicRoute> = [
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
    {
        title: 'Join Organization',
        path: PathConstants.joinOrganization,
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