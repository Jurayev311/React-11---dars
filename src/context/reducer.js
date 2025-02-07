export const initialState = {
    count: 0,
    wishlist: []
}


export const reducer = (state, {type, payload}) => {
    switch(type) {
        case "TOOGLE_LIKE":
            let index = state.wishlist.findIndex(item => item.id === payload.id) 
            if(index < 0) {
                return {...state, wishlist: [...state.wishlist, payload]}
            } else {
                return{...state, wishlist: state.wishlist.filter(item => item.id !== payload.id)} 
            }
        default:
            return state
    }
}