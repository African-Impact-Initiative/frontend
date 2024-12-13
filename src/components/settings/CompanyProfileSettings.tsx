import {
    Button,
    Divider,
    InputBase,
    Paper,
    Typography
} from '@mui/material'
import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import Organization from '../../types/organization'
import { updateOrganization } from '../../store/userOrganizationReducer'

const CompanyProfileSettings = () => {
    const dispatch = useAppDispatch()

    const org = useAppSelector((state) => state.userOrganization)

    const [companyName, setCompanyName] = useState('')
    const [website, setWebsite] = useState('')

    useEffect(() => {
        if (org.data) {
            setCompanyName(org.data.name || '')
            setWebsite(org.data.website || '')
        }
    }, [org])

    const handleSubmit = () => {
        const updateOrg = {
            name: companyName,
            website
        }
        if (org.data && org.data.id) 
            dispatch(updateOrganization(org.data.id, updateOrg as Organization))
        
    }

    return (
        <Box>
            <Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: { xs: '0px', md: '20px' },
                        flexDirection: { xs: 'column', md: 'row' }

                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography
                            sx={{
                                color: '#101828',
                                fontWeight: '600',
                                fontSize: '18px',
                                lineHeight: '28px',
                                textAlign: 'left'
                            }}
                        >
                            Company profile
                        </Typography>
                        <Typography
                            sx={{
                                color: '#475467',
                                fontWeight: '400',
                                fontSize: { md: '14px', xs: '10px' },
                                lineHeight: '20px',
                                textAlign: { md: 'left', xs: 'left' }

                            }}
                        >
                            Update your company details here.
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', columnGap: '20px', width: '60%', justifyContent: { xs: 'center', md: 'flex-end' }, marginTop: {xs: '10px'} ,  marginBottom: {xs: '20px'}}}>
                        <Button
                            size='large'
                            variant='outlined'
                            sx={{
                                border: '1px solid #D0D5DD',
                                borderRadius: '8px',
                                color: '#344054',
                                lineHeight: '20px',
                                fontSize: '14px',
                                fontWeight: '600',
                                height: '40px',
                                width: { xs: '100%', md: 80 },
                                textTransform: 'none',
                            }}
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={handleSubmit}
                            type='submit'
                            variant='contained'
                            sx={{
                                color: '#FFFFFF',
                                backgroundColor: '#DC6803',
                                borderRadius: '8px',
                                fontWeight: '600',
                                lineHeight: '20px',
                                height: '40px',
                                width: { xs: '100%', md: 80 },
                                textTransform: 'none',
                                fontSize: '14px'
                            }}
                        >
                            Save
                        </Button>
                    </Box>
                </Box>
                <Divider />
                <Box
                    sx={{
                        display: 'flex',
                        padding: { xs: '0px', md: '20px' },
                        flexDirection: { xs: 'column', md: 'row' },
                        width: { md: '75.5%', xs: '100%' },
                        justifyContent: { xs: 'flex-start', md: 'space-between' },

                    }}
                >
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: { xs: 'left' },
                        marginTop: { xs: '20px' }
                    }}>
                        <Typography
                            sx={{
                                color: '#344054',
                                fontWeight: '600',
                                fontSize: '14px',
                                lineHeight: '20px',
                                textAlign: 'left',
                                mb: 1
                            }}
                        >
                            Company name
                        </Typography>
                        <Typography
                            sx={{
                                color: '#475467',
                                fontWeight: '400',
                                fontSize: '14px',
                                lineHeight: '20px',
                                mb: 3
                            }}
                        >
                            Choose a name for your company.
                        </Typography>
                        <Typography
                            sx={{
                                color: '#344054',
                                fontWeight: '600',
                                fontSize: '14px',
                                lineHeight: '20px',
                                textAlign: 'left',
                                mb: 1
                            }}
                        >
                            Company website
                        </Typography>
                        <Typography
                            sx={{
                                color: '#475467',
                                fontWeight: '400',
                                fontSize: '14px',
                                lineHeight: '20px',
                                mb: 3
                            }}
                        >
                            Enter your company's website URL.
                        </Typography>
                    </Box>
                    <Box
                    >
                        <Box
                            sx={{
                                width: '100%',
                                marginTop: '12px',
                                display: 'flex',
                                rowGap: '20px',
                                flexDirection: { xs: 'column', md: 'column' },
                            }}
                        >
                            
                            <Paper
                                component='form'
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    width: { xs: '100%', md: 512 },
                                    height: 44,
                                    borderRadius: 2,
                                    boxShadow: 0,
                                    border: '1px solid #D0D5DD',
                                    mb: 3
                                }}
                            >
                                <InputBase
                                    sx={{ ml: 2, flex: 1, fontSize: 16 }}
                                    placeholder={companyName}
                                    inputProps={{ 'aria-label': 'company size' }}
                                    onChange={(e) => setCompanyName(e.target.value)}
                                />
                            </Paper>
                            
                            <Paper
                                component='form'
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    width: { xs: '100%', md: 512 },
                                    height: 44,
                                    borderRadius: 2,
                                    boxShadow: 0,
                                    border: '1px solid #D0D5DD'
                                }}
                            >
                                {/* <IconButton sx={{ p: '10px' }} aria-label="menu">
                                    <HelpOutlineOutlined sx={{ color: '#98A2B3' }} />
                                </IconButton> */}
                                {/* <Typography
                                    sx={{
                                        padding: '10px',
                                        color: '#667085',
                                        fontSize: '16px',
                                    }}
                                >
                                   Venturebuild.com/profile/
                                </Typography>
                                <Divider
                                    sx={{ ml: 2, height: 45, m: 0.5 }}
                                    orientation='vertical'
                                /> */}
                                <InputBase
                                    sx={{ ml: 2, flex: 1, fontSize: 16 }}
                                    placeholder={website}
                                    onChange={(e) => setWebsite(e.target.value)}
                                />
                            </Paper>
                        </Box>
                        <Box sx={{ marginTop: '12px' }}></Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default CompanyProfileSettings
