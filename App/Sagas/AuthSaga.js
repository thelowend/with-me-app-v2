import { put, call } from 'redux-saga/effects'
import AuthActions from 'App/Stores/Auth/Actions'
import { auth0Service } from 'App/Services/Auth0Service'
import NavigationService from 'App/Services/NavigationService'

export function* login() {
  const result = yield call(auth0Service.login)
  if (result && result.credentials) {
    yield put(AuthActions.loginSuccess(result.credentials))
    NavigationService.navigateAndReset('MainScreen')
  } else {
    yield put(AuthActions.loginFailure('There was an error while trying to log in.'))
    NavigationService.navigateAndReset('LoginScreen')
  }
}

export function* logout() {
  const error = yield call(auth0Service.logout)
  if (!error) {
    yield put(AuthActions.logoutSuccess())
  } else {
    yield put(AuthActions.logoutFailure('There was an error while trying to log out.'))
  }
  NavigationService.navigateAndReset('LoginScreen')
}
