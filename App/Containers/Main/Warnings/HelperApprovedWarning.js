import React from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { TouchableOpacity } from 'react-native'
import { Text, Card, Icon } from 'native-base'
import Style from './WarningStyle'
import { helper_not_approved } from 'App/Assets/Strings/en/text.json'

class HelperApprovedWarning extends React.Component {
  constructor() {
    super()
    this.state = {
      helperApprovedWarning: true,
    }
  }
  _closeWarning() {
    this.setState({ helperApprovedWarning: false });
  }
  render() {
    return this.state.helperApprovedWarning && (
      <TouchableOpacity onPress={this._closeWarning.bind(this)}>
        <Card style={Style.warningCard}>
          <Icon name="warning" style={Style.warningCardIcon} />
          <Text style={Style.warningCardText}>{helper_not_approved}</Text>
        </Card>
      </TouchableOpacity>
    )
  }
}

HelperApprovedWarning.propTypes = {
  helperApprovedWarning: PropTypes.bool
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps,mapDispatchToProps)(HelperApprovedWarning)
