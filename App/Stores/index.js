import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'
import { reducer as UserReducer } from './User/Reducers'
import { reducer as AuthReducer } from './Auth/Reducers'
import { reducer as ProfileReducer } from './Profile/Reducers'
import { reducer as EvaluationReducer } from './Evaluation/Reducers'

export default () => {
  const rootReducer = combineReducers({
    /**
     * Register your reducers here.
     * @see https://redux.js.org/api-reference/combinereducers
     */
    user: UserReducer,
    auth: AuthReducer,
    profile: ProfileReducer,
    evaluation: EvaluationReducer,
  })

  return configureStore(rootReducer, rootSaga)
}
