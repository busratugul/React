import { useState } from "react"

function TaskCreate({onCreate}) {
const [title, setTitle] = useState("")
const [taskDesc, setTaskDesc] = useState("")

const HandleChange = (e) => {
    setTitle(e.target.value)
}

const handleTaskChange = (e) => {
    setTaskDesc(e.target.value)
}

const handleSubmit = (e) => {
    e.preventDefault()
    onCreate(title,taskDesc)
    setTitle("")
    setTaskDesc("")
}

  return (
    <div className="task-create">
        <h3>Lütfen Task Ekleyiniz...</h3>
        <form className="task-form">

            <label className="task-label">Başlık</label>
            <input value={title} 
            onChange={HandleChange} 
            type="text" className="input-task"/>
            <label className="task-label">Task Giriniz!</label>
            <textarea value={taskDesc} 
            onChange={handleTaskChange}  className="input-task" rows={5}></textarea>
            <button onClick={handleSubmit} className="button">Oluştur</button>
           
        </form>
    </div>
  )
}

export default TaskCreate