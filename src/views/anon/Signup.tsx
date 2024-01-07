import { useState } from 'react'
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
import { ForgotStyle } from '../../utils/styles'

import { setErrorNotification } from '../../store/notificationReducer'
import { createUser } from '../../store/appUserReducer'
import { useAppDispatch } from '../../hooks/redux'
import PathConstants from '../../navigation/pathConstants'
import { AppDispatch } from '../../store/store'
import { VBTextField } from '../../components/VBForms'
import User, { emptyUser } from '../../types/user'

import person from '../../assets/person.svg'
import { useForm, useFormWithErrorAndHelper, useFormWithHelper } from '../../hooks/form'

const Signup = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const minLength = 0
    const minPwdLength = 8

    const [firstName, setFirstName] = useForm('')
    const [lastName, setLastName] = useForm('')
    const [email, setEmail, emailHelper, setEmailHelper] = useFormWithHelper('')
    const [password, setPassword, passwordError, setPasswordError, passwordHelper, setPasswordHelper] = useFormWithErrorAndHelper('')
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [confirmPassword, setConfirmPassword, confirmPasswordError, setConfirmPasswordError, confirmPasswordHelper, setConfirmPasswordHelper] = useFormWithErrorAndHelper('')
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

    const handleSubmit = async (event: React.FormEvent<HTMLElement>) => {
        event.preventDefault()
        actualSubmit(dispatch)
    }

    const actualSubmit = async(dispatch: AppDispatch) => {
        if(validateConfirmPassword() && validateEmail() && validatePassword()) {
            try {
                const user: User = {...emptyUser}
                user.email = email
                user.firstName = firstName
                user.lastName = lastName
                user.password = password

                await dispatch(createUser(user))
                navigate(PathConstants.signUpVerification, {state: {email: email}})
            } catch {
                dispatch(setErrorNotification('Error creating account, please try again later!'))
            }
        } else
            await dispatch(setErrorNotification('Please fix all form errors before submission'))
    }

    return (
        <Grid container spacing={2} sx={ForgotStyle.container}>
            <Grid item xs={12} md={5} lg={6}>
                <Container maxWidth='xl'>
                    <Typography variant='h3' component='div' sx={ForgotStyle.title.style}>
                        Sign up
                    </Typography>
                    <Box style={ForgotStyle.googleContainer}>
                        <Button variant='outlined' sx={ForgotStyle.google.style} {/* onClick={()=>getToken()}*/...{}}>
                            <GoogleIcon />&nbsp;Sign Up with Google
                        </Button>
                        <Button variant='outlined' sx={ForgotStyle.google.style} {/* onClick={()=>getToken()}*/...{}}>
                            <LinkedInIcon />&nbsp;Sign Up with LinkedIn
                        </Button>
                    </Box>
                    <Divider sx={ForgotStyle.divider}>
                        Or Sign Up With Email
                    </Divider>
                    <form onSubmit={handleSubmit} style={{width: '100%', marginTop: '10px', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <VBTextField
                                    label='First Name'
                                    value={firstName}
                                    setter={setFirstName}
                                    required={true}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <VBTextField
                                    label='Last Name'
                                    value={lastName}
                                    setter={setLastName}
                                    required={true}
                                />
                            </Grid>
                            <Grid item xs={12}>
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
                        <Button sx={ForgotStyle.button.style} variant='contained' type='submit'>Get Started</Button>
                    </form>
                </Container>
            </Grid>
            <Grid item md={7} lg={6} sx={ForgotStyle.imageSection}>
                <Container sx={{...ForgotStyle.imageSectionContainer.style, background: `url(${person}) no-repeat center right`, backgroundSize: 'contain'}}>
                </Container>
            </Grid>
        </Grid>
    )
}

export default Signup