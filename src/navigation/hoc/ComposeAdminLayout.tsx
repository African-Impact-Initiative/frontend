import { FC } from 'react'
import AdminLayout from '../layouts/AdminLayout.jsx'

const ComposeAdminLayout = (Component: FC) => (passThroughProps: { [key: string]: any }) =>
(
    <AdminLayout {...passThroughProps} Component={Component} />
)

export default ComposeAdminLayout
