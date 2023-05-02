import { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { Default } from "./data";

interface ContextType{
  reducerState:any;
  reducerDispatch:any
}

export const ReduceContext = createContext<ContextType>({
  reducerState:null,
  reducerDispatch:null,
});
export const ReducerProvider = ({ children }: any) => {
  const [reducerState, reducerDispatch] = useReducer(reducer,Default)
  return <ReduceContext.Provider value={{reducerState, reducerDispatch}}>
    {children}
  </ReduceContext.Provider>
}
