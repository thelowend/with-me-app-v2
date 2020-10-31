import React from 'react'
import { ScrollView } from 'react-native'
import { View, Card, CardItem, Button, Icon, Text, List, ListItem } from 'native-base'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Style from './ContactsTabStyle'
import CardStyles from 'App/Theme/CardStyles'

import ContactsList from './ContactsList/ContactsList';

class ContactsTab extends React.Component {
  render() {
    let userRole = '';
    if (this.props.user.user_metadata) {
      userRole = this.props.user.user_metadata.role
    }
    return (
      <ScrollView >
        <View style={Style.container}>
          <Card style={CardStyles.card}>
            <CardItem header style={CardStyles.cardHeader}>
              <Text style={CardStyles.cardHeaderText}>With {this.props.user.user_metadata.name}...</Text>
            </CardItem>
            <CardItem cardBody>
              { this.props.contacts && this.props.contacts.length ? <ContactsList list={this.props.contacts}></ContactsList> : <Text style={{padding: 10}}>You have no contacts yet</Text>}
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
