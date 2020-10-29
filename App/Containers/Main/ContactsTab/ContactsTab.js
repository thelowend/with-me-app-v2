import React from 'react'
import { View, Tab, TabHeading, Icon, Text } from 'native-base'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Style from './ContactsTabStyle'

class ContactsTab extends React.Component {
  render() {
    return (
      <View>
        <Text>CONTACTS</Text>
      </View>
    )
  }
}

ContactsTab.propTypes = {}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ContactsTab)
