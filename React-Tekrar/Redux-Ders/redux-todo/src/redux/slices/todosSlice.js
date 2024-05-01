import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'

export const getTodoAsync = createAsyncThunk("todos/getTodosAsync/", async () => {
  const res = await fetch("http://localhost:7000/todos")
  return await res.json()
})

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    activeFilter: 'All',
  },
  reducers: {
    addTodo: {
      reducer:(state, action) => {
        state.items.push(action.payload)
    },
    prepare: ({content}) => {
      return {
        payload: {
          id: nanoid(),
          completed: false,
          content
        }
      }
    }
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
  extraReducers: (builder) => {
    //todos GET
    builder.addCase(getTodoAsync.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getTodoAsync.fulfilled,(state,action) => {
      state.items = action.payload
      state.isLoading = false
    })
    builder.addCase(getTodoAsync.rejected,(state, action) => {
      state.error = action.error.message
      state.isLoading = false
    })
  }
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
