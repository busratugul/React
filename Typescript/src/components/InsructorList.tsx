
type InsructorType = {
  InsructorList: {
    firstname: string
    lastname: string
  }[]
}

function InsructorList(props: InsructorType) {
  return (
    <div>
      {props.InsructorList.map((item) => {
        return (
          <h3 key={item.firstname}>
            {item.firstname} {item.lastname}
          </h3>
        )
      })}
    </div>
  )
}

export default InsructorList
