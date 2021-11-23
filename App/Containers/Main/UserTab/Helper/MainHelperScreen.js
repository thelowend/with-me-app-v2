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

import { welcome, helprequests_no, helprequests_refresh, helprequests_latest, helprequests_no_permissions } from 'App/Assets/Strings/en/text.json'

class MainHelperScreen extends React.Component {
  constructor(props) {
    super(props)
    if (this.props.user.user_metadata.approved) {
      OneSignal.sendTag('role', 'helper') // Tag user to receive notifications
    } else {
      OneSignal.deleteTag('role', 'helper')
    }
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
        <Text style={Style.text}>{welcome[0]} {this.props.user.user_metadata.name}{welcome[1]}</Text>
        <Card style={CardStyles.card}>
          <CardItem header style={CardStyles.cardHeaderHelper}>
            <Text style={CardStyles.cardHeaderText}>{helprequests_latest}</Text>
          </CardItem>
          <CardItem cardBody style={CardStyles.cardBody}>
            {this.props.user.user_metadata.approved ? (
              <>
                {this.props.helpRequests && this.props.helpRequests.length ?
                  <RequestsList list={this.props.helpRequests}></RequestsList> :
                  <Text style={CardStyles.cardBodyText}>{helprequests_no}</Text>
                }
              </>
            ) : (
                <Text style={CardStyles.cardBodyText} >{helprequests_no_permissions}</Text>
              )}

          </CardItem>
        </Card>
        <Button
          rounded
          iconLeft
          onPress={this._refreshHelpRequests.bind(this)}
          style={Style.commonButtonComp}
        >
          <Icon name="refresh-circle-outline" />
          <Text>{helprequests_refresh}</Text>
        </Button>
      </View>
    )
  }
}

MainHelperScreen.propTypes = {
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
)(MainHelperScreen)
