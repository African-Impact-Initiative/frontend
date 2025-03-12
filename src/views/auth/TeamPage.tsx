// import {
//     AddOutlined,
//     CloudDownloadOutlined,
//     MailOutlineOutlined,
//     ModeEditOutlineOutlined,
//     MoreVertOutlined,
//     Search,
//     CheckRounded
// } from '@mui/icons-material'
// import {
//     Button,
//     Checkbox,
//     CheckboxProps,
//     Divider,
//     InputAdornment,
//     MenuItem,
//     TextField,
//     Typography
// } from '@mui/material'
// import { Box } from '@mui/system'
// import { DataGrid, GridColDef } from '@mui/x-data-grid'
// import TeamCard from '../../components/teamPage/TeamCard'
// import VBPageHeader from '../../components/VBPageHeader'
// import { teamPageData } from '../../utils/devUtils'
// import { JSX } from 'react/jsx-runtime'
// import { useState, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { initializeOrganizationMembers } from '../../store/usersReducer'
// import { IVBState, AppDispatch } from '../../store/store'
// import User from '../../types/user'

// const getStatusColor = (status: string) => {
//     switch (status?.toUpperCase()) {
//         case 'ACTIVE':
//             return { bg: '#ECFDF3', text: '#027A48' }
//         case 'VACATION':
//             return { bg: '#FFF6ED', text: '#C4320A' }
//         case 'LEAVE':
//             return { bg: '#FEF3F2', text: '#B42318' }
//         default:
//             return { bg: '#F2F4F7', text: '#344054' }
//     }
// }

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// const columns: Array<GridColDef> = [
//     {
//         field: 'name',
//         headerName: 'Name',
//         description: 'User name and email',
//         sortable: false,
//         width: 240,
//         valueGetter: (params) => `${params.row.first_name} ${params.row.last_name}`,
//         renderCell: (params) => (
//             <div style={{ display: 'flex', columnGap: '10px', alignItems: 'center', textAlign: 'start' }}>
//                 <div>
//                     <img
//                         src={params.row.photo || '/default-avatar.png'}
//                         alt='personImage'
//                         style={{ width: '40px', height: '40px', borderRadius: '50%' }}
//                     />
//                 </div>
//                 <div>
//                     <Typography sx={{
//                         fontSize: '14px',
//                         fontWeight: 610,
//                         color: 'rgba(16, 24, 40, 1)',
//                     }}>
//                         {`${params.row.first_name} ${params.row.last_name}`}
//                     </Typography>
//                     <Typography sx={{
//                         fontSize: '14px',
//                         fontWeight: 400,
//                         color: 'rgba(71, 84, 103, 1)',
//                     }}>
//                         {params.row.email}
//                     </Typography>
//                 </div>
//             </div>
//         ),
//     },
//     {
//         field: 'team_status',
//         headerName: 'Status',
//         width: 120,
//         renderCell: (params) => {
//             const colors = getStatusColor(params.row.team_status)
//             return (
//                 <div style={{ 
//                     padding: '4px 12px',
//                     borderRadius: '16px',
//                     backgroundColor: colors.bg,
//                     color: colors.text,
//                 }}>
//                     {params.row.team_status}
//                 </div>
//             )
//         },
//     },
//     {
//         field: 'role',
//         headerName: 'Role',
//         width: 180,
//         renderCell: (params) => (
//             <div style={{ color: '#475467', fontSize: '14px' }}>
//                 {params.row.role || 'Not specified'}
//             </div>
//         ),
//     },
//     {
//         field: 'country',
//         headerName: 'Country',
//         width: 200,
//         renderCell: (params) => (
//             <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//                 {params.row.country && (
//                     <>
//                         <img 
//                             src={`/flags/${params.row.country.toLowerCase()}.svg`} 
//                             alt={params.row.country}
//                             style={{ width: '20px', height: '15px' }}
//                         />
//                         <span style={{ color: '#475467', fontSize: '14px' }}>
//                             {params.row.country}
//                         </span>
//                     </>
//                 )}
//             </div>
//         ),
//     },
//     {
//         field: 'actions',
//         headerName: '',
//         width: 130,
//         renderCell: (params) => (
//             <div style={{
//                 marginLeft: 'auto',
//                 display: 'flex',
//                 columnGap: '5px',
//                 color: 'rgba(71, 84, 103, 1)',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//             }}>
//                 <div style={{ height: '40px', width: '40px', cursor: 'pointer' }} 
//                      onClick={(e) => {
//                          e.stopPropagation();
//                          window.location.href = `mailto:${params.row.email}`;
//                      }}>
//                     <MailOutlineOutlined style={{ height: '20px', width: '20px' }} />
//                 </div>
//                 <div style={{ height: '40px', width: '40px', cursor: 'pointer' }}>
//                     <ModeEditOutlineOutlined style={{ height: '20px', width: '20px' }} />
//                 </div>
//             </div>
//         ),
//     },
// ]
// // const rows = teamPageData
// const CustomCheckbox = (props: JSX.IntrinsicAttributes & CheckboxProps) => {
//     return (
//         <Checkbox
//             {...props}
//             sx={{
//                 marginLeft: '10px',
//                 '&.Mui-checked': {
//                     color: '#fff',
//                 },
//                 '&.MuiCheckbox-indeterminate': {
//                     color: '#DC6803',
//                 }
//             }}
//             icon={
//                 <span 
//                     style={{ 
//                         border: '1px solid #D0D5DD', 
//                         borderRadius: '6px',
//                         width: 20, 
//                         height: 20 
//                     }}
//                 />
//             }
//             checkedIcon={
//                 <CheckRounded
//                     sx={{ 
//                         backgroundColor: '#DC6803', 
//                         borderRadius: '6px',
//                         width: 20, 
//                         height: 20 
//                     }}
//                 />
//             }
//         />
//     )
// }
// // const statuses = ['Active', 'Invited', 'Pending']


