const AppReducer = (state,action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return [action.payload, ...state]   
        default:
            return state
    }
}
export default AppReducer;