import { createSlice } from '@reduxjs/toolkit'

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [
      {
        id: 1,
        content: 'Learn React',
        completed: true,
      },
      {
        id: 2,
        content: 'Read Book',
        completed: false,
      },
    ],
    activeFilter: 'All',
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload)
    },
    toggle: (state, action) => {
      const { id } = action.payload
      const item = state.items.find((state) => state.id === id)
      item.completed = !item.completed
    },
    destroy: (state, action) => {
      if (
        window.confirm(
          'Are you sure you want to permanently delete this to-do?'
        )
      ) {
        const id = action.payload
        const filtered = state.items.filter((item) => item.id !== id)
        state.items = filtered
      }
    },
    changeActiveFilter: (state, action) => {
      state.activeFilter = action.payload
    },
    clearCompleted: (state) => {
      const filtered = state.items.filter((item) => item.completed === false)
      state.items = filtered
    },
  },
})

export const selectTodos = (state) => state.todos.items
export const selectFilteredTodos = (state) => {
  if (state.todos.activeFilter === 'All') {
    return state.todos.items
  }
  return state.todos.items.filter(
    (todo) => state.todos.activeFilter === 'Active'
    ? todo.completed === false
    : todo.completed === true
  )
}

export const { addTodo, toggle, destroy, changeActiveFilter, clearCompleted } =
  todosSlice.actions
export default todosSlice.reducer
