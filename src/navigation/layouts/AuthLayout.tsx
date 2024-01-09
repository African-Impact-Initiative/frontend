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
                    backgroundColor="#FFFFFF"
                    className="active-nav"
                    color1="rgba(16, 24, 40, 1)"
                    color2="rgba(16, 24, 40, 1)"
                    searchBoarder="#D0D5DD"
                    textColor="rgba(16, 24, 40, 1)"
                    searchClass={'app-search-placeholder'} />
                <main style={{ background: '#FFFFFF', width: '100%', overflowY: 'auto' }}>
                    {loading? <VBLoading /> : <Component {...otherProps} />}
                </main>
            </Box>
        </Box>
    )
}


export default AuthLayout
