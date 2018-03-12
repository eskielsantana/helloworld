import * as ActionTypes from '../actions/ActionTypes';

const INITIAL_STATE = {
    id: 0,
    result: [],
    chacaras: [],
    showResults: false,
    isLoading: true,
};

const HomeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.HOME_LOAD_CHACARAS_LIST: {
            const newState = {
                ...state,
                chacaras: action.chacaras,
                isLoading: false,
            };
            return newState;
        }
        case ActionTypes.SEARCH_LOAD_CHACARAS_LIST: {
            const newState = {
                ...state,
                result: action.resultList,
                showResults: true,
                isLoading: false,
            };
            return newState;
        }
        case ActionTypes.HOME_LOAD_CITIES_LIST: {
            const newState = {
                ...state,
                cities: action.resultList,
            };
            return newState;
        }   
        default:
            return state;
    }
};

export default HomeReducer;
