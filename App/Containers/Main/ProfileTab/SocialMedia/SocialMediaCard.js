import React from 'react'
import { View, Grid, Col, Row, Card, CardItem, Button, Icon, Text, Textarea } from 'native-base'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Modal from 'react-native-modal'

import Style from './SocialMediaCardStyle'
import CardStyles from 'App/Theme/CardStyles'

import UserActions from '../../../../Stores/User/Actions'


class SocialMediaCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsVisible: false,
      modalType: null,
      modalInputText: '',
    }
  }
  componentDidMount() { }
  _syncWithFB(value) {
    alert();
    /*
    if (value) {
      this.props.syncWithFb(this.props.user._id, this.props.user._id) // Temporarily we use the same id for both
    } else {
      this.props.unsyncWithFb(this.props.user._id, this.props.user._id)
    }
    */
  }
  _syncWithTW(value) {
    /*
    if (value) {
      this.props.syncWithTw(this.props.user._id, this.props.user._id)
    } else {
      this.props.unsyncWithTw(this.props.user._id, this.props.user._id)
    }
    */
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
    console.log('SUBMITTED: ', this.state.modalInputText);
  }
  _submit() {
    this._sendSocialMediaPost()
    this._closeSubmitModal()
  }
  render() {
    return (
      <Card style={CardStyles.card}>
        <CardItem header style={CardStyles.cardHeader}>
          <Text style={CardStyles.cardHeaderText}>Social Media</Text>
        </CardItem>
        <CardItem cardBody style={CardStyles.cardContent}>
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
        </CardItem>
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
      </Card>
    )
  }
}

SocialMediaCard.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(SocialMediaCard);