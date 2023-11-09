import React from 'react'
import '../style.css'
import { useSelector, useDispatch } from 'react-redux'
import {
  changeName,
  changeDescription,
  changeCost,
} from '../store/slice/FormSlice'
import { addCourse } from '../store/slice/CourseSlice'

function CourseForm() {
  const dispatch = useDispatch()
  const { name, description, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      description: state.form.description,
      cost: state.form.cost,
    }
  })
  //console.log(name, description, cost)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addCourse({ name, description, cost }))
  }

  return (
    <div className="panel form-group">
      <h4 className="subtitle is-3">Kurs Ekle</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Ad</label>
            <input
              className="input is-expanded"
              onChange={(e) => {
                dispatch(changeName(e.target.value))
              }}
              value={name}
            />
          </div>
          <div className="field">
            <label className="label">Açıklama</label>
            <textarea
              className="input is-expanded"
              onChange={(e) => {
                dispatch(changeDescription(e.target.value))
              }}
              value={description}
            />
          </div>
          <div className="field">
            <label className="label">Fiyat</label>
            <input
              className="input is-expanded"
              type="number"
              onChange={(e) => {
                dispatch(changeCost(parseInt(e.target.value)))
              }}
              value={cost}
            />
          </div>
          <div className="field">
            <button className="button is-primary">Kaydet</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CourseForm
