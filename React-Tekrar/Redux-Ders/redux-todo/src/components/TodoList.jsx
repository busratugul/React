import { useSelector, useDispatch } from 'react-redux'
import { destroy, toggle, selectFilteredTodos } from '../redux/slices/todosSlice'

function TodoList() {
  const filteredTodos = useSelector(selectFilteredTodos)
  const dispatch = useDispatch()
  
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
