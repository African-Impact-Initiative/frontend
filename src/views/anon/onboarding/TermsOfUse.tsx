import { useState } from 'react'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined'
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

const Accordion = styled(MuiAccordion)(() => ({
    border: 'none',
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}))

const AccordionSummaryStyled = styled(AccordionSummary)(() => ({
    padding: '10px',
    minHeight: '48px !important',
    '& .MuiAccordionSummary-content': {
        margin: '12px 0',
    },
    '& .MuiAccordionSummary-expandIconWrapper': {
        position: 'absolute',
        left: '-28px',
    },
}))

const TermsOfUse = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.user)
    const [expanded, setExpanded] = useState<string | false>(false)

    const handleAccordionChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false)
    }

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
            content: 'By accessing and using our online startup venture building platform, you explicitly agree to comply with all the terms and conditions outlined in this agreement. Failure to adhere to these terms may result in the termination of your access to the platform.'
        },
        {
            title: 'Eligibility - access and usage criteria',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        },
        {
            title: 'User conduct - behaviour guidelines',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        },
        {
            title: 'Confidentiality - information handling',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        },
        {
            title: 'Non-disclosure - information protection',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        },
        {
            title: 'Intellectual Property - copyright policy',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        },
    ]

    const Terms = (
        <Box>
            <Typography variant='h5' sx={{ marginBottom: '8px', fontWeight: 'normal' }}>
                Terms of use
            </Typography>
            <Typography variant='body2' color="text.secondary" sx={{ marginBottom: '16px' }}>
                Please read the following terms before proceeding. Note that by clicking continue you agree to all the terms below.
            </Typography>
            <Divider light sx={{ marginBottom: '24px' }}/>
            <Box sx={{ position: 'relative', paddingLeft: '28px' }}>
                {termsOfUseItems.map((terms, i) => (
                    <Accordion 
                        key={terms.title} 
                        disableGutters 
                        elevation={0} 
                        square 
                        expanded={expanded === `panel${i}`}
                        onChange={handleAccordionChange(`panel${i}`)}
                        sx={{
                            backgroundColor: 'transparent',
                            marginBottom: '8px',
                            '&.Mui-expanded': {
                                backgroundColor: '#F8FAFC',
                                margin: '8px 0',
                                padding: '0 24px 0 28px',
                                marginLeft: '-28px',
                            },
                        }}
                    >
                        <AccordionSummaryStyled
                            expandIcon={expanded === `panel${i}` ? 
                                <RemoveCircleOutlineOutlinedIcon sx={{ fontSize: '20px' }} /> : 
                                <AddCircleOutlineOutlinedIcon sx={{ fontSize: '20px' }} />
                            }
                            aria-controls={`panel${i}a-content`}
                            id={`panel${i}a-header`}
                        >
                            <Typography variant="body1" sx={{ fontWeight: 'normal' }}>
                                {terms.title}
                            </Typography>
                        </AccordionSummaryStyled>
                        <AccordionDetails sx={{ padding: '0 24px 16px 8px' }}>
                            <Typography variant="body2" color="text.secondary">
                                {terms.content}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>
            <Divider light sx={{ marginY: '24px' }}/>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                <Button 
                    variant='outlined' 
                    onClick={handleCancel}
                    sx={{ textTransform: 'uppercase' }}
                >
                    Cancel
                </Button>
                <Button 
                    onClick={() => handleSubmit(dispatch)} 
                    variant='contained'
                    sx={{
                        color: '#fff',
                        backgroundColor: '#DC6803',
                        '&:hover': { backgroundColor: '#E8822A' },
                        textTransform: 'uppercase'
                    }}
                >
                    Continue
                </Button>
            </Box>
        </Box>
    )

    return <VBLeftSidebarWithView Component={Terms} componentTitle={terms.title} title={userOnboardingOutline.title(user.data!.firstName)} tagline={userOnboardingOutline.tagline} list={userOnboardingOutline.list} />
}

export default TermsOfUse