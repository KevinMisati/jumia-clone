import React, { createContext, useReducer } from "react"
import AppReducer from "./AppReducer"

const initialState = [];

export const Context = createContext(initialState);




const StoreProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(AppReducer, initialState)
    const addToCartHandler = () => {
        dispatch({ type: "ADD_TO_CART" })
    }

    return (
        <Context.Provider value={
            {
                products: state,
                addToCartHandler
            }
        }>
            {children}
        </Context.Provider>
    )
}
export default StoreProvider;
