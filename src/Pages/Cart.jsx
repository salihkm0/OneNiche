import {
  Bold,
  CartAddress,
  CartAddressButton,
  CartAddressContainer,
  CartCarBody,
  CartCard,
  CartCardBtn,
  CartCardBtnsContainer,
  CartCardImg,
  CartCardImgContainer,
  CartCardOff,
  CartCardOffPrice,
  CartCardOGPrice,
  CartCardPriceContainer,
  CartLeftContainer,
  CartMainContainer,
  CartProdDisc,
  CartProdName,
  CartRightContainer,
  CartRightSubContainer,
  CartSubContainer,
  CountIconStyle,
  DiscountDiscription,
  PlaceOrderBtn,
  PlaceOrderBtnContainer,
  PriceListItem,
  PriceListItemOff,
  ProdCount,
  ProdCountContainer,
  RightHead,
  RightHeadContainer,
  RightPriceList,
  TotalAmt,
  TotalAmtContainer,
} from "../UI/Cartstyle";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";

export const Cart = () => {
  const id = 1;
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
          <CartCard>
            <CartCardImgContainer>
              <CartCardImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-b4rI5AW28iO23T7DkbHy4RXbLUhSgtTEIQ&usqp=CAU" />
            </CartCardImgContainer>
            <CartCarBody>
            <Link to={`/product/${id}`}>
              <CartProdName>
                RK ROYAL KLUDGE RK61 Mechanical Keyboard
              </CartProdName>
              </Link>
              <CartProdDisc>RGB,Mechanichal</CartProdDisc>
              <CartCardPriceContainer>
                <CartCardOffPrice>39.99</CartCardOffPrice>
                <CartCardOGPrice>$59.99</CartCardOGPrice>
                <CartCardOff>38% off</CartCardOff>
              </CartCardPriceContainer>
              <ProdCountContainer>
                <RemoveIcon sx={CountIconStyle} />
                <ProdCount>1</ProdCount>
                <AddIcon sx={CountIconStyle} />
              </ProdCountContainer>
              <CartCardBtnsContainer>
                <CartCardBtn>Buy now</CartCardBtn>
                <CartCardBtn>Save for later</CartCardBtn>
                <CartCardBtn>Remove</CartCardBtn>
              </CartCardBtnsContainer>
            </CartCarBody>
          </CartCard>
          <CartCard>
            <CartCardImgContainer>
              <CartCardImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvs-fUQPF6VCeFOp7Wx0jfzkKkeb_6UR5NQ&usqp=CAU" />
            </CartCardImgContainer>
            <CartCarBody>
            <Link to={`/product/${id}`}>
              <CartProdName>
                RK ROYAL KLUDGE RK61 Mechanical Keyboard
              </CartProdName>
              </Link>
              <CartProdDisc>RGB,Mechanichal</CartProdDisc>
              <CartCardPriceContainer>
                <CartCardOffPrice>39.99</CartCardOffPrice>
                <CartCardOGPrice>$59.99</CartCardOGPrice>
                <CartCardOff>38% off</CartCardOff>
              </CartCardPriceContainer>
              <ProdCountContainer>
                <RemoveIcon sx={CountIconStyle} />
                <ProdCount>1</ProdCount>
                <AddIcon sx={CountIconStyle} />
              </ProdCountContainer>
              <CartCardBtnsContainer>
                <CartCardBtn>Buy now</CartCardBtn>
                <CartCardBtn>Save for later</CartCardBtn>
                <CartCardBtn>Remove</CartCardBtn>
              </CartCardBtnsContainer>
            </CartCarBody>
          </CartCard>
          <CartCard>
            <CartCardImgContainer>
              <CartCardImg src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/appleairpodsenginUntitled.jpg" />
            </CartCardImgContainer>
            <CartCarBody>
            <Link to={`/product/${id}`}>
              <CartProdName>
                RK ROYAL KLUDGE RK61 Mechanical Keyboard
              </CartProdName>
              </Link>
              <CartProdDisc>RGB,Mechanichal</CartProdDisc>
              <CartCardPriceContainer>
                <CartCardOffPrice>39.99</CartCardOffPrice>
                <CartCardOGPrice>$59.99</CartCardOGPrice>
                <CartCardOff>38% off</CartCardOff>
              </CartCardPriceContainer>
              <ProdCountContainer>
                <RemoveIcon sx={CountIconStyle} />
                <ProdCount>1</ProdCount>
                <AddIcon sx={CountIconStyle} />
              </ProdCountContainer>
              <CartCardBtnsContainer>
                <CartCardBtn>Buy now</CartCardBtn>
                <CartCardBtn>Save for later</CartCardBtn>
                <CartCardBtn>Remove</CartCardBtn>
              </CartCardBtnsContainer>
            </CartCarBody>
          </CartCard>
          <CartCard>
          <Link to={`/product/${id}`}>
            <CartCardImgContainer>
              <CartCardImg src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-keyboard-rgb-gaming-white-small-bluetooth-png-vektor-transparent-background-png-image_5824348.png" />
            </CartCardImgContainer>
            </Link>
            <CartCarBody>
            <Link to={`/product/${id}`}>
              <CartProdName>
                RK ROYAL KLUDGE RK61 Mechanical Keyboard
              </CartProdName>
              </Link>
              <CartProdDisc>RGB,Mechanichal</CartProdDisc>
              <CartCardPriceContainer>
                <CartCardOffPrice>39.99</CartCardOffPrice>
                <CartCardOGPrice>$59.99</CartCardOGPrice>
                <CartCardOff>38% off</CartCardOff>
              </CartCardPriceContainer>
              <ProdCountContainer>
                <RemoveIcon sx={CountIconStyle} />
                <ProdCount>1</ProdCount>
                <AddIcon sx={CountIconStyle} />
              </ProdCountContainer>
              <CartCardBtnsContainer>
                <CartCardBtn>Buy now</CartCardBtn>
                <CartCardBtn>Save for later</CartCardBtn>
                <CartCardBtn>Remove</CartCardBtn>
              </CartCardBtnsContainer>
            </CartCarBody>
          </CartCard>
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
