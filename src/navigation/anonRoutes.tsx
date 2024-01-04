import Home from '../views/Home'
import ComposeAnonLayout from './hoc/ComposeAnonLayout'
import PathConstants from './pathConstants'
import { BasicRoute, Route } from './types/route'

export const anonRoutes: Array<Route> = [
    {
        title: 'Venture Build',
        path: PathConstants.home,
        component: ComposeAnonLayout(<Home />),
        exact: true,
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