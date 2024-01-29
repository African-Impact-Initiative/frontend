import { useState } from 'react'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { Box } from '@mui/material'

import ArticleResources from './ArticleResource'
import VideoResources from './VideoResources'
import TemplateResources from './TemplateResources'
import { resourceArticleData, resourceTemplateData, resourceVideoData } from '../../utils/devUtils'

export default function AllTopics() {
    const [value, setValue] = useState('1')

    const handleChange = (_: React.SyntheticEvent<Element, Event>, newValue: string) => {
        setValue(newValue)
    }

    return (
        <Box>
            <TabContext value={value}  >
                <Box sx={{ borderBottom: 0, borderColor: 'divider' }} className="tab_component">
                    <TabList
                        onChange={handleChange}
                        aria-label="API resources tabs"
                        textColor="secondary"
                        indicatorColor="secondary"
                        className="tab_nav_com"
                    >
                        <Tab label="Video" value="1" />
                        <Tab label="Templates" value="2"   />
                        <Tab label="Article" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1" sx={{ padding:'35px 0'}}>
                    <VideoResources resourceData={resourceVideoData} />
                </TabPanel>
                <TabPanel value="2" sx={{ padding:'35px 0'}}>
                    <TemplateResources resourceTemplateData={resourceTemplateData} />
                </TabPanel>
                <TabPanel value="3" sx={{ padding:'35px 0'}}>
                    <ArticleResources resourceArticleData={resourceArticleData} />
                </TabPanel>
            </TabContext>
        </Box>
    )
}
