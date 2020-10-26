import { put, call } from 'redux-saga/effects'
import ProfileActions from '../Stores/Profile/Actions'
import UserActions from '../Stores/User/Actions'
import { userService } from '../Services/UserService'
import NavigationService from '../Services/NavigationService'

export function* updateProfile(payload) {
  const res = yield call(userService.updateProfile, payload)
  if (!res.isAxiosError) {
    UserActions.updateUserValue(res)
    yield put(ProfileActions.updateProfileSuccess())
    NavigationService.navigateAndReset('MainScreen')
  } else {
    yield put(ProfileActions.updateProfileFailure())
  }
}
