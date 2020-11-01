import React from 'react'
import ContactsListItem from './ContactsListItem';
import { List } from 'native-base';

class ContactsList extends React.Component {
  render() {
    return (
      <List style={{ width: '100%', paddingRight: 20 }}>
        {this.props.list.map((item, key) => (
          <ContactsListItem key={key} item={item} />
        ))}
      </List>
    )
  }
}

ContactsList.propTypes = {}

export default ContactsList

/*
              { this.props.contacts && this.props.contacts.length ? 
                <ContactsList list={this.props.contacts}></ContactsList> : 
                <Text style={{padding: 10}}>{no_contacts}</Text>
              }
*/