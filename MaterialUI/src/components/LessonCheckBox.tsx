import React from 'react'
import {
    Box,
    FormControl,
    FormLabel,
    FormControlLabel,
    Radio,
    RadioGroup,
    FormHelperText,
    Button,
    FormGroup,
    Checkbox,
  } from '@mui/material'
  import { useState } from 'react'

export const LessonCheckBox = () => {
      const [isAccepted, setIsAccepted] = useState(false)
      const [knowledge, setKnowledge] = useState<string[]>([])
      
      const handleKnowledgeChange = (event:React.ChangeEvent<HTMLInputElement>) => {
          const index = knowledge.indexOf(event.target.value)
          if(index === -1 ){
              setKnowledge([...knowledge, event.target.value])
            }else {
                setKnowledge(knowledge.filter((item) => item !== event.target.value))
            }
        }
        console.log(knowledge);
  return <Box>
{/*   <Box>
    <FormControl>
        <FormLabel>
            Eğitim Durumu
        </FormLabel>
        <FormGroup row>
            <FormControlLabel control={<Checkbox/>} label="Lise" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Üniversite" />
            <FormControlLabel control={<Checkbox/>} label="İlkokul" disabled />
        </FormGroup>
    </FormControl>
  </Box> */}
  <Box>
    <FormControl>
        <FormLabel>
            Eğitim Durumu
        </FormLabel>
        <FormGroup row>
            <FormControlLabel control={<Checkbox defaultChecked/>} label="Sözleşmeyi Okudum, Onaylıyorum." />
            <FormControlLabel control={<Checkbox
            checked={isAccepted}  
            onChange={(event) => setIsAccepted(event.target.checked)}/>} label="Kullanım Koşullarını onaylıyorum."/>
        </FormGroup>
    </FormControl>
  </Box>
  <Box>
    <FormControl>
        <FormLabel>
            Frontend de neleri biliyorsun?
        </FormLabel>
        
        <FormGroup>
            <FormControlLabel 
            value="react"
            control={<Checkbox
            checked={knowledge.includes("react")}
            onChange={handleKnowledgeChange}/>} 
            label="React JS"/>

            <FormControlLabel
             value="js"
            control={<Checkbox 
                checked={knowledge.includes("js")}
                onChange={handleKnowledgeChange}/>} 
            label="Javascript"
             />

            <FormControlLabel 
                value="flutter"
            control={<Checkbox 
                checked={knowledge.includes("flutter")}
                onChange={handleKnowledgeChange}/>} 
            label="Flutter"/>

           
        </FormGroup>
    </FormControl>
  </Box>

</Box>
}
