import React from 'react'
import Comp1 from './components/Comp1'

function App() {
  return (
    <div className="text-center bg-blue-300 h-screen grid place-items-center cursor-pointer ">
      <p className="text-3xl font-bold border border-spacing-7 hover:text-white ease-in duration-300 shadow-md text-pink p-5 rounded">
        MERHABA
      </p>
      <p class="hyphens-auto text-sky-600 text-xl font-extrabold hover:tracking-wide duration-500">
        jhdsjfhjsdhfsdf
      </p>
      <Comp1 />
    </div>
  )
}

export default App
