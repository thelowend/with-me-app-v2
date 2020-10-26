import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  login: null,
  loginSuccess: ['credentials'],
  loginFailure: ['errorMessage'],
  logout: null,
  logoutSuccess: [],
  logoutFailure: ['errorMessage'],
})

export const AuthTypes = Types
export default Creators
