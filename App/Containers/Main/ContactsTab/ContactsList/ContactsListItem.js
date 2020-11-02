import React from 'react'
import { ListItem, Left, Body, Button, Icon, Text, Right, Badge } from 'native-base'
import NavigationService from 'App/Services/NavigationService'
import moment from 'moment'
import Style from './ContactsListStyle'

class ContactsListItem extends React.Component {
  _displayDate() {
    return moment(new Date(this.props.item.contact_date)).format('YYYY-MM-DD HH:mm');
  }
  _contactUser(contact) {
    if (!this.props.isUser) {
      NavigationService.navigate('ContactScreen', { contact: contact });
    } else {
      NavigationService.navigate('ContactHelperScreen', { contact: contact });
    }
  }
  render() {
    return (
      <ListItem thumbnail style={{ width: '100%' }}>
        <Left>
          <Badge square>
            <Icon name="person" />
          </Badge>
        </Left>
        <Body>
          <Text>{this.props.item.name}</Text>
          <Text note numberOfLines={1}>{this._displayDate()}</Text>
        </Body>
        <Right>
          <Button style={Style.contactListButton} onPress={() => this._contactUser(this.props.item)}>
            <Icon name="chatbubbles-outline" />
          </Button>
          {!this.props.isUser &&
            <Button style={Style.contactRemoveButton} onPress={() => this.props.removeContact(this.props.item)}>
              <Icon name="person-remove-outline" />
            </Button>
          }
        </Right>
      </ListItem>
    )
  }
}

ContactsListItem.propTypes = {}

export default ContactsListItem;
