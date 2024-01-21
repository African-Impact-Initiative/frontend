import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'

import AllTopics from './AllTopics'
import PageHeader from '../../pageHeader/PageHeader'

export default function Resources() {
    const [value, setValue] = useState('1')

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <Box sx={{ padding: '20px' }}>
            <PageHeader
                title="Resources"
                subTitle="Discover resources for startup growth."
                noHr={true}
            />
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', border: '2px solid red', }}>
                        <TabList
                            onChange={handleChange}
                            aria-label="API resources tabs"
                            textColor="secondary"
                            indicatorColor="secondary"
                            sx={{ textTransform: 'none', display: 'flex', flexDirection: { md: 'row', xs: 'column' } }}
                        >
                            <Tab
                                sx={{ textTransform: 'none' }}
                                label="All  Topics"
                                value="1"
                            />
                            <Tab label="Product" value="2" sx={{ textTransform: 'none' }} />
                            <Tab label="Marketing" value="3" sx={{ textTransform: 'none' }} />
                            <Tab
                                label="Operations"
                                value="4"
                                sx={{ textTransform: 'none' }}
                            />
                            <Tab label="Legal" value="5" sx={{ textTransform: 'none' }} />
                            <Tab
                                label="Management"
                                value="6"
                                sx={{ textTransform: 'none' }}
                            />
                        </TabList>
                    </Box>
                    <TabPanel value="1" sx={{ padding: '35px 0' }}>
                        <AllTopics />
                    </TabPanel>
                    <TabPanel value="2" sx={{ padding: '35px 0' }}>
                        Item Two
                    </TabPanel>
                    <TabPanel value="3" sx={{ padding: '35px 0' }}>
                        Item Three
                    </TabPanel>
                    <TabPanel value="4" sx={{ padding: '35px 0' }}>
                        Item 4
                    </TabPanel>
                    <TabPanel value="5" sx={{ padding: '35px 0' }}>
                        Item 5
                    </TabPanel>
                    <TabPanel value="6" sx={{ padding: '35px 0' }}>
                        Item 6
                    </TabPanel>
                </TabContext>
            </Box>
        </Box>
    )
}
