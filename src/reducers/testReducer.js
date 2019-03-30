import * as types from '../actions/ActionTypes';


const initialState = {
    storeTest : '나는 스토어로 고통받는다'
};

export default function test (state = initialState, action) {

    switch (action.type){
        case types.TEST :
            return {
                ...state,
            }
        default :
            return initialState;
    }
}