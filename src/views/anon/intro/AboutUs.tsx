import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { AccessTimeOutlined, ArrowOutwardOutlined, LocationOnOutlined, PlayCircleOutline } from '@mui/icons-material'

import home from '../../../assets/home.svg'
import guide from '../../../assets/guide.svg'
import community from '../../../assets/community.svg'
import aboutsusbg from '../../../assets/aboutusbg.jpg'
import feature from '../../../assets/feature.png'
import macbook from '../../../assets/laptop.svg'
import homeScreen from '../../../assets/homescreen.png'
import downArrow from '../../../assets/downward_arrow.png'

const AboutUs = () => {
    const handleSendMessage = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        console.log('submitted')
    }

    const contactChannels = [
        {
            title: 'An information center',
            desc: 'A place that allows you to monitor your startup growth trajectory and make informed decisions through data-based insights.',
            image: home
        },
        {
            title: 'A resources hub',
            desc: 'A wealth of resources that empower you with knowledge and actionable strategies necessary to build and scale you startup.',
            image: guide
        },
        {
            title: 'A strong pitch deck',
            desc: 'A place to showcase your startup, cultivating a strong first impression and fostering a deeper resonance with potential investors.',
            image: community
        },
        {
            title: 'A supportive community',
            desc: 'A diverse network of mentors, industry experts, and investors to guide you at every step throughout the venture building process.',
            image: community
        },
    ]

    return (
        <Box sx={{width: '100%'}}>
            <Box sx={{ position: 'relative', width: '100%' }}
            >
                <img src={aboutsusbg} alt='bg' style={{
                    height: '552px',
                    width: '100vw',
                    top: 0,
                    left: 0,
                    filter: 'brightness(60%)'
                }} />
            </Box>
            <Box sx={{ position: 'absolute', display: 'flex', alignItems: 'start', justifyContent: 'center', flexDirection: 'column', top: {md:'-60px', xs: '-200px'}, left: '80px', width: '100%', height: '100%' }} >
                {/* <Box sx={{ width: '60%', fontSize: {md:'80px', xl: '40px'}, fontWeight: '600', lineHeight:{ md:'80px', xl: '40px'}, color: '#FFFFFF', letterSpacing: '-2px', zIndex: 100000, textAlign: 'left' }}>
                    <Typography>We predict the future of Africa by creating it</Typography>
                </Box> */}
                <Box sx={{ marginTop: '16px', width: '50%', textAlign: 'left' }}>
                    <Typography sx={{ fontSize: {md: '60px', xs: '42px'}, fontWeight: '500', lineHeight: {md: '60px', xs: '45px'}, color: '#EAECF0' }}>We predict the future of Africa by creating it</Typography>
                </Box>
                <Box sx={{ marginTop: '16px', width: '50%', textAlign: 'left' }}>
                    <Typography sx={{ fontSize: {md: '20px', xs: '12px'}, fontWeight: '400', lineHeight: {md: '30px', xs: '15px'}, color: '#EAECF0' }}>Our platform enables African youth on the continent and in Canada, <br/> to actively get involved in changing our narrative.</Typography>
                </Box>
                <Box sx={{ marginTop: '44px' }}>
                    {/* <Button
                        onClick={handleSendMessage}
                        type='submit'
                        variant='contained'
                        sx={{
                            color: '#FFFFFF',
                            backgroundColor: '#DC6803',
                            borderRadius: '8px',
                            fontWeight: '600',
                            lineHeight: '20px',
                            height: '50px',
                            width: '170px',
                            textTransform: 'none',
                            fontSize: '14px',
                        }}
                    >
                        Connect with us
                    </Button> */} {/* Comment this button so far, waiting for the feature implements*/}
                </Box>

            </Box>

            <Box sx={{ display: 'flex', width: '100%', padding: '50px', flexDirection: {md: 'row', xs: 'column'}, }}>
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'start', padding:{md: '40px', xs:'0px'}}}>
                    <Box>
                        <Typography sx={{ fontSize: '16px', fontWeight: '600', lineHeight: '24px', color: '#B54708' }}>About us</Typography>
                    </Box>
                    <Box sx={{ marginTop: '12px', marginBottom: '40px' }}>
                        <Typography sx={{ fontSize: '36px', fontWeight: '600', lineHeight: '44px', letterSpacing: '-0.72px', color: '#101828' }}>Who are we?</Typography>
                    </Box>
                    <Box sx={{ width: '100%' }} />
                    <Box sx={{ marginTop: '40px', }}>
                        <Typography sx={{ fontSize: '24px', fontWeight: '600', lineHeight: '32px', color: '#101828' }}>African Impact Initiative</Typography>
                    </Box>
                    <Box sx={{ marginTop: '16px', display: 'flex', justifyContent: 'flex-start' }}>
                        <Typography sx={{ fontSize: '18px', fontWeight: '400', lineHeight: '30px', color: '#475467', textAlign: 'left' }}>
                            The <span style={{ borderBottom: '2px solid', color: '#475467'}}>African Impact Initiative</span> is a non-profit organization
                            dedicated to creating a platform for all students and groups
                             passionate about actively contributing to the development
                             of Africa as well as the African community within Canada. </Typography>
                    </Box>
                </Box>
                <Box sx={{ width: '100%', height: 'fit', display: 'flex', flexDirection: 'column', alignItems: 'start',  padding:{md: '40px', xs:'0px'} }}>
                    <Box >
                        <Typography sx={{ fontSize: '24px', fontWeight: '600', lineHeight: '32px', color: '#101828' }}>African Impact Challenge</Typography>
                    </Box>
                    <Box sx={{ marginTop: '16px', display: 'flex', justifyContent: 'flex-start' }}>
                        <Typography sx={{ fontSize: '18px', fontWeight: '400', lineHeight: '30px', color: '#475467', textAlign: 'left' }}>
                            Through our <span style={{ borderBottom: '2px solid', color: '#475467'}}>African Impact Challenge</span>, we support young Africans
                            who are passionate about building local solutions to their most
                            pressing community problems. We believe the greatest impact can
                            be achieved through market-creating innovations, and have committed
                            to birthing these across the continent with technology. </Typography>
                    </Box>
                    <Box sx={{ marginTop: '40px', }}>
                        <Typography sx={{ fontSize: '24px', fontWeight: '600', lineHeight: '32px', color: '#101828' }}>Venture Build</Typography>
                    </Box>
                    <Box sx={{ marginTop: '16px', display: 'flex', justifyContent: 'flex-start' }}>
                        <Typography sx={{ fontSize: '18px', fontWeight: '400', lineHeight: '30px', color: '#475467', textAlign: 'left' }}>
                            Venture Build is a web-based startup venture building
                            platform aimed at fostering innovation among young African entrepreneurs.
                            Our platform serves as a launchpad for emerging startups,
                            offering a comprehensive range of resources and tools to help
                            transform ideas into successful businesses.
                            At Venture Build, our focus is on equipping innovators
                            with the necessary skills, tools, and guidance to navigate the
                            complexities of the startup landscape in Africa. </Typography>
                    </Box>
                </Box>
            </Box>
            <Box>
                <img src={feature} alt='featurebackground' style={{
                    width: '100vw'
                }} />
            </Box>
            <Box sx={{ display: 'flex', width: '100%', padding: '50px', flexDirection: {md: 'row', xs: 'column'} }}>
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start',  padding:{md: '40px', xs:'0px'}}}>
                    <Box>
                        <Typography sx={{ fontSize: '16px', fontWeight: '600', lineHeight: '24px', color: '#B54708' }}>Why choose us</Typography>
                    </Box>
                    <Box sx={{ marginTop: '12px', marginBottom: '40px' }}>
                        <Typography sx={{ fontSize: '36px', fontWeight: '600', lineHeight: '44px', letterSpacing: '-0.72px', color: '#101828' }}>What sets us apart</Typography>
                    </Box>
                    <Box sx={{ marginTop: '40px', }}>
                        <Typography sx={{ fontSize: '24px', fontWeight: '600', lineHeight: '32px', color: '#101828' }}>Resources tailored to your needs</Typography>
                    </Box>
                    <Box sx={{ marginTop: '16px', display: 'flex', justifyContent: 'flex-start' }}>
                        <Typography sx={{ fontSize: '18px', fontWeight: '400', lineHeight: '30px', color: '#475467', textAlign: 'left' }}>
                            At Venture Build, we stand out by tailoring our resources
                            to address the specific challenges and opportunities faced
                            by young African entrepreneurs. Our platform is uniquely
                            designed to provide guidance and support that caters to the
                            Boxerse needs of startups within the African business landscape. </Typography>
                    </Box>
                </Box>
                <Box sx={{ width: '100%', height: 'fit', display: 'flex', flexDirection: 'column', alignItems: 'start',  padding:{md: '40px', xs:'0px'} }}>
                    <Box >
                        <Typography sx={{ fontSize: '24px', fontWeight: '600', lineHeight: '32px', color: '#101828' }}>Focused support and mentorship</Typography>
                    </Box>
                    <Box sx={{ marginTop: '16px', display: 'flex', justifyContent: 'flex-start' }}>
                        <Typography sx={{ fontSize: '18px', fontWeight: '400', lineHeight: '30px', color: '#475467', textAlign: 'left' }}>
                            We foster an environment of focused support and mentorship
                            by maintaining relatively small cohorts. This approach allows
                            us to provide inBoxidualized attention, ensuring that each
                            venture receives personalized guidance and mentorship tailored
                            to their unique journey.</Typography>
                    </Box>
                    <Box sx={{ marginTop: '50px', }}>
                        <Typography sx={{ fontSize: '24px', fontWeight: '600', lineHeight: '32px', color: '#101828' }}>Vibrant entrepreneurial network</Typography>
                    </Box>
                    <Box sx={{ marginTop: '16px', display: 'flex', justifyContent: 'flex-start' }}>
                        <Typography sx={{ fontSize: '18px', fontWeight: '400', lineHeight: '30px', color: '#475467', textAlign: 'left' }}>
                            Joining our platform grants you access to a vibrant
                            community of experienced African entrepreneurs and
                            fellow startup founders. This network serves as a valuable resource,
                            offering a supportive environment for collaboration, knowledge-sharing,
                            and networking. Benefit from the collective expertise of our
                            community members as you navigate the complexities of building
                            and scaling your startup. </Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ backgroundColor: '#F9FAFB', width: '100%', height: {md: '550px', xs: '100%'}, marginBottom: '30px',  padding:{md: '40px', xs:'0px'} }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '40px', flexDirection: {md: 'row', xs: 'column'}, }}>
                    <Box>
                        <Box sx={{ marginBottom: '20px', display: 'flex', }}>
                            <Typography sx={{ fontSize: '34px', fontWeight: '600', lineHeight: '44px', letterSpacing: '-0.72px', color: '#101828' }}>A proven record of expertise</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ fontSize: '18px', fontWeight: '400', lineHeight: '30px', color: '#475467', textAlign: 'left' }}>
                                We are proud of our extensive track record in nurturing successful startups.
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
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
                                width: '170px',
                                textTransform: 'none',
                                fontSize: '16px',
                            }}
                        >
                            Browse ventures
                        </Button>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', columnGap: '40px', width: '100%', alignItems: 'center', padding: '30px', flexDirection: {md: 'row', xs: 'column'} }}>
                    <Box sx={{ flexDirection: 'column', display: 'flex' }}>
                        <Typography sx={{ color: '#DC6803', fontWeight: '600', lineHeight: '72px', letterSpacing: '-1.2px', fontSize: '60px', textAlign: 'left' }}>500+</Typography>
                        <Typography sx={{ color: '#101828', fontSize: '18px', fontWeight: '600', lineHeight: '28px', textAlign: 'left' }}>Entrepreneurs trained</Typography>
                        <Typography sx={{ color: '#475467', fontSize: '16px', fontWeight: '400', lineHeight: '24px', textAlign: 'left' }}>Since launching, the African impact challenge has trained over 500 early-stage African entrepreneurs.</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{ color: '#DC6803', fontWeight: '600', lineHeight: '72px', letterSpacing: '-1.2px', fontSize: '60px', textAlign: 'left' }}>80+</Typography>
                        <Typography sx={{ color: '#101828', fontSize: '18px', fontWeight: '600', lineHeight: '28px', textAlign: 'left' }}>Ventures build</Typography>
                        <Typography sx={{ color: '#475467', fontSize: '16px', fontWeight: '400', lineHeight: '24px', textAlign: 'left' }}>Since launching, the African impact challenge has trained over 500 early-stage African entrepreneurs.</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{ color: '#DC6803', fontWeight: '600', lineHeight: '72px', letterSpacing: '-1.2px', fontSize: '60px', textAlign: 'left' }}>50+</Typography>
                        <Typography sx={{ color: '#101828', fontSize: '18px', fontWeight: '600', lineHeight: '28px', textAlign: 'left' }}>Active mentors</Typography>
                        <Typography sx={{ color: '#475467', fontSize: '16px', fontWeight: '400', lineHeight: '24px', textAlign: 'left' }}>Since launching, the African impact challenge has trained over 500 early-stage African entrepreneurs.</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{ color: '#DC6803', fontWeight: '600', lineHeight: '72px', letterSpacing: '-1.2px', fontSize: '60px', textAlign: 'left' }}>60+</Typography>
                        <Typography sx={{ color: '#101828', fontSize: '18px', fontWeight: '600', lineHeight: '28px', textAlign: 'left' }}>Investment deals facilitated</Typography>
                        <Typography sx={{ color: '#475467', fontSize: '16px', fontWeight: '400', lineHeight: '24px', textAlign: 'left' }}>Since launching, the African impact challenge has trained over 500 early-stage African entrepreneurs.</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ width: '100%', display: 'flex', right: {md:'40px', xs: '0px'}}}>
                <Box sx={{ display: 'flex', width: '50%', flexDirection: 'column', textAlign: 'left', marginLeft: '70px', marginTop: '40px' }}>
                    <Box>
                        <Typography sx={{ fontSize: '16px', fontWeight: '600', lineHeight: '24px', color: '#B54708', }}>Features</Typography>
                    </Box>
                    <Box >
                        <Typography sx={{ fontSize: '36px', fontWeight: '600', lineHeight: '44px', letterSpacing: '-0.72px', color: '#101828' }}>An operating system for venture building</Typography>
                    </Box>
                    <Box sx={{ marginTop: '20px' }}>
                        <Typography sx={{ color: '#475467', fontSize: '18px', fontWeight: '400', lineHeight: '30px', }}>A platform streamlining and optimizing the venture building process, empowering entrepreneurs to transform their ideas into impactful, sustainable businesses.</Typography>

                    </Box>
                </Box>
                <Box sx={{ width: '50%', position: 'relative', left: '200px', top: '90px', zIndex: 100000,display: {xs: 'none', md: 'inherit'} }}>
                    <img src={downArrow} alt='dowmaeeow' />
                </Box>
            </Box>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: {md: 'row', xs: 'column'},}}>
                <Box sx={{ width: {md: '50%', xs: '100%'}, height: {md:'580px', xs: '100%'}, padding: {md:'50px', xs: '0px'} }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexWrap: 'wrap',

                    }}>
                        {contactChannels.map((channel, index) => (
                            <Box key={index} sx={{
                                flex: '0 0 50%',
                                boxSizing: 'border-box',
                                textAlign: 'left',
                                rowGap: '30px',
                                marginBottom: '20px',
                                padding: '15px'

                            }}>
                                <Box>
                                    <img src={channel.image} alt={channel.title} />
                                </Box>
                                <Box>
                                    <Typography sx={{ fontWeight: '600', fontSize: '18px', lineHeight: '40px' }}>{channel.title}</Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{ fontWeight: '400', fontSize: '16px', lineHeight: '20px', color: '#475467' }}>{channel.desc}</Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>

                <Box sx={{ width: {md: '50%', xs: '100%'}, backgroundColor: '#F9FAFB', borderRadius: '16px', height: '680px', display: {xs: 'none', md: 'inherit'}}}>
                    <img src={macbook} alt='macbook' style={{ width:'630px', height:'595px', position: 'absolute', marginTop: '50px', right: '0px'}} />
                </Box>

            </Box>
            <Box sx={{ marginBottom: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '140px' }}>
                <Box sx={{ backgroundColor: '#F9FAFB', width: {md:'1216px', xs: '100%'}, height: {md:'212px', xs: '100%'}, borderRadius: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', columnGap: '250px', flexDirection: {md: 'row', xs: 'column'} , padding: {xs: '10px'}}}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                            <Typography sx={{ color: '#101828', fontSize: '30px', fontWeight: '600', lineHeight: '48px' }}>Start your venture building journey</Typography>
                            <Typography sx={{ color: '#475467', fontSize: '16px', fontWeight: '400', lineHeight: '30px' }}>Join over 500+ startups already growing with Venture Build.</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', columnGap: '16px' }}>
                            {/* <Button
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
                            </Button> */} {/* Comment those two buttons so far, waiting for the feature implements*/}
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '40px', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
                <Box sx={{marginBottom: '10px'}}>
                    <Typography sx={{ fontSize: '34px', fontWeight: '600', lineHeight: '44px', letterSpacing: '-1px', color: '#101828' }}>Open positions</Typography>
                </Box>
                <Box>
                    <Typography sx={{ color: '#475467', fontSize: '18px', fontWeight: '400', lineHeight: '30px', whiteSpace: 'pre-line' }}>We strive to help every African innovator to bring their idea to life and make a <br/> difference. Join and build this reality with us.</Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', rowGap: '24px', height: '780px', width: '100%' }}>
                <Box sx={{ width: {md: '768px', xs: '100%'}, height: {md:'184px', xs: '100%'}, border: '1px solid #EAECF0', borderRadius: '16px', padding: '20px', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box>
                            <Typography sx={{ color: '#B54708', fontWeight: '600', fontSize: '14px', lineHeight: '20px' }}>Product</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#B54708', columnGap: '6px' }}>
                            <Typography sx={{ color: '#B54708', fontWeight: '600', fontSize: '14px', lineHeight: '20px' }}>View job</Typography>
                            <ArrowOutwardOutlined sx={{ width: '16px', height: '16px' }} />
                        </Box>
                    </Box>
                    <Box sx={{marginTop: '16px', textAlign: 'left'}}>
                        <Typography sx={{ color: '#101828', fontWeight: '600', fontSize: '18px', lineHeight: '28px'}}>Product Designer</Typography>
                    </Box>
                    <Box sx={{marginTop: '16px', textAlign: 'left'}}>
                        <Typography sx={{ color: '#475467', fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}>We’re looking for a mid-level product designer to join our team.</Typography>
                    </Box>
                    <Box sx={{display: 'flex', columnGap: '12px', marginTop: '16px', alignItem: 'center'}}>
                        <Box sx={{display: 'flex', columnGap: '8px', alignItems: 'center'}}>
                            <LocationOnOutlined sx={{ width: '16px', height: '16px', color: '#98A2B3' }}/>
                            <Typography sx={{ color: '#475467', fontWeight: '500', fontSize: '16px', lineHeight: '24px' }}>Remote</Typography>
                        </Box>
                        <Box sx={{display: 'flex', columnGap: '8px', alignItems: 'center'}}>
                            <AccessTimeOutlined sx={{ width: '18px', height: '18px', color: '#98A2B3' }}/>
                            <Typography sx={{ color: '#475467', fontWeight: '500', fontSize: '16px', lineHeight: '24px' }}>Full-time</Typography>
                        </Box>
                    </Box>

                </Box>
                <Box sx={{  width: {md: '768px', xs: '100%'}, height: {md:'184px', xs: '100%'}, border: '1px solid #EAECF0', borderRadius: '16px', padding: '20px', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box>
                            <Typography sx={{ color: '#B54708', fontWeight: '600', fontSize: '14px', lineHeight: '20px' }}>Product</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#B54708', columnGap: '6px' }}>
                            <Typography sx={{ color: '#B54708', fontWeight: '600', fontSize: '14px', lineHeight: '20px' }}>View job</Typography>
                            <ArrowOutwardOutlined sx={{ width: '16px', height: '16px' }} />
                        </Box>
                    </Box>
                    <Box sx={{marginTop: '16px', textAlign: 'left'}}>
                        <Typography sx={{ color: '#101828', fontWeight: '600', fontSize: '18px', lineHeight: '28px'}}>Front-End Developer</Typography>
                    </Box>
                    <Box sx={{marginTop: '16px', textAlign: 'left'}}>
                        <Typography sx={{ color: '#475467', fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}>We’re looking for a mid-level product designer to join our team.</Typography>
                    </Box>
                    <Box sx={{display: 'flex', columnGap: '12px', marginTop: '16px', alignItem: 'center'}}>
                        <Box sx={{display: 'flex', columnGap: '8px', alignItems: 'center'}}>
                            <LocationOnOutlined sx={{ width: '16px', height: '16px', color: '#98A2B3' }}/>
                            <Typography sx={{ color: '#475467', fontWeight: '500', fontSize: '16px', lineHeight: '24px' }}>Remote</Typography>
                        </Box>
                        <Box sx={{display: 'flex', columnGap: '8px', alignItems: 'center'}}>
                            <AccessTimeOutlined sx={{ width: '18px', height: '18px', color: '#98A2B3' }}/>
                            <Typography sx={{ color: '#475467', fontWeight: '500', fontSize: '16px', lineHeight: '24px' }}>Full-time</Typography>
                        </Box>
                    </Box>

                </Box>
                <Box sx={{  width: {md: '768px', xs: '100%'}, height: {md:'184px', xs: '100%'}, border: '1px solid #EAECF0', borderRadius: '16px', padding: '20px', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box>
                            <Typography sx={{ color: '#B54708', fontWeight: '600', fontSize: '14px', lineHeight: '20px' }}>Product</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#B54708', columnGap: '6px' }}>
                            <Typography sx={{ color: '#B54708', fontWeight: '600', fontSize: '14px', lineHeight: '20px' }}>View job</Typography>
                            <ArrowOutwardOutlined sx={{ width: '16px', height: '16px' }} />
                        </Box>
                    </Box>
                    <Box sx={{marginTop: '16px', textAlign: 'left'}}>
                        <Typography sx={{ color: '#101828', fontWeight: '600', fontSize: '18px', lineHeight: '28px'}}>Program Manager</Typography>
                    </Box>
                    <Box sx={{marginTop: '16px', textAlign: 'left'}}>
                        <Typography sx={{ color: '#475467', fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}>We’re looking for a mid-level product designer to join our team.</Typography>
                    </Box>
                    <Box sx={{display: 'flex', columnGap: '12px', marginTop: '16px', alignItem: 'center'}}>
                        <Box sx={{display: 'flex', columnGap: '8px', alignItems: 'center'}}>
                            <LocationOnOutlined sx={{ width: '16px', height: '16px', color: '#98A2B3' }}/>
                            <Typography sx={{ color: '#475467', fontWeight: '500', fontSize: '16px', lineHeight: '24px' }}>Remote</Typography>
                        </Box>
                        <Box sx={{display: 'flex', columnGap: '8px', alignItems: 'center'}}>
                            <AccessTimeOutlined sx={{ width: '18px', height: '18px', color: '#98A2B3' }}/>
                            <Typography sx={{ color: '#475467', fontWeight: '500', fontSize: '16px', lineHeight: '24px' }}>Full-time</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F9FAFB', height: {md:'460px', xs: '100%'} }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                    <Box>
                        <Button
                            onClick={handleSendMessage}

                            sx={{
                                color: '#B54708',
                                fontWeight: '600',
                                lineHeight: '24px',
                                textTransform: 'none',
                                fontSize: '16px',
                                border: '0px'
                            }}
                        >
                                Join now
                        </Button>
                    </Box>
                    <Box >
                        <Typography sx={{ fontSize: {md:'36px', xs: '25px'}, fontWeight: '600', lineHeight: '44px', letterSpacing: '-0.72px', color: '#101828' }}>We help Africa’s brightest minds go from idea <br/> to MVP to market</Typography>
                    </Box>
                    <Box sx={{ marginTop: '20px' }}>
                        <Typography sx={{ color: '#475467', fontSize: {md:'12px', xs: '14px'}, fontWeight: '400' }}>Start building your vision today: join venture build and realize your <br/> entrepreneurial dream.</Typography>

                    </Box>
                </Box>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 100000, bottom: '0px', marginTop: '-100px'}}>
                <Box sx={{height: '420px', width: '680px', border: '5px solid black', borderRadius: '16px', borderBottom: '0px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px', display: {xs: 'none', md: 'inherit'}}}>
                    <img src={homeScreen} alt='homescreen' style={{ width: '670px', height: '410px', borderRadius: '16px'}} />
                </Box>
            </Box>
        </Box>
    )
}

export default AboutUs