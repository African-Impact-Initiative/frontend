import { Box } from '@mui/material'
import VBNavBar from '../../components/VBNavBar'
import VBFooter from '../../components/VBFooter'
import { LayoutWithChildren } from '../types/layout'
import { useAuthPermission } from '../../hooks/permissions'
import { useState } from 'react'
import VBLoading from '../../components/VBLoading'

 
const AuthNavBarLayout = ({ children }: LayoutWithChildren) => {
    const [loading, setLoading] = useState(true)
    useAuthPermission(setLoading)

    return (
        <Box
            sx={{
                height: '100vh',
                columnGap: '2px',
                width: '100vw',
                paddingTop:'50px'
            }}
        >
            <Box>
                <VBNavBar />
                {loading? <VBLoading /> : <main style={{ background: '#FFFFFF', width: '100vw' }}>{children}</main>}
                <VBFooter />
            </Box>
        </Box>
    )
}


export default AuthNavBarLayout