// const TeamPage = () => {
//     const dispatch = useDispatch<AppDispatch>()
//     const currentOrganization = useSelector((state: IVBState) => state.userOrganization)
//     const members = useSelector((state: IVBState) => state.users)
//     const [search, setSearch] = useState('')
//     const [status, setStatus] = useState('Select')
//     const [filteredMembers, setFilteredMembers] = useState(members)

//     useEffect(() => {
//         if (currentOrganization?.id) {
//             dispatch(initializeOrganizationMembers(currentOrganization.id))
//         }
//     }, [currentOrganization, dispatch])

//     useEffect(() => {
//         setFilteredMembers(members)
//     }, [members])

//     const getStatusOptions = () => {
//         const statusSet = new Set(members.map(member => member.team_status))
//         return Array.from(statusSet)
//     }

//     const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setSearch(event.target.value)
//         filterMembers(event.target.value, status)
//     }

//     const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setStatus(event.target.value)
//         filterMembers(search, event.target.value)
//     }


//     const filterMembers = (searchText: string, statusFilter: string) => {
//         let filtered = members
        
//         if (searchText) {
//             filtered = filtered.filter(member => 
//                 `${member.first_name} ${member.last_name}`.toLowerCase().includes(searchText.toLowerCase()) ||
//                 member.email.toLowerCase().includes(searchText.toLowerCase())
//             )
//         }

//         if (statusFilter !== 'Select') {
//             filtered = filtered.filter(member => member.team_status === statusFilter)
//         }

//         setFilteredMembers(filtered)
//     }

//     const handleClearAll = () => {
//         setSearch('')
//         setStatus('Select')
//         setFilteredMembers(members)
//     }

//     return (
//         <Box sx={{ padding: '12px 32px 20px 32px', width: '100%' }}>
//             {/* <Box>
//                 <VBPageHeader
//                     title='Team'
//                     subTitle='Manage your team members here.'
//                     noHr={true}
//                 />
//             </Box> */}
//             {/* <Box>
//                 <TeamCard />
//             </Box> */}
//             {/* Comment this part since so far we don't need this */}
//             <Box sx={{
//                 border: '1px solid #EAECF0',
//                 borderRadius: '16px',
//                 width: '100%',
//                 height: 'fit',
//                 marginTop: '20px'
//             }}>
//                 {/* Header Section */}
//                 <Box sx={{
//                     display: 'flex',
//                     padding: '20px',
//                     flexDirection: {md: 'row', xs: 'column'},
//                 }}>
//                     <Box sx={{ width: '100%'}}>
//                         <Box sx={{ display: 'flex', columnGap: '8px', marginBottom: '6px' }}>
//                             <Typography variant='body1' sx={{
//                                 fontWeight: '600',
//                                 lineHeight: '28px',
//                                 fontSize: '18px',
//                                 color: '#101828'
//                             }}>
//                                 All members
//                             </Typography>
//                             <Box sx={{
//                                 border: '1px solid #FEDF89',
//                                 backgroundColor: '#FFFAEB',
//                                 borderRadius: '16px',
//                                 padding: '2px 8px 2px 8px', 
//                                 display: 'flex',
//                                 alignItems: 'center',
//                                 justifyContent: 'center'
//                             }}>
//                                 <Typography sx={{
//                                     color: '#B54708',
//                                     fontWeight: '500',
//                                     fontSize: '12px',
//                                     lineHeight: '18px',
//                                 }}>
//                                     {members.length} members
//                                 </Typography>
//                             </Box>
//                         </Box>
//                         <Typography variant='body1' sx={{
//                             color: '#475467',
//                             fontSize: '14px',
//                             lineHeight: '20px',
//                             fontWeight: '400',
//                         }}>
//                             Manage your team members here.
//                         </Typography>
//                     </Box>

