import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useNavigate } from 'react-router-dom';
import PathConstants from '../navigation/pathConstants';

interface PendingApprovalBannerProps {
  organizationName: string | null;
}

const PendingApprovalBanner = ({ organizationName }: PendingApprovalBannerProps) => {
  const navigate = useNavigate();
  
  return (
    <Box
      sx={{
        backgroundColor: '#FFF',
        border: '1px solid #EAECF0',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        mb: 3,
        boxShadow: '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
        overflow: 'hidden'
      }}
    >

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          p: 2,
          borderBottom: '1px solid #EAECF0',
          backgroundColor: '#FFFCFA'
        }}
      >
        {/* Clock Icon Circle */}
        <Box
          sx={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #FFF3E8 0%, #FFE5D3 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <AccessTimeIcon 
            sx={{ 
              color: '#DC6803',
              fontSize: 18
            }} 
          />
        </Box>

        <Typography
          sx={{
            color: '#101828',
            fontSize: '14px',
            fontWeight: 600
          }}
        >
          Pending approval
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 3
        }}
      >
        <Box>
          <Typography
            variant="h6"
            sx={{
              color: '#101828',
              fontSize: '16px',
              fontWeight: 600, 
              mb: 0.5
            }}
          >
            Your request to join {organizationName} is pending approval
          </Typography>

          <Typography
            sx={{
              color: '#475467',
              fontSize: '14px'
            }}
          >
            Once approved, you'll gain access to the company dashboard.
          </Typography>
        </Box>

        <Button
          variant="contained"
          onClick={() => navigate(PathConstants.testteamPage)}
          sx={{
            backgroundColor: '#DC6803',
            textTransform: 'none',
            fontWeight: 500,
            px: 4,
            py: 1.5,
            borderRadius: 2,
            whiteSpace: 'nowrap',
            fontSize: '14px',
            '&:hover': {
              backgroundColor: '#E8822A'
            }
          }}
        >
          View status
        </Button>
      </Box>
    </Box>
  );
};

export default PendingApprovalBanner;