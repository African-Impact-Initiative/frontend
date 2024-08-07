import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ResourceTemplateType } from '../../utils/devUtils'
import { renderTeamtypeBorder, renderTeamtypeBg } from '../utils/tableUtils'

export interface ITemplateCard {
    template: ResourceTemplateType
}

const TemplateCard = ({ template }: ITemplateCard) => {
    const navigate = useNavigate()

    return (
        <Box>
            <Box
                key={template.id}
                style={{
                    marginBottom: '40px',
                    width: '344px',
                    display: 'flex',
                    flexDirection: 'column',
                    rowGap: '10px',
                    cursor: 'pointer',
                }}
                onClick={() => navigate(`/app/resources/template/${template.id}`)}
            >
                <Box
                    style={{
                        backgroundImage: `url(${template?.thumbnail})`,
                        backgroundSize: '100% 100%',
                        backgroundRepeat: 'no-repeat',
                        width: '344px',
                        height: '223px',
                        borderRadius: '18px',
                    }}
                ></Box>
                <Box>
                    <Typography
                        variant='body1'
                        sx={{
                            // color: "rgba(2, 106, 162, 1)",
                            fontWeight: 600,
                            fontSize: '20px',
                            wordBreak: 'break-word',
                            overflow: 'hidden',
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 2,
                        }}
                    >
                        {template?.name}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        border: renderTeamtypeBorder(template?.type),
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
                            color: renderTeamtypeBg(template?.type),
                            fontWeight: '500',
                            fontSize: '14px',
                        }}
                    >
                        {template?.type}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default TemplateCard