const { combineReducers } = require("redux")
const types = require("./types")

const dbReducer = (state = { keys: {}, params: { view: "table", source: "teams", target: "games", label: "kan" } }, action) => {
    switch (action.type) {
        case types.LOAD_KEYS:
            return { ...state, keys: { ...action.keys } }
        case types.LOAD_RELATIONSHIPS:
            return { ...state, relationships: action.relationships  }
        case types.LOAD_PHOTOS:
            return { ...state, photos: action.photos  }
        case types.SET_PARAMS:
            return { ...state, params: {...state.params, ...action.params} }
        default:
            return state
    }
}

const viewReducer = (state = { sidebar: true, settings: false }, action) => {
    switch (action.type) {
        case types.SET_VIEW:
            return { ...state, [action.key]: !state.key }
        default:
            return state
    }
}

const paramsReducer = (state = { view: "table", source: "teams", target: "games", label: "kan" }, action) => {
    switch (action.type) {
        case types.SET_PARAMS:
            return { ...state, ...action.params }
        default:
            return state
    }
}

const pagesReducer = (state = { }, action) => {
    switch (action.type) {
        case types.SET_PAGE:
            return { ...state, [action.key]: { ...state[action.key], ...action.data } }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    view: viewReducer,
    params: paramsReducer,
    pages: pagesReducer,
    db: dbReducer
})

export default rootReducer