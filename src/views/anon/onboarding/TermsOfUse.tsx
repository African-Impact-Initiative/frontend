import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import MuiAccordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import { setErrorNotification } from '../../../store/notificationReducer'
import { logout, userAgreeToTerms } from '../../../store/appUserReducer'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { AppDispatch } from '../../../store/store'
import VBLeftSidebarWithView from '../../../components/VBLeftSideBarWithView'
import PathConstants from '../../../navigation/pathConstants'
import { terms, userOnboardingOutline } from './utils'

const Accordion = styled(MuiAccordion)
    (({ }) => ({
        border: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        }
    ))

const TermsOfUse = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.user)

    const handleSubmit = async (dispatch: AppDispatch) => {
        try {
            await dispatch(userAgreeToTerms())
            navigate(PathConstants.personal)
        } catch {
            dispatch(setErrorNotification('Error agreeing to terms, please try again later'))
        }
    }

    const handleCancel = () => {
        dispatch(setErrorNotification('You will not be able to continue without agreeing to the terms of use'))
        dispatch(logout())
        navigate(PathConstants.home)
    }

    const termsOfUseItems = [
        {
            title: 'Compliance agreement - platform terms',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        },
        {
            title: 'Eligibility - access and usage criteria',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        },
        {
            title: 'User conduct - behaviour guidelines',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        },
        {
            title: 'Confidentiality - information handling',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        },
        {
            title: 'Non-disclosure - information protection',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        },
        {
            title: 'Intellectual Property - copyright policy',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        },
    ]

    const Terms = (
        <Box>
            <Typography variant='h4' sx={{marginBottom: '10px'}}>
                Terms of Use
            </Typography>
            <Typography>
                Please read the following terms before proceeding. Note that by clicking continue you agree to all the terms below.
            </Typography>
            <Divider light sx={{marginBottom: '20px', marginTop: '10px'}}/>
            {
                termsOfUseItems.map((terms, i) =>
                    <Accordion key={terms.title} disableGutters elevation={0} square sx={{border: 'none', boxShadow: 'none', backgroundColor: '#FAFAFA', marginBottom: '10px'}}>
                        <AccordionSummary
                            expandIcon={<AddCircleOutlineOutlinedIcon />}
                            aria-controls={`panel${i}a-content`}
                            id={`panel${i}a-header`}
                        >
                            <Typography>{terms.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {terms.content}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                )
            }
            <Divider light sx={{marginBottom: '10px', marginTop: '20px'}}/>
            <Box sx={{marginBottom: '20px', display: 'flex', justifyContent: 'end'}}>
                <Button variant='outlined' onClick={handleCancel} sx={{marginRight: '10px'}}>Cancel</Button>
                <Button onClick={() => handleSubmit(dispatch)} variant='contained' sx={{color: '#fff', backgroundColor: '#DC6803', '&:hover': { backgroundColor: '#E8822A'}}}>Continue</Button>
            </Box>
        </Box>
    )

    return <VBLeftSidebarWithView Component={Terms} componentTitle={terms.title} title={userOnboardingOutline.title(user.data!.firstName)} tagline={userOnboardingOutline.tagline} list={userOnboardingOutline.list} />
}

export default TermsOfUse