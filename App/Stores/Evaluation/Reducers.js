import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { EvaluationTypes } from './Actions'

export const fetchTestLoading = (state) => ({
  ...state,
  test: {},
  testIsLoading: true,
  testErrorMessage: null,
})

export const fetchTestSuccess = (state, { test }) => ({
  ...state,
  test: test,
  testIsLoading: false,
  testErrorMessage: null,
})

export const fetchTestFailure = (state, { errorMessage }) => ({
  ...state,
  test: {},
  testIsLoading: false,
  testErrorMessage: errorMessage,
})

export const sendEvaluationSuccess = (state) => ({
  ...state,
  sendEvaluationErrorMessage: null,
})

export const sendEvaluationFailure = (state, { errorMessage }) => ({
  ...state,
  sendEvaluationErrorMessage: errorMessage,
})

export const reducer = createReducer(INITIAL_STATE, {
  [EvaluationTypes.FETCH_TEST_LOADING]: fetchTestLoading,
  [EvaluationTypes.FETCH_TEST_SUCCESS]: fetchTestSuccess,
  [EvaluationTypes.FETCH_TEST_FAILURE]: fetchTestFailure,
  [EvaluationTypes.SEND_EVALUATION_SUCCESS]: sendEvaluationSuccess,
  [EvaluationTypes.SEND_EVALUATION_FAILURE]: sendEvaluationFailure,
})
