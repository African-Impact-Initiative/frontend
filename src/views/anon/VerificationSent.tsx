import { Link, useLocation } from 'react-router-dom'

import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { PAGES } from '../navigation/routes'
import { ForgotStyle } from '../styles'

const VerificationSent = () => {
    const {state} = useLocation()

    return (
        <Grid container spacing={2} sx={ForgotStyle.container}>
            <Grid item xs={12} md={5} lg={6}>
                <Container maxWidth='sm' sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <Typography sx={ForgotStyle.title.style} {...ForgotStyle.title.props} gutterBottom>
                        Verification email sent
                    </Typography>
                    <Typography variant='subtitle1' gutterBottom>
                        An email has been sent to {state.email}. Click the link in your email to verify your account. If you can&apos;t find the email, please check your spam folder.
                    </Typography>
                    <Divider sx={{...ForgotStyle.divider, width:'100%'}} gutterBottom>
                        OR
                    </Divider>
                    <Button sx={ForgotStyle.button.style} {...ForgotStyle.button.props} type='submit'>Resend the email</Button>
                    <Typography variant='subtitle1' gutterBottom>
                        Already have an account?  <Link to={PAGES.login.path} style={ForgotStyle.registerLink}>
                            <Typography {...ForgotStyle.createAccount.props} sx={ForgotStyle.createAccount.style}>
                                Log in
                            </Typography>
                        </Link>
                    </Typography>
                </Container>
            </Grid>
            <Grid item md={7} lg={6} sx={ForgotStyle.imageSection}>
                <Container sx={{...ForgotStyle.imageSectionContainer.style, background: `url(${'/static/site-imgs/person.svg'}) no-repeat center right`, backgroundSize: 'contain'}}>
                </Container>
            </Grid>
        </Grid>
    )
}

export default VerificationSent