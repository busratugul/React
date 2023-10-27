import { Box, TextField, MenuItem } from '@mui/material'
import React, { useState } from 'react'

export const LessonSelect = () => {
    const [value, setValue] = useState<string[]>([])
    console.log(value);
 /*    const handleChange = () => {
       
    } */

  return <Box width="250px">
   {/*  <TextField 
    select
    label="Ülke Seçiniz"
    fullWidth
    value={value}
    onChange={(e) => setValue(e.target.value)}>
        <MenuItem value="TR">Türkiye</MenuItem>
        <MenuItem value="ABD">America</MenuItem>
        <MenuItem value="FR">France</MenuItem>
    </TextField> */}
    <TextField 
    SelectProps={{
        multiple: true
    }}
    select
    label="Ülke Seçiniz"
    fullWidth
    value={value}
    onChange={(e) => 
    setValue(typeof e.target.value === "string" 
    ?e.target.value.split(",") :e.target.value)}>
        <MenuItem value="TR">Türkiye</MenuItem>
        <MenuItem value="ABD">America</MenuItem>
        <MenuItem value="FR">France</MenuItem>
    </TextField>
  </Box>
}
