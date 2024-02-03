import { Box, Typography } from '@mui/material'

export interface ICohortBoxProps {
    color: string,
    bgColor: string,
    text: string
}

const VBCohortBox = ({ color, bgColor, text }: ICohortBoxProps) => {
    return (
        <Box sx={{display:'flex', alignItems:'center', columnGap:'8px', height:'52px', border: `2px solid  ${color}`, borderRadius: '12px', cursor:'pointer', padding:'16px', background:`${bgColor}`, marginBottom:'10px', width: {md:'325px', xs: '100%'} }}>
            <Box sx={{display:'flex', justifyContent:'center',alignItems:'center', border: `2px solid ${color}`, borderRadius: '100px', width:'20px', height:'20px' }}>
                <Box sx={{ background: `${color}`, borderRadius: '100px', width:'10px', height:'10px' }}></Box>
            </Box>
            <Box>
                {' '}
                <Typography
                    sx={{
                        color:` ${color}`,
                        fontWeight: 500,
                        fontSize: '14px',
                        lineHeight:'20px'
                    }}
                >
                    {text}
                </Typography>
            </Box>
        </Box>
    )
}

export default VBCohortBox