import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  fetchTest: ['ageCategory'],
  fetchTestLoading: null,
  fetchTestSuccess: ['test'],
  fetchTestFailure: ['errorMessage'],
  sendEvaluation: ['id', 'ageCategory', 'evaluation'],
  sendEvaluationSuccess: [],
  sendEvaluationFailure: ['errorMessage'],
})

export const EvaluationTypes = Types
export default Creators
