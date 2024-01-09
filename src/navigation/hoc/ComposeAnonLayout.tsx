import AnonLayout from '../layouts/AnonLayout'
import { PassThroughProps } from '../types/layout'

const ComposeAnonLayout = (Component: JSX.Element) => (passThroughProps?: PassThroughProps) =>
    (
        <AnonLayout {...passThroughProps}>
            {Component}
        </AnonLayout>
    )

export default ComposeAnonLayout
