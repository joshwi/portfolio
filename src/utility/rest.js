const axios = require('axios');

const get = async function (url, headers = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }) {
    if (url) {
        let response = axios({
            url: url,
            method: 'GET',
            headers: headers,
        })
            .then(function (result) { return result.data })
            .catch(function (error) {
                //console.log(url, error);
                return { error: error }
            });

        return response
    }
}

const post = async function (url, body, headers = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }) {
    if (url) {
        let response = axios({
            url: url,
            method: 'POST',
            headers: headers,
            data: JSON.stringify(body)
        })
            .then(function (result) { return result.data })
            .catch(function (error) {
                //console.log(error);
                return { error: error }
            });

        return response
    }
}

export { get, post }
