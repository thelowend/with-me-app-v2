import { put, call, delay } from 'redux-saga/effects'
import NavigationService from 'App/Services/NavigationService'
import { auth0Service } from 'App/Services/Auth0Service'
import AuthActions from 'App/Stores/Auth/Actions'

/**
 * The startup saga is the place to define behavior to execute when the application starts.
 */
export function* startup() {
  yield delay(1000)
  const result = yield call(auth0Service.login)
  if (result && result.credentials) {
    yield put(AuthActions.loginSuccess(result.credentials))
    NavigationService.navigateAndReset('MainScreen')
  } else {
    yield put(AuthActions.loginFailure())
    NavigationService.navigateAndReset('LoginScreen')
  }
}
