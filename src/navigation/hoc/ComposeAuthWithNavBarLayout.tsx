import AuthNavBarLayout from '../layouts/AuthNavBarLayout'
import { PassThroughProps } from '../types/layout'

const ComposeAuthWithNavBarLayout = (Component: JSX.Element) => (passThroughProps?: PassThroughProps) =>
    (
        <AuthNavBarLayout {...passThroughProps}>
            {Component}
        </AuthNavBarLayout>
    )

export default ComposeAuthWithNavBarLayout