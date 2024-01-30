import { Dispatch, createContext } from "react";
import { DetalleComidas, State } from "../interfaces/GlobalInterfaces";

type Action = { type: 'ADD_ITEM', payload: DetalleComidas } | { type: 'REMOVE_ITEM', payload: string }
interface CarritoContextType { state: State; dispatch: Dispatch<Action> }

export const initialState = { items: [] }

export const carritoReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      if (state.items.find(item => item.comida.nombre === action.payload.nombre)) {
        return {
          ...state, items: state.items.map(item => item.comida.nombre === action.payload.nombre ?
            { ...item, cantidad: item.cantidad + 1 } : item
          )
        };
      } else {
        return { ...state, items: [...state.items, { comida: action.payload, cantidad: 1 }] };
      }
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(item => item.comida.nombre !== action.payload) };
    default:
      return state;
  }
};

export const CarritoContext = createContext<CarritoContextType>({
  state: initialState, dispatch: () => null
});