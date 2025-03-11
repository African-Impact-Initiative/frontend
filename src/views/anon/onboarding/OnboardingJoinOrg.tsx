import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import organizationService from '../../../api/organizationService';
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
  Dialog,
  DialogContent,
  DialogActions,
  Radio,
  DialogTitle } from '@mui/material';

import { useDispatch } from 'react-redux';
import { setErrorNotification, setSuccessNotification } from '../../../store/notificationReducer';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import PathConstants from '../../../navigation/pathConstants';


interface JoinRequest {
    organization: number;
    status: 'pending' | 'accepted' | 'declined';
}

interface Organization {
    id: number;
    name: string;
    industry: string;
    location: string;
    userSet: { owner: boolean; firstName: string; lastName: string; email: string }[];
}

const OrganizationJoin = () => {
    const [organizations, setOrganizations] = useState<Organization[]>([]);
    const [loading, setLoading] = useState(true);
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
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button variant="outlined" onClick={() => navigate(-1)} sx={cancelButtonStyles}>
              Cancel
            </Button>
            <Button variant="contained" onClick={handleRequestToJoin} sx={requestButtonStyles}>
              Request to join
            </Button>
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
          <Dialog open={requestSentOpen} onClose={handleRequestSentClose}>
            <DialogTitle>Request sent</DialogTitle>
            <DialogContent>
              <Typography>
                Your request to join <strong>{requestedOrgName}</strong> has been sent!
                Once approved, you'll receive an email notification.
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" onClick={handleRequestSentClose}>
                Got it
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
    );
};

export default OrganizationJoin;