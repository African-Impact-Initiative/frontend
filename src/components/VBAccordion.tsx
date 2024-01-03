import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import { Container, Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'

export type AccordionItems = {
    title: string,
    description: string
}

export interface IAccordianProps {
    list: Array<AccordionItems>,
    key: string
}

const VBAccordion = ({ list, key }: IAccordianProps) => {
    return (
        <Container maxWidth='md' sx={{marginTop: '20px'}}>
            {
                list.map((value, i) =>
                    <Accordion key={`accordion-${key}-value-${i}`} sx={{boxShadow: 'none', marginBottom: '10px'}}>
                        <AccordionSummary
                            expandIcon={<AddCircleOutlineOutlinedIcon />}
                            aria-controls={`panel${key}${i}-content`}
                            id={`panel${key}${i}-header`}
                        >
                            <Typography>{value.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {value.description}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                )
            }
        </Container>
    )
}

export default VBAccordion