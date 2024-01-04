import { Box } from '@mui/material'
import VBNavBar from '../../components/VBNavBar'
import VBFooter from '../../components/VBFooter'
import { BasicLayout } from '../types/layout'

const AnonLayout = ({ Component, children, title, ...otherProps }: BasicLayout) => (
    <Box
        sx={{
            display: 'flex',
            height: '100vh',
            columnGap: '2px',
            width: '100vw',
            paddingTop:'50px'
        }}
    >
        <Box>
            <VBNavBar />
            <main style={{ background: '#FFFFFF', width: '100vw' }}>
                {children}
            </main>
            <VBFooter />
        </Box>
    </Box>
)

export default AnonLayout
