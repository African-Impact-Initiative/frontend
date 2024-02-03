import { Typography } from '@mui/material'
import { Box } from '@mui/system'

const VBEventTime = () => {
    return(
        <Box sx={{width: '100%'}}>
            <Box sx={{display: 'flex', columnGap: '30px',}}>
                <Box sx={{display: 'flex',  alignItems: 'center', lineHeight: '40px', }}>
                    <Box sx={{color: '#475467', fontWeight: '400', fontSize: '14px', lineHeight: '40px'}}>
                        <Box>09:00</Box>
                        <Box>09:30</Box>
                        <Box>10:00</Box>
                    </Box>

                </Box>
                <Box sx={{display: 'flex', width: '100%', marginBottom: {md: '0px', xs: '10px'}}}>
                    <Box sx={{borderLeft: '3px solid #42A5F5' , width: {xs:'100%', md: '238px'}, height: {md: '86px', xs: '100%'}, marginTop: '16px', backgroundColor: '#EFF8FE', padding: '12px', textAlign: 'start'}}>
                        <Typography sx={{color: '#1570EF', fontSize: '12px', lineHeight: '18px', fontWeight: '600'}}>Product team weekly standup</Typography>
                        <Box sx={{color: '#1570EF', fontSize: '12px', lineHeight: '18px', fontWeight: '500'}}>09:00 AM - 10:00 AM</Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{display: 'flex', columnGap: '30px',}}>
                <Box sx={{display: 'flex',  alignItems: 'center', lineHeight: '40px', }}>
                    <Box sx={{color: '#475467', fontWeight: '400', fontSize: '14px', lineHeight: '40px'}}>
                        <Box>10:30</Box>
                        <Box>11:00</Box>
                        <Box>11:30</Box>
                    </Box>

                </Box>
                <Box sx={{display: 'flex',  width: '100%', marginBottom: {md: '0px', xs: '10px'}}}>
                    <Box sx={{borderLeft: '3px solid #079455' ,  width: {xs:'100%', md: '238px'}, height: {md: '86px', xs: '100%'}, marginTop: '16px', backgroundColor: '#E8F5E9', padding: '12px',  textAlign: 'start'}}>
                        <Typography sx={{color: '#079455', fontSize: '12px', lineHeight: '18px', fontWeight: '600'}}>Discussing marketing strategies</Typography>
                        <Box sx={{color: '#079455', fontSize: '12px', lineHeight: '18px', fontWeight: '500'}}>10:30 AM - 11:30 AM</Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '60px', marginTop: {md: '0px', xs: '10px'}}}>
                <Box sx={{width: '8px', height: '8px', background: 'red', borderRadius: '100%' }}></Box>
                <Box sx={{borderBottom: '2px solid red', width: {md:'290px', xs: '100%'}, }}></Box>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', columnGap: '30px', lineHeight: '50px'}}>
                <Box sx={{color: '#475467', fontWeight: '400', fontSize: '14px', lineHeight: '40px'}}>12:00</Box>
                <Box sx={{borderBottom: '2px solid #EAECF0', width: {md:'290px', xs: '100%'}, }}></Box>
            </Box>
            <Box sx={{display: 'flex', columnGap: '30px',}}>
                <Box sx={{display: 'flex',  alignItems: 'center', lineHeight: '40px', }}>
                    <Box sx={{color: '#475467', fontWeight: '400', fontSize: '14px', lineHeight: '40px'}}>
                        <Box>12:30</Box>
                        <Box>13:00</Box>
                        <Box>13:30</Box>
                    </Box>

                </Box>
                <Box sx={{display: 'flex',  width: '100%', marginBottom: {md: '0px', xs: '10px'}}}>
                    <Box sx={{borderLeft: '3px solid #E04F16' , width: {xs:'100%', md: '238px'}, height: {md: '86px', xs: '100%'}, marginTop: '16px', backgroundColor: '#FEF6EE', padding: '12px', textAlign: 'start'}}>
                        <Typography sx={{color: '#E04F16', fontSize: '12px', lineHeight: '18px', fontWeight: '600'}}>Employee handbook work session</Typography>
                        <Box sx={{color: '#E04F16', fontSize: '12px', lineHeight: '18px', fontWeight: '500'}}>12:30 PM - 13:30 PM</Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', columnGap: '30px', lineHeight: '40px'}}>
                <Box sx={{color: '#475467', fontWeight: '400', fontSize: '14px', lineHeight: '40px'}}>14:00</Box>
                <Box sx={{borderBottom: '2px solid #EAECF0', width: {md:'290px', xs: '100%'} }}></Box>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', columnGap: '30px', lineHeight: '40px'}}>
                <Box sx={{color: '#475467', fontWeight: '400', fontSize: '14px', lineHeight: '40px'}}>14:30</Box>
                <Box sx={{borderBottom: '2px solid #EAECF0', width: {md:'290px', xs: '100%'} }}></Box>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', columnGap: '30px', lineHeight: '40px'}}>
                <Box sx={{color: '#475467', fontWeight: '400', fontSize: '14px', lineHeight: '40px'}}>15:00</Box>
                <Box sx={{borderBottom: '2px solid #EAECF0', width: {md:'290px', xs: '100%'} }}></Box>
            </Box>

            <Box sx={{display: 'flex', columnGap: '30px',}}>
                <Box sx={{display: 'flex',  alignItems: 'center', lineHeight: '40px', }}>
                    <Box sx={{color: '#475467', fontWeight: '400', fontSize: '14px', lineHeight: '40px'}}>
                        <Box>15:30</Box>
                        <Box>16:00</Box>
                        <Box>16:30</Box>
                    </Box>

                </Box>
                <Box sx={{display: 'flex', width: '100%', marginBottom: {md: '0px', xs: '10px'} }}>
                    <Box sx={{borderLeft: '3px solid #E04F16' ,  width: {xs:'100%', md: '238px'}, height: {md: '86px', xs: '100%'}, marginTop: '16px', backgroundColor: '#FDF3F2', padding: '12px', textAlign: 'start'}}>
                        <Typography sx={{color: '#E04F16', fontSize: '12px', lineHeight: '18px', fontWeight: '600'}}>Reviewing user agreements</Typography>
                        <Box sx={{color: '#E04F16', fontSize: '12px', lineHeight: '18px', fontWeight: '500'}}>15:30 PM - 14:30 PM</Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', columnGap: '30px', lineHeight: '40px'}}>
                <Box sx={{color: '#475467', fontWeight: '400', fontSize: '14px', lineHeight: '40px'}}>17:00</Box>
                <Box sx={{borderBottom: '2px solid #EAECF0', width: {md:'290px', xs: '100%'}}}></Box>
            </Box>
        </Box>
    )
}

export default VBEventTime