import React from 'react'
import { Text, View, Card, CardItem } from 'native-base'
import Style from './CompleteProfileStyle'
import CardStyles from 'App/Theme/CardStyles'

import { thank_you_sign_in, complete_your_profile } from 'App/Assets/Strings/en/text.json'

class CompleteProfile extends React.Component {
  render() {
    return (
      <View>
        <Card bordered style={CardStyles.card}>
          <CardItem header style={CardStyles.cardHeader}>
            <Text style={CardStyles.cardHeaderText}>{thank_you_sign_in}</Text>
          </CardItem>
          <CardItem>
            <Text style={Style.cardText}>{complete_your_profile}</Text>
          </CardItem>
        </Card>
      </View>
    )
  }
}

CompleteProfile.propTypes = {}

export default CompleteProfile
