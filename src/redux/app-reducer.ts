import {getAuthUserData} from "./auth-reducer";
import {AppStateType, InferActionsTypes} from "./redux-store";
import {ThunkAction} from "redux-thunk";


export type InitialState = {
    initialized: boolean
}

let initialState: InitialState = {
    initialized: false
}


const appReducer = (state = initialState, action: ActionsTypes): InitialState => {
    switch (action.type) {
        case 'INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}
type ActionsTypes = InferActionsTypes<typeof actions>

const actions = {
    initializedSuccess: () => ({type: 'INITIALIZED_SUCCESS'} as const)
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const initializeApp = ()=> (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    Promise.all ([promise])
        .then(() => {
        dispatch(actions.initializedSuccess());
    })
}

export default appReducer;