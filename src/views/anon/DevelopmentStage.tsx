import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined'
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined'
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined'
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { setErrorNotification, setSuccessNotification } from '../../../reducers/notificationReducer'
import { updateOrgStage } from '../../../reducers/organizationReducer'
import { PAGES } from '../../navigation/routes'

const DevelopmentStage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()

    const stageItems = [
        {
            primary: 'Idea Stage',
            secondary: 'You have a concept or idea but have not yet developed a prototype or product.',
            value: 'ID',
            Icon: LightbulbOutlinedIcon
        },
        {
            primary: 'Development',
            secondary: 'You are working on creating a functional prototype of your product or service.',
            value: 'DV',
            Icon: CodeOutlinedIcon
        },
        {
            primary: 'Pre-Lauch',
            secondary: 'Your product is close to being ready for launch, and you\'re preparing for your market entry.',
            value: 'PR',
            Icon: RocketLaunchOutlinedIcon
        },
        {
            primary: 'Post-Launch',
            secondary: 'Your product or service is already launched, and you\'re looking for ways to grow and optimize.',
            value: 'PO',
            Icon: TrendingUpOutlinedIcon
        }
    ]

    useEffect(() => {
        if (!searchParams.get('org')) {
            navigate(PAGES.home.path)
            dispatch(setErrorNotification('Organization id not specified'))
        }
    }, [dispatch, navigate, searchParams])

    const handleStage = async (dispatch, val) => {
        try {
            await dispatch(updateOrgStage(searchParams.get('org'), val))
            navigate(`${PAGES.developmentChallenges.path}?org=${searchParams.get('org')}`)
            dispatch(setSuccessNotification('Organization stage set'))
        } catch {
            dispatch(setErrorNotification('Error updating company information'))
        }
    }

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <Typography variant='h4' gutterBottom>What stage would you say your startup is currently at?</Typography>
            <Typography variant='p'>Choose one from below</Typography>

            <Grid container spacing={2} sx={{marginTop: '30px', marginBlock: '30px'}}>
                {
                    stageItems.map((stage, i) =>
                        <Grid key={`stage-value-${i}`} item xs={12} md={6} lg={3}>
                            <Card sx={{ width: 250, backgroundColor: '#FAFAFA', borderRadius: '25px' }}>
                                <CardActionArea onClick={() => handleStage(dispatch, stage.value)}>
                                    <CardHeader
                                        avatar={
                                            <stage.Icon sx={{width: '50px', height: '50px', backgroundColor: '#FFF', padding: '10px', borderRadius: '10px', border: '1px solid #C4C4C4'}} />
                                        }
                                    />
                                    <CardContent sx={{height: '200px'}}>
                                        <Typography variant="h6" gutterBottom sx={{marginTop: '50px'}}>
                                            {stage.primary}
                                        </Typography>
                                        <Typography variant="body2">
                                            {stage.secondary}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    )
                }
            </Grid>
        </Box>
    )
}

export default DevelopmentStage