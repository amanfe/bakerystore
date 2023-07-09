import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import {clearCart} from '../common/cartSlice';
import FoodItem from "../components/FoodItem";

const Cart = () => {

    const dispatch = useDispatch();

    const cartItems = useSelector((store) => store.cart.items);
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div className="m-t-50">
            <button onClick={()=>handleClearCart()}>Clear Cart</button>
            <h1>Cart Items - {cartItems.length}</h1>
            {
                cartItems.map(item => <FoodItem key={item.id} {...item} />)
            }
        </div>
    )
}

export default Cart;