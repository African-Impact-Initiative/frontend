import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { MuiFileInput } from 'mui-file-input'

import { useDispatch } from 'react-redux'
import { setErrorNotification } from '../../../reducers/notificationReducer'
import { updatePersonalInfo } from '../../../reducers/userReducer'
import { PAGES } from '../../navigation/routes'
import { countryList } from '../../utils/countries'

const PersonalInfo = ({user}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const email = user.email

    const [firstName, setFirstName] = useState(user.first_name)
    const [firstNameHelper, setFirstNameHelper] = useState('')
    const [firstNameError, setFirstNameError] = useState(false)
    const [lastName, setLastName] = useState(user.last_name)
    const [lastNameHelper, setLastNameHelper] = useState('')
    const [lastNameError, setLastNameError] = useState(false)
    const [linkedin, setLinkedin] = useState('')
    const [linkedinError, setLinkedinError] = useState(false)
    const [linkedinHelper, setLinkedinHelper] = useState('')
    const [role, setRole] = useState('')
    const [roleError, setRoleError] = useState(false)
    const [roleHelper, setRoleHelper] = useState('')
    const [country, setCountry] = useState('')
    const [bio, setBio] = useState('')
    const [file, setFile] = useState(null)

    const updateFile = (newFile) => {
        setFile(newFile)
    }

    const validateField = (val, helper, error) => {
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

    const validateLinkedIn = () => {
        const re = /^https:\/\/[a-z]{2,3}\.linkedin\.com\/in\/.*$/
        if (linkedin === '') {
            setLinkedinHelper('')
            setLinkedinError(false)
            return true
        } else if (!linkedin.match(re)) {
            setLinkedinHelper('Invalid LinkedIn URL')
            setLinkedinError(true)
            return false
        } else {
            setLinkedinHelper('')
            setLinkedinError(false)
            return true
        }
    }

    const actualSubmit = async (dispatch) => {
        try {
            if(validateLinkedIn()
                && validateField(firstName, setFirstNameHelper, setFirstNameError)
                && validateField(lastName, setLastNameHelper, setLastNameError)
                && validateField(role, setRoleHelper, setRoleError)) {
                await dispatch(updatePersonalInfo(firstName, lastName, role, country, linkedin, bio, file))
                navigate(PAGES.onboarding.path)
            } else
                dispatch(setErrorNotification('Please fix all form errors before submission'))

        } catch {
            dispatch(setErrorNotification('Error updating personal information'))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        actualSubmit(dispatch)
    }

    const handleCancel = () => {
        dispatch(setErrorNotification('You will not be able to create or join organizations without filling the required information'))
        navigate(PAGES.home.path)
    }

    return (
        <Box>
            <Typography variant='h4' sx={{marginBottom: '10px'}}>
                Personal Information
            </Typography>
            <Typography variant='p'>
                Provide your personal details here.
            </Typography>
            <Divider light sx={{marginBottom: '20px', marginTop: '10px'}}/>
            <form onSubmit={handleSubmit} encType='multipart/form-data'>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h6' gutterBottom>First Name</Typography>
                        <TextField
                            size='small'
                            label='First Name'
                            value={firstName}
                            onBlur={() => validateField(firstName, setFirstNameHelper, setFirstNameError)}
                            onChange={(e) => setFirstName(e.target.value)}
                            helperText={firstNameHelper}
                            error={firstNameError}
                            required
                            sx={{width: '100%', marginTop: '10px', marginBottom: '10px'}}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h6' gutterBottom>Last Name</Typography>
                        <TextField
                            size='small'
                            label='Last Name'
                            value={lastName}
                            onBlur={() => validateField(lastName, setLastNameHelper, setLastNameError)}
                            onChange={(e) => setLastName(e.target.value)}
                            helperText={lastNameHelper}
                            error={lastNameError}
                            required
                            sx={{width: '100%', marginTop: '10px', marginBottom: '10px'}}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Divider light sx={{marginBottom: '10px'}}/>
                        <Typography variant='h6' gutterBottom>Email</Typography>
                        <TextField
                            size='small'
                            label='Email'
                            placeholder='email@example.com'
                            value={email}
                            disabled
                            type='email'
                            sx={{width: '100%', marginTop: '10px', marginBottom: '10px'}}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Divider light sx={{marginBottom: '10px'}}/>
                        <Typography variant='h6' gutterBottom>LinkedIn</Typography>
                        <TextField
                            size='small'
                            label='LinkedIn'
                            value={linkedin}
                            onBlur={() => validateLinkedIn()}
                            onChange={(e) => setLinkedin(e.target.value)}
                            helperText={linkedinHelper}
                            error={linkedinError}
                            type='url'
                            sx={{width: '100%', marginTop: '10px', marginBottom: '10px'}}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Divider light sx={{marginBottom: '10px'}}/>
                        <Typography variant='h6' gutterBottom>Your Profile Photo</Typography>
                        <MuiFileInput
                            placeholder='Your Photo'
                            value={file}
                            onChange={updateFile}
                            helperText='SVG, PNG, or JGP (max. 800x400px)'
                            sx={{
                                '& fieldset': { border: 'dashed 2px #C4C4C4' },
                                input: { cursor: 'pointer' },
                                '&:hover fieldset': { cursor: 'pointer' },
                                width: '100%', marginTop: '10px', marginBottom: '10px'
                            }}
                            inputProps={{ accept: '.png, .jpeg, .jpg, .svg' }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Divider light sx={{marginBottom: '10px'}}/>
                        <Typography variant='h6' gutterBottom>Your Role</Typography>
                        <TextField
                            size='small'
                            label='Role'
                            value={role}
                            onBlur={() => validateField(role, setRoleHelper, setRoleError)}
                            onChange={(e) => setRole(e.target.value)}
                            helperText={roleHelper}
                            error={roleError}
                            required
                            sx={{width: '100%', marginTop: '10px', marginBottom: '10px'}}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Divider light sx={{marginBottom: '10px'}}/>
                        <Typography variant='h6' gutterBottom>Country</Typography>
                        <TextField
                            value={country}
                            select
                            label="Country"
                            fullWidth
                            size='small'
                            onChange={(e)=>setCountry(e.target.value)}
                            sx={{width: '100%', marginTop: '10px', marginBottom: '10px'}}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {countryList.map(country => <MenuItem key={country.value} value={country.value}>{country.label}</MenuItem>)}
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider light sx={{marginBottom: '10px'}}/>
                        <Typography variant='h6' gutterBottom>Your Introduction</Typography>
                        <TextField
                            size='small'
                            label='Bio'
                            placeholder='Enter your bio here...'
                            inputProps={{maxLength: 300}}
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            helperText={`${bio.length}/300 characters`}
                            multiline
                            rows={3}
                            sx={{width: '100%', marginTop: '10px', marginBottom: '10px'}}
                        />
                    </Grid>
                </Grid>
                <Divider light sx={{marginBottom: '10px', marginTop: '20px'}} />
                <Box sx={{marginBottom: '20px', display: 'flex', justifyContent: 'end'}}>
                    <Button variant='outlined' onClick={() => handleCancel()} sx={{marginRight: '10px'}}>Cancel</Button>
                    <Button variant='contained' sx={{color: '#fff', backgroundColor: '#DC6803', '&:hover': { backgroundColor: '#E8822A'}}} type='submit'>Continue</Button>
                </Box>
            </form>
        </Box>
    )
}

export default PersonalInfo