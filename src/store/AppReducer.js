const AppReducer = (state,action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return [action.payload, ...state]
    
            break;
        default:
            return state
    }
}
export default AppReducer;