import React from 'react'
import AdminLayout from '../../layout/AdminLayout.jsx'

/**
 * this is an HOC that renders the Internal Layout components of the application
 * passing the required components as a props to the child.
 * @function
 * @param {object}  component - dashboard component.
 * @return {HTMLElement}
 */

const ComposeAdminLayout = (Component) => (passThroughProps) => (
    <>
        <AdminLayout {...passThroughProps} Component={Component} />
    </> 
)

export default ComposeAdminLayout
