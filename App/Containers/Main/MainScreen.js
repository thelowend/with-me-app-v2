import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Container, View, Content, Tabs, Tab, TabHeading, Icon, Text } from 'native-base'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import UserActions from 'App/Stores/User/Actions'

import CompleteProfile from '../Popups/CompleteProfile'

import HeaderScreen from './Header/HeaderScreen'

import MainHelperScreen from './MainHelperScreen'
import MainUserScreen from './MainUserScreen'
import ContactsTab from './ContactsTab/ContactsTab'
import ProfileTab from './ProfileTab/ProfileTab'

import Style from './MainScreenStyle'

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
          {this.props.userIsLoading ? (
            <ActivityIndicator size="large" color={Style.loader} />
          ) : (
              <Tabs>
                <Tab heading={<TabHeading style={Style.tabHeader}><Icon name="person-outline" /><Text>Me</Text></TabHeading>}>
                  <Content style={Style.tabContent}>
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
                  </Content>
                </Tab>
                <Tab heading={<TabHeading style={Style.tabHeader}><Icon name="people-outline" /><Text>With Me</Text></TabHeading>}>
                  <ContactsTab />
                </Tab>
                <Tab heading={<TabHeading style={Style.tabHeader}><Icon name="settings" /><Text>Profile</Text></TabHeading>}>
                  <ProfileTab />
                </Tab>
              </Tabs>
            )}
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
