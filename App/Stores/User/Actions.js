import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  updateUserValue: ['user'],
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
  sendSocialMediaPost: ['id', 'target', 'post'],
  fetchContactInfo: ['id'],
  fetchContactInfoSuccess: ['contact'],
  fetchContactInfoFailure: ['errorMessage'],
})

export const UserTypes = Types
export default Creators
