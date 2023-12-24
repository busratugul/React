import React from 'react'
import PropTypes from 'prop-types'

function Props(props) {
  console.log(props.friends)
  if (!props.isLoggedIn) {
    return <div>GİRİŞ HATALI!!!</div>
  }
  return (
    <>
      <div>
        ben bir propsum : {props.name}, {props.surname} <br />
        yasim : {props.age} <br />
      </div>
      {props.friends &&
        props.friends.map((friend) => (
          <div key={friend.id}>
            {' '}
            {friend.id} - {friend.name}{' '}
          </div>
        ))}
      <h5>
        adres: {props.adres.title} sokak :{props.adres.zip}
      </h5>
    </>
  )
}

Props.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  //age : PropTypes.number,
  age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  friends: PropTypes.array,
  adres: PropTypes.shape({
    title: PropTypes.string,
    zip: PropTypes.number,
  }),
}

Props.defaultProps = {
  name: 'İsimsiz',
  isLoggedIn: false,
}
export default Props
