import cart from '../../resources/cart.png'
import './Cart.css'
export default function Cart(){
    const itemsInCart = 0;

    return (
        <div id='cart'>
            <span id='itemsInCart'>{itemsInCart}</span>
            <img src={cart} alt='cart-icon' id='cartIcon' />
            <span id='cart-text' >Cart</span>
        </div>
    )
}