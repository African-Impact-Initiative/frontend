import { useState } from 'react'
import { Box } from '@mui/system'
import avatar2 from '../../../assets/Avatar2.png'
import avatar3 from '../../../assets/Avatar3.png'
import avatar4 from '../../../assets/Avatar4.png'
import TableData from '../../table/DashBoardTableData'
import avatar1 from '../../../assets/Avatar1.png'
import Typography from '@mui/material/Typography'
import { Add, MoreVert, MoreVertOutlined, Search } from '@mui/icons-material'
import Button from '@mui/material/Button'
import { Divider, MenuItem, TextField } from '@mui/material'
import Calendar from '../calender/Calender'
import EventTime from '../calender/EventTime'
import PageHeader from '../../pageHeader/PageHeader'
import yellowlogo from '../../../assets/yellowlogo.png'
import { useNavigate } from 'react-router'



const headers = ['TaskName', 'Team', 'Progress', 'DueDate']
const dataKeyAccessors = ['TaskName', 'team', 'Progress', 'DueDate']
const data = [
    {
        id: 1,
        TaskName: 'Define MVP scope',
        team: 'Product',
        Progress: '2/5',
        DueDate: 'Wed, Jun 12',
        teamType: 'product',
    },
    {
        id: 2,
        TaskName: 'Implement SEO strategies',
        team: 'Marketing',
        Progress: '1/3',
        DueDate: 'Wed, Jun 12',
        teamType: 'marketing',
    },
    {
        id: 3,
        TaskName: 'Create non-disclosure agreements',
        team: 'Legal',
        Progress: '4/6',
        DueDate: 'Thur, Jun 13',
        teamType: 'legal',
    },
    {
        id: 4,
        TaskName: 'Set up social media profiles',
        team: 'Finance',
        Progress: '1/2',
        DueDate: 'Thur, Jun 13',
        teamType: 'finance',
    },
    {
        id: 5,
        TaskName: 'Establish contingency plans',
        team: 'Management',
        Progress: '3/5',
        DueDate: 'Fri, Jun 13',
        teamType: 'management',
    },
    {
        id: 6,
        TaskName: 'Develop an employee handbook',
        team: 'Operations',
        Progress: '2/7',
        DueDate: 'Mon, Jun 17',
        TeamType: 'operations',
    },
]

