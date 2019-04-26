import axios from 'axios';
import { put, delay, takeEvery } from 'redux-saga/effects';

function* test() {
alert('리덕스 사가');
}

function* test2() {
    alert('리덕스 사가2');
}

function* getOembedContent(action) {
    console.log(action);

    try {
        const result = yield axios.get(action.requestURL);
        yield delay(1000);

        if (result.status !== 200) {
            console.log(result);
            console.log('통신실패');
            yield put({type: 'FAIL_OEMBED_CONTENT', requestURL : action.requestURL});

        } else if (result.status === 200) {
            if(result.data.hasOwnProperty('error')) {
                console.log(result);
                console.log('통신실패');
                yield put({type: 'FAIL_OEMBED_CONTENT', requestURL : action.requestURL});
            } else {
                console.log(result);
                console.log('통신성공');
                yield put({type : 'SET_OEMBED_CONTENT',  result : result.data});
            }
        }
    } catch (e) {
        console.log(e);
        yield put({type: 'FAIL_OEMBED_CONTENT', requestURL : action.requestURL});
    }

}

export default function* rootSaga() {
    yield takeEvery('SET_FOOTER_MSG', test);
    yield takeEvery('GET_FOOTER_MSG', test2);
    yield takeEvery('GET_OEMBED_CONTENT', getOembedContent);
}


// put: 새 액션을 dispatch 합니다
// delay: 작업을 지연시킵니다.
// takeEvery: 특정 액션을 모니터링 하고, 발생하면 특정 함수를 발생시킵니다.

