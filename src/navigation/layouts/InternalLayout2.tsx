import { Box } from '@mui/material'
import NavBar from '../components/navigation/NavBar'
import Footer from '../components/footer/Footer'

/**
 * this is the Internal Layout components of the app. It renders the passed
 *  components and default Side Bar
 * @function
 * @param {object}  props - layout component.
 * @param   {object} Component Component to be rendered
 * @return {HTMLElement}
 */

const InternalLayout2 = ({ Component, children, title, ...otherProps }) => (
    <>
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
                <NavBar styles={{marginBottom:'20px'}} />
                <main className="" style={{ background: '#FFFFFF', width: '100vw' }}>
                    {children}
                </main>
                <Footer />
            </Box>
        </Box>
    </>
)

export default InternalLayout2
