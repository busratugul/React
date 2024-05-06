import { createSlice} from '@reduxjs/toolkit'
import { getTodoAsync, addTodoAsync, toggleTodoAsync, removeTodoAsync } from './services'

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    activeFilter: localStorage.getItem("activeFilter"),
    addNewTodo: {
      isLoading: false,
      error: false
    }
  },

  reducers: {
    changeActiveFilter: (state, action) => {
      state.activeFilter = action.payload
    },
    clearCompleted: (state) => {
      const filtered = state.items.filter((item) => item.completed === false)
      state.items = filtered
    },
  },
  extraReducers: (builder) => {
    //todos GET
    builder.addCase(getTodoAsync.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getTodoAsync.fulfilled, (state, action) => {
      state.items = action.payload
      state.isLoading = false
    })
    builder.addCase(getTodoAsync.rejected, (state, action) => {
      state.error = action.error.message
      state.isLoading = false
    })
    //todos ADD
    builder.addCase(addTodoAsync.pending, (state) => {
      state.addNewTodo.isLoading = true
    })
    builder.addCase(addTodoAsync.fulfilled, (state,action) => {
      state.items.push(action.payload)
      state.addNewTodo.isLoading = false
      state.isLoading = false
    })
    builder.addCase(addTodoAsync.rejected, (state, action) => {
      state.addNewTodo.error = action.error.message
      state.addNewTodo.isLoading = false
    })
    //todos TOGGLE
    builder.addCase(toggleTodoAsync.fulfilled, (state,action) => {
      const {id, completed} = action.payload
      const index = state.items.findIndex(item => item.id === id)
      state.items[index].completed = completed
    })
    //todos DELETE
    builder.addCase(removeTodoAsync.fulfilled, (state, action) => {
      const id = action.payload
      const filtered = state.items.filter((item) => item.id !== id)
      state.items = filtered
      /* const index = state.items.findIndex((item) => item.id === id)
      state.items.splice(index,1) */
    })
  },
})

export const selectTodos = (state) => state.todos.items
export const selectFilteredTodos = (state) => {
  if (state.todos.activeFilter === 'All') {
    return state.todos.items
  }
  return state.todos.items.filter((todo) =>
    state.todos.activeFilter === 'Active'
      ? todo.completed === false
      : todo.completed === true
  )
}
export const selectActiveFilter = (state) => state.todos.activeFilter

export const {changeActiveFilter, clearCompleted } =
  todosSlice.actions
export default todosSlice.reducer
