import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import PageNotFound from '../views/PageNotFound'

const Router = () => {
    // routes with layout of top Nav and footer and no auth
    const anonRoutes = routes.Layer2Routes.map(
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
    const authRoutes = routes.privateRoutes.map(
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

    // routes with layouts having a side bar and authenticated + admin
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
                {anonRoutes}
                {authRoutes}
                {adminRoutes}
                {/* 404 page route */}
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </ScrollToTop>
    )
}

export default Router
