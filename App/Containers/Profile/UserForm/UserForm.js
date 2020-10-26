import React from 'react'
import { View, Button, Text, Icon } from 'native-base'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ProfileActions from 'App/Stores/Profile/Actions'
import t from 'tcomb-form-native'
import Style from '../ProfileScreenStyle'
import NavigationService from 'App/Services/NavigationService'

const Form = t.form.Form

const User = t.struct({
  name: t.String,
  age: t.Number,
  contact_number: t.String,
})

const options = {
  fields: {
    name: {
      error: 'Invalid name',
    },
    age: {
      error: 'Invalid age',
    },
    contact_number: {
      label: 'Phone Number',
    },
  },
}

class UserForm extends React.Component {
  handleValidation(values) {
    return true
  }
  handleSubmit() {
    const value = this._form.getValue() // use that ref to get the form value
    if (value && this.handleValidation(value)) {
      this.props.updateProfile(
        this.props.profile._id,
        Object.assign(this.props.profile.user_metadata, value)
      )
    } else {
      console.log('error')
    }
  }

  render() {
    return (
      <View>
        <Text style={Style.subTitle}>User Profile</Text>
        <Form
          type={User}
          ref={(c) => {
            this._form = c
          }}
          options={options}
          value={this.props.profile.user_metadata}
        />
        {this.props.profileErrorMessage ? <Text>{this.props.profileErrorMessage}</Text> : null}
        <View style={Style.buttonNavigation}>
          <Button
            style={Style.goBackButton}
            rounded
            iconLeft
            onPress={() => NavigationService.navigate('MainScreen')}
          >
            <Icon name="arrow-back" />
            <Text>Back</Text>
          </Button>
          <Button
            style={Style.commonButton}
            rounded
            iconRight
            onPress={this.handleSubmit.bind(this)}
          >
            <Text>Submit</Text>
            <Icon name="arrow-forward" />
          </Button>
        </View>
      </View>
    )
  }
}

UserForm.propTypes = {
  profile: PropTypes.object,
  updateProfile: PropTypes.func,
  profileErrorMessage: PropTypes.string,
}

const mapStateToProps = (state) => ({
  profileErrorMessage: state.profile.profileErrorMessage,
})

const mapDispatchToProps = (dispatch) => ({
  updateProfile: (idToken, profile) => dispatch(ProfileActions.updateProfile(idToken, profile)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm)
