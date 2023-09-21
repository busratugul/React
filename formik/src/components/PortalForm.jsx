import React from 'react'
import { Form,Formik } from 'formik'
import CustomInput from './CustomInput'
import { advancedSchema } from '../schemas'
import CustomSelect from './CustomSelect'
import CustomCheckBox from './CustomCheckBox'
import { Link } from 'react-router-dom'

const onSubmit= async(values,actions) => {

  await new Promise((resolve) => {
      setTimeout(resolve,1000)
   })
  actions.resetForm()
}

function PortalForm() {
  return (
    <>
    <Formik
       initialValues={{ username: '', university: '', isAccepted:false}}
       onSubmit={onSubmit}
       validationSchema= {advancedSchema}
     >
       {({isSubmitting}) => (
         <Form>
          <CustomInput
          label="Kullanıcı Adı" name="username" type= "text" placeholder="Kullanıcı adınızı giriniz"/>

         <CustomSelect
         label="Okulunuz"
         name="university"
         placeholder="Lütfen üniversitenizi seçiniz"
         >
        <option value="">Lütfen üniversitenizi seçiniz</option>
        <option value="Boğaziçi">Boğaziçi Üniversitesi</option>
        <option value="GSU">Galatasaray Üniversitesi</option>
        <option value="ODTU">Orta Doğu Teknik Üniversitesi</option>
        <option value="ITU">İstanbul Teknik Üniversitesi</option>
        <option value="Istanbul">İstanbul Üniversitesi</option>
        </CustomSelect>
        <CustomCheckBox type="checkbox" name="isAccepted" />

        <button disabled={isSubmitting} type='submit'>Kaydet</button>

        <Link to= "/">Ana Forma Git</Link>

         </Form>
       )}
     </Formik>
    </>
  )
}
export default PortalForm