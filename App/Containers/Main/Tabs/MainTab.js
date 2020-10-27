import React from 'react'
import { Text } from 'native-base'
import { connect } from 'react-redux'
// import { PropTypes } from 'prop-types'
//import Style from './MainTabStyle'

class MainTab extends React.Component {
  render() {
    return (
        <Text>HOME</Text>
    )
  }
}

MainTab.propTypes = {}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(MainTab)
