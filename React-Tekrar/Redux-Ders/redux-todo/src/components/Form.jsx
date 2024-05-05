import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodoAsync } from '../redux/slices/todosSlice'
import Loading from './Loading'
import Error from './Error'


function Form() {
  const [content, setContent] = useState('')
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.todos.addNewTodo.isLoading)
  const error = useSelector(state => state.todos.addNewTodo.error)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (content) {
     await dispatch(addTodoAsync({ content }))
      setContent('')
    }
  }
  return (
    <form onSubmit={handleSubmit} style={{display:"flex", alignItems:"center"}}>
      <input
      disabled={isLoading}
        className="new-todo"
        placeholder="What needs to be done?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        autoFocus
      />
      {isLoading && <Loading/>}
      {error && <Error message={error}/>}
    </form>
  )
}

export default Form
