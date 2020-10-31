import React from 'react'
import { connect } from 'react-redux'
import ContactsListItem from './ContactsListItem';
class ContactsList extends React.Component {
    render() {
        return (
            <List style={{ width: '100%', paddingRight: 20 }}>
                {this.props.list.map((item, key) => (
                  <ContactsListItem key={key} item={item} />
                ))}
            </List>
        )
    }
}

ContactsList.propTypes = {}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList)
