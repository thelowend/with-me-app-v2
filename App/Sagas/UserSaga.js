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

export function* askForHelp(payload) {
  const res = yield call(userService.askForHelp, payload.id)
  if (!res.isAxiosError) {
    // yield put(UserActions.askForHelpSuccess()) //Monstrar mensaje de ask for help success
  } else {
    // yield put(UserActions.askForHelpFailure())
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

export function* sendFeedPost(payload) {
  const res = yield call(userService.sendFeedPost, payload.id, payload.target, payload.post)
  if (!res.isAxiosError) {
    UserActions.updateUserValue(res)
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

export function* fetchContactWithFeed(payload) {
  const contact = yield call(userService.fetchContactWithFeed, payload.id)
  if (!contact.isAxiosError) {
    yield put(UserActions.fetchContactInfoSuccess(contact))
  } else {
    yield put(
      UserActions.fetchContactInfoFailure('There was an error while fetching contact information.')
    )
  }
}

export function* fetchHelpRequests() {
  yield put(UserActions.fetchHelpRequestsLoading())
  const helpRequests = yield call(userService.fetchHelpRequests)
  if (!helpRequests.isAxiosError) {
    yield put(UserActions.fetchHelpRequestsSuccess(helpRequests))
  } else {
    yield put(
      UserActions.fetchHelpRequestsFailure('There was an error while fetching help requests.')
    )
  }
}

export function* addContact(payload) {
  const user = yield call(userService.addContact, payload.helper_id, payload.helper_name, payload.user_id, payload.user_name)
  if (!user.isAxiosError) {
    yield put(UserActions.addContactSuccess(user))
  } else {
    yield put(
      UserActions.addContactFailure('There was an error while adding the contact.')
    )
  }
}

export function* removeContact(payload) {
  const user = yield call(userService.removeContact, payload.helper_id, payload.user_id)
  if (!user.isAxiosError) {
    yield put(UserActions.removeContactSuccess(user))
  } else {
    yield put(
      UserActions.removeContactFailure('There was an error while removing the contact.')
    )
  }
}

