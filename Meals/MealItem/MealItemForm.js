import classes from "./MediaItemForm.module.css"
import Input from "../../UI/Input";
import React, {useContext} from "react";
import CartContext from "../../../store/cart-context";

const MealItemForm=(props)=>{

    const cartcntx=useContext(CartContext)

    const addItemToCart=(event)=>{
        event.preventDefault();
        cartcntx.addItem(props.item)
        
    }

    return <form className={classes.form}>
        <Input label="Amount" input={{
            id:'amount',
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'
        }}/>
        <button onClick={addItemToCart}>+ Add</button>
    </form>
}

export default MealItemForm;