import React from 'react'
import { useDispatch } from 'react-redux'
import { BsChevronUp, BsChevronDown } from 'react-icons/bs'
import { removeItem, increaseItem, decreaseItem } from '../src/control/cardSlice'

function CourseItem({ id, title, price, img, quantity }) {
    const dispatch = useDispatch()
  return (
    <div className="d-flex">
      <img
        src={img}
        alt=""
        className="w-50 my-3 shadow"
        style={{ objectFit: 'contain' }}
      />
      <div className="w-50 d-flex flex-column justify-content-center align-items-center my-3 ps-5">
        <h4 className="fw-bold fs-4">{title}</h4>
        <h4 className="fs-5">{price} TL</h4>
        <div>
          <button className="btn outline-none btn-sm me-2 text-dark" onClick={() => dispatch(increaseItem(id))}>
            <BsChevronUp />
          </button>
          <span>{quantity}</span>
          <button className="btn outline-none btn-sm ms-2 text-dark" onClick={() => dispatch(decreaseItem(id))} >
            <BsChevronDown />
          </button>
        </div>
        <button className="btn btn-danger btn-sm my-2 text-light" onClick={() => dispatch(removeItem(id))}>Sil</button>
      </div>
    </div>
  )
}

export default CourseItem
