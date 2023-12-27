import React, { useState } from 'react'
import { useFormik } from 'formik'
import schema from './Validations'

function Signup() {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    isSubmitting,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      nickName: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
    onSubmit: async (values, bag) => {
      await new Promise((r) => setTimeout(r, 1000))
      console.log(values)
      //console.log(bag)
      if (values.email === 'test@deneme.com') {
        return bag.setErrors({ email: 'Bu mail adresi zaten kullanılıyor.' })
      }

      bag.resetForm()
    },
    validationSchema: schema,
  })

  const [show, setShow] = useState(false)

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label htmlFor="nickName">Kullanıcı Adı</label>
        <input
          id="nickName"
          name="nickName"
          placeholder="Jane"
          value={values.nickName}
          disabled={isSubmitting}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.nickName && touched.nickName && (
          <div className="error">{errors.nickName}!!</div>
        )}
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
          value={values.email}
          disabled={isSubmitting}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && (
          <div className="error">{errors.email}!!</div>
        )}
        <label>Şifre</label>
        <input
          type={show ? 'text' : 'password'}
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && (
          <div className="error">{errors.password}!!</div>
        )}

        <label>Şifre Tekrar</label>
        <input
          type={show ? 'text' : 'password'}
          name="passwordConfirm"
          value={values.passwordConfirm}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.passwordConfirm && touched.passwordConfirm && (
          <div className="error">{errors.passwordConfirm}!!</div>
        )}

        <span htmlFor="show" onClick={() => setShow(!show)}>
          {show ? 'Gizle' : 'Göster'}
        </span>

        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Signup
