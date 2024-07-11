import { useState } from 'react'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { Box, TextField, Typography } from '@mui/material'
import { Search } from '@mui/icons-material'

import ArticleResources from './ArticleResource'
import VideoResources from './VideoResources'
import TemplateResources from './TemplateResources'
import { resourceArticleData, resourceTemplateData, resourceVideoData } from '../../utils/devUtils'

const Topic = ({ topicLabel }: { topicLabel: string }) => {
    const [value, setValue] = useState('1')

    const handleChange = (_: React.SyntheticEvent<Element, Event>, newValue: string) => {
        setValue(newValue)
    }

    // filter for videos as well but they do not have a type.
    // also should be checking for equality in label but i don't think labels will overlap (no conflict)
    const filteredVideoData = resourceVideoData
    const filteredArticleData = topicLabel == 'All Topics' ? resourceArticleData : resourceArticleData.filter(article => article.type.includes(topicLabel))
    const filteredTemplateData = topicLabel == 'All Topics' ? resourceTemplateData : resourceTemplateData.filter(template => template.type.includes(topicLabel))

    return (
        <Box>
            <TabContext value={value}  >
                <Box 
                    sx={{ borderBottom: 0, borderColor: 'divider', display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: { xs: 'flex-start', md: 'space-between' },
                        alignItems: 'flex-start',
                        rowGap: '10px'
                    }}
                    className='tab_component'
                >
                    <TabList
                        onChange={handleChange}
                        aria-label='API resources tabs'
                        textColor='secondary'
                        indicatorColor='secondary'
                        className='tab_nav_com'
                        sx={{  }}
                    >
                        <Tab label='Video' value='1' />
                        <Tab label='Templates' value='2' />
                        <Tab label='Article' value='3' />
                    </TabList>
                    <Box 
                        sx={{ 
                            width: { md: '360px', xs: '100%' },
                            display: 'flex',
                        }} 
                    >
                        <Box
                            sx={{
                                width: '100%',
                                maxWidth: '360px', 
                                height: '40px',
                                borderRadius: '4px',
                                border: '1px solid #D0D5DD',
                                display: 'flex',
                                padding: '10px',
                                columnGap: '10px',
                                alignItems: 'center',
                            }}
                        >
                            <Search sx={{ color: '#667085', height: '26px', width: '26px' }} />
                            <TextField
                                sx={{
                                    '& fieldset': { border: 'none' },
                                    width: '400px',
                                }}
                                label='Search'
                            />
                        </Box>
                    </Box>
                </Box>
                <TabPanel value='1' sx={{ padding: '35px 0' }}>
                    {filteredVideoData.length === 0 ? (
                        <Typography variant='body1' sx={{ marginTop: '20px', textAlign: 'center' }}>
                            No videos were found.
                        </Typography>
                    ) : (
                        <VideoResources resourceData={filteredVideoData} />
                    )}
                </TabPanel>
                <TabPanel value='2' sx={{ padding: '35px 0' }}>
                    {filteredTemplateData.length === 0 ? (
                        <Typography variant='body1' sx={{ marginTop: '20px', textAlign: 'center' }}>
                            No templates were found.
                        </Typography>
                    ) : (
                        <TemplateResources resourceTemplateData={filteredTemplateData} />
                    )}
                </TabPanel>
                <TabPanel value='3' sx={{ padding: '35px 0' }}>
                    {filteredArticleData.length === 0 ? (
                        <Typography variant='body1' sx={{ marginTop: '20px', textAlign: 'center' }}>
                            No articles were found.
                        </Typography>
                    ) : (
                        <ArticleResources resourceArticleData={filteredArticleData} />
                    )}
                </TabPanel>
            </TabContext>
            
        </Box>
    )
}

export default Topic