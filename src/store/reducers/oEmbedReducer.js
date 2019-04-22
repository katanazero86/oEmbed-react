import * as types from '../actions/ActionTypes';

const initialState = {
    oEmbedContents: [],
};

export default function oEmbedStore(state = initialState, action) {
    switch (action.type) {
        case types.SET_OEMBED_CONTENT :
            state.oEmbedContents = action.payload.oEmbedContents;
            return {
                ...state
            }
        case types.GET_OEMBED_CONTENT :
            return {
                ...state
            }
        default : {
            return initialState;
        }
    }
}
