import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import { Container, Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"

type AccordionItems = {
    title: string,
    description: string
}

interface AccordianProps {
    list: Array<AccordionItems>,
    key: string
}

const VBAccordion = ({ list, key }: AccordianProps) => {
    return <Container>
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
}

export default VBAccordion