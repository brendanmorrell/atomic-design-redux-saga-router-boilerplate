import React from 'react'
import PropTypes from 'prop-types'

const HomePage = ({ logOutAction }) => {
  return (
    <div>
      Home page
      <button onClick={logOutAction}>Log out</button>
    </div>
  )
}

HomePage.propTypes = {
  logOutAction: PropTypes.func.isRequired,
}

export default HomePage
