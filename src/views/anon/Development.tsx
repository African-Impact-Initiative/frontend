import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Stepper from '@mui/material/Stepper'
import Typography from '@mui/material/Typography'

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { setErrorNotification } from '../../../reducers/notificationReducer'
import { PAGES } from '../../navigation/routes'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'

const Development = ({component, step}) => {
    const user = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            if (user.anon) {
                dispatch(setErrorNotification('Forbidden: Not logged in'))
                navigate(PAGES.home.path)
            }
        }
    }, [user, dispatch, navigate])

    return (
        <Container maxWidth='xl' sx={{minHeight: '80vh'}}>
            <Box sx={{display: 'flex', alignItems: 'center', marginBottom: '10px', marginTop: '30px'}}>
                <AccountCircleRoundedIcon sx={{marginRight: '20px', width: '90px', height: '90px'}} />
                <Box>
                    <Typography variant='h2'>
                        Hi {user.first_name}, almost there!
                    </Typography>
                    <Typography variant='p'>
                        Just a few questions to help tailor your experience and resource recommendations
                    </Typography>
                </Box>
            </Box>
            <Divider light sx={{marginBottom: '20px', marginTop: '10px'}}/>
            <Component/>
            <Stepper activeStep={step} alternativeLabel sx={{margin: '40px'}}>
                <Step><StepLabel/></Step>
                <Step><StepLabel/></Step>
                <Step><StepLabel/></Step>
            </Stepper>
        </Container>
    )
}

export default Development