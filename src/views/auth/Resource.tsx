import { useState } from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'

import VBPageHeader from '../../components/VBPageHeader'
import Topic from '../../components/resources/Topic'

const TOPICS = [
    {
        label: 'All Topics',
        value: '1'
    },
    {
        label: 'Product',
        value: '2'
    },
    {
        label: 'Marketing',
        value: '3'
    },
    {
        label: 'Operations',
        value: '4'
    },
    {
        label: 'Legal',
        value: '5'
    },
    {
        label: 'Management',
        value: '6'
    }
]

const Resources = () => {
    const [value, setValue] = useState('1')

    const handleChange = (_: React.SyntheticEvent<Element, Event>, newValue: string) => {
        setValue(newValue)
    }

    return (
        <Box sx={{ padding: '20px' }}>
            <VBPageHeader
                title='Resources'
                subTitle='Discover resources for startup growth.'
                noHr={true}
            />
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList
                            onChange={handleChange}
                            aria-label='API resources tabs'
                            textColor='secondary'
                            indicatorColor='secondary'
                            sx={{ textTransform: 'none', display: 'flex', flexDirection: { md: 'row', xs: 'column' } }}
                        >
                            {TOPICS.map(({ label, value }) => (
                                <Tab label={label} value={value}
                                    sx={{
                                        textTransform: 'none',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        lineHeight: '20px'
                                    }}
                                />
                            ))}
                        </TabList>
                    </Box>
                    {TOPICS.map(({ label, value }) => (
                        <TabPanel value={value} sx={{ padding: '35px 0' }}>
                            <Topic topicLabel={label} />
                        </TabPanel>
                    ))}
                </TabContext>
            </Box>
        </Box>
    )
}

export default Resources