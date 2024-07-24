import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ResourceVideoType } from '../../utils/devUtils'
import { renderTeamtypeBorder, renderTeamtypeBg } from '../utils/tableUtils'

export interface IVideoResources {
    resourceData: Array<ResourceVideoType>
}

const VideoResources = ({ resourceData }: IVideoResources) => {
    const navigate = useNavigate()

    return (
        <Box sx={{ overflow: 'auto', display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
            {resourceData?.map((resource) => (
                <Box
                    key={resource?.id}
                    sx={{ 
                        marginBottom: '40px', 
                        cursor: 'pointer',
                        width: '100%', 
                        maxWidth: '344px',
                        flex: '1 1 300px',
                    }}
                    onClick={() => navigate(`/app/resources/video/${resource.id}`)}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '5px' }}>
                        <Box
                            sx={{
                                width: '344px',
                                height: '193px',
                                borderRadius: '16px',
                                overflow: 'hidden',
                            }}
                        >
                            <img
                                src={resource.thumbnail}
                                alt='resource-thumbnail'
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', columnGap: '10px', marginTop: '10px' }}>
                            <Box sx={{ width: '50px', height: '50px' }}>
                                <img src={resource?.authorImage} alt='resource-author-image'
                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            </Box>
                            <Box sx ={{ width: '100%' }}>
                                <Box>
                                    <Typography
                                        variant='body1'
                                        sx={{
                                            fontFamily: 'Inter',
                                            fontWeight: 600,
                                            fontSize: '14px',
                                            lineHeight: '20px',
                                            color: 'rgba(71, 84, 103, 1)',
                                            wordBreak: 'break-word',
                                            whiteSpace: 'normal',
                                        }}
                                    >
                                        {resource?.name}
                                    </Typography>
                                </Box>
                                <Box>{resource?.author}</Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        columnGap: '5px',
                                        alignItems: 'center',
                                        //   justifyContent: "center",
                                    }}
                                >
                                    <Box>
                                        <Typography
                                            variant='body1'
                                            sx={{
                                                fontFamily: 'Inter',
                                                fontWeight: 600,
                                                fontSize: '14px',
                                                lineHeight: '20px',
                                                color: 'rgba(71, 84, 103, 1)',
                                                marginBottom: '4px',
                                            }}
                                        >
                                            {resource?.views} {resource?.views === '1' ? 'view' : 'views'}
                                        </Typography>
                                    </Box>
                                    <Box>&#8226;</Box>
                                    <Box>
                                        <Typography
                                            variant='body1'
                                            sx={{
                                                fontFamily: 'Inter',
                                                fontWeight: 600,
                                                fontSize: '14px',
                                                lineHeight: '20px',
                                                color: 'rgba(71, 84, 103, 1)',
                                                marginBottom: '4px',
                                            }}
                                        >
                                            {resource?.timePosted}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                border: renderTeamtypeBorder(resource?.type),
                                width: '108px',
                                height: '24px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '100px',
                            }}
                        >
                            <Typography
                                sx={{
                                    color: renderTeamtypeBg(resource?.type),
                                    fontWeight: '500',
                                    fontSize: '14px',
                                }}
                            >
                                {resource?.type}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            ))}
        </Box>
    )
}

export default VideoResources