import React from 'react'
import { View, Button, Text, Icon, CardItem } from 'native-base'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ProfileActions from 'App/Stores/Profile/Actions'
import t from 'tcomb-form-native'
import Style from '../ProfileTabStyle'

const Form = t.form.Form

const User = t.struct({
  name: t.String,
  age: t.Number,
  contact_number: t.String,
})

let _ = require('lodash');

const stylesheet = _.cloneDeep(t.form.Form.stylesheet);
stylesheet.fieldset = {
  // flexDirection: 'row',
};
stylesheet.formGroup.normal.flex = 1;
stylesheet.formGroup.error.flex = 1;

stylesheet.textbox.normal.borderWidth = 0;
stylesheet.textbox.error.borderWidth = 0;
stylesheet.textbox.normal.marginBottom = 0;
stylesheet.textbox.error.marginBottom = 0;

stylesheet.textboxView.normal.borderWidth = 0;
stylesheet.textboxView.error.borderWidth = 0;
stylesheet.textboxView.normal.borderRadius = 0;
stylesheet.textboxView.error.borderRadius = 0;
stylesheet.textboxView.normal.borderBottomWidth = 1;
stylesheet.textboxView.error.borderBottomWidth = 1;
stylesheet.textboxView.normal.marginBottom = 5;
stylesheet.textboxView.error.marginBottom = 5;

stylesheet.textboxView.normal.marginRight = 5;


const options = {
  stylesheet: stylesheet,
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
        <Form
          style={Style.form}
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
            style={Style.commonButton}
            rounded
            onPress={this.handleSubmit.bind(this)}
          >
            <Icon name="save-outline" />
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
