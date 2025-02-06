export const initialState = {
    count: 0,
    wishlist: []
}


export const reducer = (state, {type, payload}) => {
    switch(type) {
        case "TOOGLE_LIKE":
            return {...state, wishlist: [...state.wishlist, payload]}
        default:
            return state
    }
}