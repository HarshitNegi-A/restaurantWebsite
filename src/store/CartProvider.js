
import { useState } from "react"
import CartContext from "./cart-context"

const CartProvider = props =>{

    const [items,setItems]=useState([])

    const addItemToCartHandler= item =>{
        setItems([...items,item])
    }

    const removeItemFromCartHandler=(id)=>{
        const newItems=items.filter((item)=>{
            return item.id!==id;
        })
        setItems(newItems)
    }

    const cartContext={
        items:items ,
        totalAmount:0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;