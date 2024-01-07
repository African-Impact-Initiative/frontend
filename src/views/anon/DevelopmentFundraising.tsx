import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { setErrorNotification, setSuccessNotification } from '../../../reducers/notificationReducer'
import { updateOrgFunding } from '../../../reducers/organizationReducer'
import { PAGES } from '../../navigation/routes'

const items = [
    {value: 'EF', label: 'Exploring funding opportunities'},
    {value: 'PS', label: 'Pre-seed Stage'},
    {value: 'SR', label: 'Seed Round'},
    {value: 'SA', label: 'Series A Round'},
    {value: 'SB', label: 'Series B or Beyond'},
    {value: 'NF', label: 'Not Currently Seeking Funding'}
]

const DevelopmentFundraising = () => {
    const [value, setValue] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        if (!searchParams.get('org')) {
            navigate(PAGES.home.path)
            dispatch(setErrorNotification('Organization id not specified'))
        }
    }, [dispatch, navigate, searchParams])

    const handleFunding = async (dispatch) => {
        try {
            await dispatch(updateOrgFunding(searchParams.get('org'), value))
            navigate(PAGES.home.path)
            dispatch(setSuccessNotification('Organization funding set'))
        } catch {
            dispatch(setErrorNotification('Error updating organization funding'))
        }
    }

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <Typography variant='h4' gutterBottom>What phase of fundraising is your startup currently in?</Typography>
            <Typography variant='p'>Select one from below</Typography>

            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
                sx={{marginBottom: '20px', marginTop: '20px'}}
            >
                <Grid container spacing={0} maxWidth='sm'>
                    {items.map(choice =>
                        <Grid key={choice.value} item sm={6}>
                            <FormControlLabel sx={{border: '1px solid #C4C4C4', width: '280px', margin: '5px', borderRadius: '10px'}} value={choice.value} control={<Radio />} label={choice.label} />
                        </Grid>
                    )
                    }
                </Grid>
            </RadioGroup>

            <Box sx={{marginBottom: '20px', display: 'flex', justifyContent: 'end', width: '100%'}}>
                <Button variant='outlined' sx={{marginRight: '10px'}} onClick={() => navigate(`${PAGES.developmentChallenges.path}?org=${searchParams.get('org')}`)}>Back</Button>
                <Button variant='contained' sx={{color: '#fff', backgroundColor: '#DC6803', '&:hover': { backgroundColor: '#E8822A'}}} onClick={() => handleFunding(dispatch)}>Done</Button>
            </Box>
        </Box>
    )
}

export default DevelopmentFundraising