const Dashboard = () => {
    const [selectItem, setSelectItem] = useState('')
    const [status, setStatus] = useState(false)

    const navigate = useNavigate()



    const filters = [
        { label: 'English', value: 'English' },
        { label: 'Maths', value: 'Maths' },
        { label: 'Science', value: 'Science' },
        { label: 'History', value: 'History' },
        { label: 'Art', value: 'Art' },
    ]


    const members = [
        {
            id: 1,
            url: avatar1,
            name: 'Mary Black',
            activity: 'Mentioned You',
            activityDetail:
                'I don’t really know if we should proceed with this idea, what do you think?',
            activityType: 'text',
        },
        {
            id: 2,
            url: avatar2,
            name: 'Uche',
            activity: 'Purchased SEO Masterclass',
            activityType: 'pdf',
        },
        {
            id: 3,
            url: avatar3,
            name: 'Mary Black',
            activity:
                'I don’t really know if we should proceed with this idea, what do you think?',
            activityType: 'pdf',
        },
        {
            id: 4,
            url: avatar4,
            name: 'Uche',
            activity: 'Purchased SEO Masterclass',
            activityType: 'pdf',
        },
        {
            id: 5,
            url: avatar1,
            name: 'Mary Black',
            activity:
                'I don’t really know if we should proceed with this idea, what do you think?',
            activityType: 'pdf',
        },
        {
            id: 6,
            url: avatar2,
            name: 'Uche',
            activity: 'Purchased SEO Masterclass',
            activityType: 'pdf',
        },
        {
            id: 7,
            url: avatar3,
            name: 'Mary Black',
            activity:
                'I don’t really know if we should proceed with this idea, what do you think?',
            activityType: 'pdf',
        },
        {
            id: 8,
            url: avatar4,
            name: 'Uche',
            activity: 'Purchased SEO Masterclass',
            activityType: 'pdf',
        },
    ]
    

    const items = [
        {
            id: 1,
            name: 'Product',
        },
        {
            id: 2,
            name: 'Marketing',
        },
        {
            id: 3,
            name: 'Legal',
        },
        {
            id: 4,
            name: 'Management',
        },
        {
            id: 5,
            name: 'Finance',
        },
        {
            id: 6,
            name: 'Operation',
        },
    ]

    const handleOnChange = (e, inputeName) => {
        switch (inputeName) {
        case 'select':
            setSelectItem(e.target.value)
            break
        default:
            setSelectItem(e.target.value)
        }
    }

    return (
        <Box sx={{ padding: '20px', width: '100%' }}>
            <PageHeader
                title="Home"
                subTitle="Monitor recent activities and key metrics of your company here."
            />
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    columnGap: '30px',
                    marginTop: '30px',
                    flexDirection: { md: 'row', xs: 'column' }
                }}
            >
                <Box sx={{ width: '100%' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            marginBottom: '30px',
                            columnGap: '20px',
                        }}
                    >
                        <Box
                            sx={{
                                border: '1px solid #EAECF0',
                                borderRadius: '12px',
                                width: { md: '48.5%', xs: '100%' },
                                height: { md: '200px', xs: '100%' },
                                marginBottom: { xs: '20px' }
                            }}>
                            <Box
                                sx={{
                                    justifyContent: 'space-between',
                                    padding: '20px',
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <Typography
                                        variant="p"
                                        sx={{
                                            fontWeight: '600',
                                            fontSize: '16px',
                                            lineHeight: '24px',
                                            color: '#101828',
                                        }}
                                    >
                                        Public profile
                                    </Typography>
                                    <MoreVert
                                        sx={{ color: 'rgba(152, 162, 179, 1)', cursor: 'pointer' }}
                                    />
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        columnGap: '26px',
                                        marginTop: '20px',
                                    }}
                                >
                                    <Box
                                        variant="h6"
                                        sx={{
                                            borderRadius: '30px',
                                            border: '1px solid #EAECF0',
                                            width: '50px',
                                            height: '50px',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            display: 'flex',
                                        }}
                                    >
                                        <img src={yellowlogo} alt="humanimage" style={{height: '30px', width: '30px'}} />
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'start' }}>
                                        <Typography
                                            variant="p"
                                            sx={{
                                                fontWeight: '600',
                                                fontSize: '14px',
                                                lineHeight: '20px',
                                                color: '#344054',
                                            }}
                                        >
                                            DataPrime Solutions
                                        </Typography>
                                        <Typography
                                            variant="p"
                                            sx={{
                                                fontWeight: '400',
                                                color: '#475467',
                                                fontSize: '14px',
                                                lineHeight: '20px',
                                            }}
                                        >
                                            An AI-driven FinTech company.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Divider
                                sx={{
                                    width: '100%',
                                    marginTop: '10px',
                                    marginBottom: '10px',
                                    padding: 0,
                                }}
                            />
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    padding: '0 30px',
                                }}
                            >
                                <Button
                                    variant="text"
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                        color: '#DC6803',
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        textTransform: 'none',
                                        lineHeight: '20px',
                                    }}
                                    onClick={() => {
                                        navigate('/app/companyEditPage/2')
                                    }}
                                >
                                    Edit
                                </Button>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                border: '1px solid #EAECF0',
                                borderRadius: '12px',
                                width: { md: '48.5%', xs: '100%' },
                                height: '200px',
                            }}
                        >
                            <Box
                                sx={{
                                    padding: '18px',

                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <Typography
                                        variant="p"
                                        sx={{
                                            fontWeight: '600',
                                            fontSize: '16px',
                                            lineHeight: '24px',
                                            color: '#101828',
                                        }}
                                    >
                                        Members
                                    </Typography>
                                    <MoreVert sx={{ color: 'rgba(152, 162, 179, 1)', cursor: 'pointer' }} />
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        marginTop: '20px',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',

                                    }}
                                >
                                    <Box
                                        sx={{
                                            fontSize: '36px',
                                            fontWeight: '600',
                                            lineHeight: '44px',
                                            letterSpacing: '-2%'
                                        }}
                                    >
                                        32
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: { xs: 'center' } }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            {members.map((member) => (
                                                <Box key={member.id} sx={{ flexDirection: 'row' }}>
                                                    <Box
                                                        sx={{
                                                            width: '32px',
                                                            height: '32px',
                                                            marginLeft: { md: '-10px', xs: '-20px' },
                                                            cursor: 'pointer',

                                                        }}
                                                    >
                                                        <img src={member.url} alt="images" />
                                                    </Box>
                                                </Box>
                                            ))}
                                            <Box
                                                sx={{
                                                    backgroundColor: '#EAECF0',
                                                    border: '1px solid ##EAECF0',
                                                    lineHeight: '24px',
                                                    borderRadius: '20px',
                                                    width: '40px',
                                                    height: '40px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    marginLeft: '-18px',
                                                    marginBottom: '-10px'
                                                }}
                                            >
                                                +12
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Divider
                                sx={{
                                    width: '100%',
                                    marginTop: '20px',
                                    marginBottom: '10px',
                                    padding: '0px',
                                }}
                            />
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    padding: '0 30px',
                                }}
                            >
                                <Button
                                    variant="text"
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                        color: '#DC6803',
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        textTransform: 'none',
                                    }}
                                >
                                    Manage
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            border: '1px solid #EAECF0',
                            borderRadius: '16px',
                            width: '100%',
                            height: 'fit',
                        }}>
                        <Box
                            sx={{
                                display: 'flex',
                                marginTop: '10px',
                                marginBottom: '10px',
                                padding: { md: '20px', xs: '0px 20px' },
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                height: { md: '60px', xs: '100% ' },
                                flexDirection: { md: 'row', xs: 'column' }
                            }}
                        >
                            <Typography
                                variant="p"
                                sx={{
                                    fontSize: '18px',
                                    fontWeight: '600',
                                    lineHeight: '28px',
                                    color: '#101828',
                                }}
                            >
                                Resent tasks
                            </Typography>
                            <Button
                                sx={{
                                    border: '1px solid #D0D5DD',
                                    height: '40px',
                                    width: { md: '121px', xs: '100%' },
                                    borderRadius: '10px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    columnGap: '10px',
                                    marginTop: { xs: '10px' },

                                }}
                            >
                                <Add style={{width: '20px', height: '20px', color: '#344054'}}/>
                                <Box
                                    variant="p"
                                    sx={{
                                        color: '#344054',
                                        fontWeight: '600',
                                        lineHeight: '20px',
                                        fontSize: '14px',
                                        textTransform: 'none',
                                    }}
                                >
                                    Add task
                                </Box>
                            </Button>
                        </Box>
                        <Divider
                            sx={{
                                width: '100%',
                            }}
                        />
                        <Box
                            sx={{
                                display: 'flex',
                                columnGap: '24px',
                                alignItems: 'center',
                                padding: '0px 20px',
                                marginTop: '8px',
                                flexDirection: { md: 'row', xs: 'column' }
                            }}
                        >
                            <Box
                                sx={{
                                    border: '1px solid #D0D5DD',
                                    width: '100%',
                                    height: { md: '40px', xs: '100%' },
                                    borderRadius: '8px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: { md: '20px', xs: '0px' },
                                }}
                            >
                                <Button
                                    sx={{
                                        color: '#344054',
                                        lineHeight: '20px',
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        height: '40px',
                                        textTransform: 'none'
                                    }}
                                >
                                    To do
                                </Button>
                                <Divider
                                    sx={{ height: 40 }}
                                    orientation="vertical"
                                />
                                <Button
                                    sx={{
                                        color: '#344054',
                                        lineHeight: '20px',
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        height: '40px',
                                        textTransform: 'none'
                                    }}
                                >
                                    Doing
                                </Button>
                                <Divider
                                    sx={{ height: 40 }}
                                    orientation="vertical"
                                />
                                <Button
                                    sx={{
                                        color: '#344054',
                                        lineHeight: '20px',
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        height: '40px',
                                        textTransform: 'none'
                                    }}
                                >
                                    Done
                                </Button>
                            </Box>
                            <Box sx={{
                                width: '100%',
                                marginBottom: { xs: '20px', md: '10px' },
                                marginTop: { xs: '20px', md: '10px' },
                            }}>
                                <TextField
                                    select
                                    label="All teams"
                                    size="small"
                                    onChange={(e) => setStatus(e.target.value)}
                                    sx={{
                                        width: { md: '123px', xs: '100%' },
                                        backgroundColor: '#ffffff',
                                        borderRadius: '8px',
                                        fontSize: '14px'
                                    }}
                                >
                                    <MenuItem value="">
                                        <em>English</em>
                                    </MenuItem>
                                    {filters.map((state) => (
                                        <MenuItem key={state.value} value={state.value}>
                                            {state.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Box>
                            <Box
                                sx={{
                                    width: { md: '320px', xs: '100%' },
                                    height: { md: '40px', xs: '40px' },
                                    borderRadius: '8px',
                                    border: '1px solid #D0D5DD',
                                    display: 'flex',
                                    padding: '10px',
                                    columnGap: '10px',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#ffffff',
                                    marginBottom: { xs: '20px', md: '0px' },

                                }}
                            >
                                <Search sx={{ color: '#667085', height: '20px', width: '20px', }} />
                                <TextField
                                    sx={{
                                        '& fieldset': { border: 'none' },
                                        width: { md: '360px', xs: '100%' },

                                    }}
                                    label="Search"
                                />
                            </Box>
                        </Box>
                        <Box>
                            <TableData
                                data={data}
                                headers={headers}
                                dataKeyAccessors={dataKeyAccessors}
                            />
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        height: 'fit',
                        width: {md:'328px', xs: '100%'},
                        fontSize: '16px',
                        padding: '10px',
                    }}
                >
                    <Box
                        sx={{
                            border: '1px solid #EAECF0',
                            height: {md:'400px', xs: '100%'},
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '8px',
                        }}
                    >
                        <Calendar />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '40px',
                            alignItems: 'center',
                        }}
                    >
                        <Box>
                            <Typography variant='p' sx={{ lineHeight: '28px', fontSize: '18px', fontWeight: '600' }}> Events</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                columnGap: '16px',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Add style={{ width: '20px', height: '20px', color: '#475467' }} />
                            <Typography variant='p' sx={{ lineHeight: '20px', fontSize: '14px', fontWeight: '600', color: '#475467' }}> Add event</Typography>
                            <MoreVertOutlined style={{ width: '20px', height: '20px', color: '#475467' }} />
                        </Box>
                    </Box>
                    <Box>
                        <EventTime />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default Dashboard
