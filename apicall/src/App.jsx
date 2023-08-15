import './App.css'
import SearchHeader from './SearchHeader'
import searchImages from './api'
import { useState} from 'react'
import ImageList from './Component/imageList'

function App() {
  const [images, setImages] = useState([])
  const handleSubmit = async (term) => {
   const result = await searchImages(term)
   console.log({result})
    setImages(result)
  }

  return (
   <div className='App'>
    <SearchHeader search = { handleSubmit }
    />
    <ImageList imagesPlaceholder = {images}
    />
   </div>
  )
}

export default App
