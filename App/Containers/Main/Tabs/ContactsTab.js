import React from 'react'
import { Tab, TabHeading, Icon, Text } from 'native-base'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
//import Style from './ContactsTabStyle'

class ContactsTab extends React.Component {
  render() {
    return (
        <Text>CONTACTS</Text>
    )
  }
}

ContactsTab.propTypes = {}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ContactsTab)
