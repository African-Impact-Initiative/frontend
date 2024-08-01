import { Box, Typography, Button, Divider, InputAdornment, TextField, MenuItem, IconButton, Icon } from '@mui/material'
import { useState } from 'react'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { Add, Search, MoreHorizRounded, ArrowForwardRounded } from '@mui/icons-material'
import { GridColDef, DataGrid } from '@mui/x-data-grid'
import { taskPageData } from '../../utils/devUtils'
import { renderStatusTypeBorder, renderStatusTypeBackground, renderStatusTypeBg } from '../../components/utils/tableUtils.ts'


import VBPageHeader from '../../components/VBPageHeader'
import ActionIcons from '../../components/tasks/ActionIcons.tsx'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const columns: Array<GridColDef<any, any, any>> = [
    {
        field: 'assignment',
        headerName: 'Assignments',
        flex: 1,
        renderCell: (params) => (
            <Typography
                sx={{
                    display: 'flex',
                    color: '#101828',
                    fontSize: '14px',
                    fontWeight: '500',
                    lineHeight: '20px',
                }}
            >
                {params.row.assignment}
            </Typography>
        ),
    },
    {
        field: 'category',
        headerName: 'Categories',
        flex: 1,
        renderCell: (params) => (
            <Typography
                sx={{
                    display: 'flex',
                    color: '#475467',
                    fontSize: '14px',
                    fontWeight: '400',
                    lineHeight: '20px',
                }}
            >
                {params.row.category}
            </Typography>
        ),
    },

    {
        field: 'postdate',
        headerName: 'Post date',
        width: 120,
        renderCell: (params) => (
            <Typography
                sx={{
                    display: 'flex',
                    color: '#475467',
                    fontSize: '14px',
                    fontWeight: '400',
                    lineHeight: '20px',
                }}
            >
                {params.row.postdate}
            </Typography>
        ),
    },
    {
        field: 'duedate',
        headerName: 'Due date',
        width: 120,
        renderCell: (params) => (
            <Typography
                sx={{
                    display: 'flex',
                    color: '#475467',
                    fontSize: '14px',
                    fontWeight: '400',
                    lineHeight: '20px',
                }}
            >
                {params.row.duedate}
            </Typography>
        ),
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 120,
        renderCell: (params) => (
            <Box
                sx={{
                    border: renderStatusTypeBorder(params.row.status as string),
                    backgroundColor: renderStatusTypeBackground(params.row.status as string),
                    width:'76px',
                    height:'22px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '16px',
                }}
            >
                <Typography
                    sx={{
                        color: renderStatusTypeBg(params.row.status as string),
                        fontSize: '12px',
                        fontWeight: '500',
                        lineHeight: '18px'
                    }}
                >
                    {params.row.status}
                </Typography>
            </Box>
        ),
    },
    {
        field: 'action',
        headerName: '',
        width: 120,
        renderCell: (params) => (
            <ActionIcons id={params.row.id}></ActionIcons>
        ),
    },
]