//                     {/* Action Buttons */}
//                     <Box sx={{ display: 'flex', columnGap: '10px', marginTop: {xs: '20px', md: '0px'} , width: '100%', justifyContent: 'flex-end'}}>
//                         <Button sx={{
//                             width: {md:'167px', xs: '100%'},
//                             height: '40px',
//                             borderRadius: '8px',
//                             border: '1px solid #D0D5DD',
//                             display: 'flex',
//                             justifyContent: 'center',
//                             alignItems: 'center',
//                             columnGap: '10px'
//                         }}>
//                             <CloudDownloadOutlined sx={{ color: '#344054' }} />
//                             <Typography variant='body1' sx={{
//                                 color: '#344054',
//                                 lineHeight: '20px',
//                                 fontWeight: '600',
//                                 fontSize: {md:'14px', xs: '12px'},
//                                 textTransform: 'none'
//                             }}>
//                                 Download CSV
//                             </Typography>
//                         </Button>
//                         <Button sx={{
//                             width: {md:'167px', xs: '100%'},
//                             height: '40px',
//                             backgroundColor: '#DC6803',
//                             borderRadius: '8px',
//                             border: '1px solid #DC6803',
//                             display: 'flex',
//                             justifyContent: 'center',
//                             alignItems: 'center',
//                             columnGap: '10px',
//                             '&:hover': { backgroundColor: '#E8822A' },
//                         }}>
//                             <AddOutlined sx={{ color: 'white', height: '20px', width: '20px' }} />
//                             <Typography variant='body1' sx={{
//                                 lineHeight: '20px',
//                                 fontWeight: '600',
//                                 color: 'white',
//                                 fontSize: {md:'14px', xs: '12px'},
//                                 textTransform: 'none'
//                             }}>
//                                 Add member
//                             </Typography>
//                         </Button>
//                         <MoreVertOutlined sx={{ color: '#98A2B3', cursor: 'pointer' }} />
//                     </Box>
//                 </Box>
//                 <Divider/>

//                 {/* Filters Section */}
//                 <Box>
//                     <Box sx={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: 2,
//                         flexWrap: 'wrap',
//                         padding: '20px',
//                     }}>
//                         {/* Search Field */}
//                         <Box>
//                             <Typography variant='body1' sx={{
//                                 fontSize: '14px',
//                                 fontWeight: '500',
//                                 lineHeight: '20px',
//                             }} gutterBottom>
//                                 Search members
//                             </Typography>
//                             <TextField
//                                 variant='outlined'
//                                 placeholder='Search'
//                                 value={search}
//                                 onChange={handleSearchChange}
//                                 size='small'
//                                 InputProps={{
//                                     startAdornment: (
//                                         <InputAdornment position='start'>
//                                             <Search />
//                                         </InputAdornment>
//                                     ),
//                                 }}
//                             />
//                         </Box>

//                         {/* Status Filter */}
//                         <Box>
//                             <Typography variant='body1' sx={{
//                                 fontSize: '14px',
//                                 fontWeight: '500',
//                                 lineHeight: '20px',
//                             }} gutterBottom>
//                                 Status
//                             </Typography>
//                             <TextField
//                                 select
//                                 value={status}
//                                 onChange={handleStatusChange}
//                                 size='small'
//                                 sx={{ width: '200px' }}
//                             >
//                                 <MenuItem value='Select'>
//                                     <em style={{color: '#667085'}}>Select</em>
//                                 </MenuItem>
//                                 {getStatusOptions().map((status) => (
//                                     <MenuItem key={status} value={status}>
//                                         {status}
//                                     </MenuItem>
//                                 ))}
//                             </TextField>
//                         </Box>

