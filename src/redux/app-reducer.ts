import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

export type InitialState = {
    initialized: boolean
}

let initialState: InitialState = {
    initialized: false
}


const appReducer = (state = initialState, action: any): InitialState => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

type initializedSuccessAType = {
    type: typeof INITIALIZED_SUCCESS
}
export const initializedSuccess = ():initializedSuccessAType => ({type: INITIALIZED_SUCCESS})

export const initializeApp = ()=> (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    Promise.all ([promise])
        .then(() => {
        dispatch(initializedSuccess());
    })
}

export default appReducer;