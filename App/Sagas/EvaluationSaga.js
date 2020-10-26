import { put, call } from 'redux-saga/effects'
import { userService } from '../Services/UserService'
import UserActions from '../Stores/User/Actions'
import { evaluationService } from '../Services/EvaluationService'
import EvaluationActions from '../Stores/Evaluation/Actions'
import NavigationService from 'App/Services/NavigationService'

export function* fetchTest(payload) {
  yield put(EvaluationActions.fetchTestLoading())

  const test = yield call(evaluationService.fetchTest, payload.ageCategory)
  if (!test.isAxiosError) {
    yield put(EvaluationActions.fetchTestSuccess(test))
  } else {
    yield put(EvaluationActions.fetchTestFailure('There was an error while requesting the test.'))
  }
}

export function* sendEvaluation(payload) {
  const user = yield call(
    userService.sendEvaluation,
    payload.id,
    payload.ageCategory,
    payload.evaluation
  )
  if (!user.isAxiosError) {
    yield put(EvaluationActions.sendEvaluationSuccess())
    UserActions.updateUserValue(user)
    NavigationService.navigateAndReset('MainScreen')
  } else {
    yield put(
      EvaluationActions.sendEvaluationFailure('There was an error while sending the evaluation.')
    )
  }
}
