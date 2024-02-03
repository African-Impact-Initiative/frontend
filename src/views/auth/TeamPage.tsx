import {
    AddOutlined,
    CloudDownloadOutlined,
    MailOutlineOutlined,
    ModeEditOutlineOutlined,
    MoreVertOutlined,
} from '@mui/icons-material'
import {
    Button,
    Divider,
    Typography
} from '@mui/material'
import { Box } from '@mui/system'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import TeamCard from '../../components/teamPage/TeamCard'
import VBPageHeader from '../../components/VBPageHeader'
import VBSelectionRow from '../../components/VBSelectionRow'
import { teamPageData } from '../../utils/devUtils'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const columns: Array<GridColDef<any, any, any>> = [
    {
        field: 'name',
        headerName: 'Name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 290,
        flex: 1,
        renderCell: (params) => (
            <div style={{ display: 'flex', columnGap: '10px', alignItems: 'center', textAlign: 'start' }}>
                <div>
                    <img
                        src={params.row.logo}
                        alt='personImage'
                        style={{ width: '40px', height: '40px' }}
                    />
                </div>
                <div>
                    <Typography
                        sx={{
                            fontSize: '14px',
                            fontWeight: 610,
                            color: 'rgba(16, 24, 40, 1)',
                        }}
                    >
                        {params.row.name}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '14px',
                            fontWeight: 400,
                            color: 'rgba(71, 84, 103, 1)',
                        }}
                    >
                        {params.row.email}
                    </Typography>
                </div>
            </div>
        ),
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 120,
        flex: 1,
        renderCell: (params) => (
            <div style={{ display: 'flex' }}>
                {params.row.status}

            </div>
        ),
    },
    {
        field: 'role',
        headerName: 'Role',
        width: 180,
        flex: 1,
        renderCell: (params) => (
            <div style={{ color: '#475467', fontSize: '14px' }}>
                {params.row.role}
            </div>
        ),
    },

    {
        field: 'emailaddress',
        headerName: 'Email address',
        width: 240,
        flex: 1,
        renderCell: (params) => (
            <div style={{ color: '#475467', fontSize: '14px' }}>
                {params.row.emailaddress}
            </div>
        ),
    },
    {
        field: 'team',
        headerName: 'Team',
        width: 120,
        flex: 1,
        renderCell: (params) => (
            <div style={{ color: '#475467', fontSize: '14px' }}>
                {params.row.team}
            </div>
        ),
    },
    {
        field: 'action',
        headerName: '',
        width: 130,
        flex: 1,
        renderCell: () => (
            <div
                style={{
                    display: 'flex',
                    columnGap: '5px',
                    color: 'rgba(71, 84, 103, 1)',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div style={{ height: '40px', width: '40px' }}>
                    <MailOutlineOutlined style={{ height: '20px', width: '20px' }} />
                </div>
                <div style={{ height: '40px', width: '40px' }}>
                    <ModeEditOutlineOutlined style={{ height: '20px', width: '20px' }} />
                </div>

            </div>
        ),
    },
]

const rows = teamPageData

const TeamPage = () => {

    return (
        <Box sx={{ padding: '20px', width: '100%' }}>
            <Box>
                <VBPageHeader
                    title='Team'
                    subTitle='Manage your team members here.'
                    noHr={true}
                />
            </Box>
            <Box>
                <TeamCard />
            </Box>

            <Box
                sx={{
                    borderRadius: '16px',
                    width: '100%',
                    height: 'fit',
                    marginTop: '20px'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        marginTop: '10px',
                        flexDirection: {md: 'row', xs: 'column'},
                    }}
                >
                    <Box sx={{ width: '100%'}}>
                        <Box
                            sx={{ display: 'flex', columnGap: '10px', marginBottom: '6px' }}
                        >
                            <Typography
                                variant='body1'
                                sx={{
                                    fontWeight: '600',
                                    lineHeight: '28px',
                                    fontSize: '18px',
                                    color: '#101828'
                                }}
                            >
                                All members
                            </Typography>
                            <Box
                                sx={{
                                    border: '1px solid #FEDF89',
                                    backgroundColor: '#FFFAEB',
                                    height: '28px',
                                    borderRadius: '16px',
                                    width: '100px',
                                    paddingTop: '2px',
                                    paddingBottom: '2px',
                                    paddingLeft: '8px',
                                    paddingRight: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <Typography
                                    variant='body1'
                                    sx={{
                                        color: '#B54708',
                                        fontWeight: '500',
                                        fontSize: '12px',
                                        lineHeight: '18px',

                                    }}
                                >
                                    32 members
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ textAlign: {xs: 'start'}}}>
                            <Typography
                                variant='body1'
                                sx={{
                                    color: '#475467',
                                    fontSize: '14px',
                                    lineHeight: '20px',
                                    fontWeight: '400',

                                }}
                            >
                            Manage your team members here.
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', columnGap: '10px', marginTop: {xs: '20px', md: '0px'} , width: '100%', justifyContent: 'flex-end'}}>
                        <Button
                            sx={{
                                width: {md:'167px', xs: '100%'},
                                height: '40px',
                                borderRadius: '8px',
                                border: '1px solid #D0D5DD',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                columnGap: '10px'
                            }}
                        >
                            <CloudDownloadOutlined sx={{ color: '#344054' }} />
                            <Typography
                                variant='body1'
                                sx={{
                                    color: '#344054',
                                    lineHeight: '20px',
                                    fontWeight: '600',
                                    fontSize: {md:'14px', xs: '12px'},
                                    textTransform: 'none'
                                }}
                            >
                                Download CSV
                            </Typography>
                        </Button>
                        <Button
                            sx={{
                                width: {md:'167px', xs: '100%'},
                                height: '40px',
                                backgroundColor: '#DC6803',
                                borderRadius: '8px',
                                border: '1px solid #DC6803',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                columnGap: '10px',
                                '&:hover': { backgroundColor: '#E8822A' },
                            }}>
                            <AddOutlined sx={{ color: 'white', height: '20px', width: '20px' }} />
                            <Typography
                                variant='body1'
                                sx={{
                                    lineHeight: '20px',
                                    fontWeight: '600',
                                    color: 'white',
                                    fontSize: {md:'14px', xs: '12px'},
                                    textTransform: 'none'
                                }}
                            >
                                Add member
                            </Typography>
                        </Button>
                        <MoreVertOutlined sx={{ color: '#98A2B3', cursor: 'pointer' }} />
                    </Box>
                </Box>
                <Divider sx={{ marginTop: '30px' }}></Divider>

                <Box>
                    <VBSelectionRow
                        search={true}
                        firstBox={true}
                        secondBox={true}
                        type='Search members'
                        header1='Status'
                        header2='Team'
                        label1='Select'
                        label2='Select'
                    />
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            className='pointer-cursor-datagrid'
                            rows={rows}
                            columns={columns}
                            // onRowClick={handleRowClick}
                            rowHeight={120}
                            // adjust its height to accommodate all rows.
                            autoHeight
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
    )
}

export default TeamPage
