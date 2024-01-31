import { Add, ArrowForwardOutlined, CloudUploadOutlined, MoreHorizOutlined, MoreVert } from '@mui/icons-material'
import { Button, Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import avatar from '../../assets/avatar.png'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import { homeData } from '../../utils/devUtils'
import VBSelectionRow from '../../components/VBSelectionRow'
import VBTopBanner from '../../components/VBTopBanner'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const columns: Array<GridColDef<any, any, any>> = [
    {
        field: 'name',
        headerName: 'Company',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        flex: 1,
        width: 220,
        renderCell: (params) => (
            <div style={{ display: 'flex', columnGap: '10px', alignItems: 'center' }}>
                <div
                    style={{
                        textAlign: 'start',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '12px',
                    }}
                >
                    <img
                        src={params.row.logo}
                        alt='thumbnail'
                        style={{ width: '40px', height: '40px' }}
                    />
                    <Typography
                        sx={{
                            fontSize: '14px',
                            fontWeight: 500,
                            color: '#101828',
                            lineHeight: '20px',
                        }}
                    >
                        {params.row.company}
                    </Typography>
                </div>
            </div>
        ),
    },
    {
        field: 'industy',
        headerName: 'Industy',
        width: 124,
        flex: 1,
        renderCell: (params) => (
            <div style={{ display: 'flex', columnGap: '6px', textAlign: 'start' }}>
                <div
                    style={{
                        width: '80px',
                        height: '20px',
                        border: '1px solid #EAECF0',
                        borderRadius: '10px',
                        fontSize: '12px',
                        color: '#344054',
                        backgroundColor: '#F3F5F7',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {params.row.industy}
                </div>
            </div>
        ),
    },
    {
        field: 'funders',
        headerName: 'Funders',
        width: 102,
        flex: 1,
        renderCell: (params) => (
            <div style={{}}>
                {params.row.funders.map((funder: { image: string }, index: number) => (
                    <img
                        key={`funder-${index + 1}`}
                        src={funder.image}
                        alt={`funder ${index + 1}`}
                        style={{
                            width: '24px',
                            height: '24px',
                            marginLeft: '-5px',
                            border: '0.5px solid #EAECF0',
                            borderRadius: '100%',
                        }}
                    />
                ))}
            </div>
        ),
    },
    {
        field: 'about',
        headerName: 'About',
        width: 209,
        flex: 1,
        renderCell: (params) => (
            <div style={{ color: '#475467' }}>{params.row.about}</div>
        ),
    },
    {
        field: 'action',
        headerName: '',
        width: 106,
        flex: 1,
        renderCell: () => (
            <div
                style={{
                    display: 'flex',
                    columnGap: '5px',
                    color: 'rgba(71, 84, 103, 1)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '40px',
                }}
            >
                <div style={{ height: '40px', width: '40px' }}>
                    <MoreHorizOutlined style={{ height: '20px', width: '20px' }} />
                </div>
                <div style={{ height: '40px', width: '40px' }}>
                    <ArrowForwardOutlined style={{ height: '20px', width: '20px' }} />
                </div>
            </div>
        ),
    },
]

const rows = homeData

const renderCardtypeBorder = (type: string) => {
    if (type === 'new') return '1px solid #ABEFC6'
    else if (type === 'request') return '1px solid #FEDF89'
    else if (type === 'tograde') return '1px solid  #FEDF89'
    else return '1px solid rgba(185, 230, 254, 1)'
}

const renderCardtypeBackgroundColor = (type: string) => {
    if (type === 'new') return '#ECFDF3'
    else if (type === 'request') return '#FFFAEB'
    else if (type === 'tograde') return '#FFFAEB'
    else return '#ECFDF3'
}

const requests = [
    {
        id: 1,
        logo: avatar,
        title: 'Catalog',
        sibtitle: 'Requested Lorem ipsum dolor sit amet, consectetur',
    },
    {
        id: 2,
        logo: avatar,
        title: 'Catalog',
        sibtitle: 'Requested Lorem ipsum dolor sit amet, consectetur',
    },
    {
        id: 3,
        logo: avatar,
        title: 'Catalog',
        sibtitle: 'Requested Lorem ipsum dolor sit amet, consectetur',
    },
    {
        id: 4,
        logo: avatar,
        title: 'Catalog',
        sibtitle: 'Requested Lorem ipsum dolor sit amet, consectetur',
    },
    {
        id: 5,
        logo: avatar,
        title: 'Catalog',
        sibtitle: 'Requested Lorem ipsum dolor sit amet, consectetur',
    },
    {
        id: 6,
        logo: avatar,
        title: 'Catalog',
        sibtitle: 'Requested Lorem ipsum dolor sit amet, consectetur',
    },
    {
        id: 7,
        logo: avatar,
        title: 'Catalog',
        sibtitle: 'Requested Lorem ipsum dolor sit amet, consectetur',
    },
    {
        id: 8,
        logo: avatar,
        title: 'Catalog',
        sibtitle: 'Requested Lorem ipsum dolor sit amet, consectetur',
    },
]

const Home = () => {
    const homeCards = [
        {
            id: 1,
            name: 'Assignments',
            number: 120,
            activities: '5 to-grade',
            type: 'tograde',
        },
        {
            id: 1,
            name: 'Questionnaires',
            number: 14,
            activities: '6 new',
            type: 'new',
        },
        {
            id: 1,
            name: 'Requests',
            number: 48,
            activities: '8 to-respond',
            type: 'request',
        },
    ]

    return (
        <Box sx={{ paddingLeft: '20px', width: '100%', paddingRight: '0px' }}>
            <VBTopBanner
                title={'Home'}
                description='Explore and manage ventures here.'
                Icon={SettingsOutlinedIcon}
                action={() => console.log('temp action')}
            />
            <Box sx={{ width: '100%', height: '100%', display: 'flex', columnGap: '30px', marginTop: '32px', flexDirection: { md: 'row', xs: 'column' }}}>
                <Box sx={{ flex: 3.5, overflowX: 'auto', columnGap: '24px', flexDirection: 'column', height: 'screen', }}>
                    <Box sx={{ display: 'flex', flexDirection: { md: 'row', xs: 'column' },justifyContent: 'space-between' }}>
                        {homeCards.map((card) => (
                            <Box key={card.id} >
                                <Box
                                    sx={{
                                        border: '1px solid #EAECF0',
                                        borderRadius: '12px',
                                        width: { md: '266px', xs: '100%' },
                                        height: { md: '114px', xs: '100%' },
                                        padding: '24px',
                                        marginBottom: '30px',
                                    }}
                                >
                                    <Box
                                        sx={{ display: 'flex', justifyContent: 'space-between' }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: '14px',
                                                color: '#475467',
                                                fontWeight: '500',
                                                lineHeight: '20px',
                                            }}
                                        >
                                            {' '}
                                            {card.name}
                                        </Typography>
                                        <MoreVert
                                            sx={{
                                                height: '20px',
                                                weight: '20px',
                                                color: '#98A2B3',
                                            }}
                                        />
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            marginTop: '8px',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Box>
                                            <Typography
                                                sx={{
                                                    fontSize: '30px',
                                                    color: '#101828',
                                                    fontWeight: '500',
                                                    lineHeight: '38px',
                                                }}
                                            >
                                                {' '}
                                                {card.number}
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                border: renderCardtypeBorder(card.type),
                                                width: '120px',
                                                height: '32px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                gap: '6px',
                                                borderRadius: '100px',
                                                backgroundColor: renderCardtypeBackgroundColor(
                                                    card.type
                                                ),
                                            }}
                                        >
                                            <Box sx={{width: '8px', height: '8px', borderRadius:'100px', backgroundColor: `${card.type == 'new'? '#067647': card.type == 'request'? '#B54708': '#B54708'}`,}}>

                                            </Box>

                                            <Typography
                                                sx={{
                                                    fontSize: '14px',
                                                    fontWeight: '500',
                                                    lineHeight: '20px',
                                                    color: `${card.type == 'new'? '#067647': card.type == 'request'? '#B54708': '#B54708'}`,
                                                }}
                                            >
                                                {card.activities}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Box>

                    <Box
                        sx={{
                            // border: '1px solid #EAECF0',
                            borderRadius: '16px',
                            width: '100%',
                            height: 'fit',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                marginTop: '10px',
                                marginBottom: '10px',
                                justifyContent: 'space-between',
                                alignItems: {md:'center'},
                                height: {md:'60px', xs: '100%'},
                                width: '100%',
                                flexDirection: {md: 'row', xs: 'column'}
                            }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', columnGap: '14px' }}>
                                <Typography
                                    sx={{
                                        fontSize: '18px',
                                        fontWeight: '600',
                                        lineHeight: '28px',
                                        color: '#101828',
                                    }}
                                >
                                    All ventures
                                </Typography>
                                <Box sx={{ border: '2px solid #D0D5DD', height: {md:'22px', xs: '100%'},  width: {md:'81px', xs: '100%'}, borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '-1px' }}>
                                    <Typography
                                        sx={{
                                            fontSize: '12px',
                                            fontWeight: '500',
                                            lineHeight: '18px',
                                            color: '#344054',
                                        }}
                                    >
                                        48 ventures
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', columnGap: '12px', flexDirection: {md: 'row', xs: 'column'} }}>
                                <Button
                                    sx={{
                                        border: '1px solid #D0D5DD',
                                        height: '40px',
                                        width: {md:'105px', xs: '100%'},
                                        borderRadius: '10px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        columnGap: '10px',
                                        marginBottom: {xs: '20px', md: '0px'},
                                        marginTop: {xs: '20px', md: '0px'}
                                    }}>
                                    <CloudUploadOutlined sx={{ width: '20px', height: '20px', color: '#344054' }} />
                                    <Box
                                        sx={{
                                            color: '#344054',
                                            fontWeight: '600',
                                            lineHeight: '20px',
                                            fontSize: '14px',
                                            textTransform: 'none',
                                        }}
                                    >
                                        Export
                                    </Box>
                                </Button>
                                <Button
                                    // variant="contained"
                                    sx={{
                                        backgroundColor: '#DC6803',
                                        height: '40px',
                                        width: {md:'144px', xs: '100%'},
                                        borderRadius: '10px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        columnGap: '10px',
                                        '&:hover': { backgroundColor: '#E8822A' },
                                    }}
                                >
                                    <Add
                                        sx={{ width: '20px', height: '20px', color: '#FFFFFF' }}
                                    />
                                    <Typography
                                        sx={{
                                            color: '#FFFFFF',
                                            fontWeight: '600',
                                            lineHeight: '20px',
                                            fontSize: '14px',
                                            textTransform: 'none',
                                        }}
                                    >
                                        Add venture
                                    </Typography>
                                </Button>
                            </Box>
                        </Box>
                        <Divider
                            sx={{
                                width: '100%',
                                marginTop: {xs: '40px', md: '0px'}
                            }}
                        />
                        <Box>
                            <Box>
                                <VBSelectionRow
                                    search={true}
                                    firstBox={true}
                                    type={'Search opportunities'}
                                    header1={'Industries'}
                                    label2={'Select'}
                                    label1={'Select'}
                                />
                            </Box>

                            <div style={{ height: '100%', width: '100%' }}>
                                <DataGrid
                                    className='pointer-cursor-datagrid'
                                    rows={rows}
                                    columns={columns}
                                    // onRowClick={handleRowClick}
                                    rowHeight={104}
                                    autoHeight
                                    sx={{ justifyContent: { xl: 'space-between' } }}
                                    initialState={{
                                        pagination: {
                                            paginationModel: { page: 0, pageSize: 7 },
                                        },
                                    }}
                                    pageSizeOptions={[5, 10]}
                                    checkboxSelection
                                />
                            </div>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ flex: 1, paddingBottom: '20px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography
                            sx={{
                                color: '#101828',
                                fontWeight: '600',
                                lineHeight: '20px',
                                fontSize: '18px',
                            }}
                        >
                            {' '}
                            Recent requests
                        </Typography>
                        <Typography
                            sx={{
                                color: '#475467',
                                fontWeight: '600',
                                lineHeight: '20px',
                                fontSize: '14px',
                            }}
                        >
                            View all
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: '24px' }}>
                        {requests.map((each) => (
                            <Box
                                key={each.id}
                                sx={{
                                    display: 'flex',
                                    marginBottom: '20px',
                                    columnGap: '12px',
                                }}
                            >
                                <img
                                    src={each.logo}
                                    alt='avata'
                                    style={{ width: '32px', height: '32px' }}
                                />
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        textAlign: 'start',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            color: '#475467',
                                            fontWeight: '500',
                                            lineHeight: '20px',
                                            fontSize: '14px',
                                        }}
                                    >
                                        {each.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: '#475467',
                                            fontWeight: '500',
                                            lineHeight: '20px',
                                            fontSize: '14px',
                                        }}
                                    >
                                        {each.sibtitle}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Home