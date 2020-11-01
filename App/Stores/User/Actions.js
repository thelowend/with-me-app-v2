import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  updateUserValue: ['user'],
  askForHelp: ['id'],
  fetchUser: ['idToken'],
  fetchUserLoading: null,
  fetchUserSuccess: ['user'],
  fetchUserFailure: ['errorMessage'],
  syncWithFb: ['id', 'fbId', 'value'],
  syncWithFbLoading: null,
  syncWithFbSuccess: ['user'],
  syncWithFbFailure: ['errorMessage'],
  syncWithTw: ['id', 'twId', 'value'],
  syncWithTwLoading: null,
  syncWithTwSuccess: ['user'],
  syncWithTwFailure: ['errorMessage'],
  sendFeedPost: ['id', 'target', 'post'],
  fetchContactInfo: ['id'],
  fetchContactInfoLoading: null,
  fetchContactInfoSuccess: ['contact'],
  fetchContactInfoFailure: ['errorMessage'],
  fetchHelpRequests: null,
  fetchHelpRequestsLoading: null,
  fetchHelpRequestsSuccess: ['helpRequests'],
  fetchHelpRequestsFailure: ['errorMessage'],
  addContact: ['helper_id', 'user_id', 'user_name'],
  addContactSuccess: ['user'],
  addContactFailure: ['errorMessage'],
})

export const UserTypes = Types
export default Creators
