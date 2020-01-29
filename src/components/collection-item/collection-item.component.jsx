import React from 'react';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart-actions';
import {CollectionItemContainer,ImageContainer,CollectionFooterContainer,AddButton,NameContainer,PriceContainer} from './collection-item.styles';

const CollectionItem =({item,addItem})=>{
    const {imageUrl,name,price}=item
    return(
    <CollectionItemContainer>
        <ImageContainer className='image' imageUrl={imageUrl}/>
        <CollectionFooterContainer>
            <NameContainer>{name}</NameContainer>
            <PriceContainer>{price}</PriceContainer>
        </CollectionFooterContainer>
        <AddButton onClick={()=>addItem(item)} inverted>Add to Cart</AddButton>
    </CollectionItemContainer>
)}
const mapDispatchToProps =dispatch=>({
    addItem:item=>dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);