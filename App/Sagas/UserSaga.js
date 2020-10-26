import { put, call } from 'redux-saga/effects'
import UserActions from '../Stores/User/Actions'
import { userService } from '../Services/UserService'
import AuthActions from '../Stores/Auth/Actions'

export function* fetchUser(payload) {
  yield put(UserActions.fetchUserLoading())

  const user = yield call(userService.fetchUser, payload.idToken)
  if (!user.isAxiosError) {
    yield put(UserActions.fetchUserSuccess(user))
  } else {
    yield put(UserActions.fetchUserFailure('There was an error while fetching user information.'))
    yield put(AuthActions.logout())
  }
}

export function* updateUserValue(payload) {
  yield put(UserActions.updateUserValue(payload))
}

export function* syncWithFb(payload) {
  yield put(UserActions.syncWithFbLoading())
  const user = yield call(userService.syncWithFB, payload.id, payload.fbId, payload.value)
  if (!user.isAxiosError) {
    yield put(UserActions.syncWithFbSuccess(user))
  } else {
    yield put(UserActions.syncWithFbFailure('There was an error while syncing with FB.'))
  }
}

export function* syncWithTw(payload) {
  yield put(UserActions.syncWithTwLoading())
  const user = yield call(userService.syncWithTW, payload.id, payload.twId, payload.value)
  if (!user.isAxiosError) {
    yield put(UserActions.syncWithTwSuccess(user))
  } else {
    yield put(UserActions.syncWithTwFailure('There was an error while syncing with TW.'))
  }
}

export function* sendSocialMediaPost(payload) {
  const res = yield call(userService.sendSocialMediaPost, payload.id, payload.target, payload.post)
  if (!res.isAxiosError) {
    UserActions.updateUserValue(res)
    // yield put(UserActions.fetchUserSuccess(user))
  } else {
    // yield put(UserActions.fetchUserFailure('There was an error while fetching user information.'))
  }
}

export function* fetchContactInfo(payload) {
  const contact = yield call(userService.fetchContactInfo, payload.id)
  if (!contact.isAxiosError) {
    yield put(UserActions.fetchContactInfoSuccess(contact))
  } else {
    yield put(
      UserActions.fetchContactInfoFailure('There was an error while fetching contact information.')
    )
  }
}
