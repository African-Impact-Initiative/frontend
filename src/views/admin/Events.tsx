import { Box, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'

import { SearchOutlined } from '@mui/icons-material'
import CreateMeeting from '../../components/events/CreateMeeting'
import VBTopBanner from '../../components/VBTopBanner'
import VBCohortBox from '../../components/VBCohortBox'
import VBWeeklyView from '../../components/VBWeeklyView'
import { eventsData } from '../../utils/devUtils'
import VBAppModal from '../../components/VBAppModal'
import VBCalendar from '../../components/VBCalender'

const Events = () => {
    const [value, setValue] = useState('2')

    const [openUpload, setOpenUpload] = useState(false)
    const handleOpenUpload = () => setOpenUpload(true)
    const handleCloseUpload = () => setOpenUpload(false)

    const handleChange = (_event: React.SyntheticEvent<Element, Event>, newValue: string) => {
        setValue(newValue)
    }

    const uploadAction = () => {
        handleOpenUpload()
    }

    const allCohorts = [
        {
            id: 1,
            name: 'All Venture Build',
            color: '#7F56D9',
            bgColor: '#F9F5FF',
        },
        {
            id: 2,
            name: 'All African Impact Initiative',
            color: '#93370D',
            bgColor: '#FFFAEB',
        },
        {
            id: 3,
            name: 'All Challenge 2023',
            color: '#065986',
            bgColor: '#F0F9FF',
        },
        {
            id: 5,
            name: 'All Challenge HENT 2023',
            color: '#095C37',
            bgColor: '#EDFCF2',
        },
        {
            id: 6,
            name: 'All Challenge sector agnostic',
            color: '#344054',
            bgColor: '#FFF',
        },
    ]

    return (
        <Box>
            <VBAppModal open={openUpload} handleClose={handleCloseUpload}>
                <CreateMeeting
                    open={openUpload}
                    handleClose={handleCloseUpload}
                    action={() => {
                        handleCloseUpload()
                    }}
                />
            </VBAppModal>
            <VBTopBanner
                title={'Events'}
                description="Create and manage events here."
                action={uploadAction}
                actionText="Add new Event"
            />
            <Box
                sx={{
                    display: 'flex',
                    columnGap: '25px',
                    width: '100%',
                    flexDirection: {md: 'row', xs: 'column'}
                }}
            >
                <Box
                    sx={{
                        width: {md:'328px', xs:'100%'},
                        display: 'flex',
                        flexDirection: 'column',
                        flex: '1',
                    }}
                >
                    <VBCalendar />
                    <Box sx={{ textAlign: 'start' , }}>
                        <Typography
                            sx={{
                                fontWeight: 600,
                                fontSize: '14px',
                                lineHeight: '20px',
                                color: 'rgba(52, 64, 84, 1)',
                                marginTop: '32px',
                                marginBottom: '20px',
                            }}
                        >
                            Select cohorts
                        </Typography>

                        {allCohorts?.map((cohort) => (
                            <VBCohortBox
                                key={cohort.id}
                                color={cohort.color}
                                bgColor={cohort.bgColor}
                                text={cohort.name}
                            />
                        ))}
                    </Box>
                </Box>
                <Box
                    sx={{
                        flex: '2',
                        width: '100%',
                        overflowX: 'auto',
                        padding: '10px'
                    }}
                >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: {md:'center' , xs: 'start'}, flexDirection: {md: 'row', xs: 'column'}, width: '100%'}}>
                        <Box sx={{fontSize: '16px', fontWeight: '600', lineHeight: '24px', }}>Oct 22 - Oct 28</Box>
                        <TabContext value={value} >
                            <Box
                                sx={{ borderBottom: 0,
                                    borderColor: 'divider',
                                    marginTop: {xs: '10px', md: '0px'},
                                    marginBottom: {xs: '10px', md: '0px'}
                                }}
                                className="tab_component"
                            >
                                <TabList
                                    onChange={handleChange}
                                    aria-label="API resources tabs"
                                    textColor="secondary"
                                    indicatorColor="secondary"
                                    // className={classes.customTab}
                                    className="tab_nav_com"
                                    centered
                                >
                                    <Tab
                                        sx={{ textTransform: 'none' }}
                                        label="Day"
                                        value="1"
                                        className="tab_nav_com"
                                    />
                                    <Tab
                                        sx={{ textTransform: 'none' }}
                                        label="Week"
                                        value="2"
                                        className="tab_nav_com"
                                    />
                                    <Tab
                                        sx={{ textTransform: 'none' }}
                                        label="Month"
                                        value="3"
                                        className="tab_nav_com"
                                    />
                                </TabList>
                            </Box>
                        </TabContext>
                        <Box
                            sx={{
                                display: 'flex',
                                border: '1px solid #ccc',
                                borderRadius: '8px',
                                height: '44px',
                                alignItems: 'center',
                                justifyContent: 'center',
                                columnGap: '10px',
                                padding: '10px 14px 10px 14px',
                            }}
                        >

                            <SearchOutlined
                                style={{
                                    color: 'color2',
                                }}
                            />

                            <TextField
                                placeholder="Search"
                                sx={{
                                    border: 'none',
                                    outline: 'none',
                                    borderBottom: '0px',
                                    background: `${'#FFF'}`,
                                    color: '#0000',
                                    '::placeholder': {
                                        color: 'red',
                                    },
                                }}
                            />
                        </Box>
                    </Box>

                    <TabContext value={value}>
                        <TabPanel value="1" sx={{ padding: '35px 0' }}>
                            <VBWeeklyView events={eventsData} />
                        </TabPanel>
                        <TabPanel value="2" sx={{ padding: '35px 0' }}>
                            <VBWeeklyView events={eventsData} />
                        </TabPanel>
                        <TabPanel value="3" sx={{ padding: '35px 0' }}></TabPanel>
                    </TabContext>
                </Box>
            </Box>
        </Box>
    )
}

export default Events