import { Button, Container, Divider, Grid, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import PathConstants from '../../../navigation/pathConstants'
import organizationService, { industryQueryPrefix, organizationQueryPrefix } from '../../../api/organizationService'
import Organization from '../../../types/organization'
import { setInfoNotification } from '../../../store/notificationReducer'
import { VBSelect, VBTextField } from '../../../components/VBForms'
import { initializeOrganizations } from '../../../store/organizationReducer'
import { AppDispatch } from '../../../store/store'

import ventureDirectory from '../../../assets/venture_directory.svg'
import { industriesList } from '../../../utils/industries'
import { VentureCard } from '../../../components/VBCards'

export interface IVentureStats {
    title: string,
    value: number,
    text: string
}

const VentureStats = ({title, value, text} : IVentureStats) => (
    <Box>
        <Typography variant='h3'>{value}+</Typography>
        <Typography variant='body1' fontWeight='bold'>{title}</Typography>
        <Typography variant='body1'>{text}</Typography>
    </Box>
)

const VentureDirectory = () => {
    const organizations = useAppSelector(state => state.organizations)
    const dispatch = useAppDispatch()
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const [orgQuery, setOrgQuery] = useState('')
    const [industryQuery, setIndustryQuery] = useState('')
    const [organizationsToDisplay, setOrganizations] = useState(organizations)

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

        if (orgSearch || industrySearch)
            updateDisplay(orgSearch, industrySearch)
        else
            initializeSearch(dispatch)
    }, [searchParams])

    useEffect(() => {
        if (organizationsToDisplay.length == 0)
            setOrganizations(organizations)
    }, [organizations])

    const updateDisplay = async (org: string | null, industry: string | null) => {
        const orgs = await organizationService.retrieve(org, industry)

        if (orgs.success && (orgs.data as Organization[]).length > 0)
            setOrganizations(orgs.data as Organization[])
        else {
            dispatch(setInfoNotification('Could not find any results for your query'))
            setOrganizations([])
        }
    }

    const initializeSearch = async (dispatch: AppDispatch) => {
        if (organizationsToDisplay.length == 0)
            await dispatch(initializeOrganizations())
    }

    const handleSearch = () => {
        let query = ''
        if (orgQuery)
            query = `${organizationQueryPrefix}=${orgQuery}`
        if (industryQuery)
            query = query == undefined? `${industryQueryPrefix}=${industryQuery}` : query + `&${industryQueryPrefix}=${industryQuery}`
        navigate(`${PathConstants.ventureDirectory}?${query}`)
    }

    return (
        <Container maxWidth='lg' sx={{padding: '0 40px 40px 40px'}}>
            <Box sx={{display: 'flex', height: '75vh', overflowX: 'hidden'}}>
                <Grid container spacing={0}>
                    <Grid item lg={5} sx={{height: '100%', width: '100%', display: 'flex !important', alignItems: 'left !important', justifyContent: 'center !important', flexDirection: 'column !important'}}>
                        <Typography variant='h3' component='div' gutterBottom>
                            Venture Directory
                        </Typography>

                        <Typography variant='subtitle1' component='div' gutterBottom>
                            Discover a spectrum of pioneering startups with a reach extending from quantum computing to driving social change. These innovative ventures are reshaping industries and touching lives worldwide.
                        </Typography>

                        <Box sx={{display: 'flex', width: '100%', marginTop: '20px'}}>
                            <Button size='large' variant='outlined' sx={{marginRight: '10px'}}>Browse all ventures</Button>
                            <Link to={PathConstants.signUp}>
                                <Button size='large' variant='contained' sx={{color: '#fff', backgroundColor: '#DC6803', '&:hover': { backgroundColor: '#E8822A'}}}>Join now</Button>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item lg={7} sx={{background: `url(${ventureDirectory}) no-repeat top right`, backgroundSize: 'contain'}}>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{marginTop: '40px'}}>
                <Typography variant='h2' gutterBottom>How far we've gone so far</Typography>
                <Typography variant='body1' gutterBottom>
                    Venture Build is suited in one of Canada's fastest-growing startup incubation hub, committed to nurturing the creativity of young African innovators.
                </Typography>
                <Grid container spacing={2}>
                    {stats.map(stat => <Grid item md={3} key={stat.title}><VentureStats {...stat} /></Grid>)}
                </Grid>
            </Box>

            <Divider sx={{marginTop: '40px', marginBottom: '40px'}} />

            <Box sx={{marginTop: '30px', padding: '10px', borderRadius: '10px', backgroundColor: '#FAFAFA'}}>
                <Grid container spacing={2}>
                    <Grid item md={4}>
                        <Box display='flex' flexDirection='column' justifyContent='center'>
                            <Typography>Search for venture</Typography>
                            <VBTextField value={orgQuery} setter={setOrgQuery} required={false}  label='Search'/>
                        </Box>
                    </Grid>
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
                    <Grid item md={4}>
                        <Box display='flex' flexDirection='column' justifyContent='center'>
                            <Typography>Sort By</Typography>
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
                </Grid>
                <Box display='flex' justifyContent='end'>
                    <Button onClick={handleSearch} variant='contained'>Search</Button>
                </Box>
            </Box>

            {organizationsToDisplay.length == 0 && <Typography>No results found</Typography>}
            <Grid container spacing={2}>
                {organizationsToDisplay.map(org => <Grid item md={3} key={org.id}>
                    <VentureCard name={org.name} category={org.industry} logo={org.logo} caption={org.tagline} details={org.tagline} action={() => 1}/>
                </Grid>)}
            </Grid>

        </Container>
    )
}

export default VentureDirectory