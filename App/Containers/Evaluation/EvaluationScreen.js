import React from 'react'
import { connect } from 'react-redux'
import { ActivityIndicator } from 'react-native'
import { View } from 'native-base'
import EvaluationActions from '../../Stores/Evaluation/Actions'
import EvaluationTest from './EvaluationTest/EvaluationTest'
import { PropTypes } from 'prop-types'
import Style from './EvaluationScreenStyle'

class EvaluationScreen extends React.Component {
  componentDidMount() {
    this._fetchTest()
  }
  _fetchTest() {
    this.props.fetchTest(this.props.user.user_metadata.age_category)
  }
  _sendEvaluation(evaluation) {
    this.props.sendEvaluation(
      this.props.user._id,
      this.props.user.user_metadata.age_category,
      evaluation
    )
  }
  render() {
    return (
      <View style={Style.container}>
        {this.props.testIsLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <EvaluationTest test={this.props.test} sendEvaluation={this._sendEvaluation.bind(this)} />
        )}
      </View>
    )
  }
}

EvaluationScreen.propTypes = {
  user: PropTypes.object,
  fetchTest: PropTypes.func,
  sendEvaluation: PropTypes.func,
  test: PropTypes.object,
  testIsLoading: PropTypes.bool,
  testErrorMessage: PropTypes.string,
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  test: state.evaluation.test,
  testIsLoading: state.evaluation.testIsLoading,
  testErrorMessage: state.evaluation.testErrorMessage,
})

const mapDispatchToProps = (dispatch) => ({
  fetchTest: (ageCategory) => dispatch(EvaluationActions.fetchTest(ageCategory)),
  sendEvaluation: (id, category, evaluation) =>
    dispatch(EvaluationActions.sendEvaluation(id, category, evaluation)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EvaluationScreen)
