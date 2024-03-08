import { Bold, CartAddress, CartAddressButton, CartAddressContainer, CartLeftContainer, CartMainContainer, CartRightContainer, CartSubContainer } from "../UI/Cartstyle";


export const Cart = () => {
  return(
   <CartMainContainer>
      <CartLeftContainer>
          <CartAddressContainer>
            <CartAddress>Deliver to: <Bold>Malappuram - 349023</Bold></CartAddress>
            <CartAddressButton>Change</CartAddressButton>
          </CartAddressContainer>
          <CartSubContainer>
            
          </CartSubContainer>
      </CartLeftContainer>
      <CartRightContainer>
        Right
      </CartRightContainer>
    </CartMainContainer>
  )
};
