import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { destroy, toggle, selectFilteredTodos, getTodoAsync } from '../redux/slices/todosSlice'
import Loading from './Loading'
import Error from './Error'

function TodoList() {
  const filteredTodos = useSelector(selectFilteredTodos)
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.todos.isLoading)
  const error = useSelector(state => state.todos.error)
  useEffect(() => {
    dispatch(getTodoAsync())
  },[dispatch])

  if(isLoading){
    return <div><Loading/></div>
  }

  if(error) {
    return <div><Error message={error}/></div>
  }

  return (
    <ul className="todo-list">
      { filteredTodos.map((item) => (
          <li className={item.completed ? 'completed' : ''} key={item.id}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                onChange={() => dispatch(toggle({ id: item.id }))}
                checked={item.completed}
              />
              <label> {item.content} </label>
              <button
                className="destroy"
                onClick={() => dispatch(destroy(item.id))}
              ></button>
            </div>
          </li>
        ))}
    </ul>
  )
}

export default TodoList
