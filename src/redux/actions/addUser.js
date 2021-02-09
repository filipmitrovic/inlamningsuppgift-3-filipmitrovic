const addUser = (userObject) => {
    return {
        type: 'ADD_USER',
        payload: userObject
    }
}

export default addUser;