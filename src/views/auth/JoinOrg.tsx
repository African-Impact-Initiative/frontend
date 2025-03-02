import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import organizationService from '../../api/organizationService';
import { Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  MenuItem,
  Select,
  IconButton,
  Dialog,
  DialogContent,
  DialogActions,
  Radio,
  DialogTitle, 
  CircularProgress} from '@mui/material';
import { useDispatch } from 'react-redux';
import { setErrorNotification, setSuccessNotification } from '../../store/notificationReducer';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import PathConstants from '../../navigation/pathConstants';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';


interface JoinRequest {
    organization: number;
    status: 'pending' | 'accepted' | 'declined';
}

interface RequestSentDialogProps {
  open: boolean;
  onClose: () => void;
  companyName: string;
}

const RequestSentDialog = ({ open, onClose, companyName }: RequestSentDialogProps) => {
    return (
      <Dialog 
        open={open} 
        onClose={onClose}
        BackdropProps={{
          sx: { 
            backdropFilter: 'blur(8px)',
            backgroundColor: 'rgba(52, 64, 84, 0.7)' 
          }
        }}
        PaperProps={{
          sx: {
            borderRadius: '16px',
            maxWidth: '400px',
            m: 2,
            position: 'relative'
          }
        }}
      >
        {/* Close button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 16,
            top: 16,
            color: '#98A2B3'
          }}
        >
          <CloseIcon />
        </IconButton>
  
        <DialogContent sx={{ p: 4 }}>
          {/* Icon Container with gradient circles */}
          <Box sx={{ mb: 3, textAlign: 'left', position: 'relative' }}>
            {/* Outer gradient circle */}
            <Box
              sx={{
                position: 'absolute',
                width: '96px',
                height: '96px',
                borderRadius: '50%',
                background: 'rgba(236, 253, 243, 0.4)',
                top: '-28px',
                left: '-28px'
              }}
            />
            {/* Middle gradient circle */}
            <Box
              sx={{
                position: 'absolute',
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: 'rgba(236, 253, 243, 0.7)',
                top: '-16px',
                left: '-16px'
              }}
            />
            {/* Inner circle with check icon */}
            <Box
              sx={{
                position: 'relative',
                width: 40,
                height: 40,
                border: '2px solid #12B76A',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                zIndex: 1
              }}
            >
              <CheckIcon sx={{ color: '#12B76A', fontSize: 24 }} />
            </Box>
          </Box>
  
          {/* Title */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              fontSize: '20px',
              mb: 1.5,
              color: '#101828',
              textAlign: 'left'
            }}
          >
            Request sent
          </Typography>
  
          {/* Message */}
          <Typography
            sx={{
              color: '#475467',
              fontSize: '14px',
              lineHeight: 1.5,
              mb: 3,
              textAlign: 'left'
            }}
          >
            Your request to join <strong>{companyName}</strong> has been sent!
            <br />
            Once approved, you'll receive an email notification.
          </Typography>
  
          {/* Button */}
          <Button
            fullWidth
            variant="contained"
            onClick={onClose}
            sx={{
              textTransform: 'none',
              backgroundColor: '#DC6803',
              py: 1.5,
              borderRadius: '8px',
              fontWeight: 500,
              '&:hover': {
                backgroundColor: '#E8822A'
              }
            }}
          >
            Got it
          </Button>
        </DialogContent>
      </Dialog>
    );
  };

