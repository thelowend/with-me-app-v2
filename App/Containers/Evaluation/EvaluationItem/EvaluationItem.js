import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Slider from '@react-native-community/slider'
import Style from '../EvaluationScreenStyle'

class EvaluationItem extends React.Component {
  constructor() {
    super()
    this.state = {
      currentValue: {
        key: null,
        value: null,
      },
    }
  }
  componentDidMount() {
    this.setState({ currentValue: this.props.initialValue })
  }

  _handleValueChange(val) {
    this.setState({ currentValue: this.props.range.find((item) => item.value === val) })
    this.props.onChange(val)
  }

  render() {
    return (
      <View style={Style.sliderContainer}>
        <Text style={Style.sliderLabel}>{this.props.text}</Text>
        <Slider
          style={Style.slider}
          minimumValue={this.props.range[0].value}
          maximumValue={this.props.range[this.props.range.length - 1].value}
          step={this.props.step}
          minimumTrackTintColor="#00FF00"
          maximumTrackTintColor="#FF0000"
          value={this.props.initialValue.value}
          onValueChange={this._handleValueChange.bind(this)}
        />
        <Text style={Style.sliderValue}>{this.state.currentValue.key}</Text>
      </View>
    )
  }
}

EvaluationItem.propTypes = {
  key: PropTypes.number,
  text: PropTypes.string,
  range: PropTypes.array,
  step: PropTypes.number,
  initialValue: PropTypes.object,
  onChange: PropTypes.func,
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EvaluationItem)
