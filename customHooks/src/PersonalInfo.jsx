import React from 'react'
import useInput from './useInput'


function PersonalInfo() {

    /* const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
 */

    const [name,bindFirstName,resetFirstName] = useInput("")
    const [surname,bindSurname,resetSurname] = useInput("")
    
    const submitForm = (e) => {
        e.preventDefault()
        alert(`Merhaba ${name} ${surname}`)
        resetFirstName()
        resetSurname()
    }

  return (
    <div>
        <form onSubmit={submitForm}>
        <label>Ad</label>
        <input type="text" {...bindFirstName}/>
        <label>Soyad</label>
        <input type="text"  {...bindSurname} />
        <br />
        <button>Kaydet</button>
        </form>

    </div>
  )
}

export default PersonalInfo