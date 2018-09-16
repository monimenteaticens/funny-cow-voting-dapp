import appConfig from '../config/app.config';

class ImgurApi {
    /**
     * @param {Object} config - Object containg the API data
     */
    constructor(config = null) {
        this.config = config || appConfig;
    }

    /**
     * Request constructor
     * @param { String } [requestPath] = null]
     * @param { String } [type = 'GET'] type
     * @param { Array } [additionalRequestHeaders = null]
     * @param {String} [body = null]
     * @returns {Request}
     */
    setRequest(requestPath = null, type = 'GET', additionalRequestHeaders = null, body = null) {
        const URL = this.config.imgurApi.endpoint + requestPath;
        const requestContent = {
            method: type,
            headers: this.getRequestHeaders(additionalRequestHeaders),
        };

        if(body !== null && typeof body === 'string') {
            Object.assign(requestContent, { body });
        }

        return new Request(URL, requestContent);
    }

    /**
     * Get the fetch request header
     * @param { Array } [additionalRequestHeaders = null]
     * @returns {Headers}
     */
    getRequestHeaders(additionalRequestHeaders = null) {
        const requestHeaders = new Headers();
        requestHeaders.append('Authorization', `${this.config.imgurApi.authName} ${this.config.imgurApi.authId}`);

        if(additionalRequestHeaders instanceof Array && additionalRequestHeaders.length >= 1) {
            additionalRequestHeaders.forEach((header) => {
                requestHeaders.append(header.key, header.value);
            });
        }

        return requestHeaders;
    }

    /**
     * Get images from the Imgur API
     * @returns {Promise<*>}
     */
    async getImages() {
        const request = this.setRequest(`${this.config.imgurApi.album}/${this.config.imgurApi.albumId}`);
        const resp = await fetch(request);

        return resp.status !== 200
            ? `Server Error: ${resp.status}`
            : resp.json();
    }
}

export default ImgurApi;
