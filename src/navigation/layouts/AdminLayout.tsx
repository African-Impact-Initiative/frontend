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
                    backgroundColor="#B54707"
                    className="admin-active-nav"
                    color1="#FBECDF"
                    color2="#FAB743"
                    searchBoarder="#FAB743"
                    textColor="rgba(254, 240, 199, 1)"
                    searchClass={'app-search-placeholder'} />
                <main style={{ background: '#FFFFFF', width: '100%', overflowY: 'auto', padding:'25px' }}>
                    {loading ? <VBLoading /> : <Component {...otherProps} />}
                </main>
            </Box>
        </Box>
    )
}


export default AdminLayout