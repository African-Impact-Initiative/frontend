import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { renderTeamtypeBg, renderTeamtypeBorder } from '../VBTableComponent'
import { ResourceTemplateType } from '../../utils/devUtils'

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
                        sx={{
                            // color: "rgba(2, 106, 162, 1)",
                            fontWeight: '600',
                            fontSize: '20px',
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
                            color:renderTeamtypeBg(template?.type),
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