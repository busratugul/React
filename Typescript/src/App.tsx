import './App.css'
import ContextExample from './components/ContextExample'
import EventActions from './components/EventActions'
import Home from './components/Home'
import Insructor from './components/Insructor'
import InsructorList from './components/InsructorList'
import LoginCheck from './components/LoginCheck'
import RefExample from './components/RefExample'
import Request from './components/Request'
import { ThemeContextProvider } from './components/ThemeContext'

function App() {
  const InsructorObje = {
    firstname: 'Busra',
    lastname: 'Tugul',
  }
  const InsructorListe = [
    { firstname: 'Busra', lastname: 'Tugul' },
    { firstname: 'Onur', lastname: 'Tugul' },
    { firstname: 'Lili', lastname: 'Tugul' },
    { firstname: 'Lulu', lastname: 'Tugul' },
  ]

  return (
    <div className="App">
     {/*  <Home
        name={'React Typescript'}
        courseNumber={15}
        isBest //boş bırakmak defaultta true demek
      />
      <Insructor InsructorType={InsructorObje} />
      <InsructorList InsructorList= {InsructorListe}/>
      <Request status="loading"/>

      <EventActions/> */}
      {/* <LoginCheck/> */}
      {/* <ThemeContextProvider>
        <ContextExample/>
      </ThemeContextProvider> */}
      <RefExample/>
      

    </div>
  )
}

export default App
