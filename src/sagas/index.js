import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
function* test() {
alert('리덕스 사가');
}

function* test2() {
    alert('리덕스 사가2');
}

function* setOembedContent(payload) {

    console.log(payload);
    // const result = yield axios.get(payload.oEmbedContents);
    // if (result.status !== 200) {
    //     console.log(result);
    // } else if (result.status === 200) {
    //     console.log(result);
    //
    //     yield put({type : 'SET_OEMBED_CONTENT', payload : result.data});
    //
    // }

}

// function* actionWatcher() {
//     yield takeLatest('SET_OEMBED_CONTENT', test)
// }
//

export default function* rootSaga() {
    yield takeEvery('SET_FOOTER_MSG', test);
    yield takeEvery('GET_FOOTER_MSG', test2);
    yield takeEvery('SET_OEMBED_CONTENT', setOembedContent);
}
