import Resources from '../components/pages/resources/Resource'
import Dashboard from '../components/pages/dashboard/Dashboard'
import ResourcesDetails from '../components/pages/resources/ResourcesDetails'
import TemplateDetails from '../components/pages/resources/TemplateDetails'
import ArticleDetails from '../components/pages/resources/ArticleDetails'
import Settings from '../components/settings/Settings'
import TeamPage from '../components/team/TeamPage'
import ComposeInternalLayouts from '../components/hocWrapper/ComposeInternalLayout'
import CompanyEditPage from '../components/pages/CompanyEditPage/CompanyEditPage'
import PrivateViewUpdate from '../components/pages/CompanyEditPage/PrivateViewUpdate'
import PublicCompanyView from '../components/pages/CompanyEditPage/PublicCompanyView'
import TaskPage from '../components/pages/TaskPage'

export const privateRoutes = [
    {
        title: 'Home',
        path: '/app/dashboard',
        component: ComposeInternalLayouts(Dashboard),
        exact: true,
    },
    {
        title: 'Tasks',
        path: '/app/tasks',
        component: ComposeInternalLayouts(TaskPage),
        exact: true,
    },
    {
        title: 'Resources',
        path: '/app/resources',
        component: ComposeInternalLayouts(Resources),
        exact: true,
    },
    {
        title: 'Resources Details',
        path: '/app/resources/video/:id',
        component: ComposeInternalLayouts(ResourcesDetails),
        exact: true,
    },
    {
        title: 'Resources Video Details',
        path: '/app/resources/template/:id',
        component: ComposeInternalLayouts(TemplateDetails),
        exact: true,
    },
    {
        title: 'Resources Article Details',
        path: '/app/resources/article/:id',
        component: ComposeInternalLayouts(ArticleDetails),
        exact: true,
    },
    {
        title: 'Settings Page',
        path: '/app/settings',
        component: ComposeInternalLayouts(Settings),
        exact: true,
    },
    {
        title: 'Team Page',
        path: '/app/teamPage',
        component: ComposeInternalLayouts(TeamPage),
        exact: true,
    },

    {
        title: 'Compaany Edit Page',
        path: '/app/companyEditPage/:id',
        component: ComposeInternalLayouts(CompanyEditPage),
        exact: true,
    }, 
    {
        title: 'Private View Update',
        path: '/app/privateViewUpdate',
        component: ComposeInternalLayouts(PrivateViewUpdate),
        exact: true,
    }, 
    {
        title: 'Public Company View',
        path: '/app/publicCompanyView',
        component: ComposeInternalLayouts(PublicCompanyView),
        exact: true,
    }, 
]
