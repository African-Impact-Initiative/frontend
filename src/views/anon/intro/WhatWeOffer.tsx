import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import PathConstants from '../../../navigation/pathConstants'
import JumboPanel from '../../../components/VBJumboPanel'
import { PlayCircleOutline } from '@mui/icons-material'

import background from '../../../assets/offer.svg'
import home from '../../../assets/offer_home_screen.svg'
import loading from '../../../assets/loading.svg'
import barchart from '../../../assets/bar_chart.svg'
import handheart from '../../../assets/hand_heart.svg'
import fundraising from '../../../assets/fundraising.svg'
import team from '../../../assets/team.svg'
import resources from '../../../assets/resources.svg'

import video from '../../../assets/video.svg'

const WhatWeOffer = () => {
    const handleSendMessage = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        console.log('submitted')
    }


    return (
        <>
            <Box sx={{display: { xs: 'none', lg: 'flex' }, height: '90vh', overflowX: 'hidden', backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat",
    backgroundSize: "cover", backgroundPosition: `right bottom`}}>
                    <Grid item lg={5} sx={{display: 'flex !important', alignItems: 'center !important', justifyContent: 'center !important', flexDirection: 'column !important'}}>
                    <Typography sx={{display: {lg: 'inline', xl: 'inline'}, marginLeft: '30rem'}} variant='h6' component='div' gutterBottom>
                    <Link to="https://www.africanimpact.ca/the-african-impact-challenge">
                        <Box sx={{
                            backgroundColor: '#FFFAEB',
                            maxWidth: '365px',
                            borderRadius: '16px',
                            mt: -30
                        }}>
                            <Typography style={{color: '#B54708', textDecoration: 'none'}}>
                            <p>
                                New winners 2023 African Impact Challenge →
                            </p>
                            </Typography>
                        </Box>
                    </Link>    
                    </Typography>
                    <Typography sx={{mt: -20, display: {lg: 'flex', xl: 'none'}, marginLeft: '30rem', fontWeight: '600', alignItems: 'space-evenly !important', justifyContent: 'center !important'}} variant='h3' component='div' gutterBottom>
                        What we offer
                    </Typography>
                    <Typography sx={{mt: -25, display: {lg: 'none', xl: 'flex'}, marginLeft: '30rem', fontWeight: '600'}} variant='h2' component='div' gutterBottom>
                        What we offer
                    </Typography>

                    <Typography sx={{display: 'flex', fontSize: '110%', alignItems: 'center', justifyContent: 'center', marginLeft: '30rem', paddingBottom: '30px'}} align="center" variant='subtitle1' component='div' gutterBottom>
                    At Venture Build, we offer a dynamic ecosystem of features designed to fuel the<br/> aspirations of young African innovators. Discover the tools that empower you to<br/>
                     thrive and make your mark in the startup landscape.                    
                     </Typography>

                    <Box sx={{display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'space-evenly', marginLeft: '30rem'}}>
                        <Button size='large' variant='outlined' sx={{color: '#000'}}>Demo</Button>
                        <Link to={PathConstants.signUp}>
                            <Button size='large' variant='contained' sx={{color: '#fff', alignItems: 'left', marginLeft: '10px', backgroundColor: '#DC6803', '&:hover': { backgroundColor: '#E8822A'}}}>Sign up</Button>
                        </Link>
                    </Box>
                    </Grid>
            </Box>
            <Box sx={{mt: -40, display: { lg: 'flex' }, height: '80vh', marginLeft: '20px', width: '183vh', alignItems: 'center', justifyContent: 'center', overflowX: 'hidden', backgroundImage: `url(${home})`, backgroundRepeat: "no-repeat",
    backgroundSize: "cover", backgroundPosition: `right bottom`}}>

            </Box>

            <Box sx={{paddingTop: '40px', paddingBottom: '40px', backgroundImage: 'linear-gradient(to bottom, #F2F2F2 60%, #FFFFFF 40%, rgba(203, 65, 100, 0))'}}>
                <Grid sx={{width: '100%', height: '100%'}} container spacing={0}>
                    <Grid item lg={6} sx={{height: '100%', width: '100%', padding: '0 80px 20px 80px', display: 'flex !important', alignItems: 'start !important', justifyContent: 'start !important', flexDirection: 'column !important'}}>
                        <Typography variant='overline' fontWeight='bold' color='#B54708'>
                            Overview
                        </Typography>
                        <Typography sx={{display: {xs: 'inline', xl: 'none'}}} variant='h3' gutterBottom>
                        Beyond a co-working space
                        </Typography>
                        <Typography sx={{display: {xs: 'none', xl: 'inline'}}} variant='h3' gutterBottom>
                        Beyond a co-working space
                        </Typography>

                        <Typography variant='subtitle1'>
                        Venture Build is more than a traditional co-working space, it’s a collaborative ecosystem that includes tailored various features tailored to supercharge you startup journey.
                        </Typography>
                    </Grid>
                    <Grid item lg={6} sx={{height: '100%', width: '100%'}}>
                        <Box sx={{marginBottom: '20px', paddingRight: '15px'}}>
                            <Typography variant='h5' fontWeight='bold'>
                            A platform for smooth growth tracking
                            </Typography>
                            <Typography variant='subtitle1'>
                            With intuitive tools and growth analytics, we simplify the path to monitor your venture growth, allowing for a new level of precision in tracking your growth milestones with us.
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant='h5' fontWeight='bold'>
                            A platform for tailored support
                            </Typography>
                            <Typography variant='subtitle1'>
                            Through regular needs assessments and our algorithm-powered recommendation system, we tailor our support to your unique requirements. From mentorship to curated resources, count on us to guide you through your journey with precision and care.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Container maxWidth='xl' sx={{paddingTop: '40px', paddingBottom: '0px', display: 'flex', justifyContent: 'center'}}>
                    <img src={video} alt={'video'} style={{padding: '10px'}} />
                </Container>
            </Box>

            <Box>
                <Box sx={{overflowX: 'hidden', marginTop: '20px', display: 'flex', alignItems: 'center', flexDirection: 'column', textAlign: 'center'}}>
                    <Typography variant='overline' fontWeight='bold' color='#B54708'>
                        Features
                    </Typography>
                    <Typography sx={{display: {xs: 'inline', xl: 'none'}}} variant='h3' gutterBottom>
                        Supercharge your startup experience
                    </Typography>
                    <Typography sx={{display: {xs: 'none', xl: 'inline'}}} variant='h3' gutterBottom>
                        Supercharge your startup experience
                    </Typography>

                    <Typography variant='h5' width='50vw'>
                        Embrace our incubation platform and embark on an exciting entrepreneurial journey filled with opportunities for growth and transformation.
                    </Typography>
                </Box>

                <JumboPanel title={'Empower your journey with metrics'} icon={barchart} image={team} right={true} points={['Real-time analytics for immediate insights.', 'Track key performance indicators effortlessly.', 'Unlock data-driven strategies for informed decisions.']} prompt={"Navigate your venture's path with precision using comprehensive metrics. Empower your venture with valuable insights for informed decision-making."}/>
                <JumboPanel title={'Showcase you success story'} icon={loading} image={fundraising} right={false} points={['Expand your network through success showcases.', 'Engage with potential collaborators and investors.', 'Enhance your credibility with compelling narratives.']} prompt={'Amplify your achievements. Showcase your success story to connect with a broader audience of potential partners, investors, and collaborators.'}/>
                <JumboPanel title={'Grow with a supportive community'} icon={handheart} image={resources} right={true} points={['Access mentorship from experienced entrepreneurs.', 'Participate in collaborative knowledge-sharing sessions.', 'Build connections with a entrepreneurial community.']} prompt={'Thrive in a collaborative environment. Join a vibrant community of entrepreneurs, mentors, and experts to leverage collective knowledge for unprecedented venture success.'}/>

                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '140px' }}>
                <Box sx={{ backgroundColor: '#F9FAFB', width: {md:'100%', xs: '100%'}, height: {md:'242px', xs: '100%'}, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', columnGap: '250px', flexDirection: {md: 'row', xs: 'column'} , padding: {xs: '20px'}}}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                            <Typography sx={{ color: '#101828', fontSize: '30px', fontWeight: '600', lineHeight: '48px' }}>Start your venture building journey</Typography>
                            <Typography sx={{ color: '#475467', fontSize: '16px', fontWeight: '400', lineHeight: '30px' }}>Join over 500+ startups already growing with Venture Build.</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', columnGap: '16px' }}>
                            <Button
                                onClick={handleSendMessage}
                                type='submit'
                                variant='contained'
                                sx={{
                                    color: '#344054',
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: '8px',
                                    fontWeight: '600',
                                    lineHeight: '20px',
                                    height: '48px',
                                    width: '114px',
                                    textTransform: 'none',
                                    fontSize: '14px',
                                }}
                            >
                                <PlayCircleOutline sx={{ width: '18px', height: '18px', color: '#98A2B3', padding: '2px' }}/>
                                Demo
                            </Button>
                            <Button
                                onClick={handleSendMessage}
                                type='submit'
                                variant='contained'
                                sx={{
                                    color: '#FFFFFF',
                                    backgroundColor: '#DC6803',
                                    borderRadius: '8px',
                                    fontWeight: '600',
                                    lineHeight: '20px',
                                    height: '48px',
                                    width: '114px',
                                    textTransform: 'none',
                                    fontSize: '14px',
                                }}
                            >
                                Join now
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
            </Box>
        </>
    )
}

export default WhatWeOffer