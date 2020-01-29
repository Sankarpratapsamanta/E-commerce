import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {selectCartItems,selectCartTotal} from '../../redux/cart/cart-selectors';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

import {CheckoutPageContainer,CheckoutHeaderContainer,TotalContainer,TextWarningContainer,HeaderBlockContainer} from './checkout.styles';

const CheckoutPage=({cartItems,total})=>(
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlockContainer>
                <span>Product</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Description</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Quatity</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Price</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Remove</span>
            </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {cartItems.map(cartItem =>(
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <TotalContainer>
            <span>TOTAL : ${total}</span>
        </TotalContainer>
        <TextWarningContainer>
            *Please use the folllowing test credit card for payments*
            <br/>
            4242 4242 4242 4242 - Exp:01/21 - CVV: 123
        </TextWarningContainer>
        <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
)

const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);