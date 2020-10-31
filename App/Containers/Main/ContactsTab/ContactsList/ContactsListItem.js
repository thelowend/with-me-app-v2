import React from 'react'
import { ListItem, Left, Body, Button, Icon, Text, Right, Thumbnail } from 'native-base'
import { connect } from 'react-redux'

class ContactsListItem extends React.Component {
  render() {
    const contact = this.props.item;
    return (
      <ListItem thumbnail style={ { width: '100%' } }>
        <Left>
          <Thumbnail square source={{ uri: 'Image URL' }} />
        </Left>
        <Body>
          <Text>Sankhadeep</Text>
          <Text note numberOfLines={1}>Last contact date: </Text>
        </Body>
        <Right>
          <Button>
            <Icon name="chatbubbles-outline" />
          </Button>
        </Right>
      </ListItem>
    )
  }
}

ContactsListItem.propTypes = {}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(ContactsListItem)
