import { Link } from "react-router-dom";
import {
  CartCarBody,
  CartCardBtn,
  CartCardBtnsContainer,
  CartCardCont,
  CartCardImg,
  CartCardImgContainer,
  CartCardOff,
  CartCardOffPrice,
  CartCardOGPrice,
  CartCardPriceContainer,
  CartProdDisc,
  CartProdName,
  CountIconStyle,
  ProdCount,
  ProdCountContainer,
} from "../UI/Cartstyle";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
export const CartCard = ({id}) => {
  return (
    <CartCardCont>
      <Link to={`/product/${id}`}>
        <CartCardImgContainer>
          <CartCardImg src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-keyboard-rgb-gaming-white-small-bluetooth-png-vektor-transparent-background-png-image_5824348.png" />
        </CartCardImgContainer>
      </Link>
      <CartCarBody>
        <Link to={`/product/${id}`}>
          <CartProdName>RK ROYAL KLUDGE RK61 Mechanical Keyboard</CartProdName>
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
    </CartCardCont>
  );
};
