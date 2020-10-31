import React from 'react'
import { Text, View, Button, Textarea, Icon, Badge, Card, CardItem, Grid, Col, Row } from 'native-base'
import { TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Style from './MainScreenStyle'
import TakeTest from '../Popups/TakeTest'
import OneSignal from 'react-native-onesignal'
import UserActions from '../../Stores/User/Actions'
import LinearGradient from 'react-native-linear-gradient';

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
  _sendFeedPost() {
    /*
    this.props.sendFeedPost(
      this.props.user._id,
      this.state.modalType,
      this.state.modalInputText
    )
    console.log('SUBMITTED: ', this.state.modalInputText);
    */
  }
  _askForHelp() {
    this.props.askForHelp(this.props.user._id)
  }
  _closeEmailWarning() {
    this.setState({ emailWarning: false })
  }
  render() {
    let overallScore = this.props.user.user_metadata.overallScore || null;
    if (overallScore) {
      overallScore = parseFloat(overallScore.toFixed(2));
    }
    
    return (
      <View style={Style.container}>
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
              <Grid>
                <Row>
                  <Text style={Style.subTitle}>
                    Your latest evaluation: {this.props.user.user_metadata.threshold}
                  </Text>
                </Row>
                <Row>
                  <Text style={Style.subTitle}>
                    Overall mood as of: {new Date().toISOString()}
                  </Text>
                </Row>
                <Row style={{  }}>
                  <Col size={10} style={{alignItems: 'center'}}>
                    <View style={{borderWidth: 1, borderTopLeftRadius: 5, borderBottomLeftRadius: 5, borderRightWidth: 0}}>
                      <Icon style={Style.roundIcon} name="sad-outline" />
                    </View>
                  </Col>
                  <Col size={100}>
                    {overallScore ? (
                      <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['rgba(0, 155, 0, 1)', 'rgba(200, 100, 0, 1)']} locations={[overallScore, overallScore]} style={Style.linearGradient}></LinearGradient>
                    ) : (
                      <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['rgba(0, 155, 0, 0)', 'rgba(200, 100, 0, 0)']} locations={[0, 0]} style={Style.linearGradient}>
                      <Text>
                        Not enough data to evalue yet
                      </Text>
                    </LinearGradient>
                    ) }
                  </Col>
                  <Col size={10} style={{alignItems: 'center' }}>
                    <View style={{borderWidth: 1, borderTopRightRadius: 5, borderBottomRightRadius: 5, borderLeftWidth: 0}}>
                      <Icon style={Style.roundIcon} name="happy-outline" />
                    </View>
                  </Col>
                </Row>
                <Row style={{justifyContent: 'center' }}>
                  {/* If the overall mood is low, show the ask for help button */}
                  <Button
                    rounded
                    iconLeft
                    small
                    onPress={this._askForHelp.bind(this)}
                    style={Style.commonButton}
                  >
                    <Icon name="people-outline" />
                    <Text>Ask for help</Text>
                  </Button>
                </Row>
                <Row>
                  <Card>
                    <CardItem header style={{}}>
                      <Text style={{}}>Share your thoughts</Text>
                    </CardItem>
                  </Card>
                </Row>
              </Grid>
            </View>
          )}
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
