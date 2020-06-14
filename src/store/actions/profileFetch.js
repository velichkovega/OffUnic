import profiles from './../mocData/profiles';

const getProfileData = (id) => dispatch => {
    let profile = profiles(id);
    setTimeout(() => {
        dispatch({type: 'FETCH_PERSON_DATE', payload: profile})
    }, 200)
};

export default getProfileData;