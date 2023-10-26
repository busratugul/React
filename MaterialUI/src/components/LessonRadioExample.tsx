import React from 'react'
import{
    FormControl,
    FormLabel,
    FormControlLabel,
    Radio,
    RadioGroup,
    FormHelperText,
    Button
} from '@mui/material'
import { useState } from 'react'

export const LessonRadioExample = () => {
    const [value, setValue] = useState("")
    const [helperText, setHelperText] = useState("")
    const [error, setError] = useState(false)

    const handleRadioChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }


    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(value == "canboz"){
            setHelperText("Doğru cevap: TABİİKİ Can Boz")
            setError(false)
        }else if(value == "ofcoursecanboz"){
            setHelperText("Bravo Doğru Cevap...")
            setError(false)
        }else{
            setHelperText("Lütfen seçim yapınız!!")
            setError(true)
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <FormControl error={error}>
            <FormLabel>
                En kapsamlı Frontend eğitimini veren eğitmen kimdir?
            </FormLabel>
            <RadioGroup onChange={handleRadioChange}>
                <FormControlLabel label="Can Boz" value={"canboz"} control={<Radio/>}/>

                <FormControlLabel label="Tabiiki Can Boz" value={"ofcoursecanboz"} control={<Radio/>}/>
            </RadioGroup>
            <FormHelperText>
                {
                    helperText
                }
            </FormHelperText>
            <Button type='submit' variant='outlined'>
                Gönder
            </Button>
        </FormControl>
    </form>
  )
}
