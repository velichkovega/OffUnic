let initialState = {
    isAuth: false,
    authDirty: false,
    id: null
}

function auth(state = initialState, action) {
    switch (action.type) {
        case 'AUTH_USER':
            return {...state, isAuth: action.payload.auth, 
                    authDirty: action.payload.dirty,
                    id: action.payload.id};
        
        case 'AUTH_USER_LOGOUT':
            return {...state, ...initialState}
        
            default: return {...state}
        }
}

export default auth;