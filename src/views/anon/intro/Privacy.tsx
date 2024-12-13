import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails 
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Privacy = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Title Section */}
      <Typography variant="h2" gutterBottom>
        Privacy Policy
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 4, color: 'text.secondary' }}>
        At Venture Build, we are committed to maintaining the trust and confidence of our users.
      </Typography>

      {/* Introduction Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Introduction
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          This Privacy Policy explains how we collect, use, and protect your personal information in connection with our website designed for startup venture building.
        </Typography>
      </Box>

      {/* Accordion Sections I leave most of the content as empty space*/} 
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {[
          {
            id: 'information-collection',
            title: 'Information Collection',
            content: 'We collect information that you provide to us directly, such as when you create an account, submit inquiries, or use our services. This may include your name, email address, company details, and any other information you choose to provide.'
          },
          {
            id: 'use-of-information',
            title: 'Use of Information'
          },
          {
            id: 'data-sharing',
            title: 'Data Sharing and Disclosure'
          },
          {
            id: 'data-security',
            title: 'Data Security'
          },
          {
            id: 'user-rights',
            title: 'User Rights and Choices'
          },
          {
            id: 'cookies',
            title: 'Cookies'
          },
          {
            id: 'privacy-updates',
            title: 'Privacy Updates'
          },
          {
            id: 'privacy-questions',
            title: 'Privacy Questions'
          }
        ].map((section) => (
          <Accordion
            key={section.id}
            expanded={expanded === section.id}
            onChange={handleChange(section.id)}
            sx={{
              '&:before': { display: 'none' },
              boxShadow: 'none',
              bgcolor: 'transparent',
              '& .MuiAccordionSummary-root': {
                p: 0,
                minHeight: 'auto',
                '&.Mui-expanded': {
                  minHeight: 'auto',
                }
              },
              '& .MuiAccordionSummary-content': {
                margin: '0',
                '&.Mui-expanded': {
                  margin: '0',
                }
              },
              '& .MuiAccordionDetails-root': {
                bgcolor: 'rgb(249, 250, 251)',
                mt: 2,
                p: 3,
                borderRadius: 1
              }
            }}
          >
            <AccordionSummary
              sx={{
                flexDirection: 'row-reverse',
                '& .MuiAccordionSummary-expandIconWrapper': {
                  mr: 2
                }
              }}
              expandIcon={
                expanded === section.id 
                  ? <Box sx={{
                      border: '1px solid rgb(229, 231, 235)',
                      borderRadius: '50%',
                      width: 40,
                      height: 40,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <RemoveIcon sx={{ 
                        fontSize: 24,
                        color: 'text.secondary'
                      }} />
                    </Box>
                  : <Box sx={{
                      border: '1px solid rgb(229, 231, 235)',
                      borderRadius: '50%',
                      width: 40,
                      height: 40,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <AddIcon sx={{ 
                        fontSize: 24,
                        color: 'text.secondary'
                      }} />
                    </Box>
              }
            >
              <Typography 
                variant="h6" 
                sx={{ 
                  color: 'text.primary',
                  fontWeight: expanded === section.id ? 600 : 400
                }}
              >
                {section.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: 'text.secondary' }}>
                {section.content}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default Privacy;