import React from 'react'
import { Text, View, Button, Icon, Card, CardItem } from 'native-base'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import NavigationService from 'App/Services/NavigationService'
import Style from './CompleteProfileStyle'

class CompleteProfile extends React.Component {
  render() {
    return (
      <View style={Style.container}>
        <Card bordered style={Style.card}>
          <CardItem header style={Style.cardHeader}>
            <Text style={Style.cardTitle}>Thank you for signing up to WithMeApp!</Text>
          </CardItem>
          <CardItem>
            <Text style={Style.cardText}>
              In order to help us help you better, please complete your profile.
            </Text>
          </CardItem>
          <CardItem style={Style.cardButton}>
            <Button
              style={Style.completeProfileButton}
              rounded
              iconLeft
              onPress={() => NavigationService.navigate('ProfileScreen')}
            >
              <Icon name="person" />
              <Text>Complete Profile Now</Text>
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
