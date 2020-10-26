import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { AuthTypes } from './Actions'

export const loginSuccess = (state, { credentials }) => ({
  ...state,
  accessToken: credentials.accessToken,
  idToken: credentials.idToken,
  loggedIn: true,
  errorMessage: null,
})

export const loginFailure = (state, { errorMessage }) => ({
  ...state,
  accessToken: null,
  idToken: null,
  loggedIn: false,
  errorMessage: errorMessage,
})

export const logoutSuccess = (state) => ({
  ...state,
  loggedIn: false,
  accessToken: null,
  idToken: null,
  errorMessage: null,
})

export const logoutFailure = (state, { errorMessage }) => ({
  ...state,
  errorMessage: errorMessage,
})

export const reducer = createReducer(INITIAL_STATE, {
  [AuthTypes.LOGIN_SUCCESS]: loginSuccess,
  [AuthTypes.LOGIN_FAILURE]: loginFailure,
  [AuthTypes.LOGOUT_SUCCESS]: logoutSuccess,
  [AuthTypes.LOGOUT_FAILURE]: logoutFailure,
})
