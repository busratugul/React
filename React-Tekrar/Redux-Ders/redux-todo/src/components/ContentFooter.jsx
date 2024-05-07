import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeActiveFilter, selectActiveFilter } from '../redux/slices/todosSlice'
import {clearCompletedTodosAsync} from '../redux/slices/services'

function ContentFooter() {
  const items = useSelector((state) => state.todos.items)
  const activeFilter = useSelector(selectActiveFilter)
  const itemsLeft = items.filter((item) => !item.completed).length
  
  const dispatch = useDispatch()

  useEffect(() => {
    localStorage.setItem("activeFilter",activeFilter)
  },[activeFilter])

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemsLeft}</strong> item{itemsLeft > 1 && 's'} left
      </span>
      <ul className="filters">
        <li>
          <a className={activeFilter === 'All' ? 'selected' : ''} onClick={() => dispatch(changeActiveFilter("All"))}>All</a>
        </li>
        <li>
          <a className={activeFilter === 'Active' ? 'selected' : ''} onClick={() => dispatch(changeActiveFilter("Active"))}>Active</a>
        </li>
        <li>
          <a className={activeFilter === 'Completed' ? 'selected' : ''} onClick={() => dispatch(changeActiveFilter("Completed"))}>
            Completed
          </a>
        </li>
      </ul>
      <button className="clear-completed" onClick={() => dispatch(clearCompletedTodosAsync({clearCompleted: true}))}>Clear completed</button>
    </footer>
  )
}

export default ContentFooter
