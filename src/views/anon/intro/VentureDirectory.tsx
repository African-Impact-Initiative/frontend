import { Button, Container, Divider, Grid, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { useEffect, useState, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import PathConstants from '../../../navigation/pathConstants'
import organizationService, { industryQueryPrefix, organizationQueryPrefix } from '../../../api/organizationService'
import Organization from '../../../types/organization'
import { setInfoNotification } from '../../../store/notificationReducer'
import { VBSelect, VBTextField } from '../../../components/VBForms'

import ventureDirectory from '../../../assets/venture_directory.svg'
import { industriesList } from '../../../utils/industries'
import { VentureCard } from '../../../components/VBCards'
import { ASCEND, sortByKey, sortList } from '../../../utils/sort'

export interface IVentureStats {
    title: string,
    value: number,
    text: string
}

const VentureStats = ({title, value, text} : IVentureStats) => (
    <Box>
        <Typography marginBottom='10px' marginTop='20px' variant='h3' color='#DC6803'>{value}+</Typography>
        <Typography marginBottom='10px' variant='body1' fontWeight='bold'>{title}</Typography>
        <Typography marginBottom='10px' variant='body1'>{text}</Typography>
    </Box>
)

const searchId = 'org-search'

const VentureDirectory = () => {
    const organizations = useAppSelector(state => state.organizations)
    const dispatch = useAppDispatch()
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const [orgQuery, setOrgQuery] = useState('')
    const [industryQuery, setIndustryQuery] = useState('')
    const [sortBy, setSortBy] = useState(ASCEND)
    const [organizationsToDisplay, setOrganizations] = useState(organizations.data)

    const stats: Array<IVentureStats> = [
        {
            title: 'Companies created',
            value: 120,
            text: 'We\'ve helped build over 120 amazing startup ventures.'
        },
        {
            title: 'Jobs created',
            value: 360,
            text: 'Our ventures have generated more than 360 employment opportunities.'
        },
        {
            title: 'Venture capital investors',
            value: 210,
            text: 'Our ventures have garnered the interest of over 210 VC investors.'
        },
        {
            title: '5-star reviews',
            value: 150,
            text: 'We\'re proud of our 5-star rating backed by 150+ founders\' reviews.'
        }
    ]

    useEffect(() => {
        const orgSearch = searchParams.get(organizationQueryPrefix)
        const industrySearch = searchParams.get(industryQueryPrefix)
        const sortValue = searchParams.get(sortByKey)

        if (orgSearch || industrySearch || sortValue)
            updateDisplay(orgSearch, industrySearch, sortValue)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParams, dispatch])

    useEffect(() => {
        if (organizationsToDisplay.length == 0)
            setOrganizations(organizations.data)
    }, [organizations, organizationsToDisplay])

    const updateDisplay = async (org: string | null, industry: string | null, sortBy: string | null) => {
        const orgs = await organizationService.retrieve(org, industry)

        if (orgs.success && (orgs.data as Organization[]).length > 0) {
            let toDisplay: Array<Organization> = []

            if (sortBy == ASCEND)
                toDisplay = (orgs.data as Organization[]).sort((a, b) => a.name.localeCompare(b.name))
            else
                toDisplay = (orgs.data as Organization[]).sort((a, b) => b.name.localeCompare(a.name))

            setOrganizations(toDisplay)
        } else {
            dispatch(setInfoNotification('Could not find any results for your query'))
            setOrganizations([])
        }

        scrollToSearch()
    }

    const scrollToSearch = () => {
        const releventDiv = document.getElementById(searchId)
        // behavior: "smooth" parameter for smooth movement
        releventDiv!.scrollIntoView({behavior: 'smooth'})
    }

    const handleSearch = () => {
        let query = `${sortByKey}=${sortBy}`
        if (orgQuery)
            query += `&${organizationQueryPrefix}=${orgQuery}`
        if (industryQuery)
            query += `&${industryQueryPrefix}=${industryQuery}`
        navigate(`${PathConstants.ventureDirectory}?${query}`)
    }

    const openInNewTab = (org: Organization): void => {
        const endpoint = PathConstants.publicProfile
        const url = `${endpoint.slice(0, endpoint.indexOf(':'))}${org.identifier}`
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <>
            {/* Main Layout Container */}
            <Box sx={{ 
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                width: '100%',
                position: 'relative'
            }}>
                {/* Desktop Background Image */}
                <Box sx={{
                    display: { xs: 'none', md: 'block' },
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '55%',
                    height: '100vh',
                    '& img': {
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }
                }}>
                    <img src={ventureDirectory} />
                </Box>
    
                {/* Mobile Background Image */}
                <Box sx={{
                    display: { xs: 'block', md: 'none' },
                    width: '100%',
                    '& img': {
                        width: '100%',
                        height: 'auto',
                        objectFit: 'cover'
                    }
                }}>
                    <img src={ventureDirectory} />
                </Box>
    
                {/* Content Container */}
                <Container maxWidth='lg' sx={{
                    padding: { xs: '20px 20px 40px 20px', md: '0 40px' },
                    width: '100%'
                }}>
                    {/* Hero Section */}
                    <Box sx={{
                        minHeight: { xs: 'auto', md: '100vh' },
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        overflow: 'visible'
                    }}>
                        <Grid container spacing={0}>
                            <Grid item xs={12} md={5} sx={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '20px',
                                marginBottom: { xs: '20px', md: 0 }
                            }}>
                                {/* Title */}
                                <Typography 
                                    variant='h1' 
                                    component='div' 
                                    sx={{
                                        marginBottom: '10px',
                                        wordBreak: 'break-word' 
                                    }}
                                >
                                    Venture Directory
                                </Typography>
    
                                {/* Description */}
                                <Typography variant='subtitle1' component='div'>
                                    Discover a spectrum of pioneering startups with a reach 
                                    extending from quantum computing to driving social change. 
                                    These innovative ventures are reshaping industries and 
                                    touching lives worldwide.
                                </Typography>
    
                                {/* Action Buttons */}
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: { xs: 'column', sm: 'row' },
                                    gap: { xs: '10px', sm: '10px' },
                                    width: '100%'
                                }}>
                                    <Button 
                                        onClick={scrollToSearch} 
                                        size='large' 
                                        variant='outlined' 
                                        fullWidth
                                        sx={{ flex: { sm: 1 } }}
                                    >
                                        Browse all ventures
                                    </Button>
                                    <Button 
                                        size='large' 
                                        variant='contained'
                                        fullWidth
                                        component={Link}
                                        to={PathConstants.signUp}
                                        sx={{
                                            flex: { sm: 1 },
                                            color: '#fff', 
                                            backgroundColor: '#DC6803', 
                                            '&:hover': { backgroundColor: '#E8822A'}
                                        }}
                                    >
                                        Join now
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
    
                    {/* Stats Section */}
                    <Box sx={{ marginTop: '40px' }}>
                        <Typography variant='h2' gutterBottom>
                            How far we've gone so far
                        </Typography>
                        <Typography variant='body1' gutterBottom>
                            Venture Build is suited in one of Canada's fastest-growing 
                            startup incubation hub, committed to nurturing the creativity 
                            of young African innovators.
                        </Typography>
                        <Grid container spacing={2}>
                            {stats.map(stat => (
                                <Grid item md={3} key={stat.title}>
                                    <VentureStats {...stat} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
    
                    <Divider sx={{ marginTop: '40px', marginBottom: '40px' }} />
    
                    {/* Search Section */}
                    <Box sx={{
                        marginTop: '30px',
                        padding: '10px',
                        borderRadius: '10px',
                        backgroundColor: '#FAFAFA'
                    }}>
                        <Grid container spacing={2}>
                            {/* Search Input */}
                            <Grid item md={4}>
                                <Box display='flex' flexDirection='column' justifyContent='center'>
                                    <Typography>Search for venture</Typography>
                                    <VBTextField 
                                        value={orgQuery} 
                                        setter={setOrgQuery} 
                                        required={false} 
                                        label='Search'
                                    />
                                </Box>
                            </Grid>
    
                            {/* Industry Select */}
                            <Grid item md={4}>
                                <Box display='flex' flexDirection='column' justifyContent='center'>
                                    <Typography>Industry</Typography>
                                    <VBSelect
                                        value={industryQuery}
                                        size='medium'
                                        required={false}
                                        list={industriesList}
                                        setter={setIndustryQuery}
                                        gutter={false}
                                        margin={false}
                                    />
                                </Box>
                            </Grid>
    
                            {/* Sort Select */}
                            <Grid item md={4}>
                                <Box display='flex' flexDirection='column' justifyContent='center'>
                                    <Typography>Sort By</Typography>
                                    <VBSelect
                                        value={sortBy}
                                        size='medium'
                                        required={false}
                                        list={sortList}
                                        setter={setSortBy}
                                        gutter={false}
                                        margin={false}
                                        defaultValue={true}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
    
                        {/* Search Button */}
                        <Box display='flex' justifyContent='end'>
                            <Button onClick={handleSearch} variant='contained'>
                                Search
                            </Button>
                        </Box>
                    </Box>
    
                    {/* Results Section */}
                    {organizationsToDisplay.length == 0 && (
                        <Typography>No results found</Typography>
                    )}
                    <Grid id={searchId} container spacing={2} margin='20px 0 20px 0'>
                        {organizationsToDisplay.map(org => (
                            <Grid item md={4} key={org.id}>
                                <VentureCard
                                    name={org.name}
                                    category={org.industries[0]}
                                    logo={org.logo}
                                    caption={org.tagline}
                                    details={org.aboutUs}
                                    action={() => openInNewTab(org)}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default VentureDirectory