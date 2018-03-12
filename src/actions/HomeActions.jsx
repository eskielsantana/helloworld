import HomePageData from '../data/source/homeData.jsx';

import * as ActionTypes from './ActionTypes.jsx';


/////////////////////////// Search All the Chacaras

export const functionGetMyChacarasList = chacaras => ({
    type: ActionTypes.HOME_LOAD_CHACARAS_LIST,
    chacaras,
});

export function fetchChacaras() {
    return async (dispatch) => {
        try {
            const chacaras = await HomePageData.fetchChacaras();
            dispatch(functionGetMyChacarasList(chacaras));
        } catch (exception) {
            console.error(exception);
        }
    };
}


/////////////////////////// Search Chacaras by City

export const functionGetChacarasListByCity = resultList => ({
    type: ActionTypes.SEARCH_LOAD_CHACARAS_LIST,
    resultList,
});

export function fetchChacarasByCity(city, limit) {
    return async (dispatch) => {
        try {
            const resultList = await HomePageData.fetchChacarasByCity(city, limit);
            dispatch(functionGetChacarasListByCity(resultList));
        } catch (exception) {
            console.error(exception);
        }
    };
}

/////////////////////////// Search City Names

export const functionGetCityNames = resultList => ({
    type: ActionTypes.HOME_LOAD_CITIES_LIST,
    resultList,
});

export function fetchCityNames() {
    return async (dispatch) => {
        try {
            const resultList = await HomePageData.fetchCities();
            dispatch(functionGetCityNames(resultList));
        } catch (exception) {
            console.error(exception);
        }
    };
}


