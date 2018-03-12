import { doGetRequest } from '../RequestTypes.jsx';
import * as GlobalVars from '../../GlobalVars.jsx';

const MyChacarasSource = {
    fetchChacaras: () => doGetRequest(`${GlobalVars.WEBSERVICE_HTTP_ADDRESS}getAllChacaras`),
    fetchChacarasByCity: (city, limit) => doGetRequest(`${GlobalVars.WEBSERVICE_HTTP_ADDRESS}getChacarasByCity/${city}/${limit}`),
    fetchCities: (city) => doGetRequest(`${GlobalVars.WEBSERVICE_HTTP_ADDRESS}getStatesAndCities/`),
};
export default MyChacarasSource;

