let users = [
    {
        logn: 'admin',
        pass: 'admin',
        id: 1
    }
]

function loginCheck(login, pass) {
    let result;
    users.forEach( elem => {
        if(elem.logn === login && elem.pass === pass) {
            result = elem.id
        }
    })

    return result;
}

export default loginCheck;