function profileInfo(state, action) {
    switch (action.type) {
        case 'FETCH_PERSON_DATE':
            return {...state,  ...action.payload};
        
            default: return {...state}
        }
}

export default profileInfo;