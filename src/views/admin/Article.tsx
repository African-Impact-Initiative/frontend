import { Box, Typography } from '@mui/material'
import { useState } from 'react'
import { AutoStoriesOutlined, ModeEditOutlineOutlined } from '@mui/icons-material'
import { DataGrid, GridColDef, GridEventListener } from '@mui/x-data-grid'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { useNavigate } from 'react-router-dom'
import VBTopBanner from '../../components/VBTopBanner'
import VBResourceUpload from '../../components/VBResourceUpload'
import VBSelectionRow from '../../components/VBSelectionRow'
import { templateData } from '../../utils/devUtils'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
                    <AutoStoriesOutlined style={{ height: '20px', width: '20px' }} />
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

const Article = () => {
    const navigate = useNavigate()
    const [openUpload, setOpenUpload] = useState(false)
    const handleCloseUpload = () => setOpenUpload(false)

    const uploadAction = () => {
        navigate('/admin/articles/create')
    }

    const uploadResources = () => {
        handleCloseUpload()
    }

    const handleRowClick: GridEventListener<'rowClick'> = (params) => {
        console.log('Row clicked:', params)
        navigate('/admin/articles/create')
    }

    return (
        <Box>
            <VBTopBanner
                title={'Articles'}
                description='Write and manage articles here.'
                action={uploadAction}
                actionText='Post'
            />
            <VBResourceUpload
                open={openUpload}
                handleClose={handleCloseUpload}
                action={uploadResources}
            />

            <Box>
                <VBSelectionRow
                    search={true}
                    firstBox={true}
                    secondBox={true}
                    type='Search article'
                    header1='Categories'
                    header2='Sort by'
                    label1='Select'
                    label2='Select'
                />
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        className='pointer-cursor-datagrid'
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

export default Article