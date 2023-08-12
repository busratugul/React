/* 
Componentler tekrar tekrar kullanılabilirler. Component açmak için rafc kullanabiliriz.ffc de yazılabilir

ffc şeklinde yazılan componentlerde impporttan sonra süslü parantez kullanıma gerek olmaz çükü export default yazısı oldugu için

aynı olan ana iskelet componenttir ancak içindeki değişkenler propstur.Component değerlerini özelleştirebiliyoruz Bunun için parent child mantığını anlamamız gerekmektedir.Burada App.jsx kasayıcı yani parent course.jsx ise childdir.props almayan componentler boş obje olarak gözükecektir.Propslar ana jsx den component.jsxe atılır component.jsxden de html kodları ile tutulur.

props içindeki değeri basmak istediğimizde propslar titleda tutulur {props.title}  diye basabiliriz.İsimlendirmeler önemlidir genelde props ve description kullanılır.

yardımcı bir extensionumuz var chrome olabilir firefox olabilir.tarayıcıya ekleriz.react developer tools dur adı.
 */

import 'bulma/css/bulma.css';
import './App.css';
import Course from './Course';
import Angular from './images/angular.jpg';
import Boostrap from './images/bootstrap5.png';
import Csharp from './images/ccsharp.png';
import KompleWeb from './images/kompleweb.jpg';

function App() {
  return (
   <div className='App'>
    
  <section className="hero is-link">
  <div className="hero-body">
    <p className="title">
      Kurslarım
    </p>
  </div>
</section>

    <div className="container">
      <section className='section'></section>
      <div className="columns">
        <div className="column">
    <Course 
    image = { Angular }
    title = "Angular" 
    description ="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus fugiat perspiciatis, iste eos voluptates quos provident quas cumque fugit hic, magnam odio enim placeat, tenetur maiores molestias quam! Inventore, vitae."/>

        </div>

        <div className="column">
    <Course 
    image = { Boostrap }
    title = "Boostratp 5" 
    description ="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus fugiat perspiciatis, iste eos voluptates quos provident quas cumque fugit hic, magnam odio enim placeat, tenetur maiores molestias quam! Inventore, vitae."/></div>

        <div className="column">    
    <Course 
    image = { KompleWeb }
    title = "Komple Web" 
    description ="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus fugiat perspiciatis, iste eos voluptates quos provident quas cumque fugit hic, magnam odio enim placeat, tenetur maiores molestias quam! Inventore, vitae."/></div>

        <div className="column">  <Course 
    image = { Csharp }
    title = "Front-End" 
    description ="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus fugiat perspiciatis, iste eos voluptates quos provident quas cumque fugit hic, magnam odio enim placeat, tenetur maiores molestias quam! Inventore, vitae."/>
    </div></div>
      </div>
    </div>
  );
} 



export default App
