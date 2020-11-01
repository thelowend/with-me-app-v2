import React from 'react'
import { ActivityIndicator, ScrollView, Linking } from 'react-native'
import { View, Text, Icon, Button } from 'native-base'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Style from './ContactScreenStyle'
import UserActions from '../../Stores/User/Actions'
import FeedItem from './Feed/FeedItem'
import NavigationService from 'App/Services/NavigationService'

import { contact_text, call_person, send_email, add_contact } from 'App/Assets/Strings/en/text.json'

class ContactScreen extends React.Component {
  componentDidMount() {
    console.log('navigationparams', this.props.navigation.state.params);
    if (this.props.navigation.state.params.contact) {
      this._fetchContact()
    }
  }
  _fetchContact() {
    this.props.fetchContact(this.props.navigation.state.params.contact.user_id)
  }
  _addContact() {
    this.props.addContact(this.props.user._id, this.props.contact._id, this.props.contact.user_metadata.name);
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
                onPress={() => NavigationService.navigateAndReset('MainScreen')}
              >
                <Icon name="close" />
              </Button>
              <View style={Style.contactContainer}>
                <View>
                  <Text style={Style.topText}>
                    {this.props.contact.user_metadata.name}{contact_text[0]}{this.props.contact.user_metadata.age}{contact_text[1]}"{this.props.contact.user_metadata.mental_profile}"{contact_text[2]}
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
                  <Button
                    style={Style.addButton}
                    iconLeft
                    onPress={this._addContact.bind(this)}
                  >
                    <Icon name="person-add-outline" />
                    <Text>{add_contact}</Text>
                  </Button>
                </View>
              </View>
            </View>
          )}
      </View>
    )
  }
}

ContactScreen.propTypes = {
  user: PropTypes.object,
  contact: PropTypes.object,
  fetchContact: PropTypes.func,
  addContact: PropTypes.func,
  navigation: PropTypes.object,
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  contact: state.user.contactInfo,
})

const mapDispatchToProps = (dispatch) => ({
  fetchContact: (id) => dispatch(UserActions.fetchContactInfo(id)),
  addContact: (helperId, contactId, contactName) => dispatch(UserActions.addContact(helperId, contactId, contactName)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactScreen)
