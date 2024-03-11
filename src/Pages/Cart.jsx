import { CartCard } from "../Components/CartCard";
import {
  Bold,
  CartAddress,
  CartAddressButton,
  CartAddressContainer,
  CartLeftContainer,
  CartMainContainer,
  CartRightContainer,
  CartRightSubContainer,
  CartSubContainer,
  DiscountDiscription,
  PlaceOrderBtn,
  PlaceOrderBtnContainer,
  PriceListItem,
  PriceListItemOff,
  RightHead,
  RightHeadContainer,
  RightPriceList,
  TotalAmt,
  TotalAmtContainer,
} from "../UI/Cartstyle";



export const Cart = () => {
  return (
    <CartMainContainer>
      <CartLeftContainer>
        <CartAddressContainer>
          <CartAddress>
            Deliver to: <Bold>Malappuram - 349023</Bold>
          </CartAddress>
          <CartAddressButton>Change</CartAddressButton>
        </CartAddressContainer>
        <CartSubContainer>
          <CartCard id = {1}/>
          <CartCard id = {2}/>
          <CartCard id = {3}/>
          <CartCard id = {4}/>
        </CartSubContainer>
      </CartLeftContainer>
      <CartRightContainer>
        <CartRightSubContainer>
          <RightHeadContainer>
            <RightHead>Price Details</RightHead>
          </RightHeadContainer>
          <RightPriceList>
            <PriceListItem>Price(2 items)</PriceListItem>
            <PriceListItem>$1299.00</PriceListItem>
          </RightPriceList>
          <RightPriceList>
            <PriceListItem>Discount</PriceListItem>
            <PriceListItemOff>-$23.56</PriceListItemOff>
          </RightPriceList>
          <RightPriceList>
            <PriceListItem>Coupons for you</PriceListItem>
            <PriceListItemOff>-$9.00</PriceListItemOff>
          </RightPriceList>
          <RightPriceList>
            <PriceListItem>Delivery Charges</PriceListItem>
            <PriceListItemOff>Free</PriceListItemOff>
          </RightPriceList>
          <RightPriceList>
            <PriceListItem>Secured Packaging Fee</PriceListItem>
            <PriceListItem>$9.99</PriceListItem>
          </RightPriceList>
          <TotalAmtContainer>
            <TotalAmt>Total Amount</TotalAmt>
            <TotalAmt>$1459.35</TotalAmt>
          </TotalAmtContainer>
          <DiscountDiscription>
            You will save $495.19 on this order
          </DiscountDiscription>
          <PlaceOrderBtnContainer>
            <PlaceOrderBtn>PLACE ORDER</PlaceOrderBtn>
          </PlaceOrderBtnContainer>
        </CartRightSubContainer>
      </CartRightContainer>
    </CartMainContainer>
  );
};
