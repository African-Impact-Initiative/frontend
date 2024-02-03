import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { setErrorNotification, setSuccessNotification } from '../../../store/notificationReducer'
import { updateOrgChallenges } from '../../../store/organizationReducer'
import { developmentStepperProps, orgSearchParam } from './utils'
import PathConstants from '../../../navigation/pathConstants'
import { Id } from 'react-toastify'
import { AppDispatch } from '../../../store/store'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { CompanyChallenges } from '../../../types/organization'
import VBStepper from '../../../components/VBStepper'

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

const items: Array<{ value: CompanyChallenges, label: string }> = [
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
    const user = useAppSelector(state => state.user)
    const [formats, setFormats] = useState<Array<CompanyChallenges>>([])
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const maxFormatsLen = 3

    useEffect(() => {
        if (!searchParams.get(orgSearchParam)) {
            navigate(PathConstants.home)
            dispatch(setErrorNotification('Organization id not specified'))
        }
    }, [navigate, searchParams, dispatch])

    const handleChallenges = async (dispatch: AppDispatch) => {
        try {
            if (formats.length)
                await dispatch(updateOrgChallenges(searchParams.get(orgSearchParam) as Id, formats))
            navigate(`${PathConstants.developmentFundraising}?${orgSearchParam}=${searchParams.get(orgSearchParam)}`)
            dispatch(setSuccessNotification('Organization challenges set'))
        } catch {
            dispatch(setErrorNotification('Error updating company information'))
        }
    }

    const handleFormat = (e: React.MouseEvent<HTMLElement>, newFormats: Array<CompanyChallenges>) => {
        e.preventDefault()
        if (newFormats.length <= maxFormatsLen)
            setFormats(newFormats)
    }

    const CompanyDevelopmentChallenges = (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <Typography variant='h4' gutterBottom>What are the primary challenges your startup is facing right now?</Typography>
            <Typography>Select three options from below</Typography>

            <StyledToggleButtonGroup
                size='small'
                value={formats}
                onChange={handleFormat}
                sx={{width: '500px', flexWrap: 'wrap', display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '20px'}}

            >
                {items.map(item =>
                    <ToggleButton key={item.value!} value={item.value!} aria-label={item.value!} sx={{border: '1px solid #C4C4C4 !important', margin: '8px !important'}}>
                        {item.label}
                    </ToggleButton>)
                }
            </StyledToggleButtonGroup>

            <Box sx={{marginBottom: '20px', display: 'flex', justifyContent: 'end', width: '100%'}}>
                <Button variant='outlined' sx={{marginRight: '10px'}} onClick={() => navigate(`${PathConstants.developmentStage}?${orgSearchParam}=${searchParams.get(orgSearchParam)}`)}>Back</Button>
                <Button variant='contained' sx={{color: '#fff', backgroundColor: '#DC6803', '&:hover': { backgroundColor: '#E8822A'}}} onClick={() => handleChallenges(dispatch)}>Continue</Button>
            </Box>
        </Box>
    )

    return <VBStepper Component={CompanyDevelopmentChallenges} currentStep={1} stepCount={developmentStepperProps.stepCount} title={developmentStepperProps.title(user.data!.firstName)} tagline={developmentStepperProps.tagline} />
}

export default DevelopmentChallenges