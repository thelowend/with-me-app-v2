import React from 'react'
import { ActivityIndicator, ScrollView, Linking } from 'react-native'
import { View, Text, Icon, Button } from 'native-base'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Style from './ContactScreenStyle'
import UserActions from '../../Stores/User/Actions'
import FeedItem from './Feed/FeedItem'
import NavigationService from 'App/Services/NavigationService'

class ContactScreen extends React.Component {
  componentDidMount() {
    console.log('navigationparams', this.props.navigation.state.params)
    if (this.props.navigation.state.params.contact) {
      this._fetchContact()
    }
  }
  _fetchContact() {
    this.props.fetchContact(this.props.navigation.state.params.contact.id)
  }
  render() {
    return (
      <View style={Style.container}>
        {!this.props.contact ? (
          <ActivityIndicator size="large" color="#56ABE7" />
        ) : (
          <View style={Style.contactContainer}>
            <View>
              <Text style={Style.topText}>
                {this.props.contact.user_metadata.name} is a {this.props.contact.user_metadata.age}{' '}
                years old person who has been writing the following:
              </Text>
            </View>
            <View style={Style.feedItems}>
              <ScrollView style={Style.feedScrollView}>
                {this.props.contact.feed.map((item, key) => (
                  <FeedItem key={key} item={item} />
                ))}
              </ScrollView>
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
                <Text>Call this person</Text>
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
                <Text>Send Email</Text>
              </Button>
              <Button
                style={Style.closeButton}
                iconCenter
                onPress={() => NavigationService.navigateAndReset('MainScreen')}
              >
                <Icon name="close" />
                <Text>Dismiss</Text>
              </Button>
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
  navigation: PropTypes.object,
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  contact: state.user.contactInfo,
})

const mapDispatchToProps = (dispatch) => ({
  fetchContact: (id) => dispatch(UserActions.fetchContactInfo(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactScreen)
