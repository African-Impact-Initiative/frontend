import { Add, ArrowForwardOutlined, MoreHorizOutlined } from '@mui/icons-material'
import { Button, Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { assignmentData } from '../../utils/devUtils'
import VBSelectionRow from '../VBSelectionRow'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const columns: Array<GridColDef<any, any, any>> = [
    {
        field: 'name',
        headerName: 'Assignments',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 520,
        flex: 1,
        renderCell: (params) => (
            <div>
                <div style={{ textAlign: 'start' }}>
                    <Typography
                        sx={{
                            fontSize: '14px',
                            fontWeight: 500,
                            color: '#101828',
                            lineHeight: '20px'
                        }}
                    >
                        {params.row.name}
                    </Typography>
                </div>
            </div>
        ),
    },
    {
        field: 'postdate',
        headerName: 'Post date',
        width: 136,
        flex: 1,
        renderCell: (params) => (
            <div style={{ color: '#475467' }}>
                {params.row.postdate}
            </div>
        ),
    },
    {
        field: 'duedate', headerName: 'Due date', width: 136, flex: 1,
        renderCell: (params) => (
            <div style={{ color: '#475467' }}>
                {params.row.duedate}
            </div>
        )
    },
    {
        field: 'categories', headerName: 'Categories', width: 148, flex: 1,
        renderCell: (params) => (
            <div style={{ width: '70px', height: '20px', border: '1px solid #EAECF0', borderRadius: '8px', fontSize: '12px', color: '#344054', backgroundColor: '#F3F5F7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {params.row.categories}
            </div>
        )
    },
    {
        field: 'action',
        headerName: '',
        width: 150,
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
                    <MoreHorizOutlined style={{ height: '20px', width: '20px' }} />
                </div>
                <div style={{ height: '40px', width: '40px' }}>
                    <ArrowForwardOutlined style={{ height: '20px', width: '20px' }} />
                </div>
            </div>
        ),
    },
]

const rows = assignmentData

const AssignmentSubmissions = () => {
    return(
        <Box sx={{ width: '100%'}}>
            <Box
                sx={{
                    display: 'flex',
                    marginTop: '10px',
                    marginBottom: '10px',
                    justifyContent: 'space-between',
                    alignItems: {md:'center', xs: 'start'},
                    height: '60px',
                    flexDirection: {md: 'row', xs: 'column'},
                }}>
                <Box sx={{ display: 'flex', alignItems: 'center', columnGap: '14px' , flexDirection: {md: 'row', xs: 'column'}}}>
                    <Typography
                        sx={{
                            fontSize: '18px',
                            fontWeight: '600',
                            lineHeight: '28px',
                            color: '#101828',
                        }}
                    >
                                   All assignments
                    </Typography>
                    <Box sx={{ border: '2px solid #D0D5DD', height: '22px', width: '81px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '-1px' }}>
                        <Typography
                            sx={{
                                fontSize: '12px',
                                fontWeight: '500',
                                lineHeight: '18px',
                                color: '#344054',
                            }}
                        >
                                        56 in total
                        </Typography>

                    </Box>
                </Box>
                <Box sx={{marginTop: {xs: '10px', md: '0px'}}}>
                    <Button
                        sx={{
                            backgroundColor: '#DC6803',
                            height: '40px',
                            width: '178px',
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            columnGap: '10px',
                            '&:hover': { backgroundColor: '#E8822A' },
                        }}
                    >
                        <Add sx={{ width: '20px', height: '20px', color: '#FFFFFF' }} />
                        <Typography
                            sx={{
                                color: '#FFFFFF',
                                fontWeight: '600',
                                lineHeight: '20px',
                                fontSize: '14px',
                                textTransform: 'none',

                            }}
                        >
                                    Add assignments
                        </Typography>
                    </Button>
                </Box>
            </Box>
            <Divider
                sx={{
                    width: '100%',
                    marginTop: {xs: '50px', md: '0px'}
                }}
            />
            <Box>
                <VBSelectionRow
                    search={true}
                    firstBox={true}
                    secondBox={true}
                    thirdBox={true}
                    type='Search assignments'
                    header1='Categories'
                    header2='Cohorts'
                    header3='Sort by'
                    label1='Select'
                    label2='Select'
                    label3='Select'
                />
            </Box>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    className='pointer-cursor-datagrid'
                    rows={rows}
                    columns={columns}
                    // onRowClick={handleRowClick}
                    rowHeight={104}
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
    )
}

export default AssignmentSubmissions