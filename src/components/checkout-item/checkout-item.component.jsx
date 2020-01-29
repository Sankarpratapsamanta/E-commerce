import React from 'react';
import {connect} from 'react-redux';
import {CheckoutItemContainer,QuantityContainer,ImageContainer,TextContainer,RemoveContainer} from './checkout-item.styles';
import { clearItemFromCart,addItem,removeItem } from '../../redux/cart/cart-actions';

const CheckoutItem =({cartItem,clearItem,addItem,removeItem})=>{
    const {name,imageUrl,price,quantity}=cartItem
    return(
    <CheckoutItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt='item' />
        </ImageContainer>
        <TextContainer className='name'>{name}</TextContainer>
        <QuantityContainer>
            <div onClick={()=>removeItem(cartItem)}>&#10094;</div>
            <span>{quantity}</span>
            <div onClick={()=>addItem(cartItem)}>&#10095;</div>
        </QuantityContainer>
        <TextContainer className='price'>{price}</TextContainer>
        <RemoveContainer onClick={()=>clearItem(cartItem)}>&#10005;</RemoveContainer>
    </CheckoutItemContainer>
)
}


const mapDispatchToProps =dispatch =>({
    clearItem:item =>dispatch(clearItemFromCart(item)),
    removeItem:item=>dispatch(removeItem(item)),
    addItem:item=>dispatch(addItem(item))
    
})

export default connect(null,mapDispatchToProps)(CheckoutItem);