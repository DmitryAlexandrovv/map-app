import axios from 'axios';

class Requestwrapper {
    constructor() {
        this.axios = axios.create();
    }

    get(url, data) {
        return this.axios.get(url, {
            params: {
                ...data,
            },
        });
    }
}

export default new Requestwrapper();
