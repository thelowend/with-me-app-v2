import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Container, View, Tabs, Tab, TabHeading, Icon, Text } from 'native-base'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'

import UserActions from 'App/Stores/User/Actions'

import HeaderScreen from './Header/HeaderScreen'
import UserTab from './UserTab/UserTab'
import ContactsTab from './ContactsTab/ContactsTab'
import ProfileTab from './ProfileTab/ProfileTab'

import Style from './MainScreenStyle'

import { tab_user, tab_contacts, tab_profile } from 'App/Assets/Strings/en/text.json'

const TAB_REFERENCE = {
  'User': 0,
  'Contacts': 1,
  'Profile': 2
};

class MainScreen extends React.Component {
  componentDidMount() {
    console.log('navigationparams main', this.props.navigation.state.params);
    this._fetchUser()
  }
  _getCurrentPage() {
    let currentPage = 0;
    if (this.props.navigation.state.params && this.props.navigation.state.params.tab) {
      currentPage = TAB_REFERENCE[this.props.navigation.state.params.tab];
    }
    return currentPage;
  }
  _userRole() {
    return this.props.user.user_metadata.role;
  }
  _isProfileComplete() {
    return this.props.user.user_metadata.profile_complete;
  }
  render() {
    return (
      <View style={Style.container}>
        <Container>
          <HeaderScreen></HeaderScreen>
          {!this.props.user.user_metadata || this.props.userIsLoading ? (
            <ActivityIndicator size="large" color={Style.loader} />
          ) : (
              <Tabs initialPage={this._getCurrentPage()} >
                <Tab heading={<TabHeading style={Style.tabHeader}><Icon name="person-outline" /><Text>{tab_user[this._userRole()]}</Text></TabHeading>}>
                  <UserTab />
                </Tab>
                {this._isProfileComplete() && <Tab heading={<TabHeading style={Style.tabHeader}><Icon name="people-outline" /><Text>{tab_contacts[this._userRole()]}</Text></TabHeading>}>
                  <ContactsTab />
                </Tab>}
                {this._isProfileComplete() && <Tab heading={<TabHeading style={Style.tabHeader}><Icon name="settings" /><Text>{tab_profile}</Text></TabHeading>}>
                  <ProfileTab />
                </Tab>}
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
  fetchUser: PropTypes.func,
}

const mapStateToProps = (state) => ({
  idToken: state.auth.idToken,
  user: state.user.user,
  userIsLoading: state.user.userIsLoading,
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (idToken) => dispatch(UserActions.fetchUser(idToken)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
