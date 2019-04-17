import * as types from '../actions/ActionTypes';

const initialState = {
    footerMsg: '제작자 : phpbae'
};

export default function footerStore(state = initialState, action) {
    switch (action.type) {
        case types.GET_FOOTER_MSG :
            return {
                ...state
            }
        case types.SET_FOOTER_MSG :
            state.footerMsg = action.msg;
            return {
                ...state
            }
        default :
            return initialState;
    }
}