const OrgJoin = () => {
    interface Organization {
      id: number;
      name: string;
      industry: string;
      location: string;
      userSet: { owner: boolean; firstName: string; lastName: string; email: string }[];
    }
    
    const [organizations, setOrganizations] = useState<Organization[]>([]);
    const [loading, setLoading] = useState(true);
    const [loadingRequest, setLoadingRequest] = useState(false);
    const [currentRequest, setCurrentRequest] = useState<JoinRequest | null>(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // For “Request sent” success dialog
    const [requestSentOpen, setRequestSentOpen] = useState(false);
    const [requestedOrgName, setRequestedOrgName] = useState('');
    // Simple search/sort
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('A-Z');
    // For pagination (4 items per page)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;
    // Radio selection: user can only select one org
    const [selectedOrgId, setSelectedOrgId] = useState<number | null>(null);
    // Dialog control
    const [infoDialogOpen, setInfoDialogOpen] = useState(false);
    const [infoDialogMessage, setInfoDialogMessage] = useState('');

        
    const fetchData = async () => {
        try {
            const [orgsResponse, requestResponse] = await Promise.all([
                organizationService.retrieve(searchTerm || null, null),
                organizationService.getCurrentUserJoinRequest()
            ]);

            if (orgsResponse.success && orgsResponse.data) {
                setOrganizations(orgsResponse.data as Organization[]);
            }

            if (requestResponse.success && requestResponse.data) {
                setCurrentRequest(requestResponse.data);
            }
        } catch (err) {
            dispatch(setErrorNotification('Failed to fetch data'));
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [searchTerm, sortOption]);

    const getFounderName = (org: any): string => {
        if (!org.userSet || org.userSet.length === 0) {
            return '—';
        }
        // Look for a user whose `owner` is true
        const founder = org.userSet.find((u: any) => u.owner === true);
        if (!founder) return '—';

        // Build the full name if possible
        const fullName = [founder.firstName, founder.lastName].filter(Boolean).join(' ');
        return fullName || founder.email || '—';
    };

    // Filter & sort (client-side)
    let filtered = [...organizations].filter((org) =>
        (org.name || '').toLowerCase().includes(searchTerm.toLowerCase())
    );
    filtered.sort((a, b) => {
        const nameA = (a.name || '').toLowerCase();
        const nameB = (b.name || '').toLowerCase();
        if (sortOption === 'A-Z') return nameA.localeCompare(nameB);
        return nameB.localeCompare(nameA);
    });

    // Pagination logic
    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pagedOrgs = filtered.slice(startIndex, endIndex);

    const handlePrevious = () => {
        if (currentPage > 1) setCurrentPage((p) => p - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage((p) => p + 1);
    };

    // Handle user checking a radio button (select exactly one org)
    const handleSelectOrg = (orgId: number) => {
        setSelectedOrgId(orgId);
    };

    // “Request to join” overall flow
    const handleRequestToJoin = async () => {
        // Make sure the user has selected something
        if (!selectedOrgId) {
            setInfoDialogMessage('Please select a company first.');
            setInfoDialogOpen(true);
            return;
        }

        // If the user already has a pending request, do NOT block — just open a dialog
        if (currentRequest && currentRequest.status === 'pending') {
            setInfoDialogMessage(
                'You have already requested to join another company. Please wait until it is confirmed.'
            );
            setInfoDialogOpen(true);
            return;
        }

        try {
            setLoadingRequest(true);
            // Find selected organization name
            const selectedOrg = organizations.find((org) => org.id === selectedOrgId);
            const orgName = selectedOrg ? selectedOrg.name : '';

            // Otherwise, proceed with new request
            const response = await organizationService.createJoinRequest(selectedOrgId);
            if (response.success) {
                dispatch(setSuccessNotification('Join request sent successfully'));
                setRequestedOrgName(orgName);
                setRequestSentOpen(true);

                // Optionally update the currentRequest state to reflect the new pending request
                setCurrentRequest({ organization: selectedOrgId, status: 'pending' });
            } else {
                throw new Error('Failed to send join request');
            }
        } catch (err: any) {
            dispatch(setErrorNotification(err.message || 'Failed to send join request'));
        } finally {
            setLoadingRequest(false);
        }
    };

    // Close simple “info” dialog
    const handleInfoDialogClose = () => {
        setInfoDialogOpen(false);
        setInfoDialogMessage('');
    };

    // After showing “request sent” popup, navigate or just close
    const handleRequestSentClose = () => {
        setRequestSentOpen(false);
        navigate(PathConstants.testteamPage); // Or whatever page you want
    };

    const cancelButtonStyles = {
        borderColor: '#D3D3D3',
        color: '#222',
        textTransform: 'none',
        fontWeight: 500,
        '&:hover': {
            borderColor: '#999'
    }
    };
    const requestButtonStyles = {
        backgroundColor: '#DC6803',
        textTransform: 'none',
        fontWeight: 500,
        '&:hover': {
            backgroundColor: '#E8822A'
        }
    };
    const nextPrevButtonStyles = {
        textTransform: 'none',
        fontWeight: 500,
        color: '#444',
        '& .MuiSvgIcon-root': {
            fontSize: '14px'
        }
    };

    if (loading) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <Box sx={{ maxWidth: 1000, margin: '0 auto', py: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
            Choose a venture
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Please select the venture you'd like to join from the list below:
          </Typography>
    
          {/* Search & Sort Row */}
          <Box sx={{ display: 'flex', gap: 2, mb: 2, maxWidth: 400 }}>
            <TextField
              label="Search venture"
              variant="outlined"
              size="small"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              fullWidth
            />
            <Select
              size="small"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <MenuItem value="A-Z">A-Z</MenuItem>
              <MenuItem value="Z-A">Z-A</MenuItem>
            </Select>
          </Box>
    
          {/* Table */}
          <TableContainer component={Paper} sx={{ mb: 2, boxShadow: 'none', border: '1px solid #ddd' }}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#f9f9f9' }}>
                  <TableCell />
                  <TableCell>Company</TableCell>
                  <TableCell>Industry</TableCell>
                  <TableCell>Founder</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell align="right">Learn more</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pagedOrgs.map((org: any) => {
                  const isChecked = selectedOrgId === org.id;
    
                  return (
                    <TableRow key={org.id} hover>
                      <TableCell>
                        <Radio
                          checked={isChecked}
                          onChange={() => handleSelectOrg(org.id)}
                          value={org.id}
                        />
                      </TableCell>
                      <TableCell>{org.name || '—'}</TableCell>
                      <TableCell>{org.industry || '—'}</TableCell>
                      {/* Use the "getFounderName" logic */}
                      <TableCell>{getFounderName(org)}</TableCell>
                      <TableCell>{org.location || '—'}</TableCell>
                      <TableCell align="right">
                        <Button variant="outlined" sx={{ textTransform: 'none' }}>
                          LEARN MORE
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
                {/* If no ventures exist on this page */}
                {pagedOrgs.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={6} align="center">
                      <Typography>No ventures found.</Typography>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
    
          {/* Pagination row */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
            <Button
              onClick={handlePrevious}
              disabled={currentPage <= 1}
              startIcon={<ArrowBackIosNew />}
              sx={{
                ...nextPrevButtonStyles,
                color: currentPage <= 1 ? '#ccc' : '#444'
              }}
            >
              Previous
            </Button>
            <Typography sx={{ mx: 2 }}>
              Page {currentPage} of {totalPages}
            </Typography>
            <Button
              onClick={handleNext}
              disabled={currentPage >= totalPages}
              endIcon={<ArrowForwardIos />}
              sx={{
                ...nextPrevButtonStyles,
                color: currentPage >= totalPages ? '#ccc' : '#444'
              }}
            >
              Next
            </Button>
          </Box>
    
          {/* Bottom Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, position: 'relative' }}>
            <Button variant="outlined" onClick={() => navigate(-1)} sx={cancelButtonStyles}>
              Cancel
            </Button>
            <Button variant="contained" onClick={handleRequestToJoin} sx={requestButtonStyles} disabled={loadingRequest}>
              Request to join
            </Button>
            {loadingRequest && (
            <CircularProgress
                size={24}
                sx={{
                    color: '#fff',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    marginTop: '-12px',
                    marginLeft: '-12px',
                }}
                />
            )}
          </Box>
    
          {/* Simple info dialog */}
          <Dialog open={infoDialogOpen} onClose={handleInfoDialogClose}>
            <DialogTitle>Notice</DialogTitle>
            <DialogContent>
              <Typography>{infoDialogMessage}</Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleInfoDialogClose} autoFocus>
                OK
              </Button>
            </DialogActions>
          </Dialog>
    
          {/* "Request sent" dialog */}
          <RequestSentDialog 
            open={requestSentOpen}
            onClose={handleRequestSentClose}
            companyName={requestedOrgName}
           />
          
          
        </Box>
    );
};

export default OrgJoin;