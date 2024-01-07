import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { setErrorNotification, setSuccessNotification } from '../../../reducers/notificationReducer'
import { updateOrgChallenges } from '../../../reducers/organizationReducer'
import { PAGES } from '../../navigation/routes'

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    '& .MuiToggleButtonGroup-grouped': {
        margin: theme.spacing(0.5),
        border: 0,
        '&.Mui-disabled': {
            border: 0,
        },
        '&:not(:first-of-type)': {
            borderRadius: theme.shape.borderRadius,
        },
        '&:first-of-type': {
            borderRadius: theme.shape.borderRadius,
        },
    },
}))

const items = [
    {value: 'SF', label: 'Securing funding'},
    {value: 'PD', label: 'Product design and development'},
    {value: 'BC', label: 'Building a customer base'},
    {value: 'BS', label: 'Business strategy and planning'},
    {value: 'MB', label: 'Marketing and branding'},
    {value: 'SO', label: 'Scaling operations'},
    {value: 'MF', label: 'Managing finances'},
    {value: 'LR', label: 'Legal and regulatory compliance'},
    {value: 'HT', label: 'Hiring talent'},
]

const DevelopmentChallenges = () => {
    const [formats, setFormats] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const maxFormatsLen = 3

    useEffect(() => {
        if (!searchParams.get('org')) {
            navigate(PAGES.home.path)
            dispatch(setErrorNotification('Organization id not specified'))
        }
    }, [navigate, searchParams, dispatch])

    const handleChallenges = async (dispatch) => {
        try {
            if (formats.length)
                await dispatch(updateOrgChallenges(searchParams.get('org'), formats))
            navigate(`${PAGES.developmentFundraising.path}?org=${searchParams.get('org')}`)
            dispatch(setSuccessNotification('Organization challenges set'))
        } catch {
            dispatch(setErrorNotification('Error updating company information'))
        }
    }

    const handleFormat = (event, newFormats) => {
        if (newFormats.length <= maxFormatsLen)
            setFormats(newFormats)
    }

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <Typography variant='h4' gutterBottom>What are the primary challenges your startup is facing right now?</Typography>
            <Typography variant='p'>Select three options from below</Typography>

            <StyledToggleButtonGroup
                size="small"
                value={formats}
                onChange={handleFormat}
                sx={{width: '500px', flexWrap: 'wrap', display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '20px'}}

            >
                {items.map(item =>
                    <ToggleButton key={item.value} value={item.value} aria-label={item.value} sx={{border: '1px solid #C4C4C4 !important', margin: '8px !important'}}>
                        {item.label}
                    </ToggleButton>)
                }
            </StyledToggleButtonGroup>

            <Box sx={{marginBottom: '20px', display: 'flex', justifyContent: 'end', width: '100%'}}>
                <Button variant='outlined' sx={{marginRight: '10px'}} onClick={() => navigate(`${PAGES.developmentStage.path}?org=${searchParams.get('org')}`)}>Back</Button>
                <Button variant='contained' sx={{color: '#fff', backgroundColor: '#DC6803', '&:hover': { backgroundColor: '#E8822A'}}} onClick={() => handleChallenges(dispatch)}>Continue</Button>
            </Box>
        </Box>
    )
}

export default DevelopmentChallenges