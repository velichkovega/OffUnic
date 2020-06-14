import userSecure from './../mocData/userSecure';
const checkUser = (login, password) => dispatch => {
    let auth = userSecure(login,password);
    setTimeout(() => {
        dispatch({type: 'AUTH_USER', payload: {
            auth: !!auth,
            dirty: true,
            id: auth
        }})
    }, 200)
};

export default checkUser;