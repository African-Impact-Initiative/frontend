import { Box } from '@mui/system'
import React from 'react'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import CompanyProfileSettings from '../../components/settings/CompanyProfileSettings'
import EmailNotificationSettings from '../../components/settings/EmailNotificationSettings'
import PasswordSettings from '../../components/settings/PasswordSettings'
import SettingsPersonalInfo from '../../components/settings/SettingsPersonalInfo'

const Settings = () => {
    const [value, setValue] = React.useState('1')

    const handleChange = (_: React.SyntheticEvent<Element, Event>, newValue: string) => {
        setValue(newValue)
    }

    return (
        <Box>
            <Box sx={{ padding: '20px', textAlign: 'start' }}>
                <Box sx={{ fontSize: '30px', fontWeight: '600', }}>
          Settings
                </Box>
            </Box>
            <Box sx={{ width: '100%', typography: 'body1', marginLeft: '10px'}}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList
                            onChange={handleChange}
                            aria-label='API resources tabs'
                            textColor='secondary'
                            indicatorColor='secondary'
                            TabIndicatorProps={{ sx: { display: 'none' } }}
                            sx={{
                                '& .MuiTabs-flexContainer': {
                                    flexWrap: 'wrap',
                                },
                            }}
                            style={{ minWidth: 50 }}
                        >
                            <Tab
                                label='Personal info'
                                value='1'
                                sx={{
                                    textTransform: 'none',
                                    fontSize: '14px',
                                    color: '#667085',
                                    fontWeight: '600'
                                }}
                            />
                            <Tab
                                label='Company profile'
                                value='2'
                                sx={{
                                    textTransform: 'none',
                                    fontSize: '14px',
                                    color: '#667085',
                                    fontWeight: '600'
                                }}
                            />
                            <Tab
                                label='Password'
                                value='3'
                                sx={{
                                    textTransform: 'none',
                                    fontSize: '14px',
                                    color: '#667085',
                                    fontWeight: '600'
                                }}
                            />

                            <Tab
                                label='Email Notification'
                                value='5'
                                sx={{
                                    textTransform: 'none',
                                    fontSize: '14px',
                                    color: '#667085',
                                    fontWeight: '600'
                                }}
                            />
                        </TabList>
                    </Box>
                    <TabPanel value='1' sx={{ padding: '35px 0' }}>
                        <SettingsPersonalInfo />
                    </TabPanel>
                    <TabPanel value='2' sx={{ padding: '35px 0' }}>
                        <CompanyProfileSettings />
                    </TabPanel>
                    <TabPanel value='3' sx={{ padding: '35px 0' }}>
                        <PasswordSettings />
                    </TabPanel>
                    <TabPanel value='4' sx={{ padding: '35px 0' }}>
                      uuuuu
                    </TabPanel>
                    <TabPanel value='5' sx={{ padding: '35px 0' }}>
                        <EmailNotificationSettings />
                    </TabPanel>
                </TabContext>
            </Box>
        </Box>
    )
}
export default Settings
