import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import { Container, Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'

export type AccordionItems = {
    title: string,
    description: string
}

export interface IAccordionProps {
    list: Array<AccordionItems>,
    accordionKey: string
}

const VBAccordion = ({ list, accordionKey }: IAccordionProps) => {
    return (
        <Container maxWidth='md' sx={{marginTop: '20px'}}>
            {
                list.map((value, i) =>
                    <Accordion key={`accordion-${accordionKey}-value-${i}`} sx={{boxShadow: 'none', marginBottom: '10px'}}>
                        <AccordionSummary
                            expandIcon={<AddCircleOutlineOutlinedIcon />}
                            aria-controls={`panel${accordionKey}${i}-content`}
                            id={`panel${accordionKey}${i}-header`}
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