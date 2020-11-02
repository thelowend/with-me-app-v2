import React from 'react'
import ContactsListItem from './ContactsListItem';
import { List } from 'native-base';

class ContactsList extends React.Component {
  render() {
    return (
      <List style={{ width: '100%', paddingRight: 20 }}>
        {this.props.list.map((item, key) => (
          <ContactsListItem key={key} item={item} isUser={this.props.isUser} removeContact={this.props.removeContact.bind(this)} />
        ))}
      </List>
    )
  }
}

ContactsList.propTypes = {}

export default ContactsList