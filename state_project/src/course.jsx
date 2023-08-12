import Angular from './images/angular.jpg';
import Bootstrap from './images/bootstrap5.png';
import CcSharp from './images/ccsharp.png';
import KompleWeb from './images/kompleweb.jpg';
import './course.css';

/* const courseMap = {
    Angular: Angular,
    Bootstrap: Bootstrap,
    CcSharp: CcSharp,
    KompleWeb: KompleWeb,
} Key ve value birbirine eşitse şöyle yazmak daha mantıklı */

const courseMap = {
  Angular,
  Bootstrap,
  CcSharp,
  KompleWeb,
}

function Course({courseName}) {
    
    return ( 
    <div className='courseDiv'>
      <img className='course' src={courseMap[courseName]} alt="" />
    </div>

     );
}

export default Course ;