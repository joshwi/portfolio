const { get, post } = require("../utility/rest")
const types = require("./types")


export function loadPhotos() {
    return async function (dispatch) {
        return get(`https://api.unsplash.com/users/joshwi/photos/?client_id=NF-4pUvJXiaUwDVPrZ2PVV77-p5MH6h9V76rgVGq-KA`).then(photos => {
                dispatch({ type: types.LOAD_PHOTOS, photos: photos })
        }).catch(error => {
            throw error
        })
    }
}

export function loadKeys() {
    return async function (dispatch) {
        return get(`/api/v2/admin/db/keys`).then(keys => {
            dispatch({ type: types.LOAD_KEYS, keys: keys })
        }).catch(error => {
            throw error
        })
    }
}

export function loadRelationships() {
    return async function (dispatch) {
        return post(`/api/v2/admin/db/query`, { cypher: "MATCH p=(a)-[r]->(b) UNWIND labels(a) as source UNWIND labels(b) as target RETURN DISTINCT source, target, type(r) as link" }).then(res => {
            if (res.records){
                dispatch({ type: types.LOAD_RELATIONSHIPS, relationships: res.records })
            }
        }).catch(error => {
            throw error
        })
    }
}

export function setParams(params) {
    return function (dispatch) {
        return dispatch({ type: types.SET_PARAMS, params: params })
    }
}

export function setPage(key, data) {
    return function (dispatch) {
        return dispatch({ type: types.SET_PAGE, key: key, data: data })
    }
}

export function initStatus(status) {
    return function (dispatch) {
        return dispatch({ type: types.INIT_STATUS, status: status })
    }
}

export function updateCategory(key, data) {
    return function (dispatch) {
        return dispatch({ type: types.UPDATE_CATEGORY, key: key, data: data })
    }
}

export function updatePageState(view, schema, data) {
    return function (dispatch) {
        return dispatch({ type: types.UPDATE_PAGE_STATUS, view: view, schema: schema, data: data })
    }
}

export function updatePage(key, data) {
    return function (dispatch) {
        return dispatch({ type: types.UPDATE_PAGE, key: key, data: data })
    }
}

export function loadParams(params) {
    return function (dispatch) {
        return dispatch({ type: types.LOAD_PARAMS, params: params })
    }
}

export function toggleSidebar() {
    return function (dispatch) {
        return dispatch({ type: types.TOGGLE_SIDEBAR })
    }
}
