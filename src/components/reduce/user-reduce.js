const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"

const initialState = {
    user:{
        isAuthenticated:false
    }
}
const userReduce = (state=initialState, action) => {
    switch (action.type) {
        case LOGIN:{
            return {...action.payload, isAuthenticated: true}
        }
        case LOGOUT:{
            return {isAuthenticated: true}
        }
        default:{
            return state
        }
    }
}
export const actionLogin = (user) =>{
    return {type:LOGIN, payload:user}
}
export const actionLogout = () =>{
    return {type:LOGOUT}
}

export default userReduce;