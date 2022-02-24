import { applyMiddleware, createStore } from "redux";
import rootReducer from "./Reducers/Index";
import createSagaMiddleware from 'redux-saga';
import { main } from "./Sagas/Saga";


const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(main)
export default store;