const TaskPage = () => {
    const [value, setValue] = useState('1')
    const [search, setSearch] = useState('')
    const [category, setCategory] = useState('All')
    // const [sortBy, setSortBy] = useState('')
    const [rows, setRows] = useState(taskPageData)

    const categories = [...new Set(taskPageData.map(row => row.category))]

    const handleChange = (_: React.SyntheticEvent<Element, Event>, newValue: string) => {
        setValue(newValue)
    }

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
        setRows(taskPageData.filter(row => (
            row.assignment.includes(event.target.value) 
            && (category === 'All' || row.category === category))
        ))
    }

    const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCategory(event.target.value)
        setRows(taskPageData.filter(row => (
            row.assignment.includes(search) 
            && (event.target.value === 'All' || row.category === event.target.value))
        ))
    }

    // const handleSortByChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setSortBy(event.target.value)
    // }

    const handleClearAll = () => {
        setSearch('')
        setCategory('')
        // setSortBy('')
        setRows(taskPageData)   // clear all button will also reset the filtered data back to original
    }

    return (
        <Box sx={{ padding: '12px 32px 20px 32px' }}>
            <VBPageHeader
                title='Tasks'
                subTitle='Create, manage, and grade tasks here.'
                noHr={true}
            />
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList
                            onChange={handleChange}
                            aria-label='API resources tabs'
                            textColor='secondary'
                            indicatorColor='secondary'
                            sx={{ textTransform: 'none', display: 'flex', flexDirection: { md: 'row', xs: 'column' } }}
                        >
                            <Tab label='Current' value='1' sx={{ fontSize: '14px', fontWeight: '600', lineHeight: '20px', textTransform: 'none' }} />
                            <Tab label='Past' value='2' sx={{ fontSize: '14px', fontWeight: '600', lineHeight: '20px', textTransform: 'none' }} />
                        </TabList>
                    </Box>
                    <TabPanel value='1' sx={{ padding: '35px 0' }}>
                        <Box sx={{ border: '1px solid #EAECF0', borderRadius: '16px' }}>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexDirection: { md: 'row', xs: 'column' },
                                height: { md: '60px', xs: '100%' },
                                alignItems: 'center',
                                marginTop: '10px',
                                marginBottom: '10px',
                                padding: { md: '20px', xs: '0px 20px' },
                            }}>
                                <Box 
                                    sx={{ 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        gap: '8px'
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: '18px',
                                            fontWeight: '600',
                                            lineHeight: '28px',
                                            color: '#101828',
                                        }}
                                    >
                                        All Tasks
                                    </Typography>
                                    <Box
                                        sx={{
                                            height: '22px',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            padding: '4px 8px',
                                            borderRadius: '6px',
                                            border: '1px solid #D0D5DD',
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: '12px',
                                                fontWeight: 500,
                                                lineHeight: '18px',
                                                color: '#344054',
                                            }}
                                        >
                                            {rows.length} in total
                                        </Typography>
                                    </Box>
                                </Box>
                                {/*
                                <Button
                                    sx={{
                                        color: '#FFFFFF',
                                        backgroundColor: '#DC6803',
                                        height: '40px',
                                        width: { md: '128px', xs: '100%' },
                                        borderRadius: '10px',
                                        display: 'flex',
                                        cursor: 'pointer',
                                        columnGap: '8px',
                                        marginTop: { xs: '10px', md: '0' },
                                        justifySelf: 'center',
                                    }}
                                >
                                    <Add style={{ width: '20px', height: '20px', color: '#FFFFFF' }} />
                                    <Box
                                        sx={{
                                            fontWeight: '600',
                                            fontSize: '14px',
                                            lineHeight: '20px',
                                            textTransform: 'none',
                                        }}
                                    >
                                        Add tasks
                                    </Box>
                                </Button>
                                */}
                            </Box>

                            <Divider sx={{ width: '100%' }} />

                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                    flexWrap: 'wrap',
                                    padding: '20px',
                                    // justifyContent: 'space-between',
                                }}
                            >
                                <Box>
                                    <Typography
                                        variant='body1'
                                        sx={{
                                            fontSize: '14px',
                                            fontWeight: '500',
                                            lineHeight: '20px',
                                        }}
                                        gutterBottom
                                    >
                                        Search tasks
                                    </Typography>
                                    <TextField
                                        variant='outlined'
                                        placeholder='Search'
                                        value={search}
                                        onChange={handleSearchChange}
                                        size='small'
                                        sx={{
                                            fontSize: '16px',
                                            fontWeight: '400',
                                            lineHeight: '24px'
                                            // ask about the gray color here. is not exactly the same gray. 
                                        }}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position='start'>
                                                    <Search />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Box>


                                <Box>
                                    <Typography
                                        variant='body1'
                                        sx={{
                                            fontSize: '14px',
                                            fontWeight: '500',
                                            lineHeight: '20px',
                                        }}
                                        gutterBottom
                                    >
                                        Categories
                                    </Typography>
                                    <TextField
                                        select
                                        variant='outlined'
                                        value={category}
                                        onChange={handleCategoryChange}
                                        size='small'
                                        sx={{
                                            width: '300px',
                                            fontSize: '16px',
                                            fontWeight: '400',
                                            lineHeight: '24px',
                                        }}
                                    >
                                        <MenuItem value='All'>
                                            <em>All</em>
                                        </MenuItem>
                                        {categories.map((category) => (
                                            <MenuItem value={category}>
                                                {category}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Box>


                                {/* <Box>
                                    <Typography
                                        variant='body1'
                                        sx={{
                                            fontSize: '14px',
                                            fontWeight: '500',
                                            lineHeight: '20px',
                                        }}
                                        gutterBottom
                                    >
                                        Sort by
                                    </Typography>
                                    <TextField
                                        select
                                        variant='outlined'
                                        value={sortBy}
                                        placeholder='Select'
                                        onChange={handleSortByChange}
                                        size='small'
                                        sx={{ width: '200px' }}
                                    >
                                        <MenuItem value=''>
                                            <em>Select</em>
                                        </MenuItem>
                                        <MenuItem value='test'>test</MenuItem>
                                        <MenuItem value='test2'>test2</MenuItem>
                                    </TextField>
                                </Box> */}



                                <Button
                                    onClick={handleClearAll}
                                    sx={{
                                        ml: 'auto',
                                        mt: 'auto',
                                        height: '44px',
                                        width: '100px',
                                        fontSize: '16px',
                                        lineHeight: '24px',
                                        fontWeight: '600',
                                        textTransform: 'none',
                                        color: '#344054',
                                        border: '1px solid #D0D5DD',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Clear all
                                </Button>
                            </Box>

                            <Box>
                                <DataGrid
                                    className='pointer-cursor-datagrid'
                                    rows={rows}
                                    columns={columns}
                                    // onRowClick={handleRowClick}
                                    rowHeight={120}
                                    rowSelection={false}
                                    autoHeight
                                    initialState={{
                                        pagination: {
                                            paginationModel: { page: 0, pageSize: 10 },
                                        },
                                    }}
                                    disableColumnMenu={true}
                                    pageSizeOptions={[5, 10]}
                                    density='compact'
                                    sx={{
                                        '.MuiDataGrid-columnSeparator': {
                                            display: 'none',
                                        },
                                        '&.MuiDataGrid-root': {
                                            border: 'none',
                                        },
                                        '.MuiDataGrid-columnHeader': {
                                            fontSize: '12px',
                                            lineheight: '18px',
                                            fontWeight: '500',
                                            paddingLeft: '20px',
                                            color: ' #475467'

                                        },
                                        '.MuiDataGrid-cell': {
                                            paddingLeft: '20px',
                                        }
                                    }}
                                />
                            </Box>
                        </Box>
                    </TabPanel>
                </TabContext>
            </Box>
        </Box>
    )
}

export default TaskPage