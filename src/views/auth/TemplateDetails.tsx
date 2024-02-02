import { Box, Button, Typography } from '@mui/material'
import { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'

import { ResourceTemplateType, resourceTemplateData } from '../../utils/devUtils'
import TemplateCard from '../../components/resources/TemplateCard'

import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined'
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import StarIcon from '@mui/icons-material/Star'
import StarHalfIcon from '@mui/icons-material/StarHalf'
import StarBorderIcon from '@mui/icons-material/StarBorder'

import MsIcon from '../../../assets/ms_word.png'
import GoogleIcon from '../../../assets/google.png'
import VBBreadCrumb from '../../components/VBBreadCrumb'

export default function TemplateDetails() {
    const [value, setValue] = useState('1')
    const { id } = useParams()
    const [resourceData, setresourceData] = useState<ResourceTemplateType | null>(null)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (newValue: any) => {
        setValue(newValue)
    }

    useEffect(() => {
        const selected = resourceTemplateData.filter(
            (resource) => resource.id === JSON.parse(id!)
        )
        setresourceData(selected[0])
    }, [id, resourceData])

    const breadCrumbs = [
        {
            name: 'Resource',
            link: '/app/resources',
        },
        {
            name: 'Templates',
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
                <Box sx={{ flex: '1.2' }}>
                    <VBBreadCrumb breadCrumbs={breadCrumbs} breadCrumbKey='template-details'/>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            rowGap: '14px',
                            marginTop: '20px',
                        }}
                    >
                        <Box>
                            <Typography
                                sx={{
                                    fontFamily: 'Inter',
                                    fontWeight: 600,
                                    fontSize: '30px',
                                    lineHeight: '36px',

                                    color: 'rgba(16, 24, 40, 1)',
                                    cursor: 'pointer',
                                }}
                            >
                                {resourceData && resourceData.name}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                columnGap: '9px',
                                // marginBottom: "10px",
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    //   columnGap: "2px",
                                    // marginBottom: "10px",
                                }}
                            >
                                <StarIcon
                                    sx={{
                                        color: 'rgba(253, 176, 34, 1)',
                                    }}
                                />
                                <StarIcon
                                    sx={{
                                        color: 'rgba(253, 176, 34, 1)',
                                    }}
                                />
                                <StarIcon
                                    sx={{
                                        color: 'rgba(253, 176, 34, 1)',
                                    }}
                                />
                                <StarHalfIcon
                                    sx={{
                                        color: 'rgba(253, 176, 34, 1)',
                                    }}
                                />
                                <StarBorderIcon
                                    sx={{
                                        color: 'rgba(253, 176, 34, 1)',
                                    }}
                                />
                            </Box>
                            <Box>
                                <Typography
                                    sx={{
                                        fontFamily: 'Inter',
                                        fontWeight: 400,
                                        fontSize: '16px',
                                        lineHeight: '24px',

                                        color: 'rgba(71, 84, 103, 1)',
                                        cursor: 'pointer',
                                    }}
                                >
                  (3.5 stars) • 10 ratings
                                </Typography>
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
                                        {resourceData?.type}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box>
                            {' '}
                            <Typography
                                sx={{
                                    fontFamily: 'Inter',
                                    fontWeight: 400,
                                    fontSize: '16px',
                                    lineHeight: '24px',

                                    color: 'rgba(71, 84, 103, 1)',
                                    cursor: 'pointer',
                                }}
                            >
                                {resourceData && resourceData.details}{' '}
                            </Typography>
                        </Box>
                        <Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    columnGap: '5px',
                                    marginBottom: '10px',
                                }}
                            >
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
                            <Box
                                sx={{
                                    display: 'flex',
                                    columnGap: '5px',
                                }}
                            >
                                <Button
                                    sx={{
                                        border: '1px solid rgba(208, 213, 221, 1)',
                                        borderRadius: '8px',
                                        height: '40px',
                                        width: '173px',
                                        textTransform: 'none',
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
                                        <img src={MsIcon} alt='ms-icon' />{' '}
                                        <ArrowDownwardOutlinedIcon /> Word
                                    </Box>
                                </Button>
                                <Button
                                    sx={{
                                        border: '1px solid rgba(208, 213, 221, 1)',
                                        borderRadius: '8px',
                                        height: '40px',
                                        width: '173px',
                                        textTransform: 'none',
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
                                        <img src={GoogleIcon} alt='google-icon' />{' '}
                                        <ArrowDownwardOutlinedIcon />
                                        <span
                                            style={{
                                                fontFamily: 'Inter',
                                                fontWeight: 800,
                                                fontSize: '14px',
                                                lineHeight: '20px',
                                                color: 'rgba(16, 24, 40, 1)',
                                                cursor: 'pointer',

                                            }}
                                        >
                      Google docs
                                        </span>
                                    </Box>
                                </Button>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                columnGap: '10px',
                                background: 'rgba(249, 250, 251, 1)',
                                padding: '20px',
                                rowGap: '10px',
                            }}
                        >
                            <Box>
                                <Typography
                                    sx={{
                                        fontFamily: 'Inter',
                                        fontWeight: 500,
                                        fontSize: '16px',
                                        lineHeight: '24px',

                                        color: 'rgba(16, 24, 40, 1)',
                                        cursor: 'pointer',
                                    }}
                                >
                  Care to rate this template?
                                </Typography>
                            </Box>
                            <Box>
                                <Typography
                                    sx={{
                                        fontFamily: 'Inter',
                                        fontWeight: 400,
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        marginBottom: '4px',
                                        color: 'rgba(71, 84, 103, 1)',
                                        cursor: 'pointer',
                                    }}
                                >
                  Your rating will help others.
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', columnGap: '5px' }}>
                                <StarBorderOutlinedIcon /> <StarBorderOutlinedIcon />{' '}
                                <StarBorderOutlinedIcon /> <StarBorderOutlinedIcon />
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        flex: '1.8',
                        display: 'flex',
                        flexDirection: 'column',
                        rowGap: '15px',
                    }}
                >
                    <Box
                        sx={{
                            backgroundImage: `url(${resourceData?.thumbnail})`,
                            backgroundSize: '100% 100%',
                            backgroundRepeat: 'no-repeat',
                            height: '400px',
                            borderRadius: '30px',
                            cursor: 'pointer',
                        }}
                    ></Box>
                    <Box
                        sx={{
                            display: 'flex',
                            rowGap: '20px',
                            columnGap: '8px',
                        }}
                    >
                        {resourceData?.templates?.map((template) => (
                            <Fragment key={template}>
                                <Box
                                    sx={{
                                        width: '110px',
                                        height: '96px',
                                        borderRadius: '12px',
                                        overflow: 'hidden',
                                        cursor: 'pointer',
                                    }}
                                >
                                    <img
                                        src={template}
                                        alt='resource-thumbnail'
                                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                    />
                                </Box>
                            </Fragment>
                        ))}{' '}
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    marginTop: '40px',
                }}
            >
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
            You may also like
                    </Typography>
                </Box>
                <Box>
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
                                    gap: '20px',
                                    marginTop: '20px',
                                    overflow: 'auto',
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                }}
                            >
                                {resourceTemplateData
                                    ?.filter((res) => res.id !== JSON.parse(id!))
                                    ?.map((template) => (
                                        <TemplateCard key={template.id} template={template} />
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
