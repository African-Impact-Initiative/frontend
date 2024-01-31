import { Box, Button, Divider, Typography } from '@mui/material'
import { SyntheticEvent, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'

import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined'

import ArticleReader from '../../../assets/article_reader.png'
import { ResourceArticleType, resourceArticleData } from '../../utils/devUtils'
import VBBreadCrumb from '../../components/VBBreadCrumb'

const ArticleDetails = () => {
    const [value, setValue] = useState('1')
    const { id } = useParams()
    const [resourceData, setresourceData] = useState<ResourceArticleType | null>(null)

    const handleChange = (_: SyntheticEvent<Element, Event>, newValue: string) => {
        setValue(newValue)
    }

    useEffect(() => {
        const selected = resourceArticleData.find(resource => resource.id === JSON.parse(id!))
        setresourceData(selected!)
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
                        display: 'flex',
                        flexDirection: 'column',
                        rowGap: '20px',
                        justifyContent: 'flex-start',
                    }}
                >
                    <VBBreadCrumb breadCrumbs={breadCrumbs} breadCrumbKey='article-details' />
                    <Box sx={{ display: 'flex' }}>
                        <Box>
                            <Typography
                                sx={{
                                    fontFamily: 'Inter',
                                    fontWeight: 600,
                                    fontSize: '30px',
                                    lineHeight: '38px',
                                    color: 'rgba(16, 24, 40, 1)',
                                }}
                            >
                10 things a startup funder should keep in mind
                            </Typography>
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
                    <Divider />

                    <Box>
                        <Typography
                            sx={{
                                fontFamily: 'Inter',
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '28px',
                                color: 'rgba(16, 24, 40, 1)',
                            }}
                        >
                            <Typography>
                Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
                suspendisse morbi eleifend faucibus eget vestibulum felis.
                Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam.
                Mauris posuere vulputate arcu amet, vitae nisi, tellus
                tincidunt. At feugiat sapien varius id. Eget quis mi enim, leo
                lacinia pharetra, semper.
                            </Typography>
                            <Typography>
                Eget in volutpat mollis at volutpat lectus velit, sed auctor.
                Porttitor fames arcu quis fusce augue enim. Quis at habitant
                diam at. Suscipit tristique risus, at donec. In turpis vel et
                quam imperdiet. Ipsum molestie aliquet sodales id est ac
                volutpat.
                            </Typography>
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                fontFamily: 'Inter',
                                fontWeight: 500,
                                fontSize: '24px',
                                lineHeight: '36px',
                                color: 'rgba(16, 24, 40, 1)',
                                fontStyle: 'italic',
                                borderLeft: '3px solid rgba(181, 71, 8, 1)',
                                paddingLeft: '20px',
                            }}
                        >
              “Porttitor fames arcu quis fusce augue enim. Quis at habitant diam
              at. Suscipit tristique risus, at donec.”
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                fontFamily: 'Inter',
                                fontWeight: 400,
                                fontSize: '18px',
                                lineHeight: '28px',
                                color: 'rgba(16, 24, 40, 1)',
                            }}
                        >
              Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet
              commodo consectetur convallis risus. Sed condimentum enim
              dignissim adipiscing faucibus consequat, urna. Viverra purus et
              erat auctor aliquam. Risus, volutpat vulputate posuere purus sit
              congue convallis aliquet. Arcu id augue ut feugiat donec porttitor
              neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem
              id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            borderRadius: '16px',
                            backgroundImage: `url(${ArticleReader})`,
                            backgroundSize: '100% 100%',
                            backgroundRepeat: 'no-repeat',
                            height: '480px',
                        }}
                    ></Box>
                    <Box>
                        <Box>
                            <Typography
                                sx={{
                                    fontFamily: 'Inter',
                                    fontWeight: 600,
                                    fontSize: '24px',
                                    lineHeight: '32px',
                                    color: 'rgba(16, 24, 40, 1)',
                                }}
                            >
                Conclusion
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                sx={{
                                    fontFamily: 'Inter',
                                    fontWeight: 400,
                                    fontSize: '18px',
                                    lineHeight: '28px',
                                    color: 'rgba(16, 24, 40, 1)',
                                }}
                            >
                                <p>
                  Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
                  suspendisse morbi eleifend faucibus eget vestibulum felis.
                  Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam.
                  Mauris posuere vulputate arcu amet, vitae nisi, tellus
                  tincidunt. At feugiat sapien varius id.
                                </p>
                                <p>
                  Eget quis mi enim, leo lacinia pharetra, semper. Eget in
                  volutpat mollis at volutpat lectus velit, sed auctor.
                  Porttitor fames arcu quis fusce augue enim. Quis at habitant
                  diam at. Suscipit tristique risus, at donec. In turpis vel et
                  quam imperdiet. Ipsum molestie aliquet sodales id est ac
                  volutpat.
                                </p>
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', columnGap: '10px' }}>
                            <Box>
                                <img src={resourceData?.authorImage} alt='author' />
                            </Box>
                            <Box>
                                <Box>

                                    <Typography
                                        sx={{
                                            fontFamily: 'Inter',
                                            fontWeight: 600,
                                            fontSize: '14px',
                                            lineHeight: '20px',
                                            color: 'rgba(16, 24, 40, 1)',
                                        }}
                                    >
                    Andre Mitchell
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
                                        }}
                                    >
                    Content Writer
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box>
                            <Box
                                sx={{
                                    border: '1px solid rgba(185, 230, 254, 1)',
                                    width: '108px',
                                    height: '24px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: '100px',
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: 'rgba(2, 106, 162, 1)',
                                        fontWeight: '500',
                                        fontSize: '14px',
                                    }}
                                >
                  Management
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: '420px' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList
                                onChange={handleChange}
                                aria-label='API resources tabs'
                                textColor='secondary'
                                indicatorColor='secondary'
                            >
                                <Tab label='All' value='1' />
                                <Tab label='Product' value='2' />
                                <Tab label='Marketing' value='3' />
                                <Tab label='Ops' value='4' />
                                <Tab label='Legal' value='5' />
                                <Tab label='Mgmt' value='6' />
                            </TabList>
                        </Box>
                        <TabPanel value='1' sx={{ p: 0 }}>
                            <Box
                                sx={{
                                    marginTop: '20px',
                                    height: '100vh',
                                    paddingBottom: '40px',
                                    overflowY: 'auto',
                                }}
                            >
                                {resourceArticleData
                                    ?.filter((res) => res.id !== JSON.parse(id!))
                                    ?.map((resource) => (
                                        <Box
                                            key={resource.id}
                                            sx={{
                                                display: 'flex',
                                                columnGap: '10px',
                                                marginBottom: '10px',
                                                cursor: 'pointer',
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
                                                    rowGap: '8px',
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
                                                        {resource.name}
                                                    </Typography>
                                                </Box>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        // rowGap: "4px",
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
                                                                10 views • 4 days ago
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box
                                                        sx={{
                                                            border: '1px solid rgba(185, 230, 254, 1)',
                                                            width: '108px',
                                                            height: '24px',
                                                            display: 'flex',
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            borderRadius: '100px',
                                                        }}
                                                    >
                                                        <Typography
                                                            sx={{
                                                                color: 'rgba(2, 106, 162, 1)',
                                                                fontWeight: '500',
                                                                fontSize: '14px',
                                                            }}
                                                        >
                                                            {resource.type}
                                                        </Typography>
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

export default ArticleDetails