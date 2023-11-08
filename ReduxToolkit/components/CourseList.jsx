import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CourseItem from './CourseItem'
import { clearCard } from '../src/control/cardSlice'

export const CourseList = () => {
    const dispatch = useDispatch()
  const { cardItems, quantity, total } = useSelector((store) => store.card)


  console.log(cardItems, quantity, total)
  return (
    <>
      {quantity < 1 ? (
        <section className="text-center p-2">
          <header>
            <h2>Sepetim</h2>
            <h4>bomboş</h4>
          </header>
        </section>
      ) : (
        <section className="text-center p-2">
          <header>
            <h2>Sepetim</h2>
          </header>
          <div>
            {cardItems.map((item) => {
              return <CourseItem key={item.id} {...item} />
            })}
          </div>
          <footer>
            <hr />
            <div>
              <h4 className="fw-bold">
                Toplam Tutar: <span className="fw-bold">{total} TL</span>
              </h4>
            </div>
            <button className="btn btn-danger" onClick={() => dispatch(clearCard())}>Temizle</button>
          </footer>
        </section>
      )}
    </>
  )
}
