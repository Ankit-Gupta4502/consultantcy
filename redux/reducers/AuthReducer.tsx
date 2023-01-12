
const initialState = {
    auth:{},
    isAuthentiCated:false
}

interface actionsFace {
    payload: any,
    type: string
}

const AuthReducer = (state = initialState, action: actionsFace) => {
    return state
}

export default AuthReducer