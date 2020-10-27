import React from 'react'
import { Tab, TabHeading, Icon, Text } from 'native-base'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
//import Style from './SettingsTabStyle'

class SettingsTab extends React.Component {
  render() {
    return (
      <Text>SETTINGS</Text>
    )
  }
}

SettingsTab.propTypes = {}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(SettingsTab)
