import React from 'react'
import { Text, View, Button, Icon, Card, CardItem } from 'native-base'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Style from '../../MainScreenStyle'
import OneSignal from 'react-native-onesignal'
import UserActions from 'App/Stores/User/Actions'
import CardStyles from 'App/Theme/CardStyles';
import RequestsList from './RequestsList/RequestsList'

import HelperApprovedWarning from '../../Warnings/HelperApprovedWarning';

import { no_help_requests, refresh_help_requests } from 'App/Assets/Strings/en/text.json'

class MaiHelperScreen extends React.Component {
  constructor(props) {
    super(props)
    OneSignal.sendTag('role', 'helper')
  }
  componentDidMount() {
    this._fetchHelpRequests()
  }
  _fetchHelpRequests() {
    this.props.fetchHelpRequests()
  }
  _refreshHelpRequests() {
    this._fetchHelpRequests()
  }
  render() {
    return (
      <View>
        {!this.props.user.user_metadata.approved && <HelperApprovedWarning />}
        <Text style={Style.text}>Welcome {this.props.user.user_metadata.name}!</Text>
        <Card style={CardStyles.card}>
          <CardItem header style={CardStyles.cardHeaderHelper}>
            <Text style={CardStyles.cardHeaderText}>Latest Help Requests</Text>
          </CardItem>
          <CardItem cardBody>
            {this.props.helpRequests && this.props.helpRequests.length ?
              <RequestsList list={this.props.helpRequests}></RequestsList> :
              <Text style={{ padding: 10 }}>{no_help_requests}</Text>
            }
          </CardItem>
        </Card>
        <Button
          rounded
          iconLeft
          onPress={this._refreshHelpRequests.bind(this)}
          style={Style.commonButtonComp}
        >
          <Icon name="refresh-circle-outline" />
          <Text>{refresh_help_requests}</Text>
        </Button>
      </View>
    )
  }
}

MaiHelperScreen.propTypes = {
  user: PropTypes.object,
  helpRequests: PropTypes.array,
  fetchHelpRequests: PropTypes.func,
}
const mapStateToProps = (state) => ({
  user: state.user.user,
  helpRequests: state.user.helpRequests
})

const mapDispatchToProps = (dispatch) => ({
  fetchHelpRequests: () => dispatch(UserActions.fetchHelpRequests()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MaiHelperScreen)
