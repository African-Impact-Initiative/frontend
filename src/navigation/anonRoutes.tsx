import Home from '../views/Home'
import PathConstants from './pathConstants'
import { Route } from './types/route'

export const anonRoutes: Array<Route> = [
    {
        title: 'Venture Build',
        path: PathConstants.home,
        component: ComposeLayout2(<Home/>),
        exact: true,
    },
]
