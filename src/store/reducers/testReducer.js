let initialState = {
    name: 'test',
    age: 23,
}

function testReducer(state = initialState, action) {
    switch (action.type) {
        case 'TEST_TYPE':
            return {...state, name: action.payload};
        
            default: return {...state}
        }
}

export default testReducer;