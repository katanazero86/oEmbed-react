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


export function setOembedContent(payload) {
    return {
        type : types.SET_OEMBED_CONTENT,
        payload: payload
    }
}

export function getOembedContent() {
    return {
        type : types.GET_OEMBED_CONTENT,
    }
}
