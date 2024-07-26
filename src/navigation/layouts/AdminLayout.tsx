import { Box } from '@mui/material'
import VBSidebar from '../../components/VBSideBar'
import { adminSideBarLinks } from '../adminRoutes'
import { BasicLayout } from '../types/layout'
import { useAdminPermission } from '../../hooks/permissions'
import { useState } from 'react'
import VBLoading from '../../components/VBLoading'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AdminLayout = ({ Component, title, ...otherProps }: BasicLayout) => {
    const [loading, setLoading] = useState(true)
    useAdminPermission(setLoading)

    return (
        <Box
            sx={{
                display: 'flex',
                height: '100vh',
                columnGap: '2px',
                marginTop: '0px',
                width: '100vw',
                // height:'100%'
            }}
        >
            <Box style={{ display: 'flex', width: '100%' }}>
                <VBSidebar
                    links={adminSideBarLinks}
                    isAdmin={true}
                    sidebarBackgroundColor='#B54708'
                    // admin's sidebar should not have a right border,
                    // but we will have a right border with same color as the sidebar.
                    rightBorderColor='#B54708'
                    logoTextColor='#FFFFFF'
                    searchTextColor='#FEDF89'
                    searchIconColor='#FEDF89'
                    searchBorderColor='#B54708'
                    searchBackgroundColor='#DC6803'
                    selectedItemBackgroundColor='#DC6803'
                    selectedItemTextColor='#FFFFFF'
                    itemTextColor='#FEF0C7'
                    itemIconColor='#FEC84B'
                    userNameColor='#FFFFFF'
                    userEmailColor='#FEDF89'
                    dividerColor='#DC6803'
                    logoutIconColor='#FEC84B'
                    className='admin-active-nav'
                    searchClass={'app-search-placeholder'} 
                />
                <main style={{ background: '#FFFFFF', width: '100%', overflowY: 'auto', padding:'25px' }}>
                    {loading ? <VBLoading /> : <Component {...otherProps} />}
                </main>
            </Box>
        </Box>
    )
}


export default AdminLayout