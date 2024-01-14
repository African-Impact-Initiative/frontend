import { ModeEditOutlineOutlined, OpenInNewOutlined } from '@mui/icons-material'
import { Modal, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { useState } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import AddFundingModal from '../../components/funding/AddFundingModal'
import { fundersData } from '../../utils/devUtils'
import VBTopBanner from '../../components/VBTopBanner'
import VBSelectionRow from '../../components/VBSelectionRow'

const columns: Array<GridColDef<any, any, any>> = [
    {
        field: 'name',
        headerName: 'Opportunities',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 400,
        flex: 1,
        renderCell: (params) => (
            <div style={{ display: 'flex', columnGap: '10px', alignItems: 'center' }}>
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
                    <Typography
                        sx={{
                            fontSize: '14px',
                            fontWeight: 400,
                            color: 'rgba(71, 84, 103, 1)',
                            lineHeight: '20px'
                        }}
                    >
                        {params.row.foundation}
                    </Typography>
                </div>
            </div>
        ),
    },
    {
        field: 'label',
        headerName: 'Label',
        width: 148,
        flex: 1,
        renderCell: (params) => (
            <div style={{ display: 'flex', columnGap: '6px', textAlign: 'start', }}>
                <div style={{ width: '42px', height: '20px', border: '1px solid #EAECF0', borderRadius: '8px', fontSize: '12px', color: '#344054', backgroundColor: '#F3F5F7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {params.row.label}
                </div>
                <div style={{ width: '42px', height: '20px', border: '1px solid #EAECF0', borderRadius: '8px', fontSize: '12px', color: '#344054', backgroundColor: '#F3F5F7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {params.row.label}
                </div>
            </div>
        ),
    },
    {
        field: 'deadline', headerName: 'Deadline', width: 143, flex: 1,
        renderCell: (params) => (
            <div style={{ color: '#475467' }}>
                {params.row.deadline}
            </div>
        )
    },
    {
        field: 'grantamount', headerName: 'Grant amount', width: 205, flex: 1,
        renderCell: (params) => (
            <div style={{ color: '#475467' }}>
                {params.row.grantamount}
            </div>
        )
    },
    {
        field: 'action',
        headerName: '',
        width: 160,
        flex: 1,
        renderCell: (_params) => (
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
                    <OpenInNewOutlined style={{ height: '20px', width: '20px' }} />
                </div>
                <div style={{ height: '40px', width: '40px' }}>
                    <ModeEditOutlineOutlined style={{ height: '20px', width: '20px' }} />
                </div>
                <div style={{ height: '40px', width: '40px' }}>
                    <DeleteOutlineIcon style={{ height: '20px', width: '20px' }} onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                    }} />
                </div>

            </div>
        ),
    },
]

const rows = fundersData

const FundingOpportunuties = () => {
    const [fundingModal, setFundingModal] = useState(false)

    const openModal = () => {
        setFundingModal(true)
    }

    return (
        <Box>
            <Modal
                open={fundingModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                onClose={() => {
                    setFundingModal(false)
                }}
            >
                <AddFundingModal
                    setFundingModal={setFundingModal}
                    handleClose={() => setFundingModal(false)}
                    action={() => console.log('temp action')}
                />
            </Modal>
            <VBTopBanner
                title={'Funding opportunities'}
                description="Add and manage funding opportunities here.."
                actionText="Add new"
                action={openModal}
            />

            <Box>
                <VBSelectionRow
                    type={'Search opportunities'}
                    header1={'Industries'}
                    header2={'Sort by'}
                    label1={'Select'}
                    label2={'Select'}
                    search={true}
                    firstBox={true}
                    secondBox={true}
                />

                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        className="pointer-cursor-datagrid"
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
        </Box>
    )
}

export default FundingOpportunuties