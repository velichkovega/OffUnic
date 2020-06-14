let initialState = {
    kek: 'lol'
}

function trackReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_TRACK':
            return {...state, kek: action.payload};
        
            default: return {...state}
        }
}

export default trackReducer;