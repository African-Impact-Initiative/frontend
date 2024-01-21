import { AddOutlined, EditOutlined, FacebookOutlined, Instagram, LinkedIn, Search, Twitter, YouTube } from '@mui/icons-material'
import { Button, Divider, IconButton, InputBase, MenuItem, Modal, Paper, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import { countryList } from '../../utils/countries'
import { useNavigate } from 'react-router-dom'
import EditLogoModal from '../../components/companyEdit/EditLogoModal'
import AddLeadershipModal from '../../components/companyEdit/AddLeadershipModal'
import AddJobModal from '../../components/companyEdit/AddJobModal'

const items = [
    {
        id: 1,
        name: 'Product'
    },
    {
        id: 2,
        name: 'Marketing'
    },
    {
        id: 3,
        name: 'Legal'
    },
    {
        id: 4,
        name: 'Management'
    },
    {
        id: 5,
        name: 'Finance'
    },
    {
        id: 6,
        name: 'Operation'
    }
]

const currencies = [
    {
        value: 0 - 10
    },
    {
        value: 11 - 100
    },
    {
        value: 101 - 500
    },
    {
        value: 501 - 600
    }
]

const CompanyEditPage = () => {
    const [country, setCountry] = useState('')
    const [industry, setIndustry] = useState('')
    const [logoModal, setLogoModal] = useState(false)
    const [leadershipModal, setLeadershipModal] = useState(false)
    const [jobModal, setJobModal] = useState(false)
    const [_, setSelectItem] = useState('')

    const navigate = useNavigate()

    return (
        <Box>
            <Modal
                open={logoModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                onClose={() => {
                    setLogoModal(false)
                }}
            >
                <EditLogoModal />
            </Modal>

            <Modal
                open={leadershipModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                onClose={() => {
                    setLeadershipModal(false)
                }}
            >
                <AddLeadershipModal />
            </Modal>

            <Modal
                open={jobModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
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
                    width: '100%'
                }} />
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
                <Box sx={{ display: 'flex', alignItems: 'center', columnGap: '24px', flexDirection: { md: 'row', xs: 'column' },  }}>
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
                                backgroundColor: '#EAECF0'
                            }}
                            onClick={() => {
                                setLogoModal(true)
                            }}
                        >
                            <Typography
                                sx={{
                                    color: '#475467',
                                    fontWeight: '600',
                                    lineHeight: '72px',
                                    fontSize: '60px',
                                }}
                            >
                                DP
                            </Typography>
                        </Box>
                    </Box>

                    <Box>
                        <Typography
                            sx={{
                                fontSize: '30px',
                                fontWeight: '600',
                                lineHeight: '38px',
                                color: '#101828'
                            }}
                        >
                            DataPrime
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
                            columnGap: '20px',
                            justifyContent: 'flex-end',
                            padding: '40px'
                        }}
                    >
                        <Button
                            size="large"
                            variant="outlined"
                            sx={{
                                border: '1px solid #D0D5DD',
                                borderRadius: '8px',
                                color: '#344054',
                                lineHeight: '20px',
                                fontSize: '14px',
                                fontWeight: '600',
                                height: '40px',
                                width: { md: '80px', xs: '100%' },
                                textTransform: 'none'
                            }}
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                color: '#FFFFFF',
                                backgroundColor: '#DC6803',
                                borderRadius: '8px',
                                fontWeight: '600',
                                lineHeight: '20px',
                                height: '40px',
                                width: { md: '127px', xs: '100%' },
                                textTransform: 'none',
                                fontSize: '14px'
                            }}
                            onClick={() => {
                                navigate('/app/privateViewUpdate')
                            }}
                        >
                            Save changes
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ padding: '40px', display: 'flex', columnGap: '40px', flexDirection: {md: 'row', xs: 'column'}, width: '100%', height: '100%'}}>
                <Box sx={{ width: {md:'68%', xs: '100%'} }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                        <Typography
                            sx={{
                                fontSize: '18px',
                                fontWeight: '600',
                                fontHeight: '28px',
                                color: '#101828'
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
                                marginTop: '4px'
                            }}
                        >
                            Tell viewers more about your company.
                        </Typography>
                    </Box>
                    <Divider sx={{ marginTop: '20px' }} />
                    <Box>
                        <Box sx={{ marginTop: '32px', display: 'flex', columnGap: '6px' }}>
                            <Typography
                                sx={{
                                    color: '#344054',
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    lineHeight: '20px'
                                }}
                            >
                                Tagline
                            </Typography>
                            <Typography sx={{ color: '#F04438' }}>
                                *
                            </Typography>
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
                                    fontFamily: ' inter'
                                }}
                                placeholder="DataPrime empowers financial insights with AI-driven solutions for smarter decision-making."
                                rows={1}
                                onChange={(e) => {
                                    console.log(e)
                                }}
                            />
                        </Box>
                    </Box>
                    <Box>
                        <Box sx={{ marginTop: '40px', display: 'flex', columnGap: '6px' }}>
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
                            <Typography sx={{ color: '#F04438' }}>
                                *
                            </Typography>
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
                                    fontFamily: ' inter'
                                }}
                                placeholder="Talk about your company’s values, mission, and vision."
                                rows={5}
                                onChange={(e) => {
                                    console.log(e)
                                }}
                            />
                        </Box>
                    </Box>
                    <Box
                        sx={{ display: 'flex', flexDirection: 'column', marginTop: '60px', textAlign: 'start' }}
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
                                sx={{ display: 'flex', columnGap: '30px', color: '#475467' }}
                            >
                                <AddOutlined style={{width: '20px', height: '20px'}}
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
                        sx={{ display: 'flex', flexDirection: 'column', marginTop: '60px' ,  textAlign: 'start' }}
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
                                sx={{ display: 'flex', columnGap: '30px', color: '#475467' }}
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
                        sx={{ display: 'flex', flexDirection: 'column', marginTop: '60px',  textAlign: 'start'  }}
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
                                sx={{ display: 'flex', columnGap: '30px', color: '#475467' }}
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
                <Box sx={{ width: {md:'32%', xs: '100%'},paddingRight: '32px' }}>
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
                                sx={{ display: 'flex', columnGap: '6px', width: '100%'}}
                            >
                                <Typography
                                    sx={{
                                        color: '#344054',
                                        fontSize: '14px',
                                        fontWeight: '500',
                                        lineHeight: '20px'
                                    }}
                                >
                                    Location
                                </Typography>
                                <Typography sx={{ color: '#F04438' }}>
                                    *
                                </Typography>
                            </Box>
                            <Box sx={{textAlign: 'start'}}>
                                <TextField
                                    value={country}
                                    select
                                    label="Country"
                                    size="small"
                                    onChange={(e) => setCountry(e.target.value)}
                                    sx={{
                                        width: { md: 312, xs: '100%' },
                                        marginTop: '6px',
                                        marginBottom: '10px',
                                        fontSize: "14px"
                                    }}
                                >
                                    <MenuItem value="">
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
                                    sx={{ marginTop: '24px', display: 'flex', columnGap: '6px',  }}
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
                                    <Typography sx={{ color: '#F04438' }}>
                                        *
                                    </Typography>
                                </Box>
                                <Box sx={{ marginTop: '6px'}}>
                                    <Paper
                                        component="form"
                                        value={industry}
                                        select
                                        size="large"
                                        onChange={(e) => setIndustry(e.target.value)}
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
                                            type="button"
                                            sx={{ p: '10px' }}
                                            aria-label="search"
                                        >
                                            <Search />
                                        </IconButton>

                                        <InputBase
                                            sx={{ flex: 1, fontSize: 16 }}
                                            placeholder="Search of label"
                                            inputProps={{ 'aria-label': 'label search' }}
                                        />

                                    </Paper>
                                </Box>
                            </Box>
                            <Box>
                                <Box
                                    sx={{ marginTop: '24px', display: 'flex', columnGap: '6px' }}
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
                                    <Typography sx={{ color: '#F04438' }}>
                                        *
                                    </Typography>
                                </Box>
                                <Box sx={{ marginTop: '6px' }}>
                                    <Paper
                                        component="form"
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
                                        <InputBase
                                            sx={{ ml: 2, flex: 1, fontSize: 16 }}
                                            placeholder="e.g. 12"
                                            inputProps={{ 'aria-label': 'company size' }}
                                        />
                                    </Paper>
                                </Box>
                            </Box>
                            <Box>
                                <Box sx={{ marginTop: '24px', display: 'flex', }}>
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
                                        component="form"
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
                                            http://
                                        </Typography>

                                        <Divider
                                            sx={{ ml: 2, height: 50, m: 0.5 }}
                                            orientation="vertical"
                                        />
                                        <InputBase
                                            sx={{ flex: 1, fontSize: 16, ml: 1 }}
                                            placeholder="www.example.com"
                                            inputProps={{ 'aria-label': 'label search' }}
                                        />
                                    </Paper>
                                </Box>
                            </Box>
                            <Box>
                                <Box
                                    sx={{ marginTop: '24px', display: 'flex', columnGap: '6px' }}
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
                                    <Typography sx={{ color: '#F04438' }}>
                                        *
                                    </Typography>
                                </Box>
                                <Box sx={{ marginTop: '6px' }}>
                                    <Paper
                                        component="form"
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
                                            placeholder="example@gmail.com"
                                            inputProps={{ 'aria-label': 'company size' }}
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
                                        Twitter
                                    </Typography>
                                </Box>
                                <Box sx={{ marginTop: '6px' }}>
                                    <Paper
                                        component="form"
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
                                            placeholder="twitter.com/example"
                                            inputProps={{ 'aria-label': 'label search' }}
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
                                        component="form"
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
                                            type="button"
                                            sx={{ p: '10px' }}
                                            aria-label="facebooklogo"
                                        >
                                            <FacebookOutlined sx={{ color: '#1DA1F2' }} />
                                        </IconButton>

                                        <InputBase
                                            sx={{ flex: 1, fontSize: 16, ml: 1 }}
                                            placeholder="facebook.com/example"
                                            inputProps={{ 'aria-label': 'label search' }}
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
                                        component="form"
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
                                            placeholder="linkedin.com/example"
                                            inputProps={{ 'aria-label': 'label search' }}
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
                                        component="form"
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
                                            placeholder="instagram.com/example"
                                            inputProps={{ 'aria-label': 'label search' }}
                                        />
                                    </Paper>
                                </Box>
                            </Box>
                            <Box sx={{ marginBottom: '24px' }}>
                                <Box sx={{ marginTop: '24px', display: 'flex' }}>
                                    <Typography
                                        sx={{
                                            color: '#344054',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                            lineHeight: '20px'
                                        }}
                                    >
                                        Youtube
                                    </Typography>
                                </Box>
                                <Box sx={{ marginTop: '6px' }}>
                                    <Paper
                                        component="form"
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
                                            type="button"
                                            sx={{ p: '10px' }}
                                            aria-label="youtubebutton"
                                        >
                                            <YouTube
                                                sx={{ color: 'red' }} />
                                        </IconButton>

                                        <InputBase
                                            sx={{ flex: 1, fontSize: 16, ml: 1 }}
                                            placeholder="youtube.com/example"
                                            inputProps={{ 'aria-label': 'label search' }}
                                        />
                                    </Paper>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            color: '#101828',
                            fontSize: '18px',
                            fontWeight: '600',
                            lineHeight: '28px',
                            marginTop: '40px',
                            marginBottom: '40px',
                            display: 'flex'
                        }}
                    >
                    </Box>
                    <Box
                        sx={{
                            border: '1px solid #D0D5DD',
                            height: 'fit',
                            width: {md: '360px', xs: '100%'},
                            padding: '26px',
                            borderRadius: '10px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column'
                        }}
                    >
                        <Box sx={{width: '100%'}}>
                            <Box sx={{  display: 'flex' }}>
                                <Typography
                                    sx={{
                                        color: '#344054',
                                        fontSize: '14px',
                                        fontWeight: '500',
                                        lineHeight: '20px'
                                    }}
                                >
                                    Last round
                                </Typography>
                            </Box>
                            <Box sx={{width: '100%', textAlign: 'start'}}>
                                <TextField
                                    value={items}
                                    select
                                    size="small"
                                    onChange={(e) => setSelectItem(e.target.value)}
                                    sx={{
                                        width: {md: '312px', xs: '100%'},
                                        marginTop: '10px',
                                        marginBottom: '10px',
                                    }}
                                >
                                    <MenuItem value="">
                                        <em>Select</em>
                                    </MenuItem>
                                    {items.map((item) => (
                                        <MenuItem key={item.id} value={item.id}>
                                            {item.name}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Box>
                        </Box>
                        <Box sx={{width: '100%', textAlign: 'start'}}>
                            <Box sx={{ marginTop: '24px', display: 'flex' }}>
                                <Typography
                                    sx={{
                                        color: '#344054',
                                        fontSize: '14px',
                                        fontWeight: '500',
                                        lineHeight: '20px'
                                    }}
                                >
                                    Total raised
                                </Typography>
                            </Box>
                            <Box >
                                <TextField
                                    value={currencies}
                                    select
                                    size="small"
                                    defaultValue="e.g. 10k"
                                    onChange={(e) => setSelectItem(e.target.value)}
                                    sx={{
                                        width: {md: '312px', xs: '100%'},
                                        marginTop: '10px',
                                        marginBottom: '10px',
                                    }}
                                >
                                    <MenuItem value="">
                                        <em>Select</em>
                                    </MenuItem>
                                    {currencies.map((item) => (
                                        <MenuItem key={item.value} value={item.value}>
                                            {item.value}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Box>
                        </Box>
                        <Box sx={{  width: '100%' }}>
                            <Box sx={{ marginTop: '24px', display: 'flex' }}>
                                <Typography
                                    sx={{
                                        color: '#344054',
                                        fontSize: '14px',
                                        fontWeight: '500',
                                        lineHeight: '20px'
                                    }}
                                >
                                    Investors
                                </Typography>
                            </Box>

                            <Box sx={{ marginTop: '12px', }}>
                                <Paper
                                    component="form"
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
                                        type="button"
                                        sx={{ p: '10px' }}
                                        aria-label="search"
                                    >
                                        <Search />
                                    </IconButton>

                                    <InputBase
                                        sx={{ flex: 1, fontSize: 16 }}
                                        placeholder="Search for investor"
                                        inputProps={{ 'aria-label': 'label search' }}
                                    />
                                </Paper>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default CompanyEditPage