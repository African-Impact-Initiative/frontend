import { useNavigate } from 'react-router-dom'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { MuiFileInput } from 'mui-file-input'

import { setErrorNotification } from '../../../store/notificationReducer'
import { updatePersonalInfo } from '../../../store/appUserReducer'
import { countryList } from '../../../utils/countries'
import { AppDispatch } from '../../../store/store'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { useForm, useFormWithHelper } from '../../../hooks/form'
import PathConstants from '../../../navigation/pathConstants'
import VBLeftSidebarWithView from '../../../components/VBLeftSideBarWithView'
import { personalInfo, userOnboardingOutline } from './utils'
import { VBSelect, VBTextField } from '../../../components/VBForms'

const PersonalInfo = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.user)

    const [firstName, setFirstName] = useForm(user.data!.firstName)
    const [lastName, setLastName] = useForm(user.data!.lastName)
    const [linkedin, setLinkedin, linkedinHelper, setLinkedinHelper] = useFormWithHelper('')
    const [role, setRole] = useForm('')
    const [country, setCountry] = useForm('')
    const [bio, setBio] = useForm('')
    const [file, setFile] = useForm<File | null>(null)

    const updateFile = (newFile: File | null) => {
        setFile(newFile)
    }

    const validateLinkedIn = () => {
        const re = /^https:\/\/[a-z]{2,3}\.linkedin\.com\/in\/.*$/
        if (linkedin === '') {
            setLinkedinHelper('')
            return true
        } else if (!linkedin.match(re)) {
            setLinkedinHelper('Invalid LinkedIn URL')
            return false
        } else {
            setLinkedinHelper('')
            return true
        }
    }

    const actualSubmit = async (dispatch: AppDispatch) => {
        try {
            const data = {
                firstName: firstName,
                lastName: lastName,
                role: role,
                linkedin: linkedin,
                bio: bio,
                country: country,
            }

            if(validateLinkedIn()) {
                await dispatch(updatePersonalInfo(data))
                navigate(PathConstants.onboarding)
            } else
                dispatch(setErrorNotification('Please fix all form errors before submission'))

        } catch {
            dispatch(setErrorNotification('Error updating personal information'))
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault()
        actualSubmit(dispatch)
    }

    const handleCancel = () => {
        dispatch(setErrorNotification('You will not be able to create or join organizations without filling the required information'))
        navigate(PathConstants.home)
    }

    const UserPersonalInfo = (
        <Box>
            <Typography variant='h4' sx={{marginBottom: '10px'}}>
                Personal Information
            </Typography>
            <Typography>
                Provide your personal details here.
            </Typography>
            <Divider light sx={{marginBottom: '20px', marginTop: '10px'}}/>
            <form onSubmit={handleSubmit} encType='multipart/form-data'>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h6' gutterBottom>First Name</Typography>
                        <VBTextField
                            size='small'
                            label='First Name'
                            value={firstName}
                            required={true}
                            setter={setFirstName}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h6' gutterBottom>Last Name</Typography>
                        <VBTextField
                            size='small'
                            label='Last Name'
                            value={lastName}
                            required={true}
                            setter={setLastName}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Divider light sx={{marginBottom: '10px'}}/>
                        <Typography variant='h6' gutterBottom>Email</Typography>
                        <TextField
                            size='small'
                            label='Email'
                            placeholder='email@example.com'
                            value={user.data!.email}
                            disabled
                            type='email'
                            sx={{width: '100%', marginTop: '10px', marginBottom: '10px'}}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Divider light sx={{marginBottom: '10px'}}/>
                        <Typography variant='h6' gutterBottom>LinkedIn</Typography>
                        <VBTextField
                            size='small'
                            label='LinkedIn'
                            value={linkedin}
                            validator={validateLinkedIn}
                            helper={linkedinHelper}
                            type='url'
                            setter={setLinkedin}
                            required={false}
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
                        <VBTextField
                            size='small'
                            label='Role'
                            value={role}
                            required={true}
                            setter={setRole}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Divider light sx={{marginBottom: '10px'}}/>
                        <Typography variant='h6' gutterBottom>Country</Typography>
                        <VBSelect
                            value={country}
                            label='Country'
                            size='small'
                            required={true}
                            setter={setCountry}
                            list={countryList}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Divider light sx={{marginBottom: '10px'}}/>
                        <Typography variant='h6' gutterBottom>Your Introduction</Typography>
                        <VBTextField
                            size='small'
                            label='Bio'
                            placeholder='Enter your bio here...'
                            inputProps={{ maxLength: 300 }}
                            value={bio}
                            helper={`${bio.length}/300 characters`}
                            multiline={true}
                            rows={3}
                            setter={setBio}
                            required={false}
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

    return <VBLeftSidebarWithView Component={UserPersonalInfo} componentTitle={personalInfo.title} title={userOnboardingOutline.title(user.data!.firstName)} tagline={userOnboardingOutline.tagline} list={userOnboardingOutline.list} />
}

export default PersonalInfo