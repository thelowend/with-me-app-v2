import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Container, Text, View, Content } from 'native-base'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import UserActions from 'App/Stores/User/Actions'
import Style from './MainScreenStyle'
import CompleteProfile from '../Popups/CompleteProfile'
import MainHelperScreen from './MainHelperScreen'
import MainUserScreen from './MainUserScreen'
import HeaderScreen from './Header/HeaderScreen'

class MainScreen extends React.Component {
  componentDidMount() {
    this._fetchUser()
  }
  isHelper(profileType) {
    return profileType === 'helper'
  }
  render() {
    let userRole = ''
    if (this.props.user.user_metadata) {
      userRole = this.props.user.user_metadata.role
    }
    return (
      <View style={Style.container}>
        <Container>
          <HeaderScreen></HeaderScreen>
          <Content>
            {this.props.userIsLoading ? (
              <ActivityIndicator size="large" color={Style.loader} />
            ) : (
              <View>
                {this.props.userErrorMessage ? (
                  <Text style={Style.error}>{this.props.userErrorMessage}</Text>
                ) : (
                  <View>
                    {this.props.user.user_metadata.profile_complete ? (
                      <View>
                        {this.isHelper(userRole) ? <MainHelperScreen /> : <MainUserScreen />}
                      </View>
                    ) : (
                      <CompleteProfile />
                    )}
                  </View>
                )}
              </View>
            )}
          </Content>
        </Container>
      </View>
    )
  }
  _fetchUser() {
    this.props.fetchUser(this.props.idToken)
  }
}

MainScreen.propTypes = {
  idToken: PropTypes.string,
  user: PropTypes.object,
  userIsLoading: PropTypes.bool,
  userErrorMessage: PropTypes.string,
  fetchUser: PropTypes.func,
}

const mapStateToProps = (state) => ({
  idToken: state.auth.idToken,
  user: state.user.user,
  userIsLoading: state.user.userIsLoading,
  userErrorMessage: state.user.userErrorMessage,
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (idToken) => dispatch(UserActions.fetchUser(idToken)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
