import { Box, Button, Typography } from '@mui/material'
import { CloseOutlined, ModeEditOutlineOutlined, PlayArrowOutlined } from '@mui/icons-material'
import { DataGrid, GridColDef, GridEventListener } from '@mui/x-data-grid'

import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { useNavigate } from 'react-router-dom'
import ResourceTempBg1 from '../../assets/resources_bg1.png'
import { resourceVideoData } from '../../utils/devUtils'
import { useState } from 'react'
import VBTopBanner from '../../components/VBTopBanner'
import VBAppModal from '../../components/VBAppModal'
import VBVideoUpload from '../../components/VBVideoUpload'
import VBResourcesUploadSuccess from '../../components/VBResourcesUploadSuccess'
import VBUploadContainer from '../../components/VBUploadContainer'
import VBSelectionRow from '../../components/VBSelectionRow'

const columns: Array<GridColDef<any, any, any>> = [
    {
        field: 'name',
        headerName: 'Vidoes',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 500,
        flex: 1,
        renderCell: (params) => (
            <div style={{ display: 'flex', columnGap: '10px', alignItems: 'center', textAlign: 'start' }}>
                <div style={{ width: '128px', height: '72px' }}>
                    <img
                        src={params.row.thumbnail}
                        alt="thumbnail"
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
                <div>
                    <Typography
                        sx={{
                            fontSize: '14px',
                            fontWeight: 500,
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
        width: 97,
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
    { field: 'timePosted',
        headerName: 'Date',
        width: 133 ,
        flex: 1,
        renderCell: (params) => (
            <div style={{ color: '#475467', fontSize: '14px' }}>
                {params.row.timePosted}
            </div>
        ),
    },

    { field: 'views',
        headerName: 'Views',
        width: 88 ,
        flex: 1,
        renderCell: (params) => (
            <div style={{ color: '#475467', fontSize: '14px' }}>
                {params.row.views}
            </div>
        ),
    },
    { field: 'likes',
        headerName: 'Likes',
        width: 80,
        flex: 1,
        renderCell: (params) => (
            <div style={{ color: '#475467', fontSize: '14px' }}>
                {params.row.likes}
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
                    <PlayArrowOutlined style={{ height: '20px', width: '20px' }} />
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

const rows = resourceVideoData

const Videos = () => {
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

    const handleRowClick: GridEventListener<'rowClick'> = (params) => {
        console.log('Row clicked:', params)
        navigate(`/admin/videos/${params.id}`)
    }

    return (
        <Box>
            <VBTopBanner
                title={'Videos'}
                description="Upload and manage videos here."
                action={uploadAction}
                actionText="Upload"
            />

            <VBAppModal open={openUpload} handleClose={handleCloseUpload}>
                <VBVideoUpload handleClose={handleCloseUpload} action={uploadResources} />
            </VBAppModal>

            <VBResourcesUploadSuccess
                open={openUploadSuccess}
                handleClose={handleCloseUploadSuccess}
                type="video"
                thumbnail={ResourceTempBg1}
            />

            <Box>
                <VBAppModal open={open} handleClose={handleClose} width={480} height={400}>
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
                                    Upload videos
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
            </Box>

            <Box>
                <VBSelectionRow
                    search={true}
                    firstBox={true}
                    secondBox={true}
                    type="Search videos"
                    header1="Categories"
                    header2="Sort by"
                    label1="Select"
                    label2="Select"

                />

                <Box sx={{ height: 400, width: '100%'}}>
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
                </Box>
            </Box>
        </Box>
    )
}

export default Videos