import React from 'react'
import { useField } from "formik"

function CustomCheckBox({label,...props}) {

    const [field,meta] = useField(props) 

  return (
    <>
    <div className='customcheckbox'>
    <div className='checkbox'>
    <input 
    {...field} 
    {...props}
    className= {meta.error ?"input-error" :""}/>

    </div>
    <div className='span'><span>Kullanım Koşullarını Okudum,Onaylıyorum.</span>
    </div>
    </div>
    

    {meta.error && <div className='error'>{meta.error}</div>}
    </>
   )}

export default CustomCheckBox