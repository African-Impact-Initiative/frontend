import { Box } from '@mui/material'
import VBNavBar from '../../components/VBNavBar'
import VBFooter from '../../components/VBFooter'
import { LayoutWithChildren } from '../types/layout'

const AnonLayout = ({ children }: LayoutWithChildren) => (
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
            <main style={{ background: '#FFFFFF', width: '100vw' }}>
                {children}
            </main>
            <VBFooter />
        </Box>
    </Box>
)

export default AnonLayout
