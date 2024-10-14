import Modal from "../UI/Modal"
import classes from "./Cart.module.css"
import CartContext from "../../store/cart-context"
import React, {useContext, useState} from "react";

const Cart=(props)=>{
    const cartcntx=useContext(CartContext)
    let totalAmount=cartcntx.items.reduce((curNumber, item)=>{
        return curNumber + item.price;
    }, 0);

    const cartItems=<ul  className={classes['cart-items']}>{cartcntx.items.map(item=>
         
        <li key={item.name} style={{display:"flex", justifyContent:"space-between"}}>{item.name} <br />${item.price} 
        <div>
        <p>1</p>
        <button >+</button>
        <button onClick={()=>cartcntx.removeItem(item.id)}>-</button>
        </div>
        
        </li>
        
    )}</ul>
    return <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
}

export default Cart;