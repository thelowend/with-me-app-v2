import React from 'react'
import { ScrollView } from 'react-native'
import { View, Text } from 'native-base'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Style from './UserTabStyle'

import EmailWarning from '../Warnings/EmailWarning';

import MainHelperScreen from './Helper/MainHelperScreen'
import MainUserScreen from './User/MainUserScreen'
import CompleteProfile from '../../Popups/CompleteProfile';

class UserTab extends React.Component {
  render() {
    let userRole = '';
    if (this.props.user.user_metadata) {
      userRole = this.props.user.user_metadata.role
    }
    return (
      <ScrollView>
        <View style={Style.container}>
          {!this.props.user.email_verified && <EmailWarning />}
          {this.props.userErrorMessage ? (
            <Text style={Style.error}>{this.props.userErrorMessage}</Text>
          ) : (
              <>
                {this.props.user.user_metadata.profile_complete ? (
                  <>
                    {userRole === 'helper' ? <MainHelperScreen /> : <MainUserScreen />}
                  </>
                ) : (
                    <CompleteProfile />
                  )}
              </>
            )}
        </View>
      </ScrollView>
    )
  }
}

UserTab.propTypes = {
  user: PropTypes.object,
  userErrorMessage: PropTypes.string,
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  userErrorMessage: state.user.userErrorMessage,
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(UserTab)