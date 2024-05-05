import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectFilteredTodos,
  getTodoAsync,
  toggleTodoAsync,
  removeTodoAsync
} from '../redux/slices/todosSlice'
import Loading from './Loading'
import Error from './Error'

function TodoList() {
  const filteredTodos = useSelector(selectFilteredTodos)
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.todos.isLoading)
  const error = useSelector((state) => state.todos.error)

  useEffect(() => {
    dispatch(getTodoAsync())
  }, [dispatch])

  const handleToggle = async (id, completed) => {
    await dispatch(toggleTodoAsync({ id, data: { completed } }))
  }

  const handleDestroy = (id) => {
    if(window.confirm("Are you sure?")){
      dispatch(removeTodoAsync(id))
    }
  }

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <Error message={error} />
      </div>
    )
  }

  return (
    <ul className="todo-list">
      {filteredTodos.map((item) => (
        <li className={item.completed ? 'completed' : ''} key={item.id}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              onChange={() => handleToggle(item.id, !item.completed)}
              checked={item.completed}
            />
            <label> {item.content} </label>
            <button
              className="destroy"
              onClick={() => handleDestroy(item.id)}
            ></button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
