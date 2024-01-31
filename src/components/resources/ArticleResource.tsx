import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ResourceArticleType } from '../../utils/devUtils'
import { renderTeamtypeBorder, renderTeamtypeBg } from '../utils/tableUtils'

export interface IArticleResources {
    resourceArticleData: Array<ResourceArticleType>
}

const ArticleResources = ({ resourceArticleData }: IArticleResources) => {
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
            {resourceArticleData?.map((article) => (
                <Box
                    key={article.id}
                    style={{
                        marginBottom: '40px',
                        display: 'flex',
                        flexDirection: 'column',
                        rowGap: '10px',
                        width: '344px',
                        cursor:'pointer'
                    }}
                    onClick={() => navigate(`/app/resources/article/${article.id}`)}
                >
                    <Box
                        style={{
                            backgroundImage: `url(${article?.thumbnail})`,
                            backgroundSize: '100% 100%',
                            backgroundRepeat: 'no-repeat',
                            width: '344px',
                            height: '223px',
                            borderRadius:'18px'
                        }}
                    ></Box>
                    <Box sx={{ display: 'flex' }}>
                        <Box>
                            <Typography
                                sx={{
                                    fontFamily: 'Inter',
                                    fontWeight: 600,
                                    fontSize: '14px',
                                    lineHeight: '20px',

                                    marginBottom: '4px',
                                    color: 'rgba(181, 71, 8, 1)',
                                }}
                            >
                                {article?.author}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                sx={{
                                    fontFamily: 'Inter',
                                    fontWeight: 600,
                                    fontSize: '14px',
                                    lineHeight: '20px',

                                    marginBottom: '4px',
                                    color: 'rgba(181, 71, 8, 1)',
                                }}
                            >
                &#8226;
                            </Typography>{' '}
                        </Box>
                        <Box>
                            {' '}
                            <Typography
                                sx={{
                                    fontFamily: 'Inter',
                                    fontWeight: 600,
                                    fontSize: '14px',
                                    lineHeight: '20px',
                                    color: 'rgba(181, 71, 8, 1)',
                                    marginBottom: '4px',
                                }}
                            >
                                {article?.date}
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                fontFamily: 'Inter',
                                fontWeight: 600,
                                fontSize: '14px',
                                lineHeight: '20px',
                                color: 'rgba(16, 24, 40, 1)',
                            }}
                        >
                            {article?.name}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                fontFamily: 'Inter',
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '20px',
                                color: 'rgba(71, 84, 103, 1)',
                            }}
                        >
                            {article.description}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            border: renderTeamtypeBorder(article?.type),
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
                                color: renderTeamtypeBg(article?.type),
                                fontWeight: '500',
                                fontSize: '14px',
                            }}
                        >
                            {article?.type}
                        </Typography>
                    </Box>
                </Box>
            ))}
        </Box>
    )
}

export default ArticleResources