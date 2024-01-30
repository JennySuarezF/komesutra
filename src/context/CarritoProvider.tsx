import { ReactNode, useEffect, useReducer } from "react";
import { CarritoContext, carritoReducer, initialState } from "./CarritoContext";
import { State } from "../interfaces/GlobalInterfaces";

export const CarritoProvider = ({ children }: { children: ReactNode }) => {
  let storedState: State;

  if (localStorage.getItem("carrito")) {
    try {
      storedState = JSON.parse(localStorage.getItem("carrito")!) || initialState;
    } catch (error) {
      console.error('Error al analizar los datos del carrito:', error);
      storedState = initialState;
    }
  } else {
    storedState = initialState;
    localStorage.setItem("carrito", JSON.stringify(initialState));
  }

  const [state, dispatch] = useReducer(carritoReducer, storedState);

  useEffect(() => localStorage.setItem("carrito", JSON.stringify(state)), [state]);

  return <CarritoContext.Provider value={{ state, dispatch }}>{children}</CarritoContext.Provider>;
}