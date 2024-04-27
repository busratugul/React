import { useSelector, useDispatch } from 'react-redux'
import { changeActiveFilter, clearCompleted } from '../redux/slices/todosSlice'

function ContentFooter() {
  const items = useSelector((state) => state.todos.items)
  const activeFilter = useSelector((state) => state.todos.activeFilter)
  const itemsLeft = items.filter((item) => !item.completed).length

  const dispatch = useDispatch()

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
      <button className="clear-completed" onClick={() => dispatch(clearCompleted())}>Clear completed</button>
    </footer>
  )
}

export default ContentFooter
