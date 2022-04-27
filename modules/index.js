import {combineReducers} from 'redux';
import {all} from 'redux-saga/effects';
import counter, {couterSaga} from
const rootReducer = combineReducers({
    counter,
    user,
    loading
});
export function* rootSaga(){
    yield all([counterSaga(),userSaga]);
}
export default rootReducer;