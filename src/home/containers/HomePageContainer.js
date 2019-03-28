import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import HomePage from '../organisms/HomePage'
import { logOut } from '../../auth'

const HomePageContainer = ({ logOutAction }) => <HomePage logOutAction={logOutAction} />

HomePageContainer.propTypes = {
  logOutAction: PropTypes.func.isRequired,
}

const mdtp = { logOutAction: logOut }

export default connect(
  null,
  mdtp
)(HomePageContainer)
