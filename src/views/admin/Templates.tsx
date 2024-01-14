import { Box, Button, Typography } from '@mui/material'
import { useState } from 'react'
import { CloseOutlined, DescriptionOutlined, ModeEditOutlineOutlined } from '@mui/icons-material'
import { DataGrid, GridColDef, GridEventListener } from '@mui/x-data-grid'

import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { useNavigate } from 'react-router-dom'
import ResourceTempBg1 from '../../../../assets/resource_temp_01.png'
import { templateData } from '../../utils/devUtils'
import VBSelectionRow from '../../components/VBSelectionRow'
import VBUploadContainer from '../../components/VBUploadContainer'
import VBAppModal from '../../components/VBAppModal'
import VBResourcesUploadSuccess from '../../components/VBResourcesUploadSuccess'
import VBTopBanner from '../../components/VBTopBanner'
import VBResourceUpload from '../../components/VBResourceUpload'

const columns: Array<GridColDef<any, any, any>> = [
    {
        field: 'name',
        headerName: 'Article',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 500,
        flex: 1,
        renderCell: (params) => (
            <div style={{ display: 'flex', columnGap: '10px', alignItems: 'center', textAlign: 'start' }}>
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
                        Uploaded By: {params.row.author}
                    </Typography>
                </div>
            </div>
        ),
    },
    {
        field: 'visible',
        headerName: 'visibility',
        width: 120,
        flex: 1,
        renderCell: (params) => (
            <div style={{ display: 'flex' }}>
                {params.row.visible === true ? (
                    <RemoveRedEyeOutlinedIcon
                        style={{ color: '#475467', width: '20px', height: '20px', }}
                    />
                ) : (
                    <VisibilityOffOutlinedIcon
                        style={{ color: '#475467', width: '20px', height: '20px', }}
                    />
                )}
            </div>
        ),
    },
    {
        field: 'date',
        headerName: 'Date',
        width: 153,
        flex: 1,
        renderCell: (params) => (
            <div style={{ color: '#475467', fontSize: '14px' }}>
                {params.row.timePosted}
            </div>
        ),
    },

    {
        field: 'views',
        headerName: 'views',
        width: 120,
        flex: 1,
        renderCell: (params) => (
            <div style={{ color: '#475467', fontSize: '14px' }}>
                {params.row.views}
            </div>
        ),
    },
    {
        field: 'action',
        headerName: '',
        width: 130,
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
                    <DescriptionOutlined style={{ height: '20px', width: '20px' }} />
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

const rows = templateData

const Templates = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const [openUpload, setOpenUpload] = useState(false)
    const handleOpenUpload = () => setOpenUpload(true)
    const handleCloseUpload = () => setOpenUpload(false)

    const [openUploadSuccess, setOpenUploadSuccess] = useState(false)
    const handleCloseUploadSuccess = () => setOpenUploadSuccess(false)

    const navigate = useNavigate()
    const uploadAction = () => {
        handleOpen()
    }

    const nextUploadScreen = () => {
        handleOpenUpload()
    }

    const uploadResources = () => {
        handleClose()
        handleCloseUpload()
        setOpenUploadSuccess(true)
    }

    const handleRowClick: GridEventListener<"rowClick"> = (params) => {
        console.log('Row clicked:', params)
        navigate(`/admin/templates/${params.id}`)
    }

    return (
        <Box>
            <VBTopBanner
                title={'Templates'}
                description="Upload and manage templates here."
                action={uploadAction}
                actionText="Upload"

            />
            <VBResourceUpload
                open={openUpload}
                handleClose={handleCloseUpload}
                action={uploadResources}
            />

            <VBResourcesUploadSuccess
                open={openUploadSuccess}
                handleClose={handleCloseUploadSuccess}
                type={'Template'}
                thumbnail={ResourceTempBg1}
            />

            <VBAppModal width={480} height={400} open={open} handleClose={handleClose}>
                <Box>
                    <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography
                                id="modal-modal-title"
                                variant="h6"
                                component="h2"
                                sx={{
                                    color: 'rgba(16, 24, 40, 1)',
                                    fontWeight: 600,
                                    fontSize: '18px',
                                }}
                            >
                                Upload templates
                            </Typography>
                            <Box>
                                <CloseOutlined
                                    sx={{ color: 'rgba(102, 112, 133, 1)', cursor: 'pointer' }}
                                    onClick={handleClose}
                                />
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <Typography
                            variant="h6"
                            component="h2"
                            sx={{
                                color: 'rgba(71, 84, 103, 1)',
                                fontWeight: 400,
                                fontSize: '14px',
                            }}
                        >
                            Add templates to the resources pool.
                        </Typography>
                    </Box>

                    <VBUploadContainer handleOnChange={() => console.log('temp action')} />

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            columnGap: '10px',
                        }}
                    >
                        <Button
                            sx={{
                                width: '100%',
                                height: '44px',
                                border: '1px solid rgba(208, 213, 221, 1)',
                                borderRadius: '8px',
                                textTransform: 'none',
                            }}
                            onClick={handleClose}
                        >
                            <Typography
                                sx={{
                                    color: 'rgba(52, 64, 84, 1)',
                                    fontWeight: 600,
                                    fontSize: '16px',
                                }}
                            >
                Cancel
                            </Typography>
                        </Button>
                        <Button
                            sx={{
                                width: '100%',
                                height: '44px',
                                border: '1px solid #FFFFFF',
                                borderRadius: '8px',
                                background: 'rgba(220, 104, 3, 1)',
                                textTransform: 'none',
                                '&:hover': { backgroundColor: '#E8822A' },
                            }}
                            onClick={nextUploadScreen}
                        >
                            <Typography
                                sx={{
                                    color: '#FFFFFF',
                                    fontWeight: 600,
                                    fontSize: '16px',
                                }}
                            >
                Select file
                            </Typography>
                        </Button>
                    </Box>
                </Box>
            </VBAppModal>

            <Box>
                <VBSelectionRow
                    search={true}
                    firstBox={true}
                    secondBox={true}
                    type="Search templates"
                    header1="Categories"
                    header2="Sort by"
                    label1="Select"
                    label2="Select"
                />
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        className="pointer-cursor-datagrid"
                        rows={rows}
                        columns={columns}
                        onRowClick={handleRowClick}
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
    )
}

export default Templates