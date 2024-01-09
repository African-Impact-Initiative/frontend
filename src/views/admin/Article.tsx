/* eslint-disable no-unused-vars */
/* eslint-disable no-magic-numbers */
import { Box, Typography } from '@mui/material'
import React from 'react'
import TopBanner from '../../../Admin/TopBanner/TopBanner'
import SelectionRow from '../../../Admin/SelectionRow/SelectionRow'
import { AutoStoriesOutlined, DescriptionOutlined, ModeEditOutlineOutlined, RemoveRedEye } from '@mui/icons-material'
import { DataGrid } from '@mui/x-data-grid'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'

import ResourceUpload from '../../../Admin/ResourcesUpload/ResourceUpload'
import { resourceVideoData, templateData } from '../../../../data'
import DescriptionIcon from '@mui/icons-material/Description'
import EditIcon from '@mui/icons-material/Edit'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { useNavigate } from 'react-router-dom'

const columns = [
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
        renderCell: (params) => (
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

export default function Article() {
    const navigate = useNavigate()
    const [openUpload, setOpenUpload] = React.useState(false)
    const handleCloseUpload = () => setOpenUpload(false)



    const uploadAction = () => {
        navigate('/admin/articles/create')
    }

    const uploadResources = () => {
        handleCloseUpload()
    }

    const handleRowClick = (params) => {
        console.log('Row clicked:', params)
        navigate('/admin/articles/create')
    }

    return (
        <Box>
            <TopBanner
                title={'Articles'}
                description="Write and manage articles here."
                action={uploadAction}
                actionText="Post"
            />
            <ResourceUpload
                open={openUpload}
                handleClose={handleCloseUpload}
                action={uploadResources}
            />



            <Box>
                <SelectionRow
                    search={true}
                    firstBox={true}
                    secondBox={true}
                    type="Search article"
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
                        getRowStyle={(params) => ({
                            cursor: 'pointer', // set the cursor style to "pointer" for all rows
                            sx: {
                                padding: '8px', // adjust the padding as needed
                            },
                            // add other row styles if needed
                        })}
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
