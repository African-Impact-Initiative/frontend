import { Box } from '@mui/system'
import React from 'react'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import AssignmentSubmissions from './AssignmentSubmission'

const SubmissionsRow = () => {
    const [value, setValue] = React.useState('1')

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Box>
            <Box sx={{ width: '100%', typography: 'body1', marginTop: '24px'}}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList
                        
                            onChange={handleChange}
                            aria-label="API resources tabs"
                            textColor="secondary"
                            indicatorColor="secondary"
                            TabIndicatorProps={{ sx: { display: 'none' } }}
                            sx={{
                                '& .MuiTabs-flexContainer': {
                                    flexWrap: 'wrap',
                                },
                            }}
                            style={{ minWidth: 50 }} 
                        >
                            <Tab
                                label="Assignments"
                                value="1"
                                sx={{
                                    textTransform: 'none',
                                    fontSize: '14px',
                                    color: '#667085',
                                    fontWeight: '600'
                                }}
                            />
                            <Tab
                                label="Questionnaires"
                                value="2"
                                sx={{
                                    textTransform: 'none',
                                    fontSize: '14px',
                                    color: '#667085',
                                    fontWeight: '600'
                                }}
                            />
                            <Tab
                                label="Requests"
                                value="3"
                                sx={{
                                    textTransform: 'none',
                                    fontSize: '14px',
                                    color: '#667085',
                                    fontWeight: '600'
                                }}
                            />

                           
                        </TabList>
                    </Box>
                    <TabPanel value="1" sx={{ padding: '35px 0' }}>
                        <AssignmentSubmissions />
                    </TabPanel>
                    <TabPanel value="2" sx={{ padding: '35px 0' }}>
                        Questionnaires
                    </TabPanel>
                    <TabPanel value="3" sx={{ padding: '35px 0' }}>
                        Requests
                    </TabPanel>
                    <TabPanel value="4" sx={{ padding: '35px 0' }}>
                      uuuuu
                    </TabPanel>
                   
                </TabContext>
            </Box>
        </Box>
    )
}
export default SubmissionsRow
