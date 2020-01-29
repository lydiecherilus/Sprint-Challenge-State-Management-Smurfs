import {
    FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, ADD_DATA_SUCCESS
} from "../actions"

const initialState = {
    smurfs: [],
    isFetching: false,
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                isFetching: true,
                error: ""
            };

        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurfs: action.payload,
                error: ""
            };

        case FETCH_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        case ADD_DATA_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
            };

        default:
            return state;
    }
};