import React, { createContext, useContext, useReducer } from 'react'

//prepares data layer
export const StateContext = createContext(); //creating a context

export const StateProvider = ({ reducer, initialState, children }) => {
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
}

export const useStateValue = () => useContext(StateContext);