import Sidebar from '../components/sideBar/SideBar'
import { SideBarLinks } from '../sideBarLinks'
import { Box } from '@mui/material'

/**
 * this is the Internal Layout components of the app. It renders the passed
 *  components and default Side Bar
 * @function
 * @param {object}  props - layout component.
 * @param   {object} Component Component to be rendered
 * @return {HTMLElement}
 */
const InternalLayout = ({ Component, title, ...otherProps }) => (
    <>
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
                <Sidebar 
                    SideBarLinks={SideBarLinks}
                    isAdmin={false}
                    backgroundColor="#FFFFFF" 
                    className="active-nav" 
                    color1="rgba(16, 24, 40, 1)" 
                    color2="rgba(16, 24, 40, 1)" 
                    searchBoarder="#D0D5DD" 
                    iconColor="rgba(102, 112, 133, 1)" 
                    textColor="rgba(16, 24, 40, 1)"  />
                <main className="" style={{ background: '#FFFFFF', width: '100%', overflowY: 'auto' }}>
                    <Component {...otherProps} style={{  overflowY: 'auto'}} />
                </main>
            </Box>
        </Box>
    </>
)


export default InternalLayout
