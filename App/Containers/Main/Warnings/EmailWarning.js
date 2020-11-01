import React from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { TouchableOpacity } from 'react-native'
import { Text, Card, Icon } from 'native-base'
import Style from './WarningStyle'
import { email_not_verified } from 'App/Assets/Strings/en/text.json'

class EmailWarning extends React.Component {
  constructor() {
    super()
    this.state = {
      emailWarning: true,
    }
  }
  _closeEmailWarning() {
    this.setState({ emailWarning: false });
  }
  render() {
    return this.state.emailWarning && (
      <TouchableOpacity onPress={this._closeEmailWarning.bind(this)}>
        <Card style={Style.warningCard}>
          <Icon name="warning" style={Style.warningCardIcon} />
          <Text style={Style.warningCardText}>{email_not_verified}</Text>
        </Card>
      </TouchableOpacity>
    )
  }
}

EmailWarning.propTypes = {
  emailWarning: PropTypes.bool
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps,mapDispatchToProps)(EmailWarning)
