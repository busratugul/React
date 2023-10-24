import {Insructor} from './PropsTypes'

function Insructor(props:Insructor) {
  return (
    <div>
        {props.InsructorType.firstname} {props.InsructorType.lastname}
    </div>
  )
}

export default Insructor