//                         {/* Clear All Button */}
//                         <Button
//                             onClick={handleClearAll}
//                             sx={{
//                                 ml: 'auto',
//                                 mt: 'auto',
//                                 height: '44px',
//                                 width: '100px',
//                                 textTransform: 'none',
//                                 color: '#344054',
//                                 border: '1px solid #D0D5DD',
//                                 borderRadius: '8px',
//                                 fontSize: '16px',
//                                 fontWeight: '600',
//                             }}
//                         >
//                             Clear all
//                         </Button>
//                     </Box>

//                     {/* DataGrid */}
//                     <Box>
//                         <DataGrid
//                             className='pointer-cursor-datagrid'
//                             rows={filteredMembers}
//                             columns={columns}
//                             rowHeight={120}
//                             autoHeight
//                             initialState={{
//                                 pagination: {
//                                     paginationModel: { page: 0, pageSize: 7 },
//                                 },
//                             }}
//                             pageSizeOptions={[5, 10]}
//                             checkboxSelection
//                             slots={{
//                                 baseCheckbox: CustomCheckbox
//                             }}
//                             sx={{
//                                 '.MuiDataGrid-columnSeparator': {
//                                     display: 'none',
//                                 },
//                                 '&.MuiDataGrid-root': {
//                                     border: 'none',
//                                 },
//                                 '.MuiDataGrid-columnHeader': {
//                                     fontSize: '12px',
//                                     lineHeight: '18px',
//                                     fontWeight: '500',
//                                     color: '#475467'
//                                 },
//                                 '.MuiDataGrid-cell': {
//                                     padding: '16px',
//                                 },
//                                 '& .MuiDataGrid-cell:focus-within': {
//                                     outline: 'none !important'
//                                 },
//                             }}
//                         />
//                     </Box>
//                 </Box>
//             </Box>
//         </Box>
//     )
// }



// export default TeamPage


