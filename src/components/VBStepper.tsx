import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Stepper from '@mui/material/Stepper'
import Typography from '@mui/material/Typography'

interface IStepperProps {
    Component: JSX.Element,
    stepCount: number,
    currentStep: number,
    title: string,
    tagline: string,
}

const VBStepper = ({ Component, stepCount, currentStep, title, tagline }: IStepperProps) => {
    return (
        <Container maxWidth='xl' sx={{minHeight: '80vh'}}>
            <Box sx={{display: 'flex', alignItems: 'center', marginBottom: '10px', marginTop: '30px'}}>
                <AccountCircleRoundedIcon sx={{marginRight: '20px', width: '90px', height: '90px'}} />
                <Box>
                    <Typography variant='h2'>
                        {title}
                    </Typography>
                    <Typography>
                        {tagline}
                    </Typography>
                </Box>
            </Box>
            <Divider light sx={{marginBottom: '20px', marginTop: '10px'}}/>
            {Component}
            <Stepper activeStep={currentStep} alternativeLabel sx={{margin: '40px'}}>
                {
                    [...Array(stepCount).keys()].map(key => <Step key={`${title}-stepper-${key}`}><StepLabel/></Step>)
                }
            </Stepper>
        </Container>
    )
}

export default VBStepper