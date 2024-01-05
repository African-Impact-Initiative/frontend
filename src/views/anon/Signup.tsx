import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

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
import { PAGES } from '../navigation/routes'
import { ForgotStyle } from '../styles'

import { setErrorNotification } from '../../reducers/notificationReducer'
import { createUser } from '../../reducers/userReducer'

const Signup = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const minLength = 0
    const minPwdLength = 8

    const [firstName, setFirstName] = useState('')
    const [firstNameHelper, setFirstNameHelper] = useState('')
    const [firstNameError, setFirstNameError] = useState(false)
    const [lastName, setLastName] = useState('')
    const [lastNameHelper, setLastNameHelper] = useState('')
    const [lastNameError, setLastNameError] = useState(false)
    const [email, setEmail] = useState('')
    const [emailHelper, setEmailHelper] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState(false)
    const [passwordHelper, setPasswordHelper] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState(false)
    const [confirmPasswordHelper, setConfirmPasswordHelper] = useState('')
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)

    const validateConfirmPassword = () => {
        if((password !== confirmPassword && confirmPassword.length > minLength) || (password.length > minLength && password !== confirmPassword)) {
            setConfirmPasswordHelper('Passwords Do Not Match!')
            setConfirmPasswordError(true)
            return false
        } else {
            setConfirmPasswordHelper('')
            setConfirmPasswordError(false)
            return true
        }
    }

    const validatePassword = () => {
        validateConfirmPassword()
        if(password === '') {
            setPasswordHelper('Required Field!')
            setPasswordError(true)
            return false
        } else if(password.length < minPwdLength) {
            setPasswordHelper(`Minimum Length ${minPwdLength}!`)
            setPasswordError(true)
            return false
        } else {
            setPasswordHelper('')
            setPasswordError(false)
            return true
        }
    }

    const validateName = (val, helper, error) => {
        if(val === '') {
            helper('Required Field!')
            error(true)
            return false
        } else {
            helper('')
            error(false)
            return true
        }
    }

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

    const handleSubmit = async (event) => {
        event.preventDefault()
        actualSubmit(dispatch)
    }

    const actualSubmit = async(dispatch) => {
        if(validateConfirmPassword()
            && validateName(firstName, setFirstNameHelper, setFirstNameError)
            && validateName(lastName, setLastNameHelper, setLastNameError)
            && validateEmail() && validatePassword()) {
            try {
                await dispatch(createUser(email, password, firstName, lastName))
                navigate(PAGES.signUpVerification.path, {state: {email: email}})
            } catch {
                dispatch(setErrorNotification('Error creating account, please try again later!'))
            }
        } else
            await dispatch(setErrorNotification('Please fix all form errors before submission'))
    }

    return (
        <Grid container spacing={2} sx={ForgotStyle.container}>
            <Grid item xs={12} md={5} lg={6}>
                <Container {...ForgotStyle.margins}>
                    <Typography sx={ForgotStyle.title.style} {...ForgotStyle.title.props}>
                        Sign up
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
                        Or Sign Up With Email
                    </Divider>
                    <form onSubmit={handleSubmit} style={ForgotStyle.form}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label='First Name'
                                    value={firstName}
                                    onBlur={() => validateName(firstName, setFirstNameHelper, setFirstNameError)}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    helperText={firstNameHelper}
                                    error={firstNameError}
                                    required
                                    sx={{width: '100%', marginTop: '10px', marginBottom: '10px'}}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label='Last Name'
                                    value={lastName}
                                    onBlur={() => validateName(lastName, setLastNameHelper, setLastNameError)}
                                    onChange={(e) => setLastName(e.target.value)}
                                    helperText={lastNameHelper}
                                    error={lastNameError}
                                    required
                                    sx={{width: '100%', marginTop: '10px', marginBottom: '10px'}}
                                />
                            </Grid>
                            <Grid item xs={12}>
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
                                />
                            </Grid>
                            <Grid item xs={12}>
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
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label='Confirm Password'
                                    value={confirmPassword}
                                    onBlur={() => validateConfirmPassword()}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    helperText={confirmPasswordHelper}
                                    error={confirmPasswordError}
                                    required
                                    type={confirmPasswordVisible? 'text' : 'password'}
                                    sx={{width: '100%', marginTop: '10px', marginBottom: '10px'}}
                                    InputProps={{
                                        endAdornment:
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                                                    edge="end"
                                                >
                                                    {confirmPasswordVisible ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Button sx={ForgotStyle.button.style} {...ForgotStyle.button.props} type='submit'>Get Started</Button>
                    </form>
                </Container>
            </Grid>
            <Grid item md={7} lg={6} sx={ForgotStyle.imageSection}>
                <Container sx={{...ForgotStyle.imageSectionContainer.style, background: `url(${'/static/site-imgs/person.svg'}) no-repeat center right`, backgroundSize: 'contain'}}>
                </Container>
            </Grid>
        </Grid>
    )
}

export default Signup