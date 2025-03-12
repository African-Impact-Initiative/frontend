import { useEffect, useState } from 'react';
import { 
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button 
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import organizationService from '../../api/organizationService';
import { setErrorNotification, setSuccessNotification } from '../../store/notificationReducer';
import { AppDispatch, IVBState } from '../../store/store';
import { initializeOrganizationMembers } from '../../store/organizationReducer';

// Interface to define the shape of a join request object.
interface JoinRequest {
  id: number;
  user: {
    email: string;
    firstName: string;
    lastName: string;
    photo?: string;
  };
  organization: number;
  status: 'pending' | 'accepted' | 'declined';
  created_at: string;
}

function JoinRequestsList() {
  const dispatch = useDispatch<AppDispatch>();
  const currentOrganization = useSelector((state: IVBState) => state.userOrganization);
  const [joinRequests, setJoinRequests] = useState<JoinRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (currentOrganization.data?.id) {
      fetchJoinRequests();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentOrganization.data?.id]);

  const fetchJoinRequests = async () => {
    setLoading(true);
    try {
      if (!currentOrganization.data) {
        console.log('No organization data available');
        return;
     }
      const response = await organizationService.getJoinRequestsForOrganization(currentOrganization.data.id);
      if (response.success && Array.isArray(response.data)) {
        setJoinRequests(response.data);
      } else {
        dispatch(setErrorNotification('Failed to fetch join requests'));
      }
    } catch (error) {
      dispatch(setErrorNotification('Failed to fetch join requests'));
    } finally {
      setLoading(false);
    }
  };

  const handleAccept = async (requestId: number) => {
    try {
      const response = await organizationService.acceptJoinRequest(requestId);
      if (response.success) {
        dispatch(setSuccessNotification('Join request accepted successfully'));
        // Refresh join requests and organization members list.
        fetchJoinRequests();
        if (currentOrganization.data) {
          dispatch(initializeOrganizationMembers(currentOrganization.data.id));
        }
      } else {
        dispatch(setErrorNotification('Failed to accept join request'));
      }
    } catch (error) {
      dispatch(setErrorNotification('Failed to accept join request'));
    }
  };

  const handleDecline = async (requestId: number) => {
    try {
      const response = await organizationService.declineJoinRequest(requestId);
      if (response.success) {
        dispatch(setSuccessNotification('Join request declined successfully'));
        fetchJoinRequests();
      } else {
        dispatch(setErrorNotification('Failed to decline join request'));
      }
    } catch (error) {
      dispatch(setErrorNotification('Failed to decline join request'));
    }
  };

  if (loading) {
    return <Typography>Loading join requests...</Typography>;
  }

  if (joinRequests.length === 0) {
    return <Typography>No pending join requests.</Typography>;
  }

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Pending Join Requests
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User</TableCell>
              <TableCell>Date Requested</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {joinRequests.map((req) => (
              <TableRow key={req.id} hover>
                <TableCell>
                  {req.user.firstName} {req.user.lastName} <br />
                  <Typography variant="caption" color="textSecondary">
                    {req.user.email}
                  </Typography>
                </TableCell>
                <TableCell>
                  {new Date(req.created_at).toLocaleDateString()}
                </TableCell>
                <TableCell>{req.status}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => handleAccept(req.id)}
                    sx={{ mr: 1 }}
                  >
                    Accept
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    color="error"
                    onClick={() => handleDecline(req.id)}
                  >
                    Decline
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default JoinRequestsList;
