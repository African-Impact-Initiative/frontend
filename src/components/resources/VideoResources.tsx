import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ResourceVideoType } from '../../utils/devUtils'

export interface IVideoResources {
    resourceData: Array<ResourceVideoType>
}

const VideoResources = ({ resourceData }: IVideoResources) => {
    const navigate = useNavigate()

    return (
        <Box
            sx={{
                overflow: 'auto',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '15px',
            }}
        >
            {resourceData?.map((resource) => (
                <Box
                    key={resource?.id}
                    sx={{ marginBottom: '40px', cursor: 'pointer' }}
                    onClick={() => navigate(`/app/resources/video/${resource.id}`)}
                >
                    <Box
                        sx={{ display: 'flex', flexDirection: 'column', rowGap: '20px' }}
                    >
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
                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', columnGap: '10px' }}>
                            <Box sx={{ width: '40px', height: '40px' }}>
                                <img src={resource?.authorImage} alt='resource-thumbnail' />
                            </Box>
                            <Box>
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
                                            {resource?.views} views
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
                    </Box>
                </Box>
            ))}
        </Box>
    )
}

export default VideoResources