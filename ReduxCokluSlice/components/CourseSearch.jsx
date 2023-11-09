import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeSearchTerm } from '../store/slice/CourseSlice'

function CourseSearch() {
  const dispatch = useDispatch()
  const searchTerm = useSelector((state) => {
    return state.courses.searchTerm;
  })
  return (
    <div className="ListHeader">
      <h3 className="title is-3">Kurslarım</h3>
      <div className="search field is-horizontal">
        <label className="label ara">Ara</label>
        <input
          className="input search"
          onChange={(e) => {
            dispatch(changeSearchTerm(e.target.value))
            value={searchTerm}
          }}
        />
      </div>
    </div>
  )
}

export default CourseSearch
