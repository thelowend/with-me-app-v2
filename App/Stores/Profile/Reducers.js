import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { ProfileTypes } from './Actions'

export const updateProfileSuccess = (state, { profile }) => ({
  ...state,
  profile: profile,
  profileErrorMessage: null,
})

export const updateProfileFailure = (state, { errorMessage }) => ({
  ...state,
  profile: {},
  profileErrorMessage: errorMessage,
})

export const reducer = createReducer(INITIAL_STATE, {
  [ProfileTypes.UPDATE_PROFILE_SUCCESS]: updateProfileSuccess,
  [ProfileTypes.UPDATE_PROFILE_FAILURE]: updateProfileFailure,
})
