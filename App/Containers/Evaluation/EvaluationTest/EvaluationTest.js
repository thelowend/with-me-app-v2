import React from 'react'
import { View, Button, Text, Icon } from 'native-base'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import EvaluationItem from '../EvaluationItem/EvaluationItem'
import Style from '../EvaluationScreenStyle'
import { ScrollView } from 'react-native-gesture-handler'
import NavigationService from 'App/Services/NavigationService'

class EvaluationTest extends React.Component {
  constructor(props) {
    super(props)
    const initialSliderValues = {}
    props.test.items.forEach((val, i) => {
      initialSliderValues[i] = props.test.scoring.values[0].value
    })
    this.state = {
      sliderValues: initialSliderValues,
    }
  }

  _handleSubmit() {
    this.props.sendEvaluation(this.state.sliderValues)
  }

  _onChange(key) {
    return (val) => {
      this.setState((prevState) => {
        let sliderValues = prevState.sliderValues
        sliderValues[key] = val
        return {
          sliderValues,
        }
      })
    }
  }

  render() {
    return (
      <View style={Style.evaluationTestContainer}>
        <View style={Style.evaluationTestTop}>
          <Text style={Style.testOpening}>{this.props.test.opening}</Text>
        </View>
        <View style={Style.evaluationTestItems}>
          <ScrollView style={Style.testScrollView}>
            {this.props.test.items.map((text, key) => (
              <EvaluationItem
                onChange={this._onChange(key).bind(this)}
                key={key}
                text={text}
                step={this.props.test.scoring.step}
                range={this.props.test.scoring.values}
                initialValue={this.props.test.scoring.values[0]}
              />
            ))}
          </ScrollView>
        </View>
        <View style={Style.evaluationTestBottom}>
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
              onPress={this._handleSubmit.bind(this)}
            >
              <Text>Submit</Text>
              <Icon name="arrow-forward" />
            </Button>
          </View>
        </View>
      </View>
    )
  }
}

EvaluationTest.propTypes = {
  sendEvaluation: PropTypes.func,
  test: PropTypes.object,
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EvaluationTest)
