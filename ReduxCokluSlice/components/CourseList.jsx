import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeCourse } from '../store/slice/CourseSlice'

function CourseList() {
  const dispatch = useDispatch()
  const {courses} = useSelector(({form, courses:{data,searchTerm}}) => {
    //return state.courses.data
    const filteredCourses = data.filter((course) => (
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    ))
    return {
      courses: filteredCourses
    }
  })

  const renderedCourses = courses.map((course) => {
    return (
      <div key={course.id} className="panel course">
        <h1>{course.name}</h1>
        <p>{course.description}</p>
        <p>{course.cost} TL</p>
        <button
          className="button is-danger is-small"
          onClick={() => dispatch(removeCourse(course.id))}
        >
          Sil
        </button>
      </div>
    )
  })
  return <div className="course-list">{renderedCourses}</div>
}

export default CourseList
