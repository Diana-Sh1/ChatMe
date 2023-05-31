import profileReducer, {actions} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?'},
        {id: 2, message: 'I\'s my first react app'}
    ],
    newPostText: '',
    profile: null,
    status: ''
}
it ('length of posts should be incremented', () => {
    //1. test data
    let action = actions.addPost('Hey')
    //2. action
    let newState = profileReducer(state, action)
    //3. expectation
   expect(newState.posts.length).toBe(3);
})
it ('message of new post should be correct', () => {
    //1. test data
    let action = actions.addPost('Hey')
    //2. action
    let newState = profileReducer(state, action)
    //3. expectation
    expect(newState.posts[2].message).toBe('Hey');
})
it ('length of messages should be decrement after deleting', () => {
    //1. test data
    let action = actions.deletePost(1)
    //2. action
    let newState = profileReducer(state, action)
    //3. expectation
    expect(newState.posts.length).toBe(1);
})
it (`after deleting length of messages shouldn't be decrement if id is incorrect`, () => {
    //1. test data
    let action = actions.deletePost(100)
    //2. action
    let newState = profileReducer(state, action)
    //3. expectation
    expect(newState.posts.length).toBe(2);
})