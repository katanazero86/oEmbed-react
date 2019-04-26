import * as types from '../actions/ActionTypes';

const initialState = {
    oEmbedContents: [],
    loading : false,
    error : false,
    requestURL : '',
};

export default function oEmbedStore(state = initialState, action) {
    switch (action.type) {
        case types.SET_OEMBED_CONTENT :
            state.oEmbedContents = [...state.oEmbedContents];
            state.oEmbedContents.push(action.result);
            return {
                oEmbedContents: [...state.oEmbedContents],
                loading : false,
                error : false,
            }
        case types.GET_OEMBED_CONTENT :
            return {
                oEmbedContents : [...state.oEmbedContents],
                loading: true,
                error: false,
            }
        case types.FAIL_OEMBED_CONTENT :
            return {
                oEmbedContents : [...state.oEmbedContents],
                loading : false,
                error : true,
                requestURL: action.requestURL
            }
        case types.DELETE_OEMBED_CONTENT :
            state.oEmbedContents.splice(action.itemIndex, 1);
            return {
                oEmbedContents : [...state.oEmbedContents],
                loading: false,
                error: false,
            }
        default : {
            return initialState;
        }
    }
}
