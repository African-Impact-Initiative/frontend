import { Box, Typography, IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { FundingType } from '../../utils/devUtils'
import MapPin from '../../assets/fundingOpportunitiesPage/map_pin.svg'
import Bookmark from '../../assets/fundingOpportunitiesPage/bookmark.svg'
import ExternalLink from '../../assets/fundingOpportunitiesPage/external_link.svg'
import { renderAlertTagIndustryColor, renderAlertTagIndustryBackground } from '../../components/utils/tableUtils.ts'


export interface FundingCardInterface {
    funding: FundingType
}

const FundingCard = ({ funding }: FundingCardInterface) => {
    const navigate = useNavigate()

    return (
        <Box
            key={funding.id}
            sx={{
                width: '425px',
                padding: '24px',
                border: '1px solid #E4E5E8',
                borderRadius: '8px',

                display: 'flex',
                flexDirection: 'column',
                rowGap: '20px',
                cursor: 'pointer',
            }}

        // onClick={() => navigate(`/app/resources/template/${template.id}`)}
        >
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        rowGap: '6px',
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: '600',
                            fontSize: '22px',
                        }}
                    >
                        {funding?.name}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '8px' }} >
                        <Typography
                            sx={{
                                backgroundColor: '#E7F6EA',
                                padding: '4px 8px 4px 8px',
                                borderRadius: '3px',
                                fontSize: '12px',
                                fontWeight: '600',
                                lineHeight: '12px',
                                color: '#0BA02C'
                                // backgroundColor: renderAlertTagIndustryBackground(funding.industry),
                                // color: renderAlertTagIndustryColor(funding.industry)
                            }}
                        >
                            {funding.industry}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '14px',
                                fontWeight: '400',
                                lineHeight: '20px',
                                color: '#767F8C'
                            }}
                        >
                            Fund: ${funding.fundrangestart.toLocaleString()} - ${funding.fundrangeend.toLocaleString()}
                        </Typography>
                    </Box>
                </Box>
                <IconButton onClick={() => window.open('https://www.example.com', '_blank', 'noopener,noreferrer')}>
                    <img src={ExternalLink} alt='up-arrow-icon' />
                </IconButton>
            </Box>
            
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
            }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{
                        fontSize: '16px',
                        fontWeight: '500',
                        lineHeight: '24px',
                        color: '#18191C',
                    }}>
                        {funding.rewardtype}
                    </Typography>
                    <Box sx={{display: 'flex', gap: '4px'}}>
                        <img src={MapPin} alt='map-pin-icon' />
                        <Typography sx={{
                            fontSize: '14px',
                            fontWeight: '400',
                            lineHeight: '20px',
                            color: '#767F8C',
                        }}>
                            {funding.location}
                        </Typography>
                    </Box>
                </Box>
                <IconButton>
                    <img src={Bookmark} alt='map-pin-icon' />
                </IconButton>
            </Box>
            

            <Box sx={{display: 'flex', gap: '6px'}}>
                <Typography
                    sx={{
                        padding: '6px 11px 6px 11px',
                        borderRadius: '6px',
                        fontSize: '17px',
                        fontWeight: '400',
                        lineHeight: '22px',
                        backgroundColor: 'rgba(120, 120, 128, 0.12)',
                        color: '#ED6C47'
                    }}
                >
                    Due Date: {funding.duedate}
                </Typography>
                <Typography
                    sx={{
                        padding: '6px 11px 6px 11px',
                        borderRadius: '6px',
                        fontSize: '17px',
                        fontWeight: '400',
                        lineHeight: '22px',
                        backgroundColor: 'rgba(120, 120, 128, 0.12)',
                        color: '#ED6C47'
                    }}
                >
                    {funding.duetime}
                </Typography>
            </Box>



           
        </Box>
    )
}

export default FundingCard