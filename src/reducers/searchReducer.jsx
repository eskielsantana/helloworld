import * as ActionTypes from '../actions/ActionTypes';

const INITIAL_STATE = {
    id: 0,
    resultList: [],
    completed: false,
};

export function gerChacarasNames(chacaras) {
    chacaras.map((object, i) => {
        console.log(object.name);
        return null;
    });
}

const SearchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.SEARCH_LOAD_CHACARAS_LIST: {
            const newState = {
                ...state,
                resultList: action.resultList,
            };
            return newState;
        }
        default:
            return state;
    }
};

export default SearchReducer;
