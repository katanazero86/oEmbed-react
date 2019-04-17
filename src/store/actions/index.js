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

export function setFooterMsg(msg) {
    return {
        type: types.SET_FOOTER_MSG,
        msg : msg
    }
}
