import { doGetRequest } from '../RequestTypes.jsx';
import * as GlobalVars from '../../GlobalVars.jsx';

const MyChacarasSource = {
    fetchChacarasByCity: (city) => doGetRequest(`${GlobalVars.WEBSERVICE_HTTP_ADDRESS}getChacarasByCity/${city}`),
};

export default MyChacarasSource;
