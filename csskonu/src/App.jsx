import './index.css'
import Test from './test'
import {Title} from './components'
import Bootstrap from './bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './tailwind.css'
import Tailwind from './tailwind';

function App() {


  return (
   <div className="App">
    <h1>CSS</h1>
    <Title > hello from styled components</Title>
    <Title theme="dark"> hello from styled components</Title>
    <Test/>
    <Bootstrap/>
    <Tailwind/>
   </div>
  )
}

export default App
