import React from 'react'
import Header from '../components/Header.jsX'

function App() {
  const name = 'Busra'
  const surname = 'tugul'
  const isLogged = true

  return (
    <div>
      BEN APP BİLEŞENİYİM
      <Header />
      <h4>
        {/* {isLogged && `benim adım ${name} soyadım ${surname}`}
        {!isLogged && 'Giriş yapmadınız'} */}

        {isLogged ? (
          <h4>
            {`benim adım ${name} soyadım ${surname}`}
          </h4>
        ) : (
          'Giriş yapmadınız'
        )}
      </h4>
    </div>
  )
}

export default App
