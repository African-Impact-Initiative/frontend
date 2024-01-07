import { Link, useLocation } from 'react-router-dom'

import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { ForgotStyle } from '../../utils/styles'
import PathConstants from '../../navigation/pathConstants'

import person from '../../assets/person.svg'
import VBContentSectionWithImage from '../../components/VBContentSectionWithImage'

const VerificationSent = () => {
    const {state} = useLocation()

    const Component = (
        <Container maxWidth='sm' sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <Typography variant='h3' component='div' sx={ForgotStyle.title.style} gutterBottom>
                Verification email sent
            </Typography>
            <Typography variant='subtitle1' gutterBottom>
                An email has been sent to {state.email}. Click the link in your email to verify your account. If you can&apos;t find the email, please check your spam folder.
            </Typography>
            <Divider sx={{...ForgotStyle.divider, width:'100%'}}>
                OR
            </Divider>
            <Button sx={ForgotStyle.button.style} variant='contained' type='submit'>Resend the email</Button>
            <Typography variant='subtitle1' gutterBottom>
                Already have an account?  <Link to={PathConstants.login} style={ForgotStyle.registerLink}>
                    <Typography component='span' fontWeight='bold' sx={ForgotStyle.createAccount.style}>
                        Log in
                    </Typography>
                </Link>
            </Typography>
        </Container>
    )

    return <VBContentSectionWithImage Component={Component} image={person} />
}

export default VerificationSent