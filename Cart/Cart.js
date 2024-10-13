import Modal from "../UI/Modal"
import classes from "./Cart.module.css"
import CartContext from "../../store/cart-context"
import React, {useContext} from "react";

const Cart=(props)=>{
    const cartcntx=useContext(CartContext)
    const cartItems=<ul className={classes['cart-items']}>{cartcntx.items.map(item=>
         
        <li>Name:{item.name} Price:{item.price} Quantity:{item.quantity}</li>
    )}</ul>

<<<<<<< HEAD
=======
    const cartItems=<ul className={classes['cart-items']}>{[{id:'c1', name:'sushi', amount:2, price:12.99}].map(item=>{
        <li>{item.name}</li>
    })}</ul>

>>>>>>> 586a2932a3cdac114b69dc4f048c0ad55c89b179
    return <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.62</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
}

export default Cart;