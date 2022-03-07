import { call, put, takeEvery } from 'redux-saga/effects'
import { GETALLUSERLIST } from '../Action/ActionTypes'
import { getAllUserListSuccess } from '../Action/Index'

function* allUserList() {
    try {
        // const res = yield call(fetch, "https://jsonplaceholder.typicode.com/users")
        const res = yield call(fetch, "https://dummyapi.io/data/v1/user?limit=10&page=0", { method: "GET", headers: { "app-id": "621de252474be6e228d6eb56" } })
        const data = yield res.json()
        console.log("data.data--", data.data)
        yield put(getAllUserListSuccess(data))

    } catch (err) {
        console.log(err)
    }
    // yield put(getAllUserListSuccess())
}

export function* main() {
    yield takeEvery(GETALLUSERLIST, allUserList)
}