import React from 'react'
import { ActivityIndicator, ScrollView, Linking } from 'react-native'
import { View, Text, Icon, Button } from 'native-base'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Style from './ContactScreenStyle'
import UserActions from '../../Stores/User/Actions'
import FeedItem from './Feed/FeedItem'
import NavigationService from 'App/Services/NavigationService'

import { MainValues } from 'App/Assets/Values'
import { helprequest_text, call_person, send_email, add_contact } from 'App/Assets/Strings/en/text.json'

class HelpRequestScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      displayAddContact: true
    }
  }
  componentDidMount() {
    if (this.props.navigation.state.params.contact) {
      this._fetchContact()
    }
  }
  _fetchContact() {
    this.props.fetchContact(this.props.navigation.state.params.contact.user_id)
  }
  _addContact() {
    this.props.addContact(this.props.user._id, this.props.user.user_metadata.name, this.props.contact._id, this.props.contact.user_metadata.name);
    this.setState({
      displayAddContact: false
    })
  }
  _isNotContact() {
    console.log('HERE HERE');
    return !this.props.user.contacts.find(contact => contact.user_id === this.props.contact._id);
  }
  _closeScreen() {
    NavigationService.navigateAndReset('MainScreen');
  }
  render() {
    const feedAtTheTimeOfRequest = this.props.navigation.state.params.contact.feed;
    return (
      <View style={Style.container}>
        {!this.props.contact ? (
          <ActivityIndicator size="large" color="#56ABE7" />
        ) : (
            <View style={Style.mainContainer}>
              <Button
                style={Style.closeButton}
                iconCenter
                onPress={this._closeScreen.bind(this)}
              >
                <Icon name="close" />
              </Button>
              <View style={Style.contactContainer}>
                <View>
                  <Text style={Style.topText}>
                    <Text style={Style.highlightText}>{this.props.contact.user_metadata.name}</Text>{helprequest_text[0]}{this.props.contact.user_metadata.age}{helprequest_text[1]}
                    <Text style={ Style.highlightText, { color: MainValues.PROFILE[this.props.contact.user_metadata.mental_profile.toLowerCase()].color}}>{this.props.contact.user_metadata.mental_profile}</Text>{helprequest_text[2]}
                  </Text>
                </View>
                <View style={Style.feedItems}>
                  <ScrollView style={Style.feedScrollView}>
                    {feedAtTheTimeOfRequest.map((item, key) => <FeedItem key={key} item={item} />)}
                  </ScrollView>
                </View>
                <View style={Style.bottomText}>
                  <Button
                    style={Style.callButton}
                    iconLeft
                    onPress={() =>
                      // TODO: Add as contact if it isn't
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
                      // Add as contact if it isn't
                      Linking.openURL(
                        `mailto:${this.props.contact.email}?subject=Help%20From%20With%20Me%20APP`
                      )
                    }
                  >
                    <Icon name="mail" />
                    <Text>{send_email}</Text>
                  </Button>
                  {(this._isNotContact()) && <Button
                    style={Style.addButton}
                    iconLeft
                    onPress={this._addContact.bind(this)}
                  >
                    <Icon name="person-add-outline" />
                    <Text>{add_contact}</Text>
                  </Button>}
                </View>
              </View>
            </View>
          )}
      </View>
    )
  }
}

HelpRequestScreen.propTypes = {
  user: PropTypes.object,
  contact: PropTypes.object,
  fetchContact: PropTypes.func,
  addContact: PropTypes.func,
  navigation: PropTypes.object,
  displayAddContact: PropTypes.bool
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  contact: state.user.contactInfo,
})

const mapDispatchToProps = (dispatch) => ({
  fetchContact: (id) => dispatch(UserActions.fetchContactInfo(id)),
  addContact: (helperId, helpername, contactId, contactName) => dispatch(UserActions.addContact(helperId, helpername, contactId, contactName)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HelpRequestScreen)
