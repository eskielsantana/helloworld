import SearchPageData from '../data/source/searchData.jsx';

import * as ActionTypes from './ActionTypes.jsx';

export const functionGetChacarasListByCity = resultList => ({
    type: ActionTypes.SEARCH_LOAD_CHACARAS_LIST,
    resultList,
});

export function fetchChacarasByCity(city) {
    return async (dispatch) => {
        try {
            const resultList = await SearchPageData.fetchChacarasByCity(city);
            dispatch(functionGetChacarasListByCity(resultList));
        } catch (exception) {
            console.error(exception);
        }
    };
}
