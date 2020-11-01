import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { UserTypes } from './Actions'

export const updateUserValue = (state, { user }) => ({
  ...state,
  user: user,
})

export const fetchUserLoading = (state) => ({
  ...state,
  userIsLoading: true,
  userErrorMessage: null,
})

export const fetchUserSuccess = (state, { user }) => ({
  ...state,
  user: user,
  userIsLoading: false,
  userErrorMessage: null,
})

export const fetchUserFailure = (state, { errorMessage }) => ({
  ...state,
  user: {},
  userIsLoading: false,
  userErrorMessage: errorMessage,
})

export const syncWithFbLoading = (state) => ({
  ...state,
  syncIsLoading: true,
})

export const syncWithFbSuccess = (state, { user }) => ({
  ...state,
  user: user,
  syncIsLoading: false,
  syncErrorMessage: null,
})
export const syncWithFbFailure = (state, { errorMessage }) => ({
  ...state,
  syncIsLoading: false,
  syncErrorMessage: errorMessage,
})

export const syncWithTwLoading = (state) => ({
  ...state,
  syncIsLoading: true,
})

export const syncWithTwSuccess = (state, { user }) => ({
  ...state,
  user: user,
  syncIsLoading: false,
  syncErrorMessage: null,
})
export const syncWithTwFailure = (state, { errorMessage }) => ({
  ...state,
  syncIsLoading: false,
  syncErrorMessage: errorMessage,
})

// Contact Info
export const fetchContactInfoLoading = (state) => ({
  ...state,
  contactInfoLoading: true,
  contactInfoErrorMessage: null,
})
export const fetchContactInfoSuccess = (state, { contact }) => ({
  ...state,
  contactInfo: contact,
  contactInfoLoading: false,
  contactInfoErrorMessage: null,
})
export const fetchContactInfoFailure = (state, { errorMessage }) => ({
  ...state,
  contactInfo: null,
  contactInfoLoading: false,
  contactInfoErrorMessage: errorMessage,
})

// Help Requests List
export const fetchHelpRequestsLoading = (state) => ({
  ...state,
  helpRequestsLoading: true,
  helpRequestsErrorMessage: null,
})
export const fetchHelpRequestsSuccess = (state, { helpRequests }) => ({
  ...state,
  helpRequests: helpRequests,
  helpRequestsErrorMessage: null,
})
export const fetchHelpRequestsFailure = (state, { errorMessage }) => ({
  ...state,
  helpRequests: null,
  helpRequestsErrorMessage: errorMessage,
})

export const addContactSuccess = (state, { user }) => ({
  ...state,
  user: user,
  addContactErrorMessage: null,
})
export const addContactFailure = (state, { errorMessage }) => ({
  ...state,
  addContactErrorMessage: errorMessage,
})

export const reducer = createReducer(INITIAL_STATE, {
  [UserTypes.UPDATE_USER_VALUE]: updateUserValue,
  [UserTypes.FETCH_USER_LOADING]: fetchUserLoading,
  [UserTypes.FETCH_USER_SUCCESS]: fetchUserSuccess,
  [UserTypes.FETCH_USER_FAILURE]: fetchUserFailure,
  [UserTypes.SYNC_WITH_FB_LOADING]: syncWithFbLoading,
  [UserTypes.SYNC_WITH_FB_SUCCESS]: syncWithFbSuccess,
  [UserTypes.SYNC_WITH_FB_FAILURE]: syncWithFbFailure,
  [UserTypes.SYNC_WITH_TW_LOADING]: syncWithTwLoading,
  [UserTypes.SYNC_WITH_TW_SUCCESS]: syncWithTwSuccess,
  [UserTypes.SYNC_WITH_TW_FAILURE]: syncWithTwFailure,
  [UserTypes.FETCH_CONTACT_INFO_LOADING]: fetchContactInfoLoading,
  [UserTypes.FETCH_CONTACT_INFO_SUCCESS]: fetchContactInfoSuccess,
  [UserTypes.FETCH_CONTACT_INFO_FAILURE]: fetchContactInfoFailure,
  [UserTypes.FETCH_HELP_REQUESTS_LOADING]: fetchHelpRequestsLoading,
  [UserTypes.FETCH_HELP_REQUESTS_SUCCESS]: fetchHelpRequestsSuccess,
  [UserTypes.FETCH_HELP_REQUESTS_FAILURE]: fetchHelpRequestsFailure,
  [UserTypes.ADD_CONTACT_SUCCESS]: addContactSuccess,
  [UserTypes.ADD_CONTACT_FAILURE]: addContactFailure,
})
