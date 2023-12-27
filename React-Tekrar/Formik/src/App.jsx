import React from 'react'
import { useFormik } from 'formik'
import './App.css'

function App() {
  const { handleSubmit, handleChange, values, isSubmitting } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      gender: 'female',
      hobies: [],
      country: '',
      nickName: '',
    },
    onSubmit: async (values, bag) => {
      await new Promise((r) => setTimeout(r, 1000))
      console.log(values)
      //console.log(bag)
  
      bag.resetForm()
    },
  })

  return (
    <div>
      <h1>Sign Up</h1>

      {/* <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        //onSubmit={async (values) => {
        onSubmit={(values) => {
          //await new Promise((r) => setTimeout(r, 500))
          console.log(values)
        }}
      >  */}

      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        placeholder="Jane"
        value={values.firstName}
        disabled={isSubmitting}
        onChange={handleChange}
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        placeholder="Doe"
        value={values.lastName}
        disabled={isSubmitting}
        onChange={handleChange}
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        placeholder="jane@acme.com"
        type="email"
        value={values.email}
        disabled={isSubmitting}
        onChange={handleChange}
      />

      <label htmlFor="male">Male</label>
      <input
        id="male"
        type="radio"
        name="gender"
        value="male"
        onChange={handleChange}
        //checked= {values.gender === "male"}
      />

      <label htmlFor="female">Female</label>
      <input
        id="female"
        type="radio"
        name="gender"
        value="female"
        onChange={handleChange}
        checked
      />

      <br />
      <br />
      <label> Football</label>
      <input
        type="checkbox"
        name="hobies"
        value="Football"
        onChange={handleChange}
      />
      <br />
      <label> Cinema</label>
      <input
        type="checkbox"
        name="hobies"
        value="Cinema"
        onChange={handleChange}
      />
      <br />
      <label> Photography</label>
      <input
        type="checkbox"
        name="hobies"
        value="Photography"
        onChange={handleChange}
      />
      <br />
      <select name="country" onChange={handleChange} value={values.country}>
        <option value="tr">Turkiye</option>
        <option value="en">Ingiltere</option>
        <option value="usa">USA</option>
      </select>

      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>

      <br />
      <br />

      <pre>{JSON.stringify(values)}</pre>
    </div>
  )
}

export default App
