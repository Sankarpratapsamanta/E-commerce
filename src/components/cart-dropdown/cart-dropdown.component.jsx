import React from "react";
import {connect} from 'react-redux';
import {CartDropdownContainer,EmptyMessage,CartDropdownButton,CartItems} from './cart-dropdown.styles';
import CartItem from '../cart-item/cart-item.component';
import {toggleCartHidden} from '../../redux/cart/cart-actions';
import {selectCartItems} from '../../redux/cart/cart-selectors';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
const CartDropdown =({cartItems,history,dispatch}) =>(
    <CartDropdownContainer>
        <CartItems>
            {
                cartItems.length?
                cartItems.map(cartItem=> <CartItem key={cartItem.id} item={cartItem}/>)
                :
                <EmptyMessage>Your cart is empty</EmptyMessage>
            }
        </CartItems>
        <CartDropdownButton onClick={
            ()=>{history.push('/checkout');
            dispatch(toggleCartHidden())}}>GO TO CHECKOUT</CartDropdownButton>
    </CartDropdownContainer>
)


const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems
})
export default withRouter(connect(mapStateToProps)(CartDropdown));