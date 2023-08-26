import ImageItem from "./imageItem";

function ImageList({imagesPlaceholder}) {
    
  return ( 
    <div className="imgList">
      {imagesPlaceholder.map((img,idx) => {
        return <ImageItem key={idx} image= { img }/>
      })
      }
    </div>
  )
     
}


export default ImageList 