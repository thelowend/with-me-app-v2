import React from 'react'
import { View, Image } from 'react-native'
import { Images } from 'App/Theme'
import { Text, Button, Icon } from 'native-base'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import AuthActions from 'App/Stores/Auth/Actions'
import Style from './LoginScreenStyle'

class LoginScreen extends React.Component {
  render() {
    let loggedIn = this.props.loggedIn === true
    return (
      <View style={Style.container}>
        <View style={Style.loginTop}>
          <Image style={Style.logo} source={Images.logoWhite} resizeMode={'contain'} />
        </View>
        <View style={Style.loginBottom}>
          <Button
            rounded
            iconLeft
            style={Style.loginButton}
            onPress={loggedIn ? () => this._onLogout() : () => this._onLogin()}
          >
            <Icon name="log-in" />
            <Text>{loggedIn ? 'Log Out' : 'Log In'}</Text>
          </Button>
        </View>
      </View>
    )
  }

  _onLogin() {
    this.props.onLogin()
  }

  _onLogout() {
    this.props.onLogout()
  }
}

LoginScreen.propTypes = {
  accessToken: PropTypes.string,
  loggedIn: PropTypes.bool,
  onLogin: PropTypes.func,
  onLogout: PropTypes.func,
}

const mapStateToProps = (state) => ({
  loggedIn: state.auth.loggedIn,
})

const mapDispatchToProps = (dispatch) => ({
  onLogin: () => dispatch(AuthActions.login()),
  onLogout: () => dispatch(AuthActions.logout()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen)
