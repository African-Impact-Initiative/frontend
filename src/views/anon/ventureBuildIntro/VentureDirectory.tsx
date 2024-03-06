import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { useEffect, useState } from 'react'
import { useAppSelector } from '../../../hooks/redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import PathConstants from '../../../navigation/pathConstants'
import organizationService from '../../../api/organizationService'
import Organization from '../../../types/organization'
import { setInfoNotification } from '../../../store/notificationReducer'

const ORGANIZATION_QUERY = 'organizations'

const VentureDirectory = () => {
    const organizations = useAppSelector(state => state.organizations)
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const [query, setQuery] = useState('')
    const [organizationsToDisplay, setOrganizations] = useState(organizations)

    useEffect(() => {
        const search = searchParams.get(ORGANIZATION_QUERY)
        if (search)
            updateDisplay(search)
    }, [searchParams])


    const updateDisplay = async (search: string) => {
        const orgs = await organizationService.retrieve(search)
        console.log(orgs)
        if (orgs.success)
            setOrganizations(orgs.data as Organization[])
        else {
            setInfoNotification('Could not find any results for your query')
            setOrganizations([])
        }
    }

    const handleSearch = () => navigate(`${PathConstants.ventureDirectory}?${ORGANIZATION_QUERY}=${query}`)

    return (
        <Box sx={{height: '50vh', padding: '40px'}}>
            <Typography component='h1'>Venture Directory</Typography>
            {organizationsToDisplay.map(org => <Typography key={org.id}>{org.name}</Typography>)}
        </Box>
    )
}

export default VentureDirectory