import VBSidebar from '../../components/VBSideBar'
import { sideBarLinks } from '../authRoutes'
import { Box } from '@mui/material'
import { BasicLayout } from '../types/layout'
import { useAuthPermission } from '../../hooks/permissions'
import { useState } from 'react'
import VBLoading from '../../components/VBLoading'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AuthLayout = ({ Component, title, ...otherProps }: BasicLayout) => {
    const [loading, setLoading] = useState(true)
    useAuthPermission(setLoading)

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
                    links={sideBarLinks}
                    isAdmin={false}
                    sidebarBackgroundColor='#FFFFFF'
                    rightBorderColor='#EAECF0'
                    logoTextColor='#101828'
                    searchTextColor='#667085'
                    searchIconColor='#667085'
                    searchBorderColor='#D0D5DD'
                    searchBackgroundColor='#FFFFFF'
                    selectedItemBackgroundColor='#F9FAFB'
                    selectedItemTextColor='#101828'
                    itemTextColor='#344054'
                    itemIconColor='#667085'
                    userNameColor='#344054'
                    userEmailColor='#475467'
                    dividerColor='#EAECF0'
                    logoutIconColor='#667085'
                    className='active-nav'
                    searchClass={'app-search-placeholder'} />
                <main style={{ background: '#FFFFFF', width: '100%', overflowY: 'auto' }}>
                    {loading? <VBLoading /> : <Component {...otherProps} />}
                </main>
            </Box>
        </Box>
    )
}


export default AuthLayout
