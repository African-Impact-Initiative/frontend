import {
    AddOutlined,
    MailOutlineOutlined,
    ModeEditOutlineOutlined,
    MoreVertOutlined,
    Search,
    CheckRounded,
    PersonAddAlt1Outlined,
    PersonRemoveOutlined
} from '@mui/icons-material'
import {
    Button,
    Checkbox,
    CheckboxProps,
    Divider,
    InputAdornment,
    MenuItem,
    TextField,
    Typography,
    Menu
} from '@mui/material'
import { Box } from '@mui/system'
import { DataGrid, GridColDef, GridSortModel } from '@mui/x-data-grid'
import { JSX } from 'react/jsx-runtime'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeOrganizationMembers, updateMemberCoownerStatus } from '../../store/organizationReducer'
import { IVBState, AppDispatch } from '../../store/store'
import { IconButton } from '@mui/material'
import User from '../../types/user'
import countryList from 'react-select-country-list';
import 'flag-icons/css/flag-icons.min.css';
import { useAppSelector } from '../../hooks/redux'
import InvitationModal from './InvitationModel'
import InvitationManager from './InvitationManager'
import { useNavigate } from 'react-router'
import PathConstants from '../../navigation/pathConstants'
import organizationService from '../../api/organizationService'
import { setErrorNotification } from '../../store/notificationReducer'
import PendingApprovalBanner from '../../UI/PendingTeam'



const getStatusColor = (status: string) => {
    switch (status?.toUpperCase()) {
        case 'ACTIVE':
            return { bg: '#ECFDF3', text: '#027A48' }
        case 'VACATION':
            return { bg: '#FFF6ED', text: '#B42318' }
        case 'LEAVE':
            return { bg: '#FEF3F2', text: '#C4320A' }
        default:
            return { bg: '#F2F4F7', text: '#344054' }
    }
}

