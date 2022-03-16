import { call, put, takeEvery } from 'redux-saga/effects'
import { GETALLUSERLIST, USERDETAILSINITIATE } from '../Action/ActionTypes'
import { getAllUserListSuccess, successUserDetails } from '../Action/Index'

function* allUserList({ payload }) {
    try {
        // console.log("payload--", payload)
        // const res = yield call(fetch, "https://jsonplaceholder.typicode.com/users")
        const res = yield call(fetch, `https://dummyapi.io/data/v1/user?limit=10&page=${payload}`, { method: "GET", headers: { "app-id": "621de252474be6e228d6eb56" } })
        const data = yield res.json()
        // console.log("data.data--", data.data)
        console.log("dataaaa--", data)
        yield put(getAllUserListSuccess(data))

    } catch (err) {
        console.log(err)
        // yield put(generateError())
    }
    // yield put(getAllUserListSuccess())
}

function* userDetails({ payload }) {
    try {
        const res = yield call(fetch, `https://dummyapi.io/data/v1/user/${payload}`, { method: "GET", headers: { "app-id": "621de252474be6e228d6eb56" } })
        const data = yield res.json()
        yield put(successUserDetails(data))
    } catch (err) {
        console.log(err);
    }
}

export function* main() {
    yield takeEvery(GETALLUSERLIST, allUserList)
    yield takeEvery(USERDETAILSINITIATE, userDetails)
}