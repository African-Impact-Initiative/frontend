import {
    AccessTimeOutlined,
    ArrowOutwardOutlined,
    ContentCopyOutlined,
    MonetizationOnOutlined,
    Twitter,
    YouTube,
    Instagram,
    LinkedIn
} from '@mui/icons-material'
import { Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import avatar from '../../assets/avatar.png'
import dataprime from '../../assets/dataprime.png'
import articleBg from '../../assets/ArticleBg.png'
import articleBg2 from '../../assets/Article2Bg.png'
import canadalogo from '../../assets/canadalogo.png'

const PublicCompanyView = () => {
    const articleData = [
        {
            logo: articleBg,
            datePosted: 'Olivia Rhye • 20 Jan 2024',
            title: '10 startups to watch in Entrepreneurship week 2023',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet nec justo in interdum. Integer posuere tellus non dolo...',
        },
        {
            logo: articleBg2,
            datePosted: 'Olivia Rhye • 20 Jan 2024',
            title: 'Meet DataPrime, an AI-driven FinTech startup',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet nec justo in interdum. Integer posuere tellus non dolo...',
        },
    ]

    return (
        <Box>
            <Box sx={{ padding: '32px', display: 'flex', columnGap: '30px', flexDirection: { md: 'row', xs: 'column' } }}>
                <Box sx={{ width: { md: '68%', xs: '100%' } }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'start' }}>
                        <Typography
                            sx={{
                                fontSize: '18px',
                                fontWeight: '600',
                                fontHeight: '28px',
                                color: '#101828'
                            }}
                        >
                            Overview
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '14px',
                                fontWeight: '400',
                                fontHeight: '20px',
                                color: '#475467'
                            }}
                        >
                            Tell viewers more about your company.
                        </Typography>
                    </Box>
                    <Divider sx={{ marginTop: '20px' }} />
                    <Box sx={{ textAlign: 'start' }}>
                        <Box sx={{ marginTop: '32px', display: 'flex', columnGap: '6px' }}>
                            <Typography
                                sx={{
                                    color: '#344054',
                                    fontSize: '16px',
                                    fontWeight: '500',
                                    lineHeight: '24px'
                                }}
                            >
                                Tagline
                            </Typography>
                            <Typography sx={{ color: '#F04438' }}>
                                *
                            </Typography>
                        </Box>
                        <Box sx={{ marginTop: '8px' }}>
                            <Typography
                                sx={{
                                    color: '#475467',
                                    fontWeight: '400',
                                    fontSize: '16px',
                                    lineHeight: '24px'
                                }}
                            >
                                DataPrime empowers financial insights with AI-driven solutions
                                for smarter decision-making.
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ textAlign: 'start' }}>
                        <Box sx={{ marginTop: '32px', display: 'flex', columnGap: '6px' }}>
                            <Typography
                                sx={{
                                    color: '#344054',
                                    fontSize: '16px',
                                    fontWeight: '500',
                                    lineHeight: '24px'
                                }}
                            >
                                About
                            </Typography>
                            <Typography sx={{ color: '#F04438' }}>
                                *
                            </Typography>
                        </Box>
                        <Box sx={{ marginTop: '8px' }}>
                            <Typography
                                sx={{
                                    color: '#475467',
                                    fontWeight: '400',
                                    fontSize: '16px',
                                    lineHeight: '24px'
                                }}
                            >
                                At DataPrime, we are dedicated to revolutionizing the financial
                                landscape through cutting-edge AI-driven solutions. Our mission
                                is to empower businesses with invaluable insights for informed
                                decision-making, unlocking new avenues for growth and success in
                                the dynamic world of finance. <br /><br /> With a focus on FinTech
                                innovation, we combine advanced data analytics and artificial
                                intelligence to provide actionable intelligence that drives
                                strategic planning, risk assessment, and market analysis. Backed
                                by a team of experts and a commitment to excellence, DataPrime
                                is your partner in navigating the complexities of the financial
                                realm and achieving sustainable, data-driven success.
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{ display: 'flex', flexDirection: 'column', marginTop: '48px', textAlign: 'start' }}
                    >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography
                                sx={{
                                    fontSize: '18px',
                                    fontWeight: '600',
                                    linetHeight: '28px',
                                    color: '#101828'
                                }}
                            >
                                Leadership
                            </Typography>
                        </Box>
                        <Typography
                            sx={{
                                fontSize: '14px',
                                fontWeight: '400',
                                lineHeight: '20px',
                                color: '#475467'
                            }}
                        >
                            Show leadership of your company.
                        </Typography>
                    </Box>
                    <Divider sx={{ marginTop: '20px' }} />
                    <Box
                        sx={{ display: 'flex', marginTop: '32px', flexDirection: { md: 'row', xs: 'column' }, width: '80%', justifyContent: 'space-between' }}
                    >
                        <Box sx={{ display: 'flex', columnGap: '12px' }}>
                            <Box>
                                <img src={avatar} alt="leaderimge" />
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'start' }}>
                                <Typography
                                    sx={{
                                        color: '#344054',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        lineHeight: '20px'
                                    }}
                                >
                                    Sienna Hewitt
                                </Typography>
                                <Typography
                                    sx={{
                                        color: '#475467',
                                        fontWeight: '400',
                                        lineHeight: '20px',
                                        fontSize: '14px'
                                    }}
                                >
                                    Founder
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', columnGap: '12px', textAlign: 'start' }}>
                            <Box>
                                <img src={avatar} alt="leaderimge" />
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography
                                    sx={{
                                        color: '#344054',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        lineHeight: '20px'
                                    }}
                                >
                                    Koray Okumus
                                </Typography>
                                <Typography
                                    sx={{
                                        color: '#475467',
                                        fontWeight: '400',
                                        lineHeight: '20px',
                                        fontSize: '14px'
                                    }}
                                >
                                    Co-Founder
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', columnGap: '12px', textAlign: 'start' }}>
                            <Box>
                                <img src={avatar} alt="leaderimge" />
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography
                                    sx={{
                                        color: '#344054',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        lineHeight: '20px'
                                    }}
                                >
                                    Koray Okumus
                                </Typography>
                                <Typography
                                    sx={{
                                        color: '#475467',
                                        fontWeight: '400',
                                        lineHeight: '20px',
                                        fontSize: '14px'
                                    }}
                                >
                                    Co-Founder
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginTop: '48px',
                            textAlign: 'start'
                        }}
                    >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', }}>
                            <Typography
                                sx={{
                                    fontSize: '18px',
                                    fontWeight: '600',
                                    linetHeight: '28px',
                                    color: '#101828'
                                }}
                            >
                                Open positions
                            </Typography>
                        </Box>
                        <Typography
                            sx={{
                                fontSize: '14px',
                                fontWeight: '400',
                                lineHeight: '20px',
                                color: '#475467',
                                amrginTop: '4px'
                            }}
                        >
                            Show open positions in your company.
                        </Typography>
                    </Box>
                    <Divider sx={{ marginTop: '20px' }} />
                    <Box
                        sx={{
                            padding: '20px',
                            border: '2px solid #EAECF0',
                            height: { md: '200px', xs: '100%' },
                            width: '100%',
                            marginTop: '32px',
                            borderRadius: '14px'
                        }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: { md: 'row', xs: 'column' }, width: '100%', marginBottom: { md: '0px', xs: '10px' } }}>
                            <Box sx={{ display: 'flex', columnGap: '10px', flexDirection: { md: 'row', xs: 'column' }, marginBottom: { md: '0px', xs: '10px' } }}>
                                <Typography
                                    sx={{
                                        fontWeight: '600',
                                        fontSize: '20px',
                                        lineHeight: '28px',
                                        color: '#101828',
                                        textAlign: { xs: 'start', md: 'start' },
                                    }}
                                >
                                    Product Designer
                                </Typography>
                                <Box
                                    sx={{
                                        height: '24px',
                                        width: '77px',
                                        border: '1px solid #D0D5DD',
                                        borderRadius: '6px',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        columnGap: '10px',

                                    }}
                                >
                                    <Box
                                        sx={{
                                            height: '10px',
                                            width: '10px',
                                            border: '1px solid #2E90FA',
                                            borderRadius: '100%',
                                            backgroundColor: '#2E90FA',

                                        }}
                                    ></Box>
                                    <Typography
                                        sx={{
                                            color: '#344054',
                                            fontWeight: '500',
                                            fontSize: '14px',
                                            lineHeight: '20px'
                                        }}
                                    >
                                        Design
                                    </Typography>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    height: { md: '30px', xs: '100%' },
                                    width: { md: '147px', xs: '100%' },
                                    border: '2px solid #D0D5DD',
                                    borderRadius: '10px',
                                    alignItems: { xs: 'start', md: 'center' },
                                    justifyContent: 'center',
                                    display: 'flex',
                                    columnGap: '10px',

                                }}
                            >
                                <Typography
                                    sx={{
                                        color: '#344054',
                                        fontWeight: '500',
                                        fontSize: '16px',
                                        lineHeight: '20px'
                                    }}
                                >
                                    Toronto, Canada
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ textAlign: 'start' }}>
                            <Typography
                                sx={{
                                    fontWeight: '300',
                                    fontSize: '16px',
                                    lineHeight: '24px',
                                    marginTop: '8px',

                                }}
                            >
                                We’re looking for a mid-level product designer to join our
                                team.
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', columnGap: '30px', width: '100%', flexDirection: { md: 'row', xs: 'column' } }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    columnGap: '10px',
                                    marginTop: '40px'
                                }}
                            >
                                <AccessTimeOutlined sx={{ color: '#98A2B3' }} />
                                <Typography
                                    sx={{
                                        color: '#475467',
                                        lineHeight: '24px',
                                        fontSize: '16px',
                                        fontWeight: '500'
                                    }}
                                >
                                    Full-time
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    columnGap: '10px',
                                    marginTop: '40px'
                                }}
                            >
                                <MonetizationOnOutlined sx={{ color: '#98A2B3', width: '20px', height: '20px' }} />
                                <Typography
                                    sx={{
                                        color: '#475467',
                                        lineHeight: '24px',
                                        fontSize: '16px',
                                        fontWeight: '500'
                                    }}
                                >
                                    60k - 70k
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            padding: '20px',
                            border: '2px solid #EAECF0',
                            height: { md: '200px', xs: '100%' },
                            width: '100%',
                            marginTop: '32px',
                            borderRadius: '14px'
                        }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: { md: 'row', xs: 'column' }, width: '100%', marginBottom: { md: '0px', xs: '10px' } }}>
                            <Box sx={{ display: 'flex', columnGap: '10px', flexDirection: { md: 'row', xs: 'column' }, marginBottom: { md: '0px', xs: '10px' } }}>
                                <Typography
                                    sx={{
                                        fontWeight: '600',
                                        fontSize: '20px',
                                        lineHeight: '28px',
                                        color: '#101828',
                                        textAlign: { xs: 'start', md: 'start' },
                                    }}
                                >
                                    UX Designer
                                </Typography>
                                <Box
                                    sx={{
                                        height: '24px',
                                        width: '77px',
                                        border: '1px solid #D0D5DD',
                                        borderRadius: '6px',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        columnGap: '10px',

                                    }}
                                >
                                    <Box
                                        sx={{
                                            height: '10px',
                                            width: '10px',
                                            border: '1px solid #2E90FA',
                                            borderRadius: '100%',
                                            backgroundColor: '#2E90FA',

                                        }}
                                    ></Box>
                                    <Typography
                                        sx={{
                                            color: '#344054',
                                            fontWeight: '500',
                                            fontSize: '14px',
                                            lineHeight: '20px'
                                        }}
                                    >
                                        Design
                                    </Typography>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    height: { md: '30px', xs: '100%' },
                                    width: { md: '147px', xs: '100%' },
                                    border: '1px solid #D0D5DD',
                                    borderRadius: '10px',
                                    alignItems: { xs: 'start', md: 'center' },
                                    justifyContent: 'center',
                                    display: 'flex',
                                    columnGap: '10px',

                                }}
                            >
                                <Typography
                                    sx={{
                                        color: '#344054',
                                        fontWeight: '500',
                                        fontSize: '16px',
                                        lineHeight: '20px'
                                    }}
                                >
                                    Toronto, Canada
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ textAlign: 'start' }}>
                            <Typography
                                sx={{
                                    fontWeight: '300',
                                    fontSize: '16px',
                                    lineHeight: '24px',
                                    marginTop: '8px',

                                }}
                            >
                                We’re looking for a mid-level UX designer to join our team.
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', columnGap: '30px', width: '100%', flexDirection: { md: 'row', xs: 'column' } }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    columnGap: '10px',
                                    marginTop: '40px'
                                }}
                            >
                                <AccessTimeOutlined sx={{ color: '#98A2B3' }} />
                                <Typography
                                    sx={{
                                        color: '#475467',
                                        lineHeight: '24px',
                                        fontSize: '16px',
                                        fontWeight: '500'
                                    }}
                                >
                                    Full-time
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    columnGap: '10px',
                                    marginTop: '40px'
                                }}
                            >
                                <MonetizationOnOutlined sx={{ color: '#98A2B3', width: '20px', height: '20px' }} />
                                <Typography
                                    sx={{
                                        color: '#475467',
                                        lineHeight: '24px',
                                        fontSize: '16px',
                                        fontWeight: '500'
                                    }}
                                >
                                    55k - 65k
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginTop: '48px',
                            textAlign: 'start'
                        }}
                    >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', }}>
                            <Typography
                                sx={{
                                    fontSize: '18px',
                                    fontWeight: '600',
                                    linetHeight: '28px',
                                    color: '#101828'
                                }}
                            >
                                More about the startup
                            </Typography>
                        </Box>
                        <Typography
                            sx={{
                                fontSize: '14px',
                                fontWeight: '400',
                                lineHeight: '20px',
                                color: '#475467',
                                marginTop: '4px'
                            }}
                        >
                            Show articles featuring your company.
                        </Typography>
                    </Box>
                    <Divider sx={{ marginTop: '20px', marginBottom: '32px' }} />
                    <Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', textAlign: 'start', columnGap: '32px' }}>
                            {articleData.map((article, index) => (
                                <Box key={index}>
                                    <img src={article.logo} alt={`Logo ${index}`} />
                                    <Box sx={{ marginBottom: '8px', marginTop: '24px' }}>
                                        <Typography
                                            sx={{
                                                fontSize: '14px',
                                                fontWeight: '600',
                                                lineHeight: '20px',
                                                color: '#B54708',
                                            }}
                                        >{article.datePosted}</Typography>
                                    </Box>
                                    <Box sx={{ marginBottom: '8px', }}>
                                        <Typography
                                            sx={{
                                                fontSize: '18px',
                                                fontWeight: '600',
                                                lineHeight: '28px',
                                                color: '#101828',
                                            }}>
                                            {article.title}</Typography>
                                    </Box>
                                    <Box sx={{ marginBottom: '96px', }}>
                                        <Typography
                                            sx={{
                                                fontSize: '16px',
                                                fontWeight: '400',
                                                lineHeight: '24px',
                                                color: '#475467',
                                            }}>
                                            {article.body}</Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>




                <Box sx={{ width: '32%' }}>
                    <Box
                        sx={{
                            border: '1px solid #D0D5DD',
                            height: 'fit',
                            width: { md: '360px', xs: '100%' },
                            padding: '24px',
                            borderRadius: '10px'
                        }}
                    >
                        <Box sx={{ textAlign: 'start' }}>
                            <Box >
                                <Typography
                                    sx={{
                                        color: '#344054',
                                        fontSize: '14px',
                                        fontWeight: '500',
                                        lineHeight: '20px'
                                    }}
                                >
                                    Location
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    columnGap: '20px',
                                    marginTop: '10px'
                                }}
                            >
                                <img src={canadalogo} alt='canadalogo' />
                                <Typography
                                    sx={{ color: '#344054', fontWeight: '500', fontSize: '16px', fontHeight: '24px' }}
                                >
                                    Toronto, Canada
                                </Typography>
                            </Box>
                            <Box>
                                <Box sx={{ marginTop: '24px' }}>
                                    <Typography
                                        sx={{
                                            color: '#344054',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                            lineHeight: '20px'
                                        }}
                                    >
                                        Tags
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{ marginTop: '8px', display: 'flex', columnGap: '10px' }}
                                >
                                    <Box
                                        sx={{
                                            border: '1px solid #E9D7FE',
                                            height: '22px',
                                            width: '81px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: '14px',
                                            color: '#6941C6',
                                            backgroundColor: '#E9D7FE'
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color: '#6941C6',
                                                fontWeight: '500',
                                                lineHeight: '20px',
                                                fontSize: '14px'
                                            }}
                                        >
                                            FinTech
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            border: '1px solid #C7D7FE',
                                            height: '22px',
                                            width: '81px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: '14px',
                                            color: '#6941C6',
                                            backgroundColor: '#C7D7FE'
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color: '#3538CD',
                                                fontWeight: '500',
                                                lineHeight: '20px',
                                                fontSize: '14px'
                                            }}
                                        >
                                            AI-driven
                                        </Typography>
                                    </Box>

                                    <Box
                                        sx={{
                                            border: '1px solid #FCCEEE',
                                            height: '22px',
                                            width: '81px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: '14px',
                                            color: '#6941C6',
                                            backgroundColor: '#FCCEEE'
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color: '#C11574',
                                                fontWeight: '500',
                                                lineHeight: '20px',
                                                fontSize: '14px'
                                            }}
                                        >
                                            Software
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box>
                                <Box sx={{ marginTop: '24px' }}>
                                    <Typography
                                        sx={{
                                            color: '#344054',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                            lineHeight: '20px'
                                        }}
                                    >
                                        Size
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography
                                        sx={{
                                            color: '#344054',
                                            fontWeight: '500',
                                            fontSize: '16px',
                                            lineHeight: '24px'
                                        }}
                                    >
                                        12 employees
                                    </Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Box sx={{ marginTop: '24px' }}>
                                    <Typography
                                        sx={{
                                            color: '#344054',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                            lineHeight: '20px'
                                        }}
                                    >
                                        Website
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        columnGap: '10px',
                                        color: '#B54708'
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: '500',
                                            fontSize: '16px',
                                            lineHeight: '24px'
                                        }}
                                    >
                                        dataprime.com
                                    </Typography>
                                    <ArrowOutwardOutlined style={{ height: '20px', width: '20px' }} />
                                </Box>
                            </Box>
                            <Box>
                                <Box sx={{ marginTop: '24px' }}>
                                    <Typography
                                        sx={{
                                            color: '#344054',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                            lineHeight: '20px'
                                        }}
                                    >
                                        Email
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        columnGap: '10px',
                                        color: '#B54708'
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            color: '#B54708',
                                            fontWeight: '500',
                                            fontSize: '16px',
                                            lineHeight: '24px'
                                        }}
                                    >
                                        info@dataprime.com
                                    </Typography>
                                    <ArrowOutwardOutlined style={{ height: '20px', width: '20px' }} />
                                </Box>
                            </Box>
                            <Box>
                                <Box sx={{ marginTop: '24px' }}>
                                    <Typography
                                        sx={{
                                            color: '#344054',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                            lineHeight: '20px'
                                        }}
                                    >
                                        Social media
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{ display: 'flex', columnGap: '14px', marginTop: '8px' }}
                                >
                                    <Twitter />
                                    <LinkedIn />
                                    <Box
                                        sx={{
                                            height: '20px',
                                            width: '20px',
                                            border: '3px  solid #98A2B3',
                                            display: 'flex',
                                            alignItems: 'center',
                                            borderRadius: '5px',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <Instagram />
                                    </Box>
                                    <YouTube />
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex' }}>
                                <Box

                                    sx={{
                                        borderLeft: '1px solid #D0D5DD',
                                        borderTop: '1px solid #D0D5DD',
                                        borderBottom: '1px solid #D0D5DD',
                                        height: '44px',
                                        width: '220px',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        marginTop: '30px'
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: '400',
                                            fontSize: '16px',
                                            lineHeight: '24px',
                                            color: '#101828'
                                        }}
                                    >
                                        {' '}
                                        venturebuild.com/profil
                                    </Typography>
                                </Box>
                                <Box

                                    sx={{
                                        border: '1px solid #D0D5DD',
                                        height: '44px',
                                        width: { md: '312px', xs: '100%' },
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        marginTop: '30px'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            columnGap: '8px',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <Box>
                                            <ContentCopyOutlined
                                                sx={{ width: '20x', height: '20px' }}
                                            />
                                        </Box>
                                        <Typography
                                            sx={{
                                                fontWeight: '400',
                                                fontSize: '16px',
                                                lineHeight: '24px',
                                                color: '#101828'
                                            }}
                                        >
                                            {' '}
                                            Copy
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            color: '#101828',
                            fontSize: '18px',
                            fontWeight: '600',
                            lineHeight: '28px',
                            marginTop: '32px',
                            marginBottom: '20px',
                            textAlign: 'start'
                        }}
                    >
                    </Box>
                    <Box
                        sx={{
                            border: '1px solid #D0D5DD',
                            height: 'fit',
                            width: { md: '360px', xs: '100%' },
                            padding: '26px',
                            borderRadius: '10px'
                        }}
                    >
                        <Box sx={{ textAlign: 'start' }}>
                            <Box >
                                <Typography
                                    sx={{
                                        color: '#344054',
                                        fontSize: '14px',
                                        fontWeight: '500',
                                        lineHeight: '20px'
                                    }}
                                >
                                    Last round
                                </Typography>
                            </Box>
                            <Box sx={{ marginTop: '8px' }}>
                                <Typography
                                    sx={{
                                        color: '#475467',
                                        fontWeight: '600',
                                        fontSize: '16px',
                                        lineHeight: '24px'
                                    }}
                                >
                                    Pre-seed: CAD $24k
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Box sx={{ marginTop: '24px', textAlign: 'start' }}>
                                <Typography
                                    sx={{
                                        color: '#475467',
                                        fontWeight: '500',
                                        fontSize: '14px',
                                        lineHeight: '20px'
                                    }}
                                >
                                    Investors
                                </Typography>
                            </Box>
                            <Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginTop: '20px',
                                        columnGap: '16px'
                                    }}
                                >
                                    <img src={dataprime} alt="dataprimeinvestor" />
                                    <Typography
                                        sx={{
                                            fontWeight: '500',
                                            fontSize: '14px',
                                            lineHeight: '20px'
                                        }}
                                    >
                                        Comma Capital
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginTop: '20px',
                                        columnGap: '16px'
                                    }}
                                >
                                    <img src={dataprime} alt="dataprimeinvestor" />
                                    <Typography
                                        sx={{
                                            fontWeight: '500',
                                            fontSize: '14px',
                                            lineHeight: '20px'
                                        }}
                                    >
                                        University of Toronto
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginTop: '20px',
                                        columnGap: '16px'
                                    }}
                                >
                                    <img src={dataprime} alt="dataprimeinvestor" />
                                    <Typography
                                        sx={{
                                            fontWeight: '500',
                                            fontSize: '14px',
                                            lineHeight: '20px'
                                        }}
                                    >
                                        Raviga Capital
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default PublicCompanyView