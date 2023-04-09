import { createContext } from "react";


export const CartContext = createContext({
    items : [],
    totaAmount : 0,
    addItem : (item) => {},
    removeItem : (id) => {}
})