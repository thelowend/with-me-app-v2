import React from 'react'
import { Text, View, Button, Textarea, Icon, Badge, Container, Card, CardItem } from 'native-base'
import { TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Style from './MainScreenStyle'
import TakeTest from '../Popups/TakeTest'
import Modal from 'react-native-modal'
import OneSignal from 'react-native-onesignal'
import UserActions from '../../Stores/User/Actions'
import NavigationService from 'App/Services/NavigationService'

class MainUserScreen extends React.Component {
  constructor(props) {
    super(props)

    OneSignal.sendTag('role', 'user')
    console.log('onesignal tag sent')

    this.state = {
      modalIsVisible: false,
      modalType: null,
      modalInputText: '',
      emailWarning: true,
    }
  }
  _goToProfilePage() {
    NavigationService.navigate('ProfileScreen')
  }
  _openSubmitModal(type) {
    this.setState({
      modalInputText: '',
      modalIsVisible: true,
      modalType: type,
    })
  }
  _closeSubmitModal() {
    this.setState({
      modalIsVisible: false,
    })
  }
  _updateModalText(text) {
    this.setState({
      modalInputText: text,
    })
  }
  _sendSocialMediaPost() {
    this.props.sendSocialMediaPost(
      this.props.user._id,
      this.state.modalType,
      this.state.modalInputText
    )
    console.log('SUBMITTED: ', this.state.modalInputText)
  }
  _submit() {
    this._sendSocialMediaPost()
    this._closeSubmitModal()
  }
  _syncWithFB(value) {
    if (value) {
      this.props.syncWithFb(this.props.user._id, this.props.user._id) // Temporarily we use the same id for both
    } else {
      this.props.unsyncWithFb(this.props.user._id, this.props.user._id)
    }
  }
  _syncWithTW(value) {
    if (value) {
      this.props.syncWithTw(this.props.user._id, this.props.user._id)
    } else {
      this.props.unsyncWithTw(this.props.user._id, this.props.user._id)
    }
  }
  _closeEmailWarning() {
    this.setState({ emailWarning: false })
  }
  render() {
    return (
      <View>
        {!this.props.user.email_verified && this.state.emailWarning ? (
          <TouchableOpacity onPress={this._closeEmailWarning.bind(this)}>
            <Card style={Style.warningCard}>
              <Icon name="warning" style={Style.warningCardIcon} />
              <Text style={Style.warningCardText}>Your email has not been verified yet. Please check your messages.</Text>
            </Card>
          </TouchableOpacity>
        ) : null}
        <Text style={Style.text}>Welcome {this.props.user.user_metadata.name}!</Text>
        {!this.props.user.user_metadata.threshold ? (
          <TakeTest />
        ) : (
          <View style={Style.userScreenContainer}>
            <Text style={Style.subTitle}>
              Your latest evaluation: {this.props.user.user_metadata.threshold}
            </Text>
            <Button
              rounded
              iconLeft
              onPress={this._goToProfilePage.bind(this)}
              style={Style.commonButton}
            >
              <Icon name="person" />
              <Text>Update Profile</Text>
            </Button>
            <Card style={Style.FBSection}>
              <CardItem header style={Style.SectionHeader}>
                <Text style={Style.SectionHeaderText}>Facebook Integration</Text>
              </CardItem>
              {this.props.user.fb_sync ? (
                <View>
                  <Button
                    small
                    iconLeft
                    onPress={() => this._syncWithFB(false)}
                    style={Style.FBButton}
                  >
                    <Icon name="sync" style={Style.iconUnSync} />
                    <Text>Synced</Text>
                  </Button>
                  <Button
                    iconLeft
                    onPress={() => this._openSubmitModal('Facebook')}
                    style={Style.FBButton}
                  >
                    <Icon name="logo-facebook" />
                    <Text>Post</Text>
                  </Button>
                </View>
              ) : (
                <Button
                  small
                  iconLeft
                  onPress={() => this._syncWithFB(true)}
                  style={Style.FBButton}
                >
                  <Icon name="sync" style={Style.iconSync} />
                  <Text>Sync</Text>
                </Button>
              )}
            </Card>
            <Card style={Style.TWSection}>
              <CardItem header style={Style.SectionHeader}>
                <Text style={Style.SectionHeaderText}>Twitter Integration</Text>
              </CardItem>
              {this.props.user.tw_sync ? (
                <View>
                  <Button
                    small
                    iconLeft
                    onPress={() => this._syncWithTW(false)}
                    style={Style.TWButton}
                  >
                    <Icon name="sync" style={Style.iconUnSync} />
                    <Text>Synced</Text>
                  </Button>
                  <Button
                    iconLeft
                    onPress={() => this._openSubmitModal('Twitter')}
                    style={Style.TWButton}
                  >
                    <Icon name="logo-twitter" />
                    <Text>Tweet</Text>
                  </Button>
                </View>
              ) : (
                <Button small iconLeft onPress={() => this._syncWithTW(true)} style={Style.TWButton}>
                  <Icon name="sync" style={Style.iconSync} />
                  <Text>Sync</Text>
                </Button>
              )}
            </Card>
            <Modal isVisible={this.state.modalIsVisible}>
              <View style={Style.submitModal}>
                <Text style={Style.submitModalTitle}>Social Media Posting</Text>
                <Textarea
                  rowSpan={4}
                  bordered
                  placeholder="Input your toughts..."
                  style={Style.submitModalTextArea}
                  value={this.state.modalInputText}
                  onChangeText={this._updateModalText.bind(this)}
                />
                <Button
                  style={Style.commonButton}
                  rounded
                  onPress={() => this._submit(this.state.modalType)}
                >
                  <Text>Send to {this.state.modalType}</Text>
                </Button>
                <Button
                  rounded
                  style={Style.buttonCloseSubmitModal}
                  onPress={this._closeSubmitModal.bind(this)}
                >
                  <Text>Close</Text>
                </Button>
              </View>
            </Modal>
          </View>
        )}
      </View>
    )
  }
}

MainUserScreen.propTypes = {
  user: PropTypes.object,
  sendSocialMediaPost: PropTypes.func,
  syncWithFb: PropTypes.func,
  unsyncWithFb: PropTypes.func,
  syncWithTw: PropTypes.func,
  unsyncWithTw: PropTypes.func,
}
const mapStateToProps = (state) => ({
  user: state.user.user,
})

const mapDispatchToProps = (dispatch) => ({
  syncWithFb: (id, fbId) => dispatch(UserActions.syncWithFb(id, fbId, true)),
  unsyncWithFb: (id, fbId) => dispatch(UserActions.syncWithFb(id, fbId, false)),
  syncWithTw: (id, twId) => dispatch(UserActions.syncWithTw(id, twId, true)),
  unsyncWithTw: (id, twId) => dispatch(UserActions.syncWithTw(id, twId, false)),
  sendSocialMediaPost: (id, target, post) =>
    dispatch(UserActions.sendSocialMediaPost(id, target, post)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainUserScreen)
