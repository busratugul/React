import { configureStore } from '@reduxjs/toolkit'
import { formReducer } from './slice/FormSlice'
import { courseReducer } from './slice/CourseSlice'

export const store = configureStore({
    reducer:{
        form: formReducer,
        courses: courseReducer,
    }
})

