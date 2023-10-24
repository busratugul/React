import React, { useState } from 'react'

type UserType = {
    setUser:{
        name: string;
        email: string;
        phone: number;
    }
}


function LoginCheck() {
const [user, setUser] = useState<UserType | null>({} as UserType)

const handleLogin = 
(event:React.MouseEvent<HTMLButtonElement>) => {
    setUser({
        name: "Busra",
        email: "busra@gamil.com",
        phone: 5555555555
    })
}

const handleLogOut = 
(event:React.MouseEvent<HTMLButtonElement>) => {
    setUser({})
}

  return (
    <div>
       <button onClick={handleLogin}>Giriş Yap</button>
       <button onClick={handleLogOut}>Çıkış Yap</button>
       <div>
        <p>{user?.name}</p>
        <p>{user?.email}</p>
        <p>{user?.phone}</p>
       </div>
    </div>
  )
}

export default LoginCheck