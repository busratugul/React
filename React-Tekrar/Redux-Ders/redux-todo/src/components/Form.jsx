import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/slices/todosSlice'
import {nanoid} from '@reduxjs/toolkit'

function Form() {
  const [content, setContent] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (content) {
      dispatch(addTodo({ id: nanoid(), content: content, completed: false }))
      setContent('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        autoFocus
      />
    </form>
  )
}

export default Form
