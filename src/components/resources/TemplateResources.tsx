import { Box } from '@mui/material'
import { ResourceTemplateType } from '../../utils/devUtils'
import TemplateCard from './TemplateCard'

export interface ITemplateResources {
    resourceTemplateData: Array<ResourceTemplateType>
}

const TemplateResources = ({ resourceTemplateData }: ITemplateResources) => {
    return (
        <Box
            sx={{
                overflow: 'auto',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '15px',
            }}
        >
            {resourceTemplateData?.map((template) => (
                <TemplateCard key={`${template.id}-${template.name}`} template={template} />
            ))}
        </Box>
    )
}

export default TemplateResources