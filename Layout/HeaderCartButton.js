import { useContext } from "react"
import CartContext from "../../store/cart-context"
import CartIcon from "../Cart/CartIcon"
import classes from "./HeaderCartButton.module.css"

const HeaderCartButton=(props)=>{
<<<<<<< HEAD
    const cartCtx=useContext(CartContext);

    // const numberOfCartItems=cartCtx.items.reduce((curNumber, item)=>{
    //     return curNumber + item.amount;
    // }, 0);

=======
>>>>>>> 586a2932a3cdac114b69dc4f048c0ad55c89b179
    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {/* {numberOfCartItems} */}
        </span>
    </button>
}

export default HeaderCartButton;