import {
    AddOutlined,
    CloudDownloadOutlined,
    MailOutlineOutlined,
    ModeEditOutlineOutlined,
    MoreVertOutlined,
    Search,
    CheckRounded
} from '@mui/icons-material'
import {
    Button,
    Checkbox,
    CheckboxProps,
    Divider,
    InputAdornment,
    MenuItem,
    TextField,
    Typography
} from '@mui/material'
import { Box } from '@mui/system'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import TeamCard from '../../components/teamPage/TeamCard'
import VBPageHeader from '../../components/VBPageHeader'
import { teamPageData } from '../../utils/devUtils'
import { JSX } from 'react/jsx-runtime'
import { useState } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const columns: Array<GridColDef<any, any, any>> = [
    {
        field: 'name',
        headerName: 'Name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 240,
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
        
        renderCell: (params) => (
            <div style={{ color: '#475467', fontSize: '14px' }}>
                {params.row.role}
            </div>
        ),
    },

    {
        field: 'emailaddress',
        headerName: 'Email address',
        width: 280,
        renderCell: (params) => (
            <div style={{ color: '#475467', fontSize: '14px' }}>
                {params.row.emailaddress}
            </div>
        ),
    },
    {
        field: 'team',
        headerName: 'Team',
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
                    marginLeft: 'auto',
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
// const rows = teamPageData
const CustomCheckbox = (props: JSX.IntrinsicAttributes & CheckboxProps) => {
    return (
        <Checkbox
            {...props}
            sx={{
                marginLeft: '10px',
                '&.Mui-checked': {
                    color: '#fff',
                },
                '&.MuiCheckbox-indeterminate': {
                    color: '#DC6803',
                }
            }}
            icon={
                <span 
                    style={{ 
                        border: '1px solid #D0D5DD', 
                        borderRadius: '6px',
                        width: 20, 
                        height: 20 
                    }}
                />
            }
            checkedIcon={
                <CheckRounded
                    sx={{ 
                        backgroundColor: '#DC6803', 
                        borderRadius: '6px',
                        width: 20, 
                        height: 20 
                    }}
                />
            }
        />
    )
}
// const statuses = ['Active', 'Invited', 'Pending']


const TeamPage = () => {
    const [search, setSearch] = useState('')
    const [status, setStatus] = useState('Select')
    const [team, setTeam] = useState('Select')

    const [rows, setRows] = useState(teamPageData)

    const statusesList = [...new Set(teamPageData.map(row => row.status))]
    const teamsList = [...new Set(teamPageData.map(row => row.team))]

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
        setRows(teamPageData.filter(row => (
            row.name.includes(event.target.value) 
            && (status === 'Select' || row.status === status)
            && (team === 'Select' || row.team === team)
        )))
    }

    const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(event.target.value)
        setRows(teamPageData.filter(row => (
            row.name.includes(search) 
            && (event.target.value === 'Select' || row.status === event.target.value)
            && (team === 'Select' || row.team === team)
        )))
    }

    const handleTeamChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTeam(event.target.value)
        setRows(teamPageData.filter(row => (
            row.name.includes(search) 
            && (status === 'Select' || row.status === status)
            && (event.target.value === 'Select' || row.team === event.target.value)
        )))
    }

    const handleClearAll = () => {
        setSearch('')
        setStatus('Select')
        setTeam('Select')
        setRows(teamPageData)   // clear all button will also reset the filtered data back to original
    }

    return (
        <Box sx={{ padding: '12px 32px 20px 32px', width: '100%' }}>
            {/* <Box>
                <VBPageHeader
                    title='Team'
                    subTitle='Manage your team members here.'
                    noHr={true}
                />
            </Box> */}
            {/* <Box>
                <TeamCard />
            </Box> */}
            {/* Comment this part since so far we don't need this */}
            <Box
                sx={{
                    border: '1px solid #EAECF0',
                    borderRadius: '16px',
                    width: '100%',
                    height: 'fit',
                    marginTop: '20px'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        padding: '20px',
                        flexDirection: {md: 'row', xs: 'column'},
                    }}
                >
                    <Box sx={{ width: '100%'}}>
                        <Box
                            sx={{ display: 'flex', columnGap: '8px', marginBottom: '6px' }}
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
                                    borderRadius: '16px',
                                    padding: '2px 8px 2px 8px', 
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <Typography
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
                <Divider/>

                <Box sx={{}}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            flexWrap: 'wrap',
                            padding: '20px',
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
                                Search members
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
                                Status
                            </Typography>
                            <TextField
                                select
                                variant='outlined'
                                value={status}
                                onChange={handleStatusChange}
                                size='small'
                                sx={{
                                    width: '200px',
                                    fontSize: '16px',
                                    fontWeight: '400',
                                    lineHeight: '24px',
                                }}
                            >
                                <MenuItem value='Select'>
                                    <em style={{color: '#667085'}}>Select</em>
                                </MenuItem>
                                {statusesList.map((status) => (
                                    <MenuItem value={status}>
                                        {status}
                                    </MenuItem>
                                ))}
                            </TextField>
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
                                Team
                            </Typography>
                            <TextField
                                select
                                value={team}
                                // placeholder='Select'
                                onChange={handleTeamChange}
                                size='small'
                                sx={{
                                    // border: '1px solid #D0D5DD',
                                    // borderRadius: '8px',
                                    width: '200px',
                                    fontSize: '16px',
                                    fontWeight: '400',
                                    lineHeight: '24px',
                                }}
                            >
                                <MenuItem value='Select'>
                                    <em style={{color: '#667085'}}>Select</em>
                                </MenuItem>
                                {teamsList.map((team) => (
                                    <MenuItem value={team}>
                                        {team}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Box>



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
                            // adjust its height to accommodate all rows.
                            autoHeight
                            initialState={{
                                pagination: {
                                    paginationModel: { page: 0, pageSize: 7 },
                                },
                            }}
                            pageSizeOptions={[5, 10]}
                            checkboxSelection
                            slots={{
                                baseCheckbox: CustomCheckbox
                            }}
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
                                    // paddingLeft: '20px',
                                    color: ' #475467'

                                },
                                '.MuiDataGrid-cell': {
                                    // paddingLeft: '20px',
                                },
                                '& .MuiDataGrid-cell:focus-within': {
                                    outline: 'none !important'
                                },
                            }}
                        />
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}

export default TeamPage

