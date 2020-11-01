import React from 'react'
import { List } from 'native-base'
import RequestsListItem from './RequestsListItem'

class RequestsList extends React.Component {
  render() {
    return (
      <List style={{ width: '100%', paddingRight: 20 }}>
        {this.props.list.map((item, key) => (
          <RequestsListItem key={key} item={item} />
        ))}
      </List>
    )
  }
}

RequestsList.propTypes = {}

export default RequestsList
