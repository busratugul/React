import React, { useState} from 'react'
import { 
    Accordion, 
    AccordionSummary,
    AccordionDetails,
    Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const LessonAccordion = () => {

    const [expanded, setExpanded] = useState<string | false>(false)

    const handleChange = (panel:string) => (event:React.SyntheticEvent,isExpanded:boolean) => {
        console.log(isExpanded);
        setExpanded(isExpanded ?panel  :false)
    }
  return (
<>
  {/* <Accordion>
    <AccordionSummary 
    expandIcon={<ExpandMoreIcon/>}>
        <Typography>İlk Bölüm</Typography>
    </AccordionSummary>
    <AccordionDetails>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aut sunt quo placeat harum fugit hic earum unde neque cupiditate?
    </AccordionDetails>
  </Accordion>

  <Accordion disabled>
    <AccordionSummary 
    expandIcon={<ExpandMoreIcon/>}>
        <Typography>İlk Bölüm</Typography>
    </AccordionSummary>
    <AccordionDetails>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla perferendis doloremque cumque voluptate magnam delectus impedit necessitatibus, voluptatibus aspernatur minima!
    </AccordionDetails>
  </Accordion> */}

<Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
    <AccordionSummary 
    expandIcon={<ExpandMoreIcon/>}>
        <Typography>İlk Bölüm</Typography>
    </AccordionSummary>
    <AccordionDetails>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aut sunt quo placeat harum fugit hic earum unde neque cupiditate?
    </AccordionDetails>
  </Accordion>

  <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
    <AccordionSummary 
    expandIcon={<ExpandMoreIcon/>}>
        <Typography>İlk Bölüm</Typography>
    </AccordionSummary>
    <AccordionDetails>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla perferendis doloremque cumque voluptate magnam delectus impedit necessitatibus, voluptatibus aspernatur minima!
    </AccordionDetails>
  </Accordion>

  </>)
}
