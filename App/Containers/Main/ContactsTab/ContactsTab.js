import React from 'react'
import { ScrollView } from 'react-native'
import { View, Card, CardItem, Text } from 'native-base'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Style from './ContactsTabStyle'
import CardStyles from 'App/Theme/CardStyles'

import ContactsList from './ContactsList/ContactsList';

import { no_contacts_user, no_contacts_helper, been_with, with_me } from 'App/Assets/Strings/en/text.json'

class ContactsTab extends React.Component {
  getHeaderText(isUser, name) {
    return isUser ? `${with_me[0]} ${name}${with_me[1]}` : `${name} ${been_with}`;
  }
  getNoContactsText(isUser) {
    return isUser ? `${no_contacts_user}` : `${no_contacts_helper}`;
  }
  render() {
    const isUser = this.props.user.user_metadata.role === 'user';
    return (
      <ScrollView>
        <View style={Style.container}>
          <Card style={CardStyles.card}>
            <CardItem header style={CardStyles['cardHeader' + (isUser ? 'User' : 'Helper')]}>
              <Text style={CardStyles.cardHeaderText}>{this.getHeaderText(isUser, this.props.user.user_metadata.name)}</Text>
            </CardItem>
            <CardItem cardBody>
              { this.props.contacts && this.props.contacts.length ? 
                <ContactsList list={this.props.contacts}></ContactsList> : 
                <Text style={{padding: 10}}>{this.getNoContactsText(isUser)}</Text>
              }
            </CardItem>
          </Card>
        </View>
      </ScrollView>
    )
  }
}

ContactsTab.propTypes = {
  contacts: PropTypes.array,
}

const mapStateToProps = (state) => ({
  user: state.user.user,
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(ContactsTab)
