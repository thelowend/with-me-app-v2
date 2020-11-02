import React from 'react'
import { Text, View, Button, Icon, Card, CardItem } from 'native-base'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import NavigationService from 'App/Services/NavigationService'
import Style from './CompleteProfileStyle'
import CardStyles from 'App/Theme/CardStyles'

import { thank_you_sign_in, complete_your_profile, btn_complete_profile } from 'App/Assets/Strings/en/text.json'

class CompleteProfile extends React.Component {
  render() {
    return (
      <View style={Style.container}>
        <Card bordered style={CardStyles.card}>
          <CardItem header style={CardStyles.cardHeader}>
            <Text style={CardStyles.cardHeaderText}>{thank_you_sign_in}</Text>
          </CardItem>
          <CardItem>
            <Text style={Style.cardText}>{complete_your_profile}</Text>
          </CardItem>
          <CardItem style={Style.cardButton}>
            <Button
              style={Style.completeProfileButton}
              rounded
              iconLeft
              onPress={() => NavigationService.navigate('ProfileTab')}
            >
              <Icon name="person" />
              <Text>{btn_complete_profile}</Text>
            </Button>
          </CardItem>
        </Card>
      </View>
    )
  }
}

CompleteProfile.propTypes = {
  profile: PropTypes.object,
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompleteProfile)
