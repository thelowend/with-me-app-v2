import React from 'react'
import { Header, Icon, Button, Body, Right, Title } from 'native-base'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import AuthActions from 'App/Stores/Auth/Actions'
import Style from './HeaderScreenStyle'

class HeaderScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      topText: '',
    }
  }
  setTopText() {
    let topText = ''
    const values = {
      helper: ' - Help others',
      user: ' - Find help',
    }
    if (this.props.user.user_metadata) {
      topText = values[this.props.user.user_metadata.role]
    }
    return topText
  }
  render() {
    let userRole = 'user'
    if (this.props.user.user_metadata) {
      userRole = this.props.user.user_metadata.role
    }
    return (
      <>
        {this.props.user &&
          <Header style={Style['appHeader' + userRole]} hasTabs>
            <Body>
              <Title style={Style.appHeaderTitle}>WithMe{this.setTopText.bind(this)()}</Title>
            </Body>
            <Right>
              <Button transparent onPress={() => this._onLogout()}>
                <Icon name="log-out" />
              </Button>
            </Right>
          </Header>
        }</>
    )
  }
  _onLogout() {
    this.props.onLogout()
  }
}

HeaderScreen.propTypes = {
  user: PropTypes.object,
  onLogout: PropTypes.func,
}

const mapStateToProps = (state) => ({
  user: state.user.user,
})

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(AuthActions.logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderScreen)
