import React, { useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { CourseList } from '../components/CourseList'
import { calculateItem } from './control/cardSlice'
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const { cardItems } = useSelector((store) => store.card)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(calculateItem())
  }, [cardItems])
  return (
    <div>
      <Navbar />
      <CourseList />
    </div>
  )
}

export default App
