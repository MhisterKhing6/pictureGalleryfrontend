class Config {
    // Static property for continuationToken
    static continuationToken;

    static currentLoadedPage = 1;

    // Static property for baseUrl with a default value
    static baseUrl = 'http://picture-gallery-backend-185396260.eu-west-1.elb.amazonaws.com';  // Default value for baseUrl

    // Static setter for continuationToken
    static setContinuationToken(token) {
        this.continuationToken = token;
    }

    // Static getter for continuationToken
    static getContinuationToken() {
        return this.continuationToken;
    }

    // Static setter for baseUrl
    static setBaseUrl(url) {
        this.baseUrl = url;
    }

    // Static getter for baseUrl
    static getBaseUrl() {
        return this.baseUrl;
    }
}

export {Config}
