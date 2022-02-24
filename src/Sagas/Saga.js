import { call, put, takeEvery } from 'redux-saga/effects'
import { GETALLUSERLIST } from '../Action/ActionTypes'
import { getAllUserListSuccess } from '../Action/Index'

function* allUserList() {
    try {
        const res = yield call(fetch, "https://jsonplaceholder.typicode.com/users")
        const data = yield res.json()
        // console.log(data)
        yield put(getAllUserListSuccess(data))

    } catch (err) {
        console.log(err)
    }
    // yield put(getAllUserListSuccess())
}

export function* main() {
    yield takeEvery(GETALLUSERLIST, allUserList)
}