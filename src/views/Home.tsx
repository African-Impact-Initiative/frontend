import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import { AboutCard, IAboutCardProps } from '../components/VBCards'
import PathConstants from '../navigation/pathConstants'
import JumboPanel from '../components/VBJumboPanel'
import VBAccordion, { AccordionItems } from '../components/VBAccordion'
import VBCarousel from '../components/VBCarousel'

import person from '../assets/person.svg'
import home from '../assets/home.svg'
import guide from '../assets/guide.svg'
import community from '../assets/community.svg'
import work from '../assets/work.svg'
import book from '../assets/book.svg'
import fund from '../assets/fund.svg'
import logo from '../assets/logo.svg'

const Home = () => {
    const items: Array<Array<string>> = [
        [person, person, person,],
        [person, person, person,],
        [person, person, person,],
    ]

    const growthItems: Array<IAboutCardProps> = [
        {
            title: 'Nurturing Platform',
            description: 'A comprehensive startup incubation platform for young African innovators to nurture and support your entrepreneurial journey.',
            image: home
        },
        {
            title: 'Expert Guidance',
            description: 'A diverse network of mentors, industry experts, and investors to guide you at every step throughout the venture building process.',
            image: guide
        },
        {
            title: 'Supportive Community',
            description: 'A supportive community of fellow startups and entrepreneurs to share experiences and overcome challenges together.',
            image: community
        },
        {
            title: 'Dynamic Co-working Spaces',
            description: 'Collaborative co-working spaces to foster innovation and exchange ideas with like-minded entrepreneurs.',
            image: work
        },
        {
            title: 'Rich Resource Library',
            description: 'A wealth of educational materials, case studies, and resources that empower you with knowledge and actionable strategies.',
            image: book
        },
        {
            title: 'Funding Connections',
            description: 'Our extensive network of financial backers and funding partners opens doors to the capital you need to take your startup to new heights.',
            image: fund
        }
    ]

    const companyLogos = [logo, logo, logo, logo, logo, logo]

    const accordionItems: Array<AccordionItems> = [
        {
            title: 'What is a venture building platform?',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        },
        {
            title: 'Is this platform suitable for early-stage startups?',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        },
        {
            title: 'What type of startups do you support?',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        },
        {
            title: 'Can I join without having a fully developed business idea yet?',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        },
        {
            title: 'What support does the platform provide for funding opportunities?',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        },
    ]

    return (
        <>
            <Box sx={{display: { xs: 'none', lg: 'flex' }, height: '90vh', overflowX: 'hidden'}}>
                <Grid sx={{width: '100%', height: '100%'}} container spacing={0}>
                    <Grid item lg={5} sx={{height: '100%', width: '100%', padding: '80px', display: 'flex !important', alignItems: 'center !important', justifyContent: 'center !important', flexDirection: 'column !important'}}>
                        <Typography sx={{display: {lg: 'inline', xl: 'none'}}} variant='h3' component='div' gutterBottom>
                            Empowering Young African Innovators
                        </Typography>
                        <Typography sx={{display: {lg: 'none', xl: 'inline'}}} variant='h2' component='div' gutterBottom>
                            Empowering Young African Innovators
                        </Typography>

                        <Typography sx={{display: {lg: 'none', xl: 'inline'}, fontSize: '120%'}} variant='subtitle1' component='div' gutterBottom>
                            Unleash your business potential with data-driven insights, fundraising tools, educational resources, and more, all in Venture Build
                        </Typography>

                        <Box sx={{display: 'flex', justifyContent: 'space-evenly', width: '100%', marginTop: '20px'}}>
                            <Button size='large' variant='outlined' sx={{color: '#000'}}>Demo</Button>
                            <Link to={PathConstants.signUp}>
                                <Button size='large' variant='contained' sx={{color: '#fff', backgroundColor: '#DC6803', '&:hover': { backgroundColor: '#E8822A'}}}>Join now</Button>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item lg={7} sx={{background: `url(${'/static/site-imgs/laptop.svg'}) no-repeat center right`, marginTop: '10vh', height: '80vh', width: '100%', backgroundSize: 'contain'}}>
                    </Grid>
                </Grid>
            </Box>

            <Box>
                <Box sx={{overflowX: 'hidden', marginTop: '50px', display: 'flex', alignItems: 'center', flexDirection: 'column', textAlign: 'center'}}>
                    <Typography variant='overline' fontWeight='bold'>
                        Features
                    </Typography>
                    <Typography sx={{display: {xs: 'inline', xl: 'none'}}} variant='h3' gutterBottom>
                        Grow your business quicker and smarter
                    </Typography>
                    <Typography sx={{display: {xs: 'none', xl: 'inline'}}} variant='h3' gutterBottom>
                        Grow your business quicker and smarter
                    </Typography>

                    <Typography variant='h5'>
                        Transform your startup journey in our all-in-one platform
                    </Typography>
                </Box>

                <Container maxWidth='lg' sx={{paddingTop: '40px', paddingBottom: '40px'}}>
                    <Grid container spacing={2}>
                        {
                            growthItems.map(val =>
                                <Grid item key={val.title} xs={12} sm={6} md={4} sx={{display: {md: 'flex'}, justifyContent: 'center'}}>
                                    <AboutCard {...val} />
                                </Grid>)
                        }
                    </Grid>
                </Container>
            </Box>

            <Box>
                <Box sx={{overflowX: 'hidden', marginTop: '50px', display: 'flex', alignItems: 'center', flexDirection: 'column', textAlign: 'center'}}>
                    <Typography variant='overline' fontWeight='bold'>
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

                <JumboPanel title={'Manage teams with ease'} icon={'static/svgs/home.svg'} image={'/static/site-imgs/team.svg'} right={true} points={['Simplify team communication and project coordination', 'Assign roles and responsibilities effortlessly', 'Track progress in real-time for increased productivity']} prompt={'Empower your team with a user-friendly dashboard to streamline collaboration and task management.'}/>
                <JumboPanel title={'Track fundraising progress'} icon={'static/svgs/grow.svg'} image={'/static/site-imgs/fund.svg'} right={false} points={['Monitor and analyze donation trends', 'Engage with investors effectively', 'Prioritize follow-ups for successful fundraising']} prompt={'Stay on top of your fundraising journey with our dedicated dashboard, managing interactions and CRM in one place.'}/>
                <JumboPanel title={'Access comprehensive resources'} icon={'static/svgs/book.svg'} image={'/static/site-imgs/resources.svg'} right={true} points={['Learn from industry experts and successful entrepreneurs', 'Gain valuable insights for business success', 'Access an extensive collection of expert-led courses']} prompt={'Harness our extensive library of courses and tools designed to accelerate your startup\'s growth.'}/>
            </Box>

            <Box sx={{paddingTop: '40px', paddingBottom: '40px', backgroundImage: 'linear-gradient(to bottom, #F2F2F2 60%, #FFFFFF 40%, rgba(203, 65, 100, 0))'}}>
                <Grid sx={{width: '100%', height: '100%'}} container spacing={0}>
                    <Grid item lg={6} sx={{height: '100%', width: '100%', padding: '0 80px 20px 80px', display: 'flex !important', alignItems: 'start !important', justifyContent: 'start !important', flexDirection: 'column !important'}}>
                        <Typography variant='overline' fontWeight='bold'>
                            About Us
                        </Typography>
                        <Typography sx={{display: {xs: 'inline', xl: 'none'}}} variant='h3' gutterBottom>
                            Supercharge your startup experience
                        </Typography>
                        <Typography sx={{display: {xs: 'none', xl: 'inline'}}} variant='h3' gutterBottom>
                            Supercharge your startup experience
                        </Typography>

                        <Typography variant='subtitle1'>
                            Embrace our incubation platform and embark on an exciting entrepreneurial journey filled with opportunities for growth and transformation.
                        </Typography>
                    </Grid>
                    <Grid item lg={6} sx={{height: '100%', width: '100%'}}>
                        <Box sx={{marginBottom: '20px'}}>
                            <Typography variant='h5'>
                                Our Mission
                            </Typography>
                            <Typography variant='subtitle1'>
                                Embrace our incubation platform and embark on an exciting entrepreneurial journey filled with opportunities for growth and transformation.
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant='h5'>
                                Our Vision
                            </Typography>
                            <Typography variant='subtitle1'>
                                Embrace our incubation platform and embark on an exciting entrepreneurial journey filled with opportunities for growth and transformation.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Container maxWidth='xl' sx={{paddingTop: '40px', paddingBottom: '40px', display: 'flex', justifyContent: 'center'}}>
                    <img src={'/static/site-imgs/video.svg'} alt={'video'} style={{padding: '10px'}} />
                </Container>
            </Box>

            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginBottom: '80px', backgroundColor: '#F2F2F2'}}>
                <Box sx={{overflowX: 'hidden', marginTop: '50px', display: 'flex', alignItems: 'center', flexDirection: 'column', textAlign: 'center'}}>
                    <Typography variant='overline' fontWeight='bold'>
                        Connect with 50+ startups already growing
                    </Typography>
                </Box>
                <Grid sx={{width: '100%', height: '100%', padding: '40px 80px 80px 80px'}} container spacing={0}>
                    {
                        companyLogos.map((logo, i) =>
                            <Grid key={`company-logo-${i}`} item lg={2} sx={{height: '100%', width: '100%'}}>
                                <img src={logo} alt={'logo'}/>
                            </Grid>)
                    }
                </Grid>
            </Box>

            <Box>
                <Box sx={{height: '100%', width: '100%', padding: '0 80px 20px 80px', display: 'flex', alignItems: 'start', justifyContent: 'space-between'}}>
                    <Typography sx={{display: {xs: 'inline', xl: 'none'}}} variant='h3' gutterBottom>
                        Don&apos;t just take our word for it
                    </Typography>
                    <Typography sx={{display: {xs: 'none', xl: 'inline'}}} variant='h3' gutterBottom>
                        Don&apos;t just take our word for it
                    </Typography>

                    <Button variant='contained' sx={{color: '#fff', backgroundColor: '#DC6803', '&:hover': { backgroundColor: '#E8822A'}}}>
                        Our Startups
                    </Button>
                </Box>

                <VBCarousel list={items} key='home-page-carousel' />
            </Box>

            <Box sx={{display: { xs: 'none', lg: 'flex' }, overflowX: 'hidden', height: '60vh'}}>
                <Grid sx={{width: '100%', height: '100%'}} container spacing={0}>
                    <Grid item lg={5} sx={{height: '100%', width: '100%', padding: ' 0 80px 40px 80px', display: 'flex !important', alignItems: 'start !important', justifyContent: 'center !important', flexDirection: 'column !important'}}>
                        <Typography sx={{display: {lg: 'inline', xl: 'none'}}} variant='h3' component='div' gutterBottom>
                            Join 120+ startups growing with African Impact Initiative
                        </Typography>
                        <Typography sx={{display: {lg: 'none', xl: 'inline'}}} variant='h2' component='div' gutterBottom>
                            Join 120+ startups growing with African Impact Initiative
                        </Typography>

                        <Typography sx={{display: {lg: 'none', xl: 'inline'}, fontSize: '120%'}} variant='subtitle1' component='div' gutterBottom>
                            Start your business today.
                        </Typography>

                        <Box sx={{width: '100%', marginTop: '20px'}}>
                            <Button size='large' variant='outlined' sx={{color: '#000', marginRight: '10px'}}>Learn more</Button>
                            <Button size='large' variant='contained' sx={{color: '#fff', backgroundColor: '#DC6803', '&:hover': { backgroundColor: '#E8822A'}}}>Apply now</Button>
                        </Box>
                    </Grid>
                    <Grid item lg={7} sx={{background: `url(${'/static/site-imgs/mosaic.svg'}) no-repeat center center`}}>
                    </Grid>
                </Grid>
            </Box>

            <Divider sx={{width: '80%', marginLeft: '10%'}} />

            <Box sx={{height: '100%', width: '100%', margin: '40px 0 40px 0', display: 'flex !important', alignItems: 'center !important', justifyContent: 'center !important', flexDirection: 'column !important'}}>
                <Typography variant='h3' gutterBottom>
                    Frequently asked questions
                </Typography>

                <Typography variant='subtitle1'>
                    Everything you need to know about venture build.
                </Typography>

                <VBAccordion list={accordionItems} key='home-page-faq' />
            </Box>

            <Box sx={{width: '80%', margin: '5% 10% 5% 10%',  display: 'flex !important', alignItems: 'center !important', justifyContent: 'center !important', flexDirection: 'column !important', backgroundColor: '#FAFAFA'}}>
                <img src='static/svgs/faq.svg' style={{marginTop: '20px', marginBottom: '10px'}} alt='faq-icon' />
                <Typography variant='h6' gutterBottom>
                    Still have questions?
                </Typography>

                <Typography variant='subtitle1' sx={{marginBottom: '10px'}}>
                    Can&apos;t find the answers you are looking for? Please chat with our friendly team.
                </Typography>

                <Button variant='contained' sx={{marginBottom: '20px', color: '#fff', backgroundColor: '#DC6803', '&:hover': { backgroundColor: '#E8822A'}}}>Get in touch</Button>
            </Box>
        </>
    )
}

export default Home