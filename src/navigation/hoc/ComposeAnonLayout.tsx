import { FC } from 'react'
import AnonLayout from '../layouts/AnonLayout'

const ComposeAnonLayout = (Component: FC) => (passThroughProps?: { [key: string]: any }) =>
    (
        <AnonLayout {...passThroughProps} Component={Component}>
            {Component}
        </AnonLayout>
    )

export default ComposeAnonLayout
