import ImageItem from "./imageItem";

function ImageList({imagePlaceholder}) {
    
  return ( 
    <div>
      {imagePlaceholder.map((img) => {
        return <ImageItem image= { img }/>
      })
      }
    </div>
  )
     
}


export default ImageList ;