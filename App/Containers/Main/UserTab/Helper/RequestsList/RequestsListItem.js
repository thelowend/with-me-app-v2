import React from 'react'
import { ListItem, Left, Body, Button, Icon, Text, Right, Badge } from 'native-base'
import NavigationService from 'App/Services/NavigationService'
import moment from 'moment'
import Style from './RequestListStyle'

const PROFILES = {
  'slight': { color: 'green', threshold: 0.9 },
  'mild': { color: 'yellow', threshold: 0.6 },
  'moderate': { color: 'orange', threshold: 0.4 },
  'severe': { color: 'red', threshold: 0.2 },
}

class RequestsListItem extends React.Component {
  _displayOverallScore() {
    return (parseFloat(this.props.item.overallScore.toFixed(2)) * 100) + '%';
  }
  _warningLight() {
    return PROFILES[this.props.item.profile.toLowerCase()].color;
  }
  _displayDate() {
    return moment(new Date(this.props.item.request_date)).format('YYYY-MM-DD HH:mm');
  }
  _contactUser(contact) {
    NavigationService.navigate('ContactScreen', { contact: contact });
  }
  render() {
    return (
      <ListItem thumbnail style={{ width: '100%' }}>
        <Left>
          <Badge style={ {backgroundColor: this._warningLight() }}>
            <Text>{this._displayOverallScore()}</Text>
          </Badge>
        </Left>
        <Body>
          <Text>{this.props.item.name}</Text>
          <Text note numberOfLines={1}>{this._displayDate()}</Text>
        </Body>
        <Right>
          <Button style={Style.requestListButton, { backgroundColor: this._warningLight() }} onPress={()=> this._contactUser(this.props.item)}>
            <Icon name="chatbubbles-outline" />
          </Button>
        </Right>
      </ListItem>
    )
  }
}

RequestsListItem.propTypes = {}

export default RequestsListItem;
