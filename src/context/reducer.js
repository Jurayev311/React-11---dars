export const initialState = {
    count: 0,
    wishlist: []
}


export const reducer = (state, {type, payload}) => {
    switch(type) {
        case "TOOGLE_LIKE":
            let index = state.wishlist.findIndex(item => item.id === payload.id) 
            return {...state, wishlist: [...state.wishlist, payload]}
        default:
            return state
    }
}