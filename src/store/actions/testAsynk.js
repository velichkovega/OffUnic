const asynkGet = (test) => dispatch => {
    console.log(test)
    setTimeout(() => {
        console.log('work asynk');
        dispatch({type: 'FETCH_TRACK', payload: 'cheburek'})
    }, 200)
};

export default asynkGet;