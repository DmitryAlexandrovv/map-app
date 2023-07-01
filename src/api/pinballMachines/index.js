import RequestWrapper from '../request-wrapper';
import { LOCATIONS_URL } from './const';

class PinballMachinesApi {
    static async getPinballMachines(region) {
        return RequestWrapper.get(LOCATIONS_URL, {
            region,
        }).then(res => res.data);
    }
}

export default PinballMachinesApi;
