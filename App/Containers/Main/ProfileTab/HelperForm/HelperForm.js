import React from 'react'
import { View, Button, Text } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ProfileActions from 'App/Stores/Profile/Actions'
import t from 'tcomb-form-native'

const Form = t.form.Form

const User = t.struct({
  name: t.String,
  age: t.Number,
  contact_number: t.String,
  medical_license: t.Number,
  medical_institution: t.String,
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
    medical_license: {
      label: 'Medical License Nº (if applies)',
    },
    medical_institution: {
      label: 'Medical Institution (if applies)',
    },
  },
}

class HelperForm extends React.Component {
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
        <Text>Helper Profile:</Text>
        <Form
          type={User}
          ref={(c) => {
            this._form = c
          }}
          options={options}
          value={this.props.profile.user_metadata}
        />
        <Button title="Submit" onPress={this.handleSubmit.bind(this)} />
        {this.props.profileErrorMessage ? <Text>{this.props.profileErrorMessage}</Text> : null}
      </View>
    )
  }
}

HelperForm.propTypes = {
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
)(HelperForm)
