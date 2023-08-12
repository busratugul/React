import React from 'react'

/*  export const Course = () => {
  return (
    <div>Course div</div>
  )
}  */

function Course({image,title,description}) { //function Course(props) {
 //console.log(props);

  /* 1.yol
  const title = props.title
  const description = props.description */
  /* 2.yol
  const {title,description} = props */
  return ( 
    <>
    <div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src= { image } alt="Placeholder image"/>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-content">
        <p className="title is-4">{title}</p>
      </div>
    </div>

    <div className="content"> { description } </div>
  </div>
</div>

  {/*   <img src= {image} alt="" />
    <div>{title}</div>
    <div>{description}</div> */}
    

   </>
   );
}

export default Course; 
