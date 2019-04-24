import * as types from './ActionTypes';

export function test() {
    return {
        type: types.TEST
    };
}


export function getFooterMsg() {
    return {
        type: types.GET_FOOTER_MSG
    }
}

export function setFooterMsg(payload) {
    return {
        type: types.SET_FOOTER_MSG,
        payload : payload
    }
}


export function setOembedContent(result) {
    return {
        type : types.SET_OEMBED_CONTENT,
        result,
    }
}

export function getOembedContent(requestURL) {
    return {
        type : types.GET_OEMBED_CONTENT,
        requestURL,
    }
}

export function failOembedContent(requestURL) {
    return {
        type : types.FAIL_OEMBED_CONTENT,
        requestURL,
    }
}
