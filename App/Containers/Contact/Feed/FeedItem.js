import React from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { Card, CardItem, Text, Body, View, Icon } from 'native-base'
import Style from './FeedItemStyle'
import moment from 'moment'

class FeedItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      source: this.displaySource(props.item.source),
    }
  }
  displaySource(source) {
    switch (source) {
      case 'fb':
        source = 'Facebook'
        break
      case 'tw':
        source = 'Twitter'
        break
      case 'ig':
        source = 'Instagram'
        break
      default:
        source = 'Others'
        break
    }
    return source
  }
  getIcon(source) {
    let icon
    switch (source) {
      case 'Facebook':
        icon = 'logo-facebook'
        break
      case 'Twitter':
        icon = 'logo-twitter'
        break
      case 'Instagram':
        icon = 'logo-instagram'
        break
      default:
        icon = 'sync'
        break
    }
    return icon
  }

  render() {
    const source = this.displaySource(this.props.item.source.trim())
    const icon = this.getIcon(source)
    return (
      <View>
        <Card bordered>
          <CardItem header style={Style[source]}>
            <Icon name={icon} style={Style.feedIcon} />
            <Text style={Style[source + 'Text']}>
              {moment(new Date(this.props.item.datetime)).format('YYYY-MM-DD HH:mm')}
            </Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{this.props.item.text}</Text>
            </Body>
          </CardItem>
        </Card>
      </View>
    )
  }
}

FeedItem.propTypes = {
  item: PropTypes.object,
  source: PropTypes.string,
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedItem)
