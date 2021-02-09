const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {
                user: action.payload
            }
        case 'EDIT_USER':
            return {
                user: action.payload
            }
        default:
            return state
    }
}

export default userReducer;