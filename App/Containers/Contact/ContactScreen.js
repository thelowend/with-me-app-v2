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
import { contact_text, call_person, send_email } from 'App/Assets/Strings/en/text.json'

class ContactScreen extends React.Component {
  componentDidMount() {
    if (this.props.navigation.state.params.contact) {
      this._fetchContactWithFeed()
    }
  }
  _fetchContactWithFeed() {
    this.props.fetchContactWithFeed(this.props.navigation.state.params.contact.user_id)
  }
  _closeScreen() {
    NavigationService.navigateAndReset('MainScreen', { tab: 'Contacts' })
  }
  render() {
    return (
      <View style={Style.container}>
        {!this.props.contactInfo.user_metadata ? (
          <ActivityIndicator style={{ marginTop: 20 }} size="large" color="#56ABE7" />
        ) : (
            <View style={Style.mainContainer}>
              <Button
                style={Style.closeButton}
                iconCenter
                onPress={this._closeScreen.bind(this)}>
                <Icon name="close" />
              </Button>
              {!this.props.contactInfo.feed ? (
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
                          <Text style={Style.highlightText}>{this.props.contactInfo.user_metadata.name}</Text>{contact_text[0]}{this.props.contactInfo.user_metadata.age}{contact_text[1]}<Text style={Style.highlightText, { color: MainValues.PROFILE[this.props.contactInfo.user_metadata.mental_profile.toLowerCase()].color }}>{this.props.contactInfo.user_metadata.mental_profile}</Text>{contact_text[2]}
                        </Text>
                      </View>
                      <View style={Style.feedItems}>
                        <ScrollView style={Style.feedScrollView}>
                          {this.props.contactInfo.feed.map((item, key) => <FeedItem key={key} item={item} />)}
                        </ScrollView>
                      </View>
                      <View style={Style.bottomText}>
                        <Button
                          style={Style.callButton}
                          iconLeft
                          onPress={() =>
                            Linking.openURL(`tel:${this.props.contactInfo.user_metadata.contact_number}`)
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
                              `mailto:${this.props.contactInfo.email}?subject=Help%20From%20With%20Me%20APP`
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
          )}
      </View>

    )
  }
}

ContactScreen.propTypes = {
  contactInfo: PropTypes.object,
  fetchContactWithFeed: PropTypes.func,
  navigation: PropTypes.object
}

const mapStateToProps = (state) => ({
  contactInfo: state.user.contactInfo,
})

const mapDispatchToProps = (dispatch) => ({
  fetchContactWithFeed: (id) => dispatch(UserActions.fetchContactWithFeed(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactScreen)
