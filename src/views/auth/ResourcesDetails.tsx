import { Box, Button, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'

import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined'
import { useParams } from 'react-router-dom'
import { ResourceVideoType, resourceVideoData } from '../../utils/devUtils'
import VBBreadCrumb from '../../components/VBBreadCrumb'

const ResourcesDetails = () => {
    const [value, setValue] = useState('1')
    const { id } = useParams()
    const [resourceData, setresourceData] = useState<ResourceVideoType>()
    const [showFull, setShowFull] = useState(false)

    const toggleShowMore = () => {
        setShowFull(!showFull)
    }

    const handleChange = (_: React.SyntheticEvent<Element, Event>, newValue: string) => {
        setValue(newValue)
    }

    useEffect(() => {
        if (id) {
            const selected = resourceVideoData.filter(
                (resource) => resource.id === JSON.parse(id)
            )
            setresourceData(selected[0])
        }
    }, [id, resourceData])

    const breadCrumbs = [
        {
            name: 'Resource',
            link: '/app/resources',
        },
        {
            name: 'Video',
            link: '#',
        },
    ]

    return (
        <Box
            sx={{
                width: '100%',
                padding: '20px',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    columnGap: '20px',
                }}
            >
                <Box
                    sx={{
                        // width: "670px",
                        display: 'flex',
                        flexDirection: 'column',
                        rowGap: '20px',
                        justifyContent: 'flex-start',
                    }}
                >
                    {/* tO DO :: IMPLEMENT BREADCRUMB FUNCTIONALITY FOR BELOW */}

                    <VBBreadCrumb breadCrumbKey='resource-details' breadCrumbs={breadCrumbs} />

                    <Box
                        sx={{
                            backgroundImage: `url(${resourceData?.thumbnail})`,
                            backgroundSize: '100% 100%',
                            backgroundRepeat: 'no-repeat',
                            height: '468px',
                            borderRadius: '30px',
                            cursor:'pointer',
                        }}
                    ></Box>
                    <Box>
                        <Typography
                            sx={{
                                fontFamily: 'Inter',
                                fontWeight: 600,
                                fontSize: '18px',
                                lineHeight: '28px',
                                marginBottom: '4px',
                                color: 'rgba(16, 24, 40, 1)',
                                cursor: 'pointer',
                            }}
                        >
                            {resourceData?.name}
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', columnGap: '10px' }}>
                            <Box sx={{ cursor: 'pointer' }}>
                                <img src={resourceData?.authorImage} alt='resource-thumbnail' />
                            </Box>
                            <Box>
                                <Box>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Inter',
                                            fontWeight: 600,
                                            fontSize: '14px',
                                            lineHeight: '20px',
                                            color: 'rgba(52, 64, 84, 1)',
                                            cursor: 'pointer',
                                        }}
                                    >
                    Bailey Richards
                                        {resourceData?.author}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Inter',
                                            fontWeight: 400,
                                            fontSize: '14px',
                                            lineHeight: '20px',
                                            color: 'rgba(71, 84, 103, 1)',
                                            cursor: 'pointer',
                                        }}
                                    >
                    Entrepreneurship mentor
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', columnGap: '10px' }}>
                            <Button
                                sx={{
                                    border: '1px solid rgba(208, 213, 221, 1)',
                                    borderRadius: '8px',
                                    height: '40px',
                                    width: '100px',
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        columnGap: '10px',
                                    }}
                                >
                                    <ThumbUpOutlinedIcon /> 128
                                </Box>
                            </Button>
                            <Button
                                sx={{
                                    border: '1px solid rgba(208, 213, 221, 1)',
                                    borderRadius: '8px',
                                    height: '40px',
                                    width: '100px',
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        columnGap: '10px',
                                    }}
                                >
                                    <IosShareOutlinedIcon /> Share
                                </Box>
                            </Button>
                            <Button
                                sx={{
                                    border: '1px solid rgba(208, 213, 221, 1)',
                                    borderRadius: '8px',
                                    height: '40px',
                                    width: '100px',
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        columnGap: '10px',
                                    }}
                                >
                                    <BookmarkBorderOutlinedIcon /> Save
                                </Box>
                            </Button>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            background: 'rgba(249, 250, 251, 1)',
                            borderRadius: '10px',
                            padding: '20px',
                            rowGap: '10px',

                        }}
                    >
                        <Box>
                            <Box sx={{ display: 'flex' }}>
                                <Typography
                                    sx={{
                                        fontFamily: 'Inter',
                                        fontWeight: 500,
                                        fontSize: '16px',
                                        lineHeight: '20px',
                                        color: 'rgba(71, 84, 103, 1)',
                                    }}
                                >
                                    <span>{resourceData?.views} views</span> <span>•</span>{' '}
                                    <span>Aug 26, 2023</span>
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Typography
                                sx={{
                                    //   fontFamily: "Inter",
                                    fontWeight: 400,
                                    fontSize: '16px',
                                    lineHeight: '24px',
                                    color: 'rgba(71, 84, 103, 1)',
                                }}
                            >
                                {showFull
                                    ? resourceData?.details
                                    : resourceData?.details?.slice(0, 400)}

                                {resourceData?.details?.length! > 4 && (
                                    <span>
                                        {showFull ? (
                                            <Button onClick={toggleShowMore}>See Less</Button>
                                        ) : (
                                            <Button onClick={toggleShowMore}>
                                                {' '}
                                                <Box>
                                                    <Typography
                                                        sx={{
                                                            //   fontFamily: "Inter",
                                                            fontWeight: 600,
                                                            fontSize: '14px',
                                                            lineHeight: '20px',
                                                            color: 'rgba(71, 84, 103, 1)',
                                                        }}
                                                    >
                            ... more
                                                    </Typography>
                                                </Box>
                                            </Button>
                                        )}
                                    </span>
                                )}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: '430px' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList
                                onChange={handleChange}
                                aria-label='API resources tabs'
                                textColor='secondary'
                                indicatorColor='secondary'

                            >
                                <Tab label='All' value='1' sx={{textTransform: 'none'}}  />
                                <Tab label='Product' value='2' sx={{textTransform: 'none'}}  />
                                <Tab label='Marketing' value='3' sx={{textTransform: 'none'}}  />
                                <Tab label='Ops' value='4' sx={{textTransform: 'none'}}  />
                                <Tab label='Legal' value='5' sx={{textTransform: 'none'}}  />
                                <Tab label='Mgmt' value='6' sx={{textTransform: 'none'}}  />
                            </TabList>
                        </Box>
                        <TabPanel value='1' sx={{ p: 0 }}>
                            <Box sx={{ marginTop: '20px', height:'100vh', paddingBottom:'40px', overflowY: 'auto' }}>
                                {resourceVideoData
                                    ?.filter((res) => res.id !== JSON.parse(id!))
                                    ?.map((resource) => (
                                        <Box
                                            key={resource.id}
                                            sx={{
                                                display: 'flex',
                                                columnGap: '10px',
                                                marginBottom: '10px',
                                            }}
                                        >
                                            <Box>
                                                <Box
                                                    sx={{
                                                        borderRadius: '16px',
                                                        backgroundImage: `url(${resource.thumbnail})`,
                                                        backgroundSize: '100% 100%',
                                                        backgroundRepeat: 'no-repeat',
                                                        height: '117px',
                                                        width: '208px',


                                                    }}
                                                ></Box>
                                            </Box>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    rowGap: '15px',
                                                }}
                                            >
                                                <Box>
                                                    <Typography
                                                        sx={{
                                                            fontFamily: 'Inter',
                                                            fontWeight: 600,
                                                            fontSize: '14px',
                                                            lineHeight: '20px',
                                                            color: 'rgba(71, 84, 103, 1)',
                                                        }}
                                                    >
                            This is where the video title goes, up to two line{' '}
                                                    </Typography>
                                                </Box>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        rowGap: '4px',
                                                    }}
                                                >
                                                    <Box>
                                                        <Typography
                                                            sx={{
                                                                fontFamily: 'Inter',
                                                                fontWeight: 400,
                                                                fontSize: '16px',
                                                                lineHeight: '24px',
                                                                color: 'rgba(71, 84, 103, 1)',
                                                            }}
                                                        >
                                                            {resource.author}
                                                        </Typography>
                                                    </Box>
                                                    <Box sx={{ display: 'flex' }}>
                                                        <Box>
                                                            <Typography
                                                                sx={{
                                                                    fontFamily: 'Inter',
                                                                    fontWeight: 400,
                                                                    fontSize: '16px',
                                                                    lineHeight: '24px',
                                                                    color: 'rgba(71, 84, 103, 1)',
                                                                }}
                                                            >
                                                                <span>
                                                                    {' '}
                                                                    {resource.views} views • 4 days ago{' '}
                                                                </span>
                                                            </Typography>{' '}
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    ))}
                            </Box>
                        </TabPanel>
                        <TabPanel value='2'>Item Two</TabPanel>
                        <TabPanel value='3'>Item Three</TabPanel>
                        <TabPanel value='4'>Item 4</TabPanel>
                        <TabPanel value='5'>Item 5</TabPanel>
                        <TabPanel value='6'>Item 6</TabPanel>
                    </TabContext>
                </Box>
            </Box>
        </Box>
    )
}

export default ResourcesDetails