const getCountryCode = (countryName: string) => {
    const country = countryList().getData().find(
        (country) => country.label === countryName
    );
    return country ? country.value : '';
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const columns = (currentUser: any, joinRequest: JoinRequest | null): Array<GridColDef> => {
    const isJoinPending = joinRequest ? joinRequest.status === 'pending' : false;
    const cols: GridColDef[] = [];
  
    // Name column always visible
    cols.push({
      field: 'name',
      headerName: 'Name',
      width: 350,
      sortable: false,
      renderCell: (params) => (
        <div style={{ display: 'flex', columnGap: '10px', alignItems: 'center', textAlign: 'start' }}>
          {params.row.photo && (
            <div>
              <img
                src={params.row.photo}
                alt='personImage'
                style={{ width: '40px', height: '40px', borderRadius: '50%' }}
              />
            </div>
          )}
          <div>
            <Typography sx={{ fontSize: '14px', fontWeight: 610, color: 'rgba(16, 24, 40, 1)' }}>
              {`${params.row.firstName} ${params.row.lastName}`}
            </Typography>
            {(params.row.owner || params.row.coowner) && (
              <Typography
                sx={{
                  fontSize: '12px',
                  color: '#344054',
                  backgroundColor: '#F9FAFB',
                  padding: '2px 8px',
                  borderRadius: '16px',
                  border: '1px solid #D0D5DD',
                  display: 'inline-block',
                  marginTop: '4px'
                }}
              >
                {params.row.owner ? 'Admin' : 'Co-Admin'}
              </Typography>
            )}
          </div>
        </div>
      )
    });
  
    // Only include email if no pending join request
    if (!isJoinPending) {
      cols.push({
        field: 'email',
        headerName: 'Email address',
        width: 280,
        sortable: true,
        renderCell: (params) => (
          <div style={{ color: '#475467', fontSize: '14px' }}>
            {params.row.email}
          </div>
        )
      });
    }
  
    // Only include teamStatus column if no pending join request
    if (!isJoinPending) {
      cols.push({
        field: 'teamStatus',
        headerName: 'Status',
        width: 120,
        sortable: true,
        renderCell: (params) => {
          const colors = getStatusColor(params.row.teamStatus);
          return (
            <div style={{ 
                padding: '4px 12px',
                borderRadius: '16px',
                backgroundColor: colors.bg,
                color: colors.text,
                fontSize: '14px',
                fontWeight: 500,
            }}>
              {params.row.teamStatus || 'Not specified'}
            </div>
          );
        }
      });
    }
  
    // Role and Joined columns are always included
    cols.push({
      field: 'role',
      headerName: 'Role',
      width: 300,
      sortable: true,
      renderCell: (params) => (
        <div style={{ color: '#475467', fontSize: '14px' }}>
          {params.row.role || 'Not specified'}
        </div>
      )
    });
    cols.push({
      field: 'joined',
      headerName: 'Date joined',
      width: 250,
      sortable: true,
      renderCell: (params) => {
        const joinDate = params.row.joined ? new Date(params.row.joined) : null;
        const formattedDate = joinDate ? joinDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        }) : 'Not specified';
        return (
          <div style={{ color: '#475467', fontSize: '14px' }}>
            {formattedDate}
          </div>
        );
      }
    });
  
    // Only include country column if no pending join request
    if (!isJoinPending) {
      cols.push({
        field: 'country',
        headerName: 'Country',
        width: 180,
        sortable: true,
        renderCell: (params) => (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {params.row.country && (
              <>
                <span
                  className={`fi fi-${getCountryCode(params.row.country).toLowerCase()}`}
                  style={{ width: '20px', height: '15px' }}
                ></span>
                <span style={{ color: '#475467', fontSize: '14px' }}>
                  {params.row.country}
                </span>
              </>
            )}
          </div>
        )
      });
    }
  
    // Actions column
    cols.push({
      field: 'actions',
      headerName: '',
      width: 140,
      renderCell: (params) => {
        // Use a helper component to render actions
        const dispatch = useDispatch<AppDispatch>();
        const currentOrganization = useSelector((state: IVBState) => state.userOrganization);
        
        const RenderActions = ({ params, currentUser }: { params: any, currentUser: any }) => {
          const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
          
          const isCurrentUserOwner = currentUser?.data?.owner === true;
          const isSameUser = params.row.id === currentUser?.data?.id;
          const isTargetUserOwner = params.row.owner === true;
          
          const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
            event.stopPropagation();
            setAnchorEl(event.currentTarget);
          };
          
          const handleCloseMenu = () => {
            setAnchorEl(null);
          };
          
          const handleCoownerChange = async () => {
            try {
              if (currentOrganization.data?.id) {
                await dispatch(updateMemberCoownerStatus(
                  Number(currentOrganization.data.id),
                  params.row.id
                ));
              }
              handleCloseMenu();
            } catch (error) {
              console.error('Failed to update coowner status:', error);
            }
          };
    
          return (
            <div style={{
              display: 'flex',
              columnGap: '5px',
              color: 'rgba(71,84,103,1)',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <IconButton
                onClick={(e) => {
                  e.stopPropagation();
                  window.location.href = `mailto:${params.row.email}`;
                }}
                disabled={isJoinPending}
              >
                <MailOutlineOutlined style={{ height: '20px', width: '20px', opacity: isJoinPending ? 0.5 : 1 }} />
                
              </IconButton>
              {/* Only show pencil icon if join request is not pending */}
              {!isJoinPending && (
                <IconButton>
                  <ModeEditOutlineOutlined style={{ height: '20px', width: '20px' }} />
                </IconButton>
              )}
              {isCurrentUserOwner && !isSameUser && !isTargetUserOwner && (
                <>
                  <IconButton onClick={handleOpenMenu}>
                    <MoreVertOutlined style={{ height: '20px', width: '20px' }} />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleCloseMenu}
                    PaperProps={{
                      sx: {
                        boxShadow: '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
                        borderRadius: '8px',
                        border: '1px solid #F2F4F7',
                      }
                    }}
                  >
                    {params.row.coowner ? (
                      <MenuItem 
                        onClick={() => handleCoownerChange()}
                        sx={{ gap: 1, padding: '10px 16px', '&:hover': { backgroundColor: '#F9FAFB' } }}
                      >
                        <PersonRemoveOutlined sx={{ color: '#475467' }} />
                        <Typography sx={{ color: '#475467', fontSize: '14px' }}>Remove Co-Admin</Typography>
                      </MenuItem>
                    ) : (
                      <MenuItem 
                        onClick={() => handleCoownerChange()}
                        sx={{ gap: 1, padding: '10px 16px', '&:hover': { backgroundColor: '#F9FAFB' } }}
                      >
                        <PersonAddAlt1Outlined sx={{ color: '#475467' }} />
                        <Typography sx={{ color: '#475467', fontSize: '14px' }}>Make Co-Admin</Typography>
                      </MenuItem>
                    )}
                  </Menu>
                </>
              )}
            </div>
          );
        };
  
        return <RenderActions params={params} currentUser={currentUser} />;
      },
    });
  
    return cols;
};
  
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
interface JoinRequest {
    id: number;
    organization: number;
    status: 'pending' | 'accepted' | 'declined';
}

