import { FC } from 'react'
import AdminLayout from '../layouts/AdminLayout.jsx'
import { PassThroughProps } from '../types/layout.js'

const ComposeAdminLayout = (Component: FC) => (passThroughProps: PassThroughProps) =>
    (
        <AdminLayout {...passThroughProps} Component={Component} />
    )

export default ComposeAdminLayout
