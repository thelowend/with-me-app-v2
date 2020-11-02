import React from 'react'
import { ActivityIndicator, ScrollView, Linking } from 'react-native'
import { View, Text, Icon, Button } from 'native-base'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Style from './ContactScreenStyle'
import UserActions from '../../Stores/User/Actions'
import NavigationService from 'App/Services/NavigationService'

import { contact_text, call_person, send_email } from 'App/Assets/Strings/en/text.json'

class ContactHelperScreen extends React.Component {
  componentDidMount() {
    if (this.props.navigation.state.params.contact) {
      this._fetchContactInfo()
    }
  }
  _fetchContactInfo() {
    this.props.fetchContactInfo(this.props.navigation.state.params.contact.user_id)
  }
  _closeScreen() {
    NavigationService.navigateAndReset('MainScreen', { tab: 'Contacts' })
  }
  render() {
    return (
      <View style={Style.container}>
        {!this.props.contact.user_metadata ? (
          <ActivityIndicator size="large" color="#56ABE7" />
        ) : (
            <View style={Style.mainContainer}>
              <Button
                style={Style.closeButton}
                iconCenter
                onPress={this._closeScreen.bind(this)}>
                <Icon name="close" />
              </Button>
              <View style={Style.contactContainer}>
                <View>
                  <Text style={Style.topText}>
                    <Text style={Style.highlightText}>{this.props.contact.user_metadata.name}</Text>
                  </Text>
                </View>
                <View style={Style.bottomText}>
                  <Button
                    style={Style.callButton}
                    iconLeft
                    onPress={() =>
                      Linking.openURL(`tel:${this.props.contact.user_metadata.contact_number}`)
                    }
                  >
                    <Icon name="call" />
                    <Text>{call_person}</Text>
                  </Button>
                  <Button
                    style={Style.mailButton}
                    iconLeft
                    onPress={() =>
                      Linking.openURL(
                        `mailto:${this.props.contact.email}?subject=Help%20From%20With%20Me%20APP`
                      )
                    }
                  >
                    <Icon name="mail" />
                    <Text>{send_email}</Text>
                  </Button>
                </View>
              </View>
            </View>
          )}
      </View>
    )
  }
}

ContactHelperScreen.propTypes = {
  user: PropTypes.object,
  contact: PropTypes.object,
  fetchContactInfo: PropTypes.func,
  navigation: PropTypes.object
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  contact: state.user.contactInfo,
})

const mapDispatchToProps = (dispatch) => ({
  fetchContactInfo: (id) => dispatch(UserActions.fetchContactInfo(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactHelperScreen)