const TestTeamPage = () => {
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const currentOrganization = useSelector((state: IVBState) => state.userOrganization)
    const members = useSelector((state: IVBState) => state.users)
    const [search, setSearch] = useState('')
    const [status, setStatus] = useState('Select')
    const [filteredMembers, setFilteredMembers] = useState<User[]>([])
    const [sortModel, setSortModel] = useState<GridSortModel>([]);
    const user = useAppSelector(state => state.user);
    const [inviteModalOpen, setInviteModalOpen] = useState(false);
    const isAuthorized = user?.data?.owner || (user?.data?.coowner === currentOrganization?.data?.id);
    const [joinRequest, setJoinRequest] = useState<JoinRequest | null>(null);
    const [loadingJoinRequest, setLoadingJoinRequest] = useState(true);
    const [requestedOrgName, setRequestedOrgName] = useState<string | null>(null);

    useEffect(() => {
        organizationService
        .getCurrentUserJoinRequest()
        .then((res) => {
            console.log(res)
            if (res.success && res.data) {
            setJoinRequest(res.data);
            }
        })
        .catch(() => {
            dispatch(setErrorNotification('Failed to fetch join request'));
        })
        .finally(() => {
            setLoadingJoinRequest(false);
        });
    }, [dispatch]);

    useEffect(() => {
        if (joinRequest && joinRequest.status === 'pending') {
            console.log(joinRequest.organization);
            organizationService
                .getAll()
                .then((resp) => {
                    console.log(resp);
                    console.log(resp.data);
                    if (resp.success && Array.isArray(resp.data)) {
                        const foundOrg = resp.data.find((org) => org.id === joinRequest.organization);
                        if (foundOrg) {
                            console.log(foundOrg.name);
                            setRequestedOrgName(foundOrg.name || 'Unknown Organization');
                        } else {
                            setRequestedOrgName('Unknown Organization');
                        }
                    } else {
                        setRequestedOrgName('Unknown Organization');
                    }
                })
                .catch(() => {
                    // Just fallback if something goes wrong
                    setRequestedOrgName('Unknown Organization');
                });
        }
    }, [joinRequest]);
    

    useEffect(() => {
        const orgId = currentOrganization.data?.id || 
            (joinRequest && joinRequest.status === 'pending' ? joinRequest.organization : null);
        if (orgId) {
            dispatch(initializeOrganizationMembers(orgId));
        }
    }, [currentOrganization.data?.id, joinRequest, dispatch]);
    

    useEffect(() => {
        if (members && Array.isArray(members)) {
            setFilteredMembers(members)
        }
    }, [members])

    // Get unique status options
    const getStatusOptions = () => {
        if (!members.length) return [];
        const statuses = members.map(member => member.teamStatus).filter(Boolean);
        return Array.from(new Set(statuses));
    }

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = event.target.value;
        setSearch(searchValue);
        filterMembers(searchValue, status);
    }

    const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const statusValue = event.target.value;
        setStatus(statusValue);
        filterMembers(search, statusValue);
    }

    const filterMembers = (searchText: string, statusFilter: string) => {
        let filtered = [...members];
        console.log(members)
        
        // Filter by name
        if (searchText) {
            filtered = filtered.filter(member => {
                const fullName = `${member.firstName} ${member.lastName}`.toLowerCase();
                return fullName.includes(searchText.toLowerCase());
            });
        }

        // Filter by status
        if (statusFilter && statusFilter !== 'Select') {
            filtered = filtered.filter(member => member.teamStatus === statusFilter);
        }

        setFilteredMembers(filtered);
    }

    const handleSortModelChange = (newModel: GridSortModel) => {
        setSortModel(newModel);
        
        if (newModel.length === 0) {
            setFilteredMembers([...members]);
            return;
        }
    
        const { field, sort } = newModel[0];
        let sortedMembers = [...filteredMembers];
    
        sortedMembers.sort((a, b) => {
            let valueA = (a[field as keyof User] || 'Not specified').toString().toUpperCase();
            let valueB = (b[field as keyof User] || 'Not specified').toString().toUpperCase();
            console.log(valueA)
            console.log(valueB)
            if (sort === 'asc') {
                console.log(valueA.localeCompare(valueB))
                return valueA.localeCompare(valueB);
            } else {
                return valueB.localeCompare(valueA);
            }
        });
    
        setFilteredMembers(sortedMembers);
    };

    const handleClearAll = () => {
        setSearch('');
        setStatus('Select');
        setFilteredMembers(members);
    }

    const hasNoTeams = !currentOrganization.data?.id && members.length === 0;
    console.log(hasNoTeams)
    console.log(joinRequest?.status)
    console.log(members.length)

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
            <Box sx={{
                border: '1px solid #EAECF0',
                borderRadius: '16px',
                width: '100%',
                height: 'fit',
                marginTop: '20px'
            }}>
                {/* Header Section */}
                <Box sx={{
                    display: 'flex',
                    padding: '20px',
                    flexDirection: {md: 'row', xs: 'column'},
                }}>
                    <Box sx={{ width: '100%'}}>
                        <Box sx={{ display: 'flex', columnGap: '8px', marginBottom: '6px' }}>
                            <Typography variant='body1' sx={{
                                fontWeight: '600',
                                lineHeight: '28px',
                                fontSize: '18px',
                                color: '#101828'
                            }}>
                                All members
                            </Typography>
                            <Box sx={{
                                border: '1px solid #FEDF89',
                                backgroundColor: '#FFFAEB',
                                borderRadius: '16px',
                                padding: '2px 8px 2px 8px', 
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Typography sx={{
                                    color: '#B54708',
                                    fontWeight: '500',
                                    fontSize: '12px',
                                    lineHeight: '18px',
                                }}>
                                    {members.length} members
                                </Typography>
                            </Box>
                        </Box>
                        <Typography variant='body1' sx={{
                            color: '#475467',
                            fontSize: '14px',
                            lineHeight: '20px',
                            fontWeight: '400',
                        }}>
                            Manage your team members here.
                        </Typography>
                    </Box>

                    {/* Action Buttons */}
                    <Box sx={{ display: 'flex', columnGap: '10px', marginTop: {xs: '20px', md: '0px'} , width: '100%', justifyContent: 'flex-end'}}>
                        <Button 
                            onClick={() => {
                                if (user?.data?.owner || user?.data?.coowner === currentOrganization?.data?.id) {
                                    setInviteModalOpen(true);
                                } else {
                                    // You might want to add a proper error notification here
                                    alert("You don't have permission to invite members");
                                }
                            }}
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
                            }}
                        >
                            <AddOutlined sx={{ color: 'white', height: '20px', width: '20px' }} />
                            <Typography variant='body1' sx={{
                                lineHeight: '20px',
                                fontWeight: '600',
                                color: 'white',
                                fontSize: {md:'14px', xs: '12px'},
                                textTransform: 'none'
                            }}>
                                Add member
                            </Typography>
                        </Button>
                        <MoreVertOutlined sx={{ color: '#98A2B3', cursor: 'pointer' }} />
                    </Box>
                </Box>

                {hasNoTeams && joinRequest?.status !== 'pending' &&(
                    <>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                backgroundColor: '#FFFAEB',
                                border: '1px solid #FEDF89',
                                borderRadius: '8px',
                                padding: '16px 24px',
                                marginBottom: '24px',
                            }}
                        >
                            <Typography sx={{ fontSize: '14px', fontWeight: '500', color: '#344054' }}>
                                <Box component="span" sx={{ fontSize: '20px', fontWeight: 'bold', marginRight: '8px', color: '#B54708' }}>
                                    !
                                </Box>
                                Join or create a company to access teams
                            </Typography>
                            <Box sx={{ display: 'flex', gap: '16px' }}>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        border: '1px solid #D0D5DD',
                                        color: '#344054',
                                        textTransform: 'none',
                                        fontWeight: '600',
                                        borderRadius: '8px',
                                    }}
                                    onClick={() => navigate(PathConstants.jointeamPage)}
                                >
                                    Join a company
                                </Button>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: '#DC6803',
                                        color: 'white',
                                        textTransform: 'none',
                                        fontWeight: '600',
                                        borderRadius: '8px',
                                        '&:hover': { backgroundColor: '#E8822A' },
                                    }}
                                    onClick={() => alert("Redirect to create a company")}
                                >
                                    Create a company
                                </Button>
                            </Box>
                        </Box>
                    </>
                )}
                {!currentOrganization.data?.id && joinRequest?.status === 'pending' && (
                    <PendingApprovalBanner organizationName={requestedOrgName || 'Loading...'} />
                )}
                <Divider/>

                {/* Filters Section */}
                <Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        flexWrap: 'wrap',
                        padding: '20px',
                    }}>
                        {/* Search Field */}
                        <Box>
                            <Typography variant='body1' sx={{
                                fontSize: '14px',
                                fontWeight: '500',
                                lineHeight: '20px',
                            }} gutterBottom>
                                Search members
                            </Typography>
                            <TextField
                                variant='outlined'
                                placeholder='Search'
                                value={search}
                                onChange={handleSearchChange}
                                size='small'
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position='start'>
                                            <Search />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Box>

                        {/* Status Filter */}
                        <Box>
                            <Typography variant='body1' sx={{
                                fontSize: '14px',
                                fontWeight: '500',
                                lineHeight: '20px',
                            }} gutterBottom>
                                Status
                            </Typography>
                            <TextField
                                select
                                value={status}
                                onChange={handleStatusChange}
                                size='small'
                                sx={{ width: '200px' }}
                            >
                                <MenuItem value='Select'>
                                    <em style={{color: '#667085'}}>Select</em>
                                </MenuItem>
                                {getStatusOptions().map((status) => (
                                    <MenuItem key={status} value={status}>
                                        {status}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Box>

                        {/* Clear All Button */}
                        <Button
                            onClick={handleClearAll}
                            sx={{
                                ml: 'auto',
                                mt: 'auto',
                                height: '44px',
                                width: '100px',
                                textTransform: 'none',
                                color: '#344054',
                                border: '1px solid #D0D5DD',
                                borderRadius: '8px',
                                fontSize: '16px',
                                fontWeight: '600',
                            }}
                        >
                            Clear all
                        </Button>
                    </Box>

                    {/* DataGrid */}
                    <Box>
                        <DataGrid
                            className='pointer-cursor-datagrid'
                            rows={filteredMembers}
                            columns={columns(user, joinRequest)} 
                            rowHeight={120}
                            autoHeight
                            sortingMode="client"
                            sortModel={sortModel}
                            onSortModelChange={handleSortModelChange}
                            initialState={{
                                pagination: {
                                    paginationModel: { page: 0, pageSize: 7 },
                                },
                            }}
                            pageSizeOptions={[5, 10]}
                            checkboxSelection={!joinRequest || joinRequest.status !== 'pending'}
                            slots={{
                                baseCheckbox: CustomCheckbox
                            }}
                            localeText={{
                                noRowsLabel: 'No team members',
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
                                    lineHeight: '18px',
                                    fontWeight: '500',
                                    color: '#475467'
                                },
                                '.MuiDataGrid-cell': {
                                    padding: '16px',
                                },
                                '& .MuiDataGrid-cell:focus-within': {
                                    outline: 'none !important'
                                },
                            }}
                        />
                    </Box>
                </Box>
            </Box>
            <InvitationModal 
                open={inviteModalOpen}
                onClose={() => setInviteModalOpen(false)}
            />
            {isAuthorized && (
                <Box sx={{ marginTop: '20px' }}>
                    <InvitationManager />
                </Box>
            )}
        </Box>
    )
}



export default TestTeamPage
