import { AddOutlined, ClearOutlined, EditOutlined, FacebookOutlined, Instagram, LinkedIn, Search, Twitter } from '@mui/icons-material'
import { Button, Divider, IconButton, InputBase, MenuItem, Modal, Paper, Switch, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { FC } from 'react'
import PathConstants from '../../navigation/pathConstants'
import { useNavigate } from 'react-router-dom'
import EditLogoModal from '../companyEdit/EditLogoModal'
import AddLeadershipModal from '../companyEdit/AddLeadershipModal'
import AddJobModal from '../companyEdit/AddJobModal'
import { countryList } from '../../utils/countries'
import User from '../../types/user'
import personLogo from '../../assets/personLogo.png'

const sizeList = [
    { label: '1-10', value: '1-10' },
    { label: '11-50', value: '11-50' },
    { label: '51-200', value: '51-200' },
    { label: '201-500', value: '201-500' },
    { label: '501-1,000', value: '501-1,000' },
    { label: '1,001-5,000', value: '1,001-5,000' },
    { label: '5,001-10,000', value: '5,001-10,000' },
    { label: '10,001+', value: '10,001+' },
]

export type PrivateEditPublicProfileViewType = {
    name: string,
    logo: string,
    tagline: string,
    aboutUs: string,
    country: string,
    size: string,
    website: string,
    email: string,
    linkedin: string,
    twitter: string,
    facebook: string,
    instagram: string,
    leadership: Array<User>,
    industries: Array<string>,
    logoModal: boolean,
    leadershipModal: boolean,
    jobModal: boolean,
    setLogo: React.Dispatch<React.SetStateAction<string>>
    setTagline: React.Dispatch<React.SetStateAction<string>>
    setAboutUs: React.Dispatch<React.SetStateAction<string>>
    setCountry: React.Dispatch<React.SetStateAction<string>>
    setSize: React.Dispatch<React.SetStateAction<string>>
    setWebsite: React.Dispatch<React.SetStateAction<string>>
    setEmail: React.Dispatch<React.SetStateAction<string>>
    setLinkedin: React.Dispatch<React.SetStateAction<string>>
    setTwitter: React.Dispatch<React.SetStateAction<string>>
    setFacebook: React.Dispatch<React.SetStateAction<string>>
    setInstagram: React.Dispatch<React.SetStateAction<string>>
    setLeadership: React.Dispatch<React.SetStateAction<Array<User>>>
    setIndustries: React.Dispatch<React.SetStateAction<Array<string>>>
    setLogoModal: React.Dispatch<React.SetStateAction<boolean>>
    setLeadershipModal: React.Dispatch<React.SetStateAction<boolean>>
    setJobModal: React.Dispatch<React.SetStateAction<boolean>>
    toggleView: () => void;
    handleSubmit: () => void;
}

const PrivateEditPublicProfileView: FC<PrivateEditPublicProfileViewType> = (prop) => {
    const navigate = useNavigate()

    const {
        name,
        logo,
        tagline,
        aboutUs,
        country,
        size,
        website,
        email,
        linkedin,
        twitter,
        facebook,
        instagram,
        leadership,
        industries,
        logoModal,
        leadershipModal,
        jobModal,
        setTagline,
        setAboutUs,
        setCountry,
        setSize,
        setWebsite,
        setEmail,
        setLinkedin,
        setTwitter,
        setFacebook,
        setInstagram,
        setLogoModal,
        setLeadershipModal,
        setJobModal,
        toggleView,
        handleSubmit
    } = prop

    return (
        <Box>
            <Modal
                open={logoModal}
                aria-labelledby='modal-title'
                aria-describedby='modal-description'
                onClose={() => {
                    setLogoModal(false)
                }}
            >
                <EditLogoModal setLogoModal={setLogoModal} />
            </Modal>
            <Modal
                open={leadershipModal}
                aria-labelledby='modal-title'
                aria-describedby='modal-description'
                onClose={() => {
                    setLeadershipModal(false)
                }}
            >
                <AddLeadershipModal />
            </Modal>
            <Modal
                open={jobModal}
                aria-labelledby='modal-title'
                aria-describedby='modal-description'
                onClose={() => {
                    setJobModal(false)
                }}
            >
                <AddJobModal />
            </Modal>

            <Box
                sx={{
                    backgroundColor: '#EAECF0',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: '240px',
                    width: '100%',
                }}
            />

            <Box
                sx={{
                    height: { md: '185px', xs: '100%' },
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '-50px',
                    padding: '20px',
                    flexDirection: { md: 'row', xs: 'column' },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '24px',
                        flexDirection: { md: 'row', xs: 'column' },
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            position: 'relative',
                            borderRadius: '100px',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                height: '160px',
                                width: '160px',
                                border: '4px solid #FFFFFF',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '100%',
                                backgroundColor: '#EAECF0',
                            }}
                            onClick={() => {
                                setLogoModal(true)
                            }}
                        >
                            {
                                !logo && <Typography
                                    sx={{
                                        color: '#475467',
                                        fontWeight: '600',
                                        lineHeight: '72px',
                                        fontSize: '60px',
                                    }}
                                >
                                    {name.charAt(0).toLocaleUpperCase()}
                                </Typography>
                            }
                            {
                                logo && <img
                                    src={logo}
                                    alt='logo'
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            }
                        </Box>
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                fontSize: '30px',
                                fontWeight: '600',
                                lineHeight: '38px',
                                color: '#101828',
                            }}
                        >
                            {name}
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#344054',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            columnGap: '10px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: { xs: 'start' },
                            width: '100%',
                        }}
                    >
                        <Switch
                            checked={false}
                            onChange={toggleView}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                        <Typography
                            sx={{
                                color: '#344054',
                                fontWeight: '500',
                                lineHeight: '24px',
                                fontSize: '16px',
                            }}
                        >
                            Switch to public view
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            columnGap: '20px',
                            justifyContent: 'flex-end',
                            padding: '40px',
                        }}
                    >
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
                                width: { md: '80px', xs: '100%' },
                                textTransform: 'none',
                            }}
                            onClick={() => {
                                navigate(PathConstants.dashboard)
                            }}
                        >
                            Cancel
                        </Button>
                        <Button
                            type='submit'
                            variant='contained'
                            sx={{
                                color: '#FFFFFF',
                                backgroundColor: '#DC6803',
                                borderRadius: '8px',
                                fontWeight: '600',
                                lineHeight: '20px',
                                height: '40px',
                                width: { md: '127px', xs: '100%' },
                                textTransform: 'none',
                                fontSize: '14px',
                            }}
                            onClick={handleSubmit}
                        >
                            Save changes
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    padding: '40px',
                    display: 'flex',
                    columnGap: '40px',
                    flexDirection: { md: 'row', xs: 'column' },
                    width: '100%',
                    height: '100%',
                }}
            >
                <Box sx={{ width: { md: '68%', xs: '100%' } }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'start',
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: '18px',
                                fontWeight: '600',
                                fontHeight: '28px',
                                color: '#101828',
                            }}
                        >
                            Overview
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '14px',
                                fontWeight: '400',
                                fontHeight: '20px',
                                color: '#475467',
                                marginTop: '4px',
                            }}
                        >
                            Tell viewers more about your company.
                        </Typography>
                    </Box>
                    <Divider sx={{ marginTop: '20px' }} />
                    <Box>
                        <Box
                            sx={{
                                marginTop: '32px',
                                display: 'flex',
                                columnGap: '6px'
                            }}
                        >
                            <Typography
                                sx={{
                                    color: '#344054',
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    lineHeight: '20px',
                                }}
                            >
                                Tagline
                            </Typography>
                            <Typography sx={{ color: '#F04438' }}>*</Typography>
                        </Box>
                        <Box sx={{ marginTop: '10px' }}>
                            <textarea
                                style={{
                                    width: '100%',
                                    border: '1px solid rgba(208, 213, 221, 1)',
                                    borderRadius: '8px',
                                    padding: '20px',
                                    fontSize: '16px',
                                    lineHeight: '24px',
                                    fontWeight: '400',
                                    fontFamily: 'inter',
                                    resize: 'none',
                                }}
                                value={tagline}
                                placeholder='A quick snapshot of your company.'
                                rows={1}
                                onChange={(e) => setTagline(e.target.value)}
                            />
                        </Box>
                    </Box>
                    <Box>
                        <Box
                            sx={{
                                marginTop: '40px',
                                display: 'flex',
                                columnGap: '6px'
                            }}
                        >
                            <Typography
                                sx={{
                                    color: '#344054',
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    lineHeight: '20px'
                                }}
                            >
                                About
                            </Typography>
                            <Typography sx={{ color: '#F04438' }}>*</Typography>
                        </Box>
                        <Box sx={{ marginTop: '10px' }}>
                            <textarea
                                style={{
                                    width: '100%',
                                    border: '1px solid rgba(208, 213, 221, 1)',
                                    borderRadius: '8px',
                                    padding: '20px',
                                    fontSize: '16px',
                                    lineHeight: '24px',
                                    fontWeight: '400',
                                    fontFamily: 'inter',
                                    resize: 'none'
                                }}
                                value={aboutUs}
                                placeholder='Talk about your company’s values, mission, and vision.'
                                rows={5}
                                onChange={(e) => setAboutUs(e.target.value)}
                            />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginTop: '60px',
                            textAlign: 'start'
                        }}
                    >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography
                                sx={{
                                    fontSize: '18px',
                                    fontWeight: '600',
                                    linetHeight: '28px',
                                    color: '#101828'
                                }}
                            >
                                Leadership
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    columnGap: '30px',
                                    color: '#475467'
                                }}
                            >
                                <AddOutlined
                                    style={{width: '20px', height: '20px'}}
                                    onClick={() => {
                                        setLeadershipModal(true)
                                    }}
                                />
                                <EditOutlined />
                            </Box>
                        </Box>
                        <Typography
                            sx={{
                                fontSize: '14px',
                                fontWeight: '400',
                                lineHeight: '20px',
                                color: '#475467',
                                marginTop: '4px'
                            }}
                        >
                            Show leadership of your company.
                        </Typography>
                    </Box>
                    <Divider sx={{ marginTop: '20px' }} />
                    <Box
                        sx={{
                            display: 'flex',
                            marginTop: '32px',
                            flexDirection: { md: 'row', xs: 'column' },
                            width: '80%',
                            justifyContent: 'space-between'
                        }}
                    >
                        {
                            leadership.map((leader, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        columnGap: '12px'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: '50px',
                                            height: '50px',
                                            overflow: 'hidden',
                                            borderRadius: '50%',
                                            border: '1px solid #D3D3D3',
                                        }}
                                    >
                                        <img
                                            style={{
                                                display:'block',
                                                width:'100%',
                                                height:'100%',
                                                objectFit: 'cover',
                                            }}
                                            src={leader.photo ?? personLogo}
                                            alt='headshot'
                                        />
                                    </Box>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        textAlign: 'start' }}>
                                        <Typography
                                            sx={{
                                                color: '#344054',
                                                fontWeight: '600',
                                                fontSize: '14px',
                                                lineHeight: '20px'
                                            }}
                                        >
                                            { leader.firstName + ' ' + leader.lastName }
                                        </Typography>
                                        <Typography
                                            sx={{
                                                color: '#475467',
                                                fontWeight: '400',
                                                lineHeight: '20px',
                                                fontSize: '14px'
                                            }}
                                        >
                                            { leader.role }
                                        </Typography>
                                    </Box>
                                </Box>
                            ))
                        }
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginTop: '60px' ,
                            textAlign: 'start'
                        }}
                    >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography
                                sx={{
                                    fontSize: '18px',
                                    fontWeight: '600',
                                    linetHeight: '28px',
                                    color: '#101828'
                                }}
                            >
                                Open positions
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    columnGap: '30px',
                                    color: '#475467'
                                }}
                            >
                                <AddOutlined style={{width: '20px', height: '20px'}}
                                    onClick={() => {
                                        setJobModal(true)
                                    }}
                                />
                                <EditOutlined />
                            </Box>
                        </Box>
                        <Typography
                            sx={{
                                fontSize: '14px',
                                fontWeight: '400',
                                lineHeight: '20px',
                                color: '#475467',
                                marginTop: '4px'
                            }}
                        >
                            Show open positions in your company.
                        </Typography>
                    </Box>
                    <Divider sx={{ marginTop: '20px' }} />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginTop: '60px',
                            textAlign: 'start'
                        }}
                    >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography
                                sx={{
                                    fontSize: '18px',
                                    fontWeight: '600',
                                    linetHeight: '28px',
                                    color: '#101828'
                                }}
                            >
                                More about the startup
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    columnGap: '30px',
                                    color: '#475467'
                                }}
                            >
                                <AddOutlined  style={{width: '20px', height: '20px'}}/>
                                <EditOutlined />
                            </Box>
                        </Box>
                        <Typography
                            sx={{
                                fontSize: '14px',
                                fontWeight: '400',
                                lineHeight: '20px',
                                color: '#475467',
                                marginTop: '4px'
                            }}
                        >
                            Show articles featuring your company.
                        </Typography>
                    </Box>
                    <Divider sx={{ marginTop: '20px' }} />
                </Box>

                <Box
                    sx={{
                        width: {md:'32%', xs: '100%'},
                        paddingRight: '32px'
                    }}
                >
                    <Box
                        sx={{
                            border: '1px solid #D0D5DD',
                            height: 'fit',
                            width: {md:'360px', xs: '100%'},
                            padding: '26px',
                            borderRadius: '10px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Box sx={{ width: '100%'}}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    columnGap: '6px',
                                    width: '100%'
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: '#344054',
                                        fontSize: '14px',
                                        fontWeight: '500',
                                        lineHeight: '20px'
                                    }}
                                >
                                    Headquarter
                                </Typography>
                                <Typography sx={{ color: '#F04438' }}>*</Typography>
                            </Box>
                            <Box sx={{textAlign: 'start'}}>
                                <TextField
                                    value={country}
                                    select
                                    label='Country'
                                    size='small'
                                    onChange={(e) => setCountry(e.target.value)}
                                    sx={{
                                        width: { md: 312, xs: '100%' },
                                        marginTop: '6px',
                                        fontSize: '14px'
                                    }}
                                >
                                    <MenuItem value=''>
                                        <em>Country</em>
                                    </MenuItem>
                                    {countryList.map((country) => (
                                        <MenuItem key={country.value} value={country.value}>
                                            {country.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Box>
                            <Box sx={{ width: '100%'}}>
                                <Box
                                    sx={{
                                        marginTop: '24px',
                                        display: 'flex',
                                        columnGap: '6px',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            color: '#344054',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                            lineHeight: '20px'
                                        }}
                                    >
                                        Industries
                                    </Typography>
                                    <Typography sx={{ color: '#F04438' }}>*</Typography>
                                </Box>
                                <Box sx={{ marginTop: '6px', width: '100%' }}>
                                    <Paper
                                        component='form'
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            width: { md: 312, xs: '100%' },
                                            height: 44,
                                            borderRadius: 2,
                                            boxShadow: 0,
                                            border: '1px solid #D0D5DD'
                                        }}
                                    >
                                        <IconButton
                                            type='button'
                                            sx={{ p: '10px' }}
                                            aria-label='search'
                                        >
                                            <Search />
                                        </IconButton>
                                        <InputBase
                                            sx={{ flex: 1, fontSize: 16 }}
                                            placeholder='Search for label'
                                            inputProps={{ 'aria-label': 'label search' }}
                                        />
                                    </Paper>
                                </Box>
                                <Box
                                    sx={{
                                        marginTop: '12px',
                                        display: 'flex',
                                        columnGap: '10px',
                                        flexDirection: { md: 'row', xs: 'column' },
                                        rowGap: { xs: '10px', md: '0px' }
                                    }}
                                >
                                    {
                                        industries.map((industry) => (
                                            <Box
                                                sx={{
                                                    border: '1px solid #E9D7FE',
                                                    height: '22px',
                                                    width: '110px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    borderRadius: '14px',
                                                    color: '#6941C6',
                                                    backgroundColor: '#E9D7FE',
                                                    columnGap: '10px'
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        color: '#6941C6',
                                                        fontWeight: '500',
                                                        lineHeight: '20px',
                                                        fontSize: '14px'
                                                    }}
                                                >
                                                    {industry}
                                                </Typography>
                                                <ClearOutlined sx={{ height: '15px', width: '15px' }} />
                                            </Box>
                                        ))
                                    }
                                </Box>
                            </Box>
                            <Box>
                                <Box
                                    sx={{
                                        marginTop: '24px',
                                        display: 'flex',
                                        columnGap: '6px'
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            color: '#344054',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                            lineHeight: '20px'
                                        }}
                                    >
                                        Size
                                    </Typography>
                                    <Typography sx={{ color: '#F04438' }}>*</Typography>
                                </Box>
                                <Box sx={{ textAlign: 'start' }}>
                                    <TextField
                                        value={size}
                                        select
                                        label='Range'
                                        size='small'
                                        onChange={(e) => setSize(e.target.value)}
                                        sx={{
                                            width: { md: 312, xs: '100%' },
                                            marginTop: '6px',
                                            fontSize: '14px'
                                        }}
                                    >
                                        <MenuItem value=''>
                                            <em>Range</em>
                                        </MenuItem>
                                        {sizeList.map((size) => (
                                            <MenuItem key={size.value} value={size.value}>
                                                {size.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Box>
                            </Box>
                            <Box>
                                <Box sx={{ marginTop: '24px', display: 'flex' }}>
                                    <Typography
                                        sx={{
                                            color: '#344054',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                            lineHeight: '20px'
                                        }}
                                    >
                                        Website
                                    </Typography>
                                </Box>
                                <Box sx={{ marginTop: '6px' }}>
                                    <Paper
                                        component='form'
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            width: { md: 312, xs: '100%' },
                                            height: 44,
                                            borderRadius: 2,
                                            boxShadow: 0,
                                            border: '1px solid #D0D5DD'
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                padding: '10px',
                                                color: '#667085',
                                                fontSize: '14px'
                                            }}
                                        >
                                            https://
                                        </Typography>
                                        <Divider
                                            sx={{ ml: 2, height: 50, m: 0.5 }}
                                            orientation='vertical'
                                        />
                                        <InputBase
                                            sx={{ flex: 1, fontSize: 16, ml: 1 }}
                                            placeholder='www.example.com'
                                            inputProps={{ 'aria-label': 'label search' }}
                                            value={website}
                                            onChange={(e) => setWebsite(e.target.value)}
                                        />
                                    </Paper>
                                </Box>
                            </Box>
                            <Box>
                                <Box
                                    sx={{
                                        marginTop: '24px',
                                        display: 'flex',
                                        columnGap: '6px'
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            color: '#344054',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                            lineHeight: '20px'
                                        }}
                                    >
                                        Email
                                    </Typography>
                                    <Typography sx={{ color: '#F04438' }}>*</Typography>
                                </Box>
                                <Box sx={{ marginTop: '6px' }}>
                                    <Paper
                                        component='form'
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            width: {md:312, xs: '100%'},
                                            height: 44,
                                            borderRadius: 2,
                                            boxShadow: 0,
                                            border: '1px solid #D0D5DD'
                                        }}
                                    >
                                        <InputBase
                                            sx={{ ml: 2, flex: 1, fontSize: 16 }}
                                            placeholder='example@gmail.com'
                                            inputProps={{ 'aria-label': 'company size' }}
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </Paper>
                                </Box>
                            </Box>
                            <Box>
                                <Box>
                                    <Box sx={{ marginTop: '24px', display: 'flex' }}>
                                        <Typography
                                            sx={{
                                                color: '#344054',
                                                fontSize: '14px',
                                                fontWeight: '500',
                                                lineHeight: '20px'
                                            }}
                                        >
                                            Twitter
                                        </Typography>
                                    </Box>
                                    <Box sx={{ marginTop: '6px' }}>
                                        <Paper
                                            component='form'
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                width: {md:312, xs: '100%'},
                                                height: 44,
                                                borderRadius: 2,
                                                boxShadow: 0,
                                                border: '1px solid #D0D5DD'
                                            }}
                                        >
                                            <Box sx={{ marginLeft: '20px' }}>
                                                {' '}
                                                <Twitter sx={{ color: '#1DA1F2' }} />
                                            </Box>
                                            <InputBase
                                                sx={{ flex: 1, fontSize: 16, ml: 2 }}
                                                placeholder='twitter.com/example'
                                                inputProps={{ 'aria-label': 'label search' }}
                                                value={twitter}
                                                onChange={(e) => setTwitter(e.target.value)}
                                            />
                                        </Paper>
                                    </Box>
                                </Box>
                                <Box>
                                    <Box sx={{ marginTop: '24px', display: 'flex' }}>
                                        <Typography
                                            sx={{
                                                color: '#344054',
                                                fontSize: '14px',
                                                fontWeight: '500',
                                                lineHeight: '20px'
                                            }}
                                        >
                                            Facebook
                                        </Typography>
                                    </Box>
                                    <Box sx={{ marginTop: '6px' }}>
                                        <Paper
                                            component='form'
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                width: {md:312, xs: '100%'},
                                                height: 44,
                                                borderRadius: 2,
                                                boxShadow: 0,
                                                border: '1px solid #D0D5DD'
                                            }}
                                        >
                                            <IconButton
                                                type='button'
                                                sx={{ p: '10px' }}
                                                aria-label='facebooklogo'
                                            >
                                                <FacebookOutlined sx={{ color: '#1DA1F2' }} />
                                            </IconButton>
                                            <InputBase
                                                sx={{ flex: 1, fontSize: 16, ml: 1 }}
                                                placeholder='facebook.com/example'
                                                inputProps={{ 'aria-label': 'label search' }}
                                                value={facebook}
                                                onChange={(e) => setFacebook(e.target.value)}
                                            />
                                        </Paper>
                                    </Box>
                                </Box>
                                <Box>
                                    <Box sx={{ marginTop: '24px', display: 'flex' }}>
                                        <Typography
                                            sx={{
                                                color: '#344054',
                                                fontSize: '14px',
                                                fontWeight: '500',
                                                lineHeight: '20px'
                                            }}
                                        >
                                            Linkedin
                                        </Typography>
                                    </Box>
                                    <Box sx={{ marginTop: '6px' }}>
                                        <Paper
                                            component='form'
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                width: {md:312, xs: '100%'},
                                                height: 44,
                                                borderRadius: 2,
                                                boxShadow: 0,
                                                border: '1px solid #D0D5DD'
                                            }}
                                        >
                                            <Box sx={{ marginLeft: '20px' }}>
                                                {' '}
                                                <LinkedIn
                                                    sx={{ color: '#0A66C2', backgroundColor: 'white' }}
                                                />
                                            </Box>
                                            <InputBase
                                                sx={{ flex: 1, fontSize: 16, ml: 2 }}
                                                placeholder='linkedin.com/example'
                                                inputProps={{ 'aria-label': 'label search' }}
                                                value={linkedin}
                                                onChange={(e) => setLinkedin(e.target.value)}
                                            />
                                        </Paper>
                                    </Box>
                                </Box>
                                <Box>
                                    <Box sx={{ marginTop: '24px', display: 'flex' }}>
                                        <Typography
                                            sx={{
                                                color: '#344054',
                                                fontSize: '14px',
                                                fontWeight: '500',
                                                lineHeight: '20px'
                                            }}
                                        >
                                            Instagram
                                        </Typography>
                                    </Box>
                                    <Box sx={{ marginTop: '6px' }}>
                                        <Paper
                                            component='form'
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                width: {md:312, xs: '100%'},
                                                height: 44,
                                                borderRadius: 2,
                                                boxShadow: 0,
                                                border: '1px solid #D0D5DD'
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    height: '20px',
                                                    width: '20px',
                                                    border: '3px  solid #98A2B3',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    borderRadius: '5px',
                                                    justifyContent: 'center',
                                                    marginLeft: '20px'
                                                }}
                                            >
                                                <Instagram
                                                    sx={{ backgroundColor: 'white', color: '#000100' }}
                                                />
                                            </Box>
                                            <InputBase
                                                sx={{ flex: 1, fontSize: 16, ml: 2 }}
                                                placeholder='instagram.com/example'
                                                inputProps={{ 'aria-label': 'label search' }}
                                                value={instagram}
                                                onChange={(e) => setInstagram(e.target.value)}
                                            />
                                        </Paper>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default PrivateEditPublicProfileView