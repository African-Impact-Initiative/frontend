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
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { ForgotStyle } from '../../utils/styles'

import { setErrorNotification } from '../../store/notificationReducer'
import { login } from '../../store/appUserReducer'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import PathConstants from '../../navigation/pathConstants'
import { VBTextField } from '../../components/VBForms'

import person from '../../assets/person.svg'
import { useFormWithErrorAndHelper, useFormWithHelper } from '../../hooks/form'
import VBContentSectionWithImage from '../../components/VBContentSectionWithImage'

const Login = () => {
    const user = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()

    // const [client, setClient] = useState<google.accounts.oauth2.TokenClient | null>(null)
    const [email, setEmail, emailHelper, setEmailHelper] = useFormWithHelper('')
    const [password, setPassword, passwordError, setPasswordError, passwordHelper, setPasswordHelper] = useFormWithErrorAndHelper('')
    const [passwordVisible, setPasswordVisible] = useState(false)

    // const getToken = () => {
    //     client!.requestAccessToken()
    // }

    // set up google client (until set user sees loading page)
    // very important!!!! do not remove the global google, it defines the
    // var google which is used to coneect to the google apis
    useEffect(() => {
        /* global google */
        // let c = google.accounts.oauth2.initTokenClient({
        //     client_id: import.meta.env.VITE_GOOGLE_ID,
        //     scope: 'profile email',
        //     callback: (tokenResponse) => {
        //         dispatch(googleLogin(tokenResponse.access_token))
        //     },
        // })
        // setClient(c)
    }, [])

    const validateEmail = () => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(email === '') {
            setEmailHelper('Required Field!')
            return false
        } else if(!email.match(re)) {
            setEmailHelper('Invalid Email Address')
            return false
        } else {
            setEmailHelper('')
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

    // if(client === null) {
    //     return (
    //         <Container sx={ForgotStyle.loading}>
    //             <Loading />
    //         </Container>
    //     )
    // }

    const Component = (
        <Container maxWidth='xl'>
            <Typography variant='h3' component='div' sx={ForgotStyle.title.style}>
                Login
            </Typography>
            <Box style={ForgotStyle.googleContainer}>
                <Button variant='outlined' sx={ForgotStyle.google.style} {/*onClick={()=>getToken()}*/...{}}>
                    <GoogleIcon />&nbsp;Sign Up with Google
                </Button>
                <Button variant='outlined' sx={ForgotStyle.google.style} {/*onClick={()=>getToken()}*/...{}}>
                    <LinkedInIcon />&nbsp;Sign Up with LinkedIn
                </Button>
            </Box>
            <Divider sx={ForgotStyle.divider}>
                Or Sign In With Email
            </Divider>
            <form onSubmit={handleSubmit} style={{width: '100%', marginTop: '10px', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <VBTextField
                    label='Email'
                    placeholder='email@example.com'
                    value={email}
                    helper={emailHelper}
                    setter={setEmail}
                    validator={validateEmail}
                    required={true}
                    type='email'
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
                <Typography component='div' fontWeight='bold' sx={ForgotStyle.forgotPasswordText.style}>
                    <Link to={PathConstants.forgotPassword} style={ForgotStyle.forgotLink}>
                        Forgot Password?
                    </Link>
                </Typography>
                <Button sx={ForgotStyle.button.style} variant='contained' type='submit' onClick={handleSubmit}>Login</Button>
            </form>
            <Box sx={ForgotStyle.register}>
                <Typography  component='span' fontWeight='bold' sx={ForgotStyle.registerText.style}>
                    Not Registered Yet?&nbsp;
                </Typography>
                <Link to={PathConstants.signUp} style={ForgotStyle.registerLink}>
                    <Typography component='span' fontWeight='bold' sx={ForgotStyle.createAccount.style}>
                        Create an Account
                    </Typography>
                </Link>
            </Box>
        </Container>
    )

    return <VBContentSectionWithImage Component={Component} image={person} />
}

export default Login