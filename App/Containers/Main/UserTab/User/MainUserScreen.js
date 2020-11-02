import React from 'react'
import { Text, View, Button, Textarea, Icon, Card, CardItem, Grid, Col, Row } from 'native-base'
import Modal from 'react-native-modal';
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Style from '../../MainScreenStyle'
import TakeTest from '../../../Popups/TakeTest'
import OneSignal from 'react-native-onesignal'
import UserActions from '../../../../Stores/User/Actions'
import LinearGradient from 'react-native-linear-gradient';
import CardStyles from 'App/Theme/CardStyles';
import { MainValues } from 'App/Assets/Values'

import { welcome, latest_evaluation, overall_mood, user_actions, not_enough_data, btn_ask_for_help, btn_share_your_thoughts, what_is_on_your_mind, share_your_toughts, close, btn_send } from 'App/Assets/Strings/en/text.json'

class MainUserScreen extends React.Component {
  constructor(props) {
    super(props)
    OneSignal.sendTag('role', 'user')
    console.log('onesignal tag sent')

    this.state = {
      modalIsVisible: false,
      modalType: 'WithMeApp',
      modalInputText: '',
    }
  }
  _openSubmitModal() {
    this.setState({
      modalInputText: '',
      modalIsVisible: true,
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
  _sendFeedPost() {
    this.props.sendFeedPost(
      this.props.user._id,
      'WithMeApp',
      this.state.modalInputText
    )
    console.log('SUBMITTED: ', this.state.modalInputText);
  }
  _submit() {
    this._sendFeedPost()
    this._closeSubmitModal()
  }
  _askForHelp() {
    this.props.askForHelp(this.props.user._id)
  }
  _parseDate(date) {
    return date.toString().slice(0, 16);
  }
  _atRisk() {
    return this.props.user.user_metadata.threshold <= 0.6;
  }
  _getPercent(value) {
    return (value * 100) + '%';
  }
  render() {
    let overallScore = this.props.user.user_metadata.overallScore || null;
    if (overallScore) {
      overallScore = parseFloat(overallScore.toFixed(2));
    }
    return (
      <View style={Style.container}>
        <Text style={Style.text}>{welcome[0]} {this.props.user.user_metadata.name}{welcome[1]}</Text>
        {!this.props.user.user_metadata.threshold ? (
          <TakeTest />
        ) : (
            <View style={Style.userScreenContainer}>
              <Grid>
                <Row>
                  <Text style={Style.subTitle}>
                    {latest_evaluation} {this._getPercent(overallScore)}
                  </Text>
                </Row>
                <Row>
                  <Text style={Style.subTitle}>
                    {overall_mood} {this._parseDate(new Date())}
                  </Text>
                </Row>
                <Row style={ {marginTop: 10}}>
                  <Col size={10} style={{ alignItems: 'center' }}>
                    <View style={{ borderWidth: 1, borderTopLeftRadius: 5, borderBottomLeftRadius: 5, borderRightWidth: 0 }}>
                      <Icon style={Style.roundIcon} name="sad-outline" />
                    </View>
                  </Col>
                  <Col size={100}>
                    {overallScore ? (
                      <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[MainValues.COLOR.primary, MainValues.COLOR.complement]} locations={[overallScore, overallScore]} style={Style.linearGradient}></LinearGradient>
                    ) : (
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['rgba(0, 155, 0, 0)', 'rgba(200, 100, 0, 0)']} locations={[0, 0]} style={Style.linearGradient}>
                          <Text>{not_enough_data}</Text>
                        </LinearGradient>
                      )}
                  </Col>
                  <Col size={10} style={{ alignItems: 'center' }}>
                    <View style={{ borderWidth: 1, borderTopRightRadius: 5, borderBottomRightRadius: 5, borderLeftWidth: 0 }}>
                      <Icon style={Style.roundIcon} name="happy-outline" />
                    </View>
                  </Col>
                </Row>
                <Row style={ {marginTop: 10}}>
                  <Card style={CardStyles.card}>
                    <CardItem header style={CardStyles.cardHeader}>
                      <Text style={CardStyles.cardHeaderText}>{user_actions}</Text>
                    </CardItem>
                    <CardItem cardBody style={CardStyles.cardContent}>
                      <Grid>
                        <Col>
                          {this._atRisk() &&
                            <Row style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                              <Button
                                rounded
                                iconLeft
                                small
                                onPress={this._askForHelp.bind(this)}
                                style={Style.warningButton}
                              >
                                <Icon name="people-outline" />
                                <Text>{btn_ask_for_help}</Text>
                              </Button>
                            </Row>}
                          <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Button
                              rounded
                              iconLeft
                              small
                              onPress={this._openSubmitModal.bind(this)}
                              style={Style.actionButton}
                            >
                              <Icon name="text-outline" />
                              <Text>{btn_share_your_thoughts}</Text>
                            </Button>
                          </Row>
                        </Col>
                      </Grid>
                    </CardItem>
                  </Card>
                </Row>
              </Grid>
            </View>
          )}
        <Modal isVisible={this.state.modalIsVisible}>
          <View style={Style.submitModal}>
            <Text style={Style.submitModalTitle}>{share_your_toughts}</Text>
            <Textarea
              rowSpan={4}
              bordered
              placeholder={what_is_on_your_mind}
              style={Style.submitModalTextArea}
              value={this.state.modalInputText}
              onChangeText={this._updateModalText.bind(this)}
            />
            <Button
              style={Style.commonButton}
              rounded
              onPress={() => this._submit('WithMeApp')}
            >
              <Text>{btn_send}</Text>
            </Button>
            <Button
              rounded
              style={Style.buttonCloseSubmitModal}
              onPress={this._closeSubmitModal.bind(this)}
            >
              <Text>{close}</Text>
            </Button>
          </View>
        </Modal>
      </View>
    )
  }
}

MainUserScreen.propTypes = {
  user: PropTypes.object,
  askForHelp: PropTypes.func,
  sendFeedPost: PropTypes.func,
}
const mapStateToProps = (state) => ({
  user: state.user.user,
})

const mapDispatchToProps = (dispatch) => ({
  sendFeedPost: (id, target, post) => dispatch(UserActions.sendFeedPost(id, target, post)),
  askForHelp: (id) => dispatch(UserActions.askForHelp(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainUserScreen)
