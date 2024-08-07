import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'

import VBPageHeader from '../../components/VBPageHeader'
import { Search } from '@mui/icons-material'
import TextField from '@mui/material/TextField'
import { Button, Typography } from '@mui/material'
import ArticleResources from '../../components/resources/ArticleResource'
import TemplateResources from '../../components/resources/TemplateResources'
import VideoResources from '../../components/resources/VideoResources'
import { resourceArticleData, resourceTemplateData, resourceVideoData } from '../../utils/devUtils'

const contentTypes = ['Videos', 'Templates', 'Articles']
const TOPICS = ['All Topics', 'Product', 'Marketing', 'Operations', 'Legal', 'Management']

const Resources = () => {
    const [topic, setTopic] = useState('All Topics')
    const [contentType, setContentType] = useState('Videos')
    const [searchQuery, setSearchQuery] = useState('')
    const [filteredVideoData, setFilteredVideoData] = useState(resourceVideoData)
    const [filteredArticleData, setFilteredArticleData] = useState(resourceArticleData)
    const [filteredTemplateData, setFilteredTemplateData] = useState(resourceTemplateData)

    const handleChange = (_: React.SyntheticEvent<Element, Event>, newTopic: string) => {
        setTopic(newTopic)
    }

    const filterData = (topicLabel: string) => {
        setFilteredVideoData(
            resourceVideoData.filter(video =>
                (topicLabel === 'All Topics' || video.type.includes(topicLabel)) && video.name.includes(searchQuery)
            )
        )
        setFilteredArticleData(
            resourceArticleData.filter(article =>
                (topicLabel === 'All Topics' || article.type.includes(topicLabel)) && article.name.includes(searchQuery)
            )
        )
        setFilteredTemplateData(
            resourceTemplateData.filter(template =>
                (topicLabel === 'All Topics' || template.type.includes(topicLabel)) && template.name.includes(searchQuery)
            )
        )
    }

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value)
    }

    const handleSearchSubmit = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') filterData(topic)
    }

    useEffect(() => {
        filterData(topic)
    }, [topic, searchQuery])

    return (
        <Box sx={{ padding: '12px 32px 20px 32px' }}>
            <VBPageHeader
                title='Resources'
                subTitle='Discover resources for startup growth.'
                noHr={true}
            />
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={topic}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList
                            onChange={handleChange}
                            aria-label='API resources tabs'
                            textColor='secondary'
                            indicatorColor='secondary'
                            sx={{ textTransform: 'none', display: 'flex', flexDirection: { md: 'row', xs: 'column' } }}
                        >
                            {TOPICS.map((topicLabel) => (
                                <Tab label={topicLabel} value={topicLabel}
                                    sx={{
                                        textTransform: 'none',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                    }}
                                />
                            ))}
                        </TabList>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: '30px' }}>
                        <Box sx={{ display: 'flex', gap: '8px' }}>
                            {contentTypes.map((type) => (
                                <Button
                                    onClick={() => setContentType(type)}
                                    sx={{
                                        padding: '8px 12px 8px 12px',
                                        borderRadius: '6px',
                                        fontSize: '14px',
                                        fontWeight: 600,
                                        lineHeight: '20px',
                                        textTransform: 'none',
                                        color: contentType === type ? '#B54708' : '#667085',
                                        backgroundColor: contentType === type ? '#FFFAEB' : '#FFFFFF'
                                    }}
                                >
                                    {type}
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{ display: 'flex', width: { md: '360px', xs: '100%' } }}>
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
                                    onChange={handleSearchChange}
                                    onKeyUp={handleSearchSubmit}
                                />
                            </Box>
                        </Box>
                    </Box>

                    {TOPICS.map((topicLabel) => (
                        <TabPanel value={topicLabel} sx={{ padding: '30px 0' }}>
                            <Box>
                                {contentType === 'Videos' && (
                                    filteredVideoData.length === 0 ? (
                                        <Typography variant='body1' sx={{ marginTop: '20px', textAlign: 'center' }}>
                                            No videos were found.
                                        </Typography>
                                    ) : (
                                        <VideoResources resourceData={filteredVideoData} />
                                    )
                                )}
                                {contentType === 'Articles' && (
                                    filteredArticleData.length === 0 ? (
                                        <Typography variant='body1' sx={{ marginTop: '20px', textAlign: 'center' }}>
                                            No articles were found.
                                        </Typography>
                                    ) : (
                                        <ArticleResources resourceArticleData={filteredArticleData} />
                                    )
                                )}
                                {contentType === 'Templates' && (
                                    filteredTemplateData.length === 0 ? (
                                        <Typography variant='body1' sx={{ marginTop: '20px', textAlign: 'center' }}>
                                            No templates were found.
                                        </Typography>
                                    ) : (
                                        <TemplateResources resourceTemplateData={filteredTemplateData} />
                                    )
                                )}
                            </Box>
                        </TabPanel>
                    ))}
                </TabContext>
            </Box>
        </Box>
    )
}

export default Resources