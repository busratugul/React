import React from 'react'
import { BsFillBasketFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'

export const Navbar = () => {
  const { quantity } = useSelector((store) => store.card)
  console.log(useSelector((store) => store.card))
  return (
    <nav>
      <div
        className="d-flex bg-dark text-light p-3"
        style={{ justifyContent: 'space-around' }}
      >
        <h3 className="fs-8">Kurs Uygulaması</h3>

        <div className="position-relative">
          <div>
            <p
              style={{
                backgroundColor: '#fff',
                color: '#000',
                width: 20,
                borderRadius: '50%',
                textAlign: 'center',
              }}
            >
              {quantity}
            </p>
          </div>
          <BsFillBasketFill
            style={{ position: 'absolute', bottom: 1, right: 10 }}
          />
        </div>
      </div>
    </nav>
  )
}
