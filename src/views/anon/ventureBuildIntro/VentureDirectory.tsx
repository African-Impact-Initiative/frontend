import { Button, Container, Grid, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import PathConstants from '../../../navigation/pathConstants'
import organizationService, { industryQueryPrefix, organizationQueryPrefix } from '../../../api/organizationService'
import Organization from '../../../types/organization'
import { setInfoNotification } from '../../../store/notificationReducer'
import { VBTextField } from '../../../components/VBForms'
import { initializeOrganizations } from '../../../store/organizationReducer'
import { AppDispatch } from '../../../store/store'

const VentureDirectory = () => {
    const organizations = useAppSelector(state => state.organizations)
    const dispatch = useAppDispatch()
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const [orgQuery, setOrgQuery] = useState('')
    const [industryQuery, setIndustryQuery] = useState('')
    const [organizationsToDisplay, setOrganizations] = useState(organizations)

    useEffect(() => {
        const orgSearch = searchParams.get(organizationQueryPrefix)
        const industrySearch = searchParams.get(industryQueryPrefix)

        if (orgSearch || industrySearch)
            updateDisplay(orgSearch, industrySearch)
        else
            initializeSearch(dispatch)
    }, [searchParams])

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
        if (organizationsToDisplay.length == 0) {
            await dispatch(initializeOrganizations())
            setOrganizations(organizations)
        }
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
        <Container maxWidth='lg' sx={{height: '50vh', padding: '40px'}}>
            <Typography variant='h2' gutterBottom>Venture Directory</Typography>

            <Box sx={{marginTop: '30px', padding: '10px', borderRadius: '10px', backgroundColor: '#FAFAFA'}}>
                <Grid container spacing={2}>
                    <Grid item md={4}>
                        <Box display='flex' flexDirection='column' justifyContent='center'>
                            <Typography>Search</Typography>
                            <VBTextField value={orgQuery} setter={setOrgQuery} required={false}  label='Search'/>
                        </Box>
                    </Grid>
                    <Grid item md={4}>
                        <Box display='flex' flexDirection='column' justifyContent='center'>
                            <Typography>Industry</Typography>
                            <VBTextField value={industryQuery} setter={setIndustryQuery} required={false}  label='Search'/>
                        </Box>
                    </Grid>
                    <Grid item md={4}>
                        <Box display='flex' flexDirection='column' justifyContent='center'>
                            <Typography>Sort By</Typography>
                            <VBTextField value={orgQuery} setter={setOrgQuery} required={false}  label='Search'/>
                        </Box>
                    </Grid>
                </Grid>
                <Box display='flex' justifyContent='end'>
                    <Button onClick={handleSearch} variant='contained'>Search</Button>
                </Box>
            </Box>

            {organizationsToDisplay.length == 0 && <Typography>No results found</Typography>}
            {organizationsToDisplay.map(org => <Typography key={org.id}>{org.name}</Typography>)}

        </Container>
    )
}

export default VentureDirectory