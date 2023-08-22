import Counter from './components/Counter'
import CounterActions from './components/CounterActions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {getCountry} from './country/countrySlice'


function App() {

  const dispatch = useDispatch()


  const {country} = useSelector(state => state.country)
  const {loading} = useSelector(state => state.country)

  console.log(loading);
  console.log({country})

  useEffect(() => {
    dispatch(getCountry())
  }, [])
  




  return (
     loading?<div>Loading...</div> 
     
     :<div>

      <Counter/>
      <CounterActions/>
    </div>

  )
}

export default App
