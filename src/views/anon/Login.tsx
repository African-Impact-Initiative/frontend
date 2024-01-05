import { useEffect, useState } from 'react'
import { Navigate, Link } from 'react-router-dom'

import GoogleIcon from '@mui/icons-material/Google'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { ForgotStyle } from '../../utils/styles'

import { setErrorNotification } from '../../store/notificationReducer'
import { login } from '../../store/appUserReducer'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import PathConstants from '../../navigation/pathConstants'

const Login = () => {
    const user = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()

    const [client, setClient] = useState([])
    const [email, setEmail] = useState('')
    const [emailHelper, setEmailHelper] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [passwordHelper, setPasswordHelper] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false)

    const getToken = () => {
        client.requestAccessToken()
    }

    // set up google client (until set user sees loading page)
    // very important!!!! do not remove the global google, it defines the
    // var google which is used to coneect to the google apis
    useEffect(() => {
        /* global google */
        // let c = google.accounts.oauth2.initTokenClient({
        //     client_id: import.meta.env.VITE_GOOGLE_ID,
        //     scope: 'profile email',
        //     callback: (tokenResponse) => {
        //         dispatch(googleLogin(
        //              tokenResponse.access_token
        //          ))
        //     },
        // })
        // setClient(c)
    }, [])

    const validateEmail = () => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(email === '') {
            setEmailHelper('Required Field!')
            setEmailError(true)
            return false
        } else if(!email.match(re)) {
            setEmailHelper('Invalid Email Address')
            setEmailError(true)
            return false
        } else {
            setEmailHelper('')
            setEmailError(false)
            return true
        }
    }

    const validatePassword = () => {
        if(password === '') {
            setPasswordHelper('Required Field!')
            setPasswordError(true)
            return false
        } else {
            setPasswordHelper('')
            setPasswordError(false)
            return true
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLElement>) => {
        event.preventDefault()
        if(validatePassword() && validateEmail())
            dispatch(login(email, password))
        else
            dispatch(setErrorNotification('Please fix the form errors before submission'))

    }

    if(user && !user.anon) {
        return (
            <Navigate to={PathConstants.home} />
        )
    }

    if(client === null) {
        return (
            <Container sx={ForgotStyle.loading}>
                {/* <Loading /> */}
            </Container>
        )
    }

    return (
        <Grid container spacing={2} sx={ForgotStyle.container}>
            <Grid item xs={12} md={5} lg={6}>
                <Container {...ForgotStyle.margins}>
                    <Typography sx={ForgotStyle.title.style} {...ForgotStyle.title.props}>
                        Login
                    </Typography>
                    <Box style={ForgotStyle.googleContainer}>
                        <Button sx={ForgotStyle.google.style} {...ForgotStyle.google.props} {/* onClick={()=>getToken()}*/...{}}>
                            <GoogleIcon />&nbsp;Sign Up with Google
                        </Button>
                        <Button sx={ForgotStyle.google.style} {...ForgotStyle.google.props} {/* onClick={()=>getToken()}*/...{}}>
                            <LinkedInIcon />&nbsp;Sign Up with LinkedIn
                        </Button>
                    </Box>
                    <Divider sx={ForgotStyle.divider}>
                        Or Sign In With Email
                    </Divider>
                    <form onSubmit={handleSubmit} style={ForgotStyle.form}>
                        <TextField
                            label='Email'
                            placeholder='email@example.com'
                            value={email}
                            onBlur={() => validateEmail()}
                            onChange={(e) => setEmail(e.target.value)}
                            helperText={emailHelper}
                            error={emailError}
                            required
                            type='email'
                            sx={{width: '100%', marginTop: '10px', marginBottom: '10px'}}
                            InputLabelProps={{ required: false }}
                        />
                        <TextField
                            label='Password'
                            value={password}
                            onBlur={() => validatePassword()}
                            onChange={(e) => setPassword(e.target.value)}
                            helperText={passwordHelper}
                            error={passwordError}
                            required
                            type={passwordVisible? 'text' : 'password'}
                            sx={{width: '100%', marginTop: '10px', marginBottom: '10px'}}
                            InputLabelProps={{ required: false }}
                            InputProps={{
                                endAdornment:
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => setPasswordVisible(!passwordVisible)}
                                            edge="end"
                                        >
                                            {passwordVisible ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                            }}
                        />
                        <Typography {...ForgotStyle.forgotPasswordText.props} sx={ForgotStyle.forgotPasswordText.style}>
                            <Link to={PathConstants.forgotPassword} style={ForgotStyle.forgotLink}>
                                {PathConstants.forgotPassword.title}?
                            </Link>
                        </Typography>
                        <Button sx={ForgotStyle.button.style} {...ForgotStyle.button.props} type='submit' onClick={handleSubmit}>Login</Button>
                    </form>
                    <Box sx={ForgotStyle.register}>
                        <Typography {...ForgotStyle.registerText.props} sx={ForgotStyle.registerText.style}>
                            Not Registered Yet?&nbsp;
                        </Typography>
                        <Link to={PathConstants.signUp} style={ForgotStyle.registerLink}>
                            <Typography {...ForgotStyle.createAccount.props} sx={ForgotStyle.createAccount.style}>
                                Create an Account
                            </Typography>
                        </Link>
                    </Box>
                </Container>
            </Grid>
            <Grid item md={7} lg={6} sx={ForgotStyle.imageSection}>
                <Container sx={{...ForgotStyle.imageSectionContainer.style, background: `url(${'/static/site-imgs/person.svg'}) no-repeat center right`, backgroundSize: 'contain'}}>
                </Container>
            </Grid>
        </Grid>
    )
}

export default Login