import {
    AccessTimeOutlined,
    AddOutlined,
    ClearOutlined,
    EditOutlined,
    FacebookOutlined,
    Instagram,
    LinkedIn,
    MonetizationOnOutlined,
    Search,
    Twitter,
    YouTube
} from '@mui/icons-material'
import appBg from '../../assets/application_bg.png'
import {
    Button,
    Divider,
    IconButton,
    InputBase,
    Modal,
    Paper,
    Switch,
    TextField,
    Typography
} from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import avatar from '../../assets/avatar.png'
import dataprime from '../../assets/dataprime.png'
import raviga from '../../assets/raviga.png'
import PublicCompanyView from './PublicCompanyView'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/dataprime.png'
import articleBg from '../../assets/article-bg.png'
import articleBg2 from '../../assets/article-2bg.png'
import AddLeadershipModal from '../../components/companyEdit/AddLeadershipModal'


const PrivateViewUpdate = () => {
    const [editModalOpen, setEditModalOpen] = useState(false)
    const [isToggled, setIsToggled] = useState(false)

    const navigate = useNavigate()

    const handleChange = () => {
        setIsToggled(!isToggled)
    }

    const handleEditBoxClick = () => {
        setEditModalOpen(true)
    }

    const handleEditCloseModal = () => {
        setEditModalOpen(false)
    }

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
            <Box
                sx={{
                    backgroundImage: `url(${appBg})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: { md: '240px', xs: '100%' },
                    width: '100%'
                }}
            />
            <Box
                sx={{
                    height: { md: '185px', xs: '100%' },
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '-40px',
                    padding: { md: '20px', xs: '0px' },
                    flexDirection: { md: 'row', xs: 'column' },
                    width: '100%'
                }} >
                <Box sx={{ display: 'flex', alignItems: 'center', columnGap: '20px', flexDirection: { md: 'row', xs: 'column' } }}>
                    <Box
                        sx={{
                            display: 'flex',
                            borderRadius: '100px',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Box>
                            <img src={logo} alt="logo" style={{ height: '160px', width: '160px' }} />
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'start' }}>
                        <Typography
                            sx={{
                                fontSize: '30px',
                                fontWeight: '600',
                                lineHeight: '38px',
                                color: '#101828'
                            }}
                        >
                            DataPrime
                        </Typography>
                        <Typography
                            sx={{
                                color: '#475467',
                                fontWeight: '400',
                                fontSize: '16px',
                                lineHeight: '24px',
                                marginTop: '4px'
                            }}
                        >
                            FinTech · Toronto, CA · 12 employees
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        columnGap: '30px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#344054',

                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            columnGap: '10px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: { xs: 'start' },
                            width: '100%'
                        }}
                    >
                        <Switch
                            checked={isToggled}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />

                        <Typography
                            sx={{
                                color: '#344054',
                                fontWeight: '500',
                                lineHeight: '24px',
                                fontSize: '16px'
                            }}
                        >
                            {isToggled ? ' Switch to private view' : ' Switch to public view'}
                        </Typography>
                    </Box>
                    <Box sx={{}}>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                color: '#FFFFFF',
                                backgroundColor: '#DC6803',
                                borderRadius: '8px',
                                fontWeight: '600',
                                lineHeight: '20px',
                                height: { md: '40px', xs: '100%' },
                                width: { md: '127px', xs: '100%' },
                                textTransform: 'none',
                                fontSize: '14px'
                            }}
                            onClick={() => {
                                navigate('/app/companyEditPage/2')
                            }}
                        >
                            Edit
                        </Button>
                    </Box>
                </Box>
            </Box>
            {!isToggled ? (
                <>
                    <Box sx={{ padding: '32px', display: 'flex', columnGap: '40px', width: '100%', flexDirection: { md: 'row', xs: 'column' } }}>
                        <Box sx={{ width: { md: '68%', xs: '100%' } }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
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
                                        color: '#475467',
                                        marginTop: '4px'
                                    }}
                                >
                                    Tell viewers more about your company.
                                </Typography>
                            </Box>
                            <Divider sx={{ marginTop: '20px' }} />
                            <Box>
                                <Box
                                    sx={{ marginTop: '32px', display: 'flex', columnGap: '6px' }}
                                >
                                    <Typography
                                        sx={{
                                            color: '#344054',
                                            fontSize: '14px',
                                            fontWeight: '600',
                                            lineHeight: '20px'
                                        }}
                                    >
                                        Tagline
                                    </Typography>
                                    <Typography sx={{ color: '#F04438' }}>
                                        *
                                    </Typography>
                                </Box>
                                <Box sx={{ marginTop: '12px' }}>
                                    <textarea
                                        style={{
                                            width: '100%',
                                            border: '1px solid rgba(208, 213, 221, 1)',
                                            borderRadius: '8px',
                                            padding: '14px',
                                            fontSize: '16px',
                                            lineHeight: '24px',
                                            fontWeight: '400',
                                            fontFamily: ' inter'
                                        }}
                                        placeholder="DataPrime empowers financial insights with AI-driven solutions for smarter decision-making."
                                        rows={1}
                                        onChange={(e) => {
                                            console.log(e)
                                        }}
                                    />
                                </Box>
                            </Box>
                            <Box>
                                <Box
                                    sx={{ marginTop: '32px', display: 'flex', columnGap: '6px' }}
                                >
                                    <Typography
                                        sx={{
                                            color: '#344054',
                                            fontSize: '14px',
                                            fontWeight: '600',
                                            lineHeight: '20px'
                                        }}
                                    >
                                        About
                                    </Typography>
                                    <Typography sx={{ color: '#F04438' }}>
                                        *
                                    </Typography>
                                </Box>
                                <Box sx={{ marginTop: '10px' }}>
                                    <textarea
                                        style={{
                                            width: '100%',
                                            border: '1px solid rgba(208, 213, 221, 1)',
                                            borderRadius: '8px',
                                            padding: '14px',
                                            fontSize: '16px',
                                            lineHeight: '24px',
                                            fontWeight: '400',
                                            color: '#101828',
                                            fontFamily: ' inter'
                                        }}
                                        // aria-label="textarea"
                                        placeholder="At DataPrime, we are dedicated to revolutionizing the financial landscape through cutting-edge AI-driven solutions. Our mission is to empower businesses with invaluable insights for informed decision-making, unlocking new avenues for growth and success in the dynamic world of finance.

With a focus on FinTech innovation, we combine advanced data analytics and artificial intelligence to provide actionable intelligence that drives strategic planning, risk assessment, and market analysis. Backed by a team of experts and a commitment to excellence, DataPrime is your partner in navigating the complexities of the financial realm and achieving sustainable, data-driven success."
                                        rows={8}
                                        onChange={(e) => {
                                            console.log(e)
                                        }}
                                    />
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
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            columnGap: '30px',
                                            color: '#475467'
                                        }}
                                    >
                                        <AddOutlined onClick={handleEditBoxClick} />
                                        <Modal
                                            open={editModalOpen}
                                            onClose={handleEditCloseModal}
                                            aria-labelledby="modal-title"
                                            aria-describedby="modal-description"
                                        >
                                            <AddLeadershipModal />
                                        </Modal>

                                        <EditOutlined />
                                    </Box>
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
                                            Noah Pierre
                                        </Typography>
                                        <Typography
                                            sx={{
                                                color: '#475467',
                                                fontWeight: '400',
                                                lineHeight: '20px',
                                                fontSize: '14px'
                                            }}
                                        >
                                            Product manager
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
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            columnGap: '30px',
                                            color: '#475467'
                                        }}
                                    >
                                        <AddOutlined onClick={handleEditBoxClick} />
                                        <Modal
                                            open={editModalOpen}
                                            onClose={handleEditCloseModal}
                                            aria-labelledby="modal-title"
                                            aria-describedby="modal-description"
                                        >
                                            <AddLeadershipModal />
                                        </Modal>

                                        <EditOutlined />
                                    </Box>
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
                                        We're looking for a mid-level product designer to join our
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
                                        We're looking for a mid-level UX designer to join our team.
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', columnGap: '30px', width: '100%', flexDirection: { md: 'row', xs: 'column' }, }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            columnGap: '10px',
                                            marginTop: { md: '32px', xs: '10px' }
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
                                            marginTop: { md: '32px', xs: '10px' }
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
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            columnGap: '30px',
                                            color: '#475467'
                                        }}
                                    >
                                        <AddOutlined onClick={handleEditBoxClick} />
                                        <Modal
                                            open={editModalOpen}
                                            onClose={handleEditCloseModal}
                                            aria-labelledby="modal-title"
                                            aria-describedby="modal-description"
                                        >
                                            <AddLeadershipModal />
                                        </Modal>

                                        <EditOutlined />
                                    </Box>
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
                        <Box sx={{ width: { md: '360px', xs: '100%' }, marginTop: { md: '0px', xs: '20px' }, }}>
                            <Box
                                sx={{
                                    border: '1px solid #D0D5DD',
                                    height: 'fit',
                                    padding: '26px',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                <Box sx={{ width: '100%' }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            columnGap: '6px',
                                            width: '100%',
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color: '#344054',
                                                fontSize: '14px',
                                                fontWeight: '500',
                                                lineHeight: '20px',
                                            }}
                                        >
                                            Headquaters
                                        </Typography>
                                        <Typography sx={{ color: '#F04438' }}>
                                            *
                                        </Typography>
                                    </Box>
                                    <Box sx={{ marginTop: '6px', width: '100%' }}>
                                        <Paper
                                            component="form"
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                width: { md: 312, xs: '100%' },
                                                height: 44,
                                                borderRadius: 2,
                                                boxShadow: 0,
                                                border: '1px solid #D0D5DD'

                                            }}
                                        >
                                            <InputBase
                                                sx={{ ml: 2, flex: 1, fontSize: 16 }}
                                                placeholder="Canada"
                                                inputProps={{ 'aria-label': 'headquater' }}
                                            />
                                        </Paper>
                                    </Box>
                                    <Box>
                                        <Box
                                            sx={{
                                                marginTop: '24px',
                                                display: 'flex',
                                                columnGap: '6px'
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    color: '#344054',
                                                    fontSize: '14px',
                                                    fontWeight: '500',
                                                    lineHeight: '20px'
                                                }}
                                            >
                                                Industries
                                            </Typography>
                                            <Typography sx={{ color: '#F04438' }}>
                                                *
                                            </Typography>
                                        </Box>
                                        <Box sx={{ marginTop: '6px', width: '100%' }}>
                                            <Paper
                                                component="form"
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    width: { md: 312, xs: '100%' },
                                                    height: 44,
                                                    borderRadius: 2,
                                                    boxShadow: 0,
                                                    border: '1px solid #D0D5DD'
                                                }}
                                            >
                                                <IconButton
                                                    type="button"
                                                    sx={{ p: '10px' }}
                                                    aria-label="search"
                                                >
                                                    <Search />
                                                </IconButton>

                                                <InputBase
                                                    sx={{ flex: 1, fontSize: 16 }}
                                                    placeholder="Search for label"
                                                    inputProps={{ 'aria-label': 'label search' }}
                                                />
                                            </Paper>
                                        </Box>
                                        <Box
                                            sx={{
                                                marginTop: '12px',
                                                display: 'flex',
                                                columnGap: '10px',
                                                flexDirection: { md: 'row', xs: 'column' },
                                                rowGap: { xs: '10px', md: '0px' }
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    border: '1px solid #E9D7FE',
                                                    height: '22px',
                                                    width: '110px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    borderRadius: '14px',
                                                    color: '#6941C6',
                                                    backgroundColor: '#E9D7FE',
                                                    columnGap: '10px'
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
                                                <ClearOutlined sx={{ height: '15px', width: '15px' }} />
                                            </Box>
                                            <Box
                                                sx={{
                                                    border: '1px solid #C7D7FE',
                                                    height: '22px',
                                                    width: '110px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    borderRadius: '14px',
                                                    color: '#6941C6',
                                                    backgroundColor: '#C7D7FE',
                                                    columnGap: '10px'
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
                                                <ClearOutlined sx={{ height: '15px', width: '15px' }} />
                                            </Box>

                                            <Box
                                                sx={{
                                                    border: '1px solid #FCCEEE',
                                                    height: '22px',
                                                    width: '110px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    borderRadius: '14px',
                                                    color: '#6941C6',
                                                    backgroundColor: '#FCCEEE',
                                                    columnGap: '10px'
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
                                                <ClearOutlined sx={{ height: '15px', width: '15px' }} />
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Box
                                            sx={{
                                                marginTop: '24px',
                                                display: 'flex',
                                                columnGap: '6px'
                                            }}
                                        >
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
                                            <Typography sx={{ color: '#F04438' }}>
                                                *
                                            </Typography>
                                        </Box>
                                        <Box sx={{ marginTop: '6px', width: '100%' }}>
                                            <Paper
                                                component="form"
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    width: { md: 312, xs: '100%' },
                                                    height: 44,
                                                    borderRadius: 2,
                                                    boxShadow: 0,
                                                    border: '1px solid #D0D5DD'
                                                }}
                                            >
                                                <InputBase
                                                    sx={{ ml: 2, flex: 1, fontSize: 16 }}
                                                    placeholder="12"
                                                    inputProps={{ 'aria-label': 'company size' }}
                                                />
                                            </Paper>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Box sx={{ marginTop: '24px', display: 'flex' }}>
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
                                        <Box sx={{ marginTop: '6px', width: '100%' }}>
                                            <Paper
                                                component="form"
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    width: { md: 312, xs: '100%' },
                                                    height: 44,
                                                    borderRadius: 2,
                                                    boxShadow: 0,
                                                    border: '1px solid #D0D5DD'
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        padding: '10px',
                                                        color: '#667085',
                                                        fontSize: '14px'
                                                    }}
                                                >
                                                    http://
                                                </Typography>

                                                <Divider
                                                    sx={{ ml: 2, height: 50, m: 0.5 }}
                                                    orientation="vertical"
                                                />
                                                <InputBase
                                                    sx={{ flex: 1, fontSize: 16, ml: 1 }}
                                                    placeholder="www.dataprime.com"
                                                    inputProps={{ 'aria-label': 'label search' }}
                                                />
                                            </Paper>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Box
                                            sx={{
                                                marginTop: '24px',
                                                display: 'flex',
                                                columnGap: '6px'
                                            }}
                                        >
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
                                            <Typography sx={{ color: '#F04438' }}>
                                                *
                                            </Typography>
                                        </Box>
                                        <Box sx={{ marginTop: '6px', width: '100%' }}>
                                            <Paper
                                                component="form"
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    width: { md: 312, xs: '100%' },
                                                    height: 44,
                                                    borderRadius: 2,
                                                    boxShadow: 0,
                                                    border: '1px solid #D0D5DD'
                                                }}
                                            >
                                                <InputBase
                                                    sx={{ ml: 2, flex: 1, fontSize: 16 }}
                                                    placeholder="info@dataprime.com"
                                                    inputProps={{ 'aria-label': 'company size' }}
                                                />
                                            </Paper>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Box sx={{ marginTop: '24px', display: 'flex' }}>
                                            <Typography
                                                sx={{
                                                    color: '#344054',
                                                    fontSize: '14px',
                                                    fontWeight: '500',
                                                    lineHeight: '20px'
                                                }}
                                            >
                                                Twitter
                                            </Typography>
                                        </Box>
                                        <Box sx={{ marginTop: '6px', width: '100%' }}>
                                            <Paper
                                                component="form"
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    width: { md: 312, xs: '100%' },
                                                    height: 44,
                                                    borderRadius: 2,
                                                    boxShadow: 0,
                                                    border: '1px solid #D0D5DD'
                                                }}
                                            >
                                                <Box sx={{ marginLeft: '10px' }}>
                                                    {' '}
                                                    <Twitter sx={{ color: '#1DA1F2', width: '20px', height: '20px' }} />
                                                </Box>
                                                <InputBase
                                                    sx={{ flex: 1, fontSize: 16, ml: 1 }}
                                                    placeholder="twitter.com/example"
                                                    inputProps={{ 'aria-label': 'label search' }}
                                                />
                                            </Paper>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Box sx={{ marginTop: '24px', display: 'flex' }}>
                                            <Typography
                                                sx={{
                                                    color: '#344054',
                                                    fontSize: '14px',
                                                    fontWeight: '500',
                                                    lineHeight: '20px'
                                                }}
                                            >
                                                Facebook
                                            </Typography>
                                        </Box>
                                        <Box sx={{ marginTop: '6px', width: '100%' }}>
                                            <Paper
                                                component="form"
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    width: { md: 312, xs: '100%' },
                                                    height: 44,
                                                    borderRadius: 2,
                                                    boxShadow: 0,
                                                    border: '1px solid #D0D5DD'
                                                }}
                                            >
                                                <IconButton
                                                    type="button"
                                                    sx={{ p: '10px' }}
                                                    aria-label="facebooklogo"
                                                >
                                                    <FacebookOutlined sx={{ color: '#1DA1F2', width: '20px', height: '20px' }} />
                                                </IconButton>

                                                <InputBase
                                                    sx={{ flex: 1, fontSize: 16, }}
                                                    placeholder="facebook.com/example"
                                                    inputProps={{ 'aria-label': 'label search' }}
                                                />
                                            </Paper>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Box sx={{ marginTop: '24px', display: 'flex' }}>
                                            <Typography
                                                sx={{
                                                    color: '#344054',
                                                    fontSize: '14px',
                                                    fontWeight: '500',
                                                    lineHeight: '20px'
                                                }}
                                            >
                                                Linkedin
                                            </Typography>
                                        </Box>
                                        <Box sx={{ marginTop: '6px', width: '100%' }}>
                                            <Paper
                                                component="form"
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    width: { md: 312, xs: '100%' },
                                                    height: 44,
                                                    borderRadius: 2,
                                                    boxShadow: 0,
                                                    border: '1px solid #D0D5DD'
                                                }}
                                            >
                                                <Box sx={{ marginLeft: '10px', width: '20px', height: '20px' }}>
                                                    {' '}
                                                    <LinkedIn
                                                        sx={{ color: '#0A66C2', backgroundColor: 'white' }}
                                                    />
                                                </Box>

                                                <InputBase
                                                    sx={{ flex: 1, fontSize: 16, ml: 1.5 }}
                                                    placeholder="linkedin.com/example"
                                                    inputProps={{ 'aria-label': 'label search' }}
                                                />
                                            </Paper>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Box sx={{ marginTop: '24px', display: 'flex' }}>
                                            <Typography
                                                sx={{
                                                    color: '#344054',
                                                    fontSize: '14px',
                                                    fontWeight: '500',
                                                    lineHeight: '20px'
                                                }}
                                            >
                                                Instagram
                                            </Typography>
                                        </Box>
                                        <Box sx={{ marginTop: '6px', width: '100%' }}>
                                            <Paper
                                                component="form"
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    width: { md: 312, xs: '100%' },
                                                    height: 44,
                                                    borderRadius: 2,
                                                    boxShadow: 0,
                                                    border: '1px solid #D0D5DD'
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        height: '20px',
                                                        width: '20px',
                                                        border: '3px  solid #98A2B3',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        borderRadius: '5px',
                                                        justifyContent: 'center',
                                                        marginLeft: '10px'
                                                    }}
                                                >
                                                    <Instagram
                                                        sx={{ backgroundColor: 'white', color: '#000100' }}
                                                    />
                                                </Box>

                                                <InputBase
                                                    sx={{ flex: 1, fontSize: 16, ml: 1.5 }}
                                                    placeholder="instagram.com/example"
                                                    inputProps={{ 'aria-label': 'label search' }}
                                                />
                                            </Paper>
                                        </Box>
                                    </Box>
                                    <Box >
                                        <Box sx={{ marginTop: '24px', display: 'flex' }}>
                                            <Typography
                                                sx={{
                                                    color: '#344054',
                                                    fontSize: '14px',
                                                    fontWeight: '500',
                                                    lineHeight: '20px'
                                                }}
                                            >
                                                Youtube
                                            </Typography>
                                        </Box>
                                        <Box sx={{ marginTop: '6px', width: '100%' }}>
                                            <Paper
                                                component="form"
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    width: { md: 312, xs: '100%' },
                                                    height: 44,
                                                    borderRadius: 2,
                                                    boxShadow: 0,
                                                    border: '1px solid #D0D5DD'
                                                }}
                                            >
                                                <IconButton
                                                    type="button"
                                                    sx={{ p: '10px' }}
                                                    aria-label="youtubebutton"
                                                >
                                                    <YouTube sx={{ color: 'red', width: '20px', height: '20px' }} />
                                                </IconButton>

                                                <InputBase
                                                    sx={{ flex: 1, fontSize: 16, ml: 1 }}
                                                    placeholder="youtube.com/example"
                                                    inputProps={{ 'aria-label': 'label search' }}
                                                />
                                            </Paper>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    color: '#101828',
                                    fontSize: '22px',
                                    fontWeight: '600',
                                    lineHeight: '28px',
                                    marginTop: '32px',
                                    marginBottom: '20px',
                                    display: 'flex'
                                }}
                            >
                            </Box>
                            <Box
                                sx={{
                                    border: '1px solid #EAECF0',
                                    height: 'fit',
                                    width: { md: '360px', xs: '100%' },
                                    padding: '24px',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    flexDirection: 'column'


                                }}
                            >
                                <Box sx={{
                                    flexDirection: 'column',
                                    display: 'flex',
                                    width: '100%'
                                }}>
                                    <Box >
                                        <Box sx={{ textAlign: 'start' }}>
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
                                        <Box>
                                            <TextField
                                                // label="e.g.12"
                                                size="small"
                                                variant="outlined"
                                                sx={{
                                                    width: { md: 312, xs: '100%' },
                                                    marginTop: '6px',
                                                    marginBottom: '10px',
                                                }}
                                            ></TextField>
                                        </Box>
                                    </Box>
                                    <Box sx={{ marginBottom: '24px' }}>
                                        <Box sx={{ marginTop: '24px', display: 'flex', alignItems: 'start' }}>
                                            <Typography
                                                sx={{
                                                    color: '#344054',
                                                    fontSize: '14px',
                                                    fontWeight: '500',
                                                    lineHeight: '20px'
                                                }}
                                            >
                                                Total raised
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <TextField
                                                // label="e.g.12"
                                                size="small"
                                                variant="outlined"
                                                sx={{
                                                    width: { md: '312px', xs: '100%' },
                                                    marginTop: '10px',
                                                    marginBottom: '10px',
                                                    height: '30px'
                                                }}
                                            ></TextField>
                                        </Box>
                                    </Box>
                                </Box>


                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', width: '100%' }}>
                                    <Box>
                                        <Typography
                                            sx={{
                                                color: '#475467',
                                                fontWeight: '500',
                                                fontSize: '14px',
                                                lineHeight: '50px'
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
                                                marginTop: '12px',
                                                columnGap: '16px'
                                            }}
                                        >
                                            <img src={dataprime} alt="ravigainvestor" />
                                            <Typography
                                                sx={{
                                                    fontWeight: '500',
                                                    fontSize: '14px',
                                                    lineHeight: '18px'
                                                }}
                                            >
                                                Comma Capital
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                marginTop: '12px',
                                                columnGap: '16px'
                                            }}
                                        >
                                            <img src={dataprime} alt="ravigainvestor" />
                                            <Typography
                                                sx={{
                                                    fontWeight: '500',
                                                    fontSize: '14px',
                                                    lineHeight: '18px'
                                                }}
                                            >
                                                University of Toronto
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                marginTop: '12px',
                                                columnGap: '16px'
                                            }}
                                        >
                                            <img src={raviga} alt="ravigainvestor" />
                                            <Typography
                                                sx={{
                                                    fontWeight: '500',
                                                    fontSize: '14px',
                                                    lineHeight: '18px'
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
                </>
            ) : (
                <PublicCompanyView />
            )}
        </Box>
    )
}

export default PrivateViewUpdate
