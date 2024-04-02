import { useNavigate } from 'react-router-dom'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import InputAdornment from '@mui/material/InputAdornment'
import Typography from '@mui/material/Typography'

import { MuiFileInput } from 'mui-file-input'

import { setErrorNotification, setSuccessNotification } from '../../../store/notificationReducer'
import { createOrganization } from '../../../store/organizationReducer'
import { industriesList } from '../../../utils/industries'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { useForm } from '../../../hooks/form'
import { AppDispatch } from '../../../store/store'
import PathConstants from '../../../navigation/pathConstants'
import { emptyOrganization } from '../../../types/organization'
import { VBSelect, VBTextField } from '../../../components/VBForms'
import VBLeftSidebarWithView from '../../../components/VBLeftSideBarWithView'
import { companyProfile, orgSearchParam, userOnboardingOutline } from './utils'

const CompanyProfile = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.user)

    const [companyName, setCompanyName] = useForm('')
    const [companyWebsite, setCompanyWebsite] = useForm('')
    const [url, setUrl] = useForm('')
    const [linkedin, setLinkedin] = useForm('')
    const [twitter, setTwitter] = useForm('')
    const [facebook, setFacebook] = useForm('')
    const [industry, setIndustry] = useForm('')
    const [tagline, setTagline] = useForm('')
    const [file, setFile] = useForm<File | null>(null)

    const updateFile = (newFile: File | null) => {
        setFile(newFile)
    }

    const actualSubmit = async (dispatch: AppDispatch) => {
        try {
            let identifier = url
            if (!url)
                identifier = companyName.toLowerCase().replace(' ', '-')

            const org = {...emptyOrganization}
            org.identifier = identifier
            org.name = companyName            
            org.website = companyWebsite
            if (linkedin)
                org.linkedin = `https://www.linkedin.com/company/${linkedin}`
            if (twitter)
                org.twitter = `https://www.twitter.com/${twitter}`
            if (facebook)
                org.facebook = `https://www.facebook.com/${facebook}`
            if (industry)
                org.industries.push(industry)
            org.tagline = tagline

            await dispatch(createOrganization(org))
            navigate(`${PathConstants.developmentStage}?${orgSearchParam}=${identifier}`)
        } catch {
            dispatch(setErrorNotification('Error updating company information'))
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault()
        actualSubmit(dispatch)
    }

    const handleCancel = () => {
        dispatch(setSuccessNotification('Creation aborted'))
        navigate(PathConstants.home)
    }

    const CreateCompany = (
        <Box>
            <Typography variant='h4' sx={{marginBottom: '10px'}}>
                Company Profile
            </Typography>
            <Typography>
                Update your company photo and details here.
            </Typography>
            <Divider light sx={{marginBottom: '20px', marginTop: '10px'}}/>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant='h6' gutterBottom>Company Information</Typography>
                        <VBTextField
                            size='small'
                            label='Company Name'
                            value={companyName}
                            placeholder='Enter your company name here'
                            required={true}
                            setter={setCompanyName}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <VBTextField
                            size='small'
                            label='Company Website'
                            placeholder='Enter your company site here'
                            value={companyWebsite}
                            type='url'
                            setter={setCompanyWebsite}
                            required={false}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <VBTextField
                            size='small'
                            label='URL Identifier'
                            value={url}
                            helper='This will be the URL others see when viewing your company page, by default company name is used'
                            InputProps={{
                                startAdornment: <InputAdornment position='start'>venturebuild.com/profile/</InputAdornment>,
                            }}
                            setter={setUrl}
                            required={false}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Divider light sx={{marginBottom: '10px'}}/>
                        <Typography variant='h6' gutterBottom>Industry</Typography>
                        <VBSelect
                            value={industry}
                            label='Industry'
                            size='small'
                            required={false}
                            list={industriesList}
                            setter={setIndustry}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Divider light sx={{marginBottom: '10px'}}/>
                        <Typography variant='h6' gutterBottom>Company Introduction</Typography>
                        <VBTextField
                            size='small'
                            label='Company Tagline'
                            placeholder='Enter your company tagline here...'
                            inputProps={{maxLength: 150}}
                            value={tagline}
                            helper={`${tagline.length}/150 characters`}
                            multiline
                            rows={3}
                            setter={setTagline}
                            required={false}
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
                        <VBTextField
                            size='small'
                            label='Twitter'
                            value={twitter}
                            InputProps={{
                                startAdornment: <InputAdornment position='start'>twitter.com/</InputAdornment>,
                            }}
                            setter={setTwitter}
                            required={false}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <VBTextField
                            size='small'
                            label='FaceBook'
                            value={facebook}
                            InputProps={{
                                startAdornment: <InputAdornment position='start'>facebook.com/</InputAdornment>,
                            }}
                            setter={setFacebook}
                            required={false}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <VBTextField
                            size='small'
                            label='LinkedIn'
                            value={linkedin}
                            InputProps={{
                                startAdornment: <InputAdornment position='start'>linkedin.com/company/</InputAdornment>,
                            }}
                            setter={setLinkedin}
                            required={false}
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

    return <VBLeftSidebarWithView Component={CreateCompany} componentTitle={companyProfile.title} title={userOnboardingOutline.title(user.data!.firstName)} tagline={userOnboardingOutline.tagline} list={userOnboardingOutline.list} />
}

export default CompanyProfile