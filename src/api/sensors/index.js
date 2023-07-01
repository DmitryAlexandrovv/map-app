import RequestWrapper from '../request-wrapper';
import { BOXES_URL } from './const';

class SensorsApi {
    static async getBoxes(near, maxDistance) {
        return RequestWrapper.get(BOXES_URL, {
            near,
            maxDistance,
        }).then(res => res.data);
    }
}

export default SensorsApi;
