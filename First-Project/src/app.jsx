import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg' 
import viteLogo from '/vite.svg'
import './app.css'

export function App() {
  const nameSurname = "Büşra Tuğul"
  const students = 43000
  const dogruMudur = true
  const date = "date"
  const url = "https://picsum.photos/250/250"
  
  return(
  <>
  <h1>Hello World</h1>
  <p>İsim Soyisim: {nameSurname}</p>
  <input type="text" />
  <input type={date} />
  {dogruMudur ? <p>Öğrenci Sayısı:{students}</p> : <p>Tanımsız...</p>  }

 <img src={url} alt="" />

 <div className='box'>
  
 </div>

 <div style={
  {
    backgroundColor: "blue",
    width: "100px",
    height: "100px",
  }
 }></div>


  </>
  )
}

/* 
Html kodlarını js formatında yazmak istediğimizde jsx kullanırız.Yazım kuralları şöyledir;

returnun içine html kodları yazılır.

eğer tek satırlık bir kod yazacaksak return() kullanılmaz.

etiketleri kapsayıcı bir etiket içinde kullanabiliriz.Bu div olabilir ya da reactkod bloğu <> </> olabilir.

bazı etiketlerin kendine ait kapanış etiketleri vardır input gibi.

tanımlanan etiketler functionun altında returnun üstünde tanımlanır.

jsx de css ya classname vererek css sayfasında kodlanır veya bazen inline olarak da verebiliriz.Inline olarak verirken style içinde bir süslü parantez ardından obje olarak tanımlayacağız için bir süslü parantez daha açıyoruz.Ve özelliklerde camelcase kullanıyoruz.
 */