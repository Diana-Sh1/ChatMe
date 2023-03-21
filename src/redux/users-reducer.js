const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {id: 1, follower: false, name: 'Grigoriy', status: 'Hello!', srcLogo: 'friend1.png'},
        {id: 2, follower: true, name: 'Anna', status: 'Free for chat', srcLogo: 'friend2.png'},
        {id: 3, follower: true, name: 'Petya', status: 'Nice to meet you', srcLogo: 'logo_dialog.png'},
        {id: 4, follower: false, name: 'Lada', status: 'I need friends', srcLogo: 'logo_dialog2.png'},

    ],

}
const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u=>{
                    if (u.id === action.userID) {
                        return {...u, follower: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u=>{
                    if (u.id === action.userID) {
                        return {...u, follower: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }

}
export const followAC = (userID)=> ({type: FOLLOW, userID})
export const unfollowAC = (userID)=> ({type: UNFOLLOW, userID})
export const setUsersAC = (users)=> ({type: SET_USERS, users})

export default usersReducer;