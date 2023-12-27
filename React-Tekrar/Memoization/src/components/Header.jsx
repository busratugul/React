import React from 'react'

function Header({ number, data }) {
  console.log('Header component is re-rendered')
  return (
    <div>
      Header
      <br />
      {/* <code> {data[0].name} {data[0].number} </code> */}
      <code> {data.name} </code>
    </div>
  )
}

export default React.memo(Header)
