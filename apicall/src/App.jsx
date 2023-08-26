import './App.css'
import SearchHeader from './Component/SearchHeader'
import searchImages from './Component/api'
import { useState } from 'react'
import ImageList from './Component/imageList'

function App() {
  const [images, setImages] = useState([])

  const handleSubmit = async (term) => {
    const result = await searchImages(term)
    setImages(result)
  }

 return (
  <div className='App'>
    <SearchHeader search = { handleSubmit }/>
    <imageList imagesPlaceholder= {images}/>
  </div>
 )
}

export default App
