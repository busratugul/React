import React, { useState } from 'react'

function InputState() {
    //States
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [form, setForm] = useState({ school: "", class: ""})

  //Functions

  const onChangeInput = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }


  return (
    <div>
      <h1>input State</h1>
      <label htmlFor="name">Name</label>
      <input id="name" value={name} onChange={(event) => setName(event.target.value)}/>

      <br />

      <label htmlFor="surname">Surname</label>
      <input id='surname' onChange={(event) => setSurname(event.target.value)} />

      <br />

      <label htmlFor="school">School</label>
      <input name="school" id='school' onChange={onChangeInput} />

      <br />

      <label htmlFor="class">Class</label>
      <input name="class" id='class' onChange={onChangeInput} />

      <br />

      <p> Name : {name} </p>
      <p> Surname : {surname} </p>
      <p> School : {form.school} </p>
      <p> Class : {form.class} </p>

    </div>
  )
}

export default InputState
