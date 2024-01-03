import React from 'react'
import { Box } from '@mui/material'
import Sidebar from '../components/sideBar/SideBar'
import { adminSideBarLinks } from '../adminSideBarLinks'

/**
 * this is the Internal Layout components of the app. It renders the passed
 *  components and default Side Bar
 * @function
 * @param {object}  props - layout component.
 * @param   {object} Component Component to be rendered
 * @return {HTMLElement}
 */

const AdminLayout = ({ Component, title, ...otherProps }) => (
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
                <Sidebar SideBarLinks={adminSideBarLinks} 
                    isAdmin={true}
                    backgroundColor="#B54707" 
                    activeColor="#DC6803" 
                    className="admin-active-nav" 
                    color1="#FBECDF" 
                    color2="#FAB743" 
                    searchBoarder="#FAB743" 
                    iconColor="#FAB743" 
                    textColor="rgba(254, 240, 199, 1)" 
                    searchClass={'app-search-placeholder'} />
                <main className="" style={{ background: '#FFFFFF', width: '100%', overflowY: 'auto', padding:'25px' }}>
                    <Component {...otherProps} style={{  overflowY: 'auto'}} />
                </main>
            </Box>
        </Box>
    </>
)


export default AdminLayout