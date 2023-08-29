import { useContext } from 'react'
import authContext from './context/auth-context'


function Auth() {
const {status, login} = useContext(authContext)
console.log(status) 

/* const auth = useContext(authContext)
console.log(auth.status) */

  return (
    <div>
        <h1>Giriş yaptın mı???</h1>
        {status ?<p>OHOOOOO ÇOKTAAN :D</p> :<p>HAYIR...</p>}

        <button onClick={login}>Giriş Yap</button>
    </div>
  )
}

export default Auth