import { takeEvery, put } from 'redux-saga/effects';
import actionTypes from './actionTypes';
import axios from 'axios';
import { getItemInitAction } from './actionCreators';

function* getInitList() {
    try {
        const res = yield axios.get('/list.json');
        let action = getItemInitAction(res.data)
        yield put(action);
    } catch (error) {
        console.log(error);
    }
}

function* mySaga() {
    yield takeEvery(actionTypes.GET_INIT_ITEM, getInitList);
}

export default mySaga;