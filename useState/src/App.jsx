/* Stateler funcitonal component(function ile açılan component) olduğunda hooksın içinde kullanılır.State başlangıçta bir değeri tanımlamak, sonra o değeri değşştirmek ve değiştirdiğim değerin kalmasını istemek gibi durumlarda kullanılır.Usestate hookunda başlangıçta tanımlamalar yapılır.İlk yazılan değer değişken ismidir.Yani bu değer güncellenecektir.Ancak bunun başlangıç değeri usestate hooku ile tanımlanarak 0 dir.Yani parantez içindeki değer başlangıçtaki değerdir.Eğer parantez içi 1 yazsa bu 1 olacaktı. Virgülden sonraki ikinci değer ise bir fonksiyondur. Yani buradaki valueyi set etme işlemidir.Mesela bir buton vardı tıkladık falan artık setvalue 2 oldu. Hook ile de artık bu value değeri 2 olur. Yani bu şekilde değeri sürekli güncelleyebiliyoruz. */


import './App.css';
import {useState} from 'react';

function App() {
  const [value, setValue] = useState(0) //hook

 /*  const handleClick = () => {
    console.log("Busra")
  } */

  return (
    <div className='App'>
    <button onClick = {() => {
      setValue(value + 1)
    }} >Kurs Ekle</button>
      <div>Kurs Sayısı: {value} </div> 
    </div>
  )
}

export default App


