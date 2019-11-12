import {call, fork, put, takeLatest} from "redux-saga/effects";
import Services from './service';
import {LOADED_USERS, LOAD_USERS, REMOVE_USER} from "./constants";

function* fetchPosts(action) {
	// const currentState = yield select((state => state.users));
	try {
		let users = [];
		// Get date from Api
		// const users = yield call(Services.getUser, token, page, keyword);
		// Simulator for request API
		setTimeout(() => {
			users = [
				{
					id: 1,
					username: 'abc',
					email: 'abc@gmail.com'
				},
				{
					id: 2,
					username: 'abc2',
					email: 'abcd@gmail.com'
				}
			]
		}, 1000);

		yield put({
			type: LOADED_USERS,
			payload: {
				list: users,
				loaded: true,
			}
		});
	} catch (e) {
		yield put({type: LOADED_USERS, payload: {list: {}, loaded: false, error: true}});
	}

}

function* watchFetchUsers() {
	yield takeLatest(LOAD_USERS, fetchPosts);
}


export default function* postsSagas() {
	yield fork(watchFetchUsers);
}

