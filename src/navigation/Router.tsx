import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import PageNotFound from '../views/PageNotFound'
import { anonRoutes } from './anonRoutes'
import { authNavBarRoutes, authRoutes } from './authRoutes'
import { adminRoutes } from './adminRoutes'

const Router = () => {
    // routes with layout of top Nav and footer and no auth
    const anonRouter = anonRoutes.map(
        ({ path, component }) => (
            <Route
                key={path}
                path={path}
                element={component}
            />
        )
    )

    // routes with layouts having a side bar and authenticated
    const authRouter = authRoutes.map(
        ({ path, component }) => (
            <Route
                key={path}
                path={path}
                element={component}
            />
        )
    )

    // routes with layouts having a nav bar and authenticated
    const authWithNavBarRouter = authNavBarRoutes.map(
        ({ path, component }) => (
            <Route
                key={path}
                path={path}
                element={component}
            />
        )
    )

    // routes with layouts having a side bar and authenticated + admin
    const adminRouter = adminRoutes.map(
        ({ path, Component }) => (
            <Route
                key={path}
                path={path}
                element={<Component />}
            />
        )
    )

    return (
        <ScrollToTop>
            <Routes>
                {...anonRouter}
                {...authRouter}
                {...authWithNavBarRouter}
                {...adminRouter}
                {/* 404 page route */}
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </ScrollToTop>
    )
}

export default Router
