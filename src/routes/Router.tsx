import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import PageNotFound from '../views/PageNotFound'

const Router = () => {
    // routes without layouts
    const authRoutes = routes.authRoutes.map(
        ({ path, component: Component, exact }) => (
            <Route key={path} exact={exact} path={path} element={<Component />} />
        )
    )

    // routes with layout of top Nav and footer
    const layer2Routes = routes.Layer2Routes.map(
        ({ path, component: Component, exact }) => (
            <Route
                key={path}
                exact={exact}
                path={path}
                element={
                    // <PrivateAdminRoute path={path} key={path} exact={exact}>
                    <Component />
                    // </PrivateAdminRoute>
                }
            />
        )
    )

    // routes with layouts having a side bar and authenticated
    const privateRoutes = routes.privateRoutes.map(
        ({ path, component: Component, exact }) => (
            <Route
                key={path}
                exact={exact}
                path={path}
                element={
                    <PrivateAdminRoute path={path} key={path} exact={exact}>
                        <Component />
                    </PrivateAdminRoute>
                }
            />
        )
    )

    // routes with layouts having a side bar and authenticated
    const adminRoutes = routes.adminRoutes.map(
        ({ path, component: Component, exact }) => (
            <Route
                key={path}
                exact={exact}
                path={path}
                element={
                    // <PrivateAdminRoute path={path} key={path} exact={exact}>
                    <Component />
                    // </PrivateAdminRoute>
                }
            />
        )
    )

    return (
        <ScrollToTop>
            <Routes>
                {privateRoutes}
                {authRoutes}
                {layer2Routes}
                {adminRoutes}
                {/* 404 page route */}
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </ScrollToTop>
    )
}

export default Router
