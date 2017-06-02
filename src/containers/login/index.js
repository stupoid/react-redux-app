import React from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userLoginRequest } from '../../modules/login'
import Loader from 'react-loader'
import PropTypes from 'prop-types'
import LoginForm from './loginForm'

const LoginPage = props => (
  <Modal isOpen={true}>
    <ModalHeader>Login</ModalHeader>
    <ModalBody style={style}>
      <Loader loaded={!props.isLoggingIn}>
        <LoginForm userLoginRequest={props.userLoginRequest} />
      </Loader>
    </ModalBody>
  </Modal>
)

const style = {
  minHeight: '120px'
}

LoginPage.propTypes = {
  userLoginRequest: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  isLoggingIn: state.login.isLoggingIn
})

const mapDispatchToProps = dispatch => bindActionCreators({
  userLoginRequest
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage)
