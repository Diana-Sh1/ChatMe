

type SideBarPersonType = {
    id: number
    person: string
    src: string
}
let initialState = [
    {id: 1, person: 'Petya', src: 'friend1.png'},
    {id: 2, person: 'Anna', src: 'friend2.png'},
    {id: 3, person: 'Grigoriy', src: 'logo_dialog.png'}
] as SideBarPersonType[]

type InitialState = typeof initialState
const sidebarReducer = (state = initialState, action: any): InitialState => {
    return state;
}
export default sidebarReducer;