import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import InputAdornment from '@mui/material/InputAdornment'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { MuiFileInput } from 'mui-file-input'

import { setErrorNotification, setSuccessNotification } from '../../../reducers/notificationReducer'
import { createOrganization } from '../../../reducers/organizationReducer'
import { PAGES } from '../../navigation/routes'
import { industriesList } from '../../utils/industries'

const CompanyProfile = ({user}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [companyName, setCompanyName] = useState('')
    const [companyNameHelper, setCompanyNameHelper] = useState('')
    const [companyNameError, setCompanyNameError] = useState(false)
    const [companyWebsite, setCompanyWebsite] = useState('')
    const [url, setUrl] = useState('')
    const [linkedin, setLinkedin] = useState('')
    const [twitter, setTwitter] = useState('')
    const [facebook, setFacebook] = useState('')
    const [industry, setIndustry] = useState('')
    const [tagline, setTagline] = useState('')
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

    const actualSubmit = async (dispatch) => {
        try {
            if(validateField(companyName, setCompanyNameHelper, setCompanyNameError)) {
                let identifier = url
                if (!url)
                    identifier = companyName.toLowerCase().replace(' ', '-')

                await dispatch(createOrganization(companyName, identifier, user.id, companyWebsite, linkedin, twitter, facebook, industry, tagline, file))
                navigate(`${PAGES.developmentStage.path}?org=${identifier}`)
            } else
                dispatch(setErrorNotification('Please fix all form errors before submission'))

        } catch {
            dispatch(setErrorNotification('Error updating company information'))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        actualSubmit(dispatch)
    }

    const handleCancel = () => {
        dispatch(setSuccessNotification('Creation aborted'))
        navigate(PAGES.home.path)
    }

    return (
        <Box>
            <Typography variant='h4' sx={{marginBottom: '10px'}}>
                Company Profile
            </Typography>
            <Typography variant='p'>
                Update your company photo and details here.
            </Typography>
            <Divider light sx={{marginBottom: '20px', marginTop: '10px'}}/>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant='h6' gutterBottom>Company Information</Typography>
                        <TextField
                            size='small'
                            label='Company Name'
                            value={companyName}
                            placeholder='Enter your company name here'
                            onBlur={() => validateField(companyName, setCompanyNameHelper, setCompanyNameError)}
                            onChange={(e) => setCompanyName(e.target.value)}
                            helperText={companyNameHelper}
                            error={companyNameError}
                            required
                            sx={{width: '100%', marginTop: '10px', marginBottom: '10px'}}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            size='small'
                            label='Company Website'
                            placeholder='Enter your company site here'
                            value={companyWebsite}
                            onChange={(e) => setCompanyWebsite(e.target.value)}
                            sx={{width: '100%', marginTop: '10px', marginBottom: '10px'}}
                            type='url'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            size='small'
                            label='URL Identifier'
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            helperText='This will be the URL others see when viewing your company page, by default company name is used'
                            sx={{width: '100%', marginTop: '10px', marginBottom: '10px'}}
                            InputProps={{
                                startAdornment: <InputAdornment position='start'>venturebuild.com/profile/</InputAdornment>,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Divider light sx={{marginBottom: '10px'}}/>
                        <Typography variant='h6' gutterBottom>Industry</Typography>
                        <TextField
                            value={industry}
                            select
                            label="Industry"
                            fullWidth
                            size='small'
                            onChange={(e)=>setIndustry(e.target.value)}
                            sx={{width: '100%', marginTop: '10px', marginBottom: '10px'}}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {industriesList.map(industry => <MenuItem key={industry.value} value={industry.value}>{industry.label}</MenuItem>)}
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider light sx={{marginBottom: '10px'}}/>
                        <Typography variant='h6' gutterBottom>Company Introduction</Typography>
                        <TextField
                            size='small'
                            label='Company Tagline'
                            placeholder='Enter your company tagline here...'
                            inputProps={{maxLength: 150}}
                            value={tagline}
                            onChange={(e) => setTagline(e.target.value)}
                            helperText={`${tagline.length}/150 characters`}
                            multiline
                            rows={3}
                            sx={{width: '100%', marginTop: '10px', marginBottom: '10px'}}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Divider light sx={{marginBottom: '10px'}}/>
                        <Typography variant='h6' gutterBottom>Company Logo</Typography>
                        <MuiFileInput
                            placeholder='Company Logo'
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
                        <Typography variant='h6' gutterBottom>Socials</Typography>
                        <TextField
                            size='small'
                            label='Twitter'
                            value={twitter}
                            onChange={(e) => setTwitter(e.target.value)}
                            sx={{width: '100%', marginTop: '10px', marginBottom: '10px'}}
                            InputProps={{
                                startAdornment: <InputAdornment position='start'>twitter.com/</InputAdornment>,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            size='small'
                            label='FaceBook'
                            value={facebook}
                            onChange={(e) => setFacebook(e.target.value)}
                            sx={{width: '100%', marginTop: '10px', marginBottom: '10px'}}
                            InputProps={{
                                startAdornment: <InputAdornment position='start'>facebook.com/</InputAdornment>,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            size='small'
                            label='LinkedIn'
                            value={linkedin}
                            onChange={(e) => setLinkedin(e.target.value)}
                            sx={{width: '100%', marginTop: '10px', marginBottom: '10px'}}
                            InputProps={{
                                startAdornment: <InputAdornment position='start'>linkedin.com/company/</InputAdornment>,
                            }}
                        />
                    </Grid>
                </Grid>
                <Divider light sx={{marginBottom: '10px', marginTop: '20px'}} />
                <Box sx={{marginBottom: '20px', display: 'flex', justifyContent: 'end'}}>
                    <Button variant='outlined' sx={{marginRight: '10px'}} onClick={handleCancel}>Cancel</Button>
                    <Button variant='contained' sx={{color: '#fff', backgroundColor: '#DC6803', '&:hover': { backgroundColor: '#E8822A'}}} type='submit'>Continue</Button>
                </Box>
            </form>
        </Box>
    )
}

export default CompanyProfile