import { styled } from "styled-components";

export const CartMainContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding: 20px 0;
  margin: 20px 0;
  /* background-color: #cecece; */
  @media (max-width: 850px) {
    flex-direction: column;
  }
`;
export const CartLeftContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  /* height: 100vh; */
  /* background-color: #a43737; */
  @media (max-width: 850px) {
    /* height: 60vh; */
    padding: 0;
  }
`;
export const CartRightContainer = styled.div`
  width: 50%;

  /* padding: 10px 20px; */
  /* border: 0.5px solid #828282c2;
  border-radius: 5px; */
  height: 70vh;
  /* background-color: #29a92e; */
  @media (max-width: 850px) {
    width: 100%;
    height: auto;
  }
`;
export const CartAddressContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 20px;
  background-color: transparent;
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: 0.5px solid #828282c2;
`;
export const CartAddress = styled.p`
  font-size: 12px;
  color: black;
  width: 100%;
`;
export const Bold = styled.b`
  font-weight: 800;
`;
export const CartAddressButton = styled.button`
  padding: 6px 15px;
  background-color: transparent;
  color: #ff7300;
  border: 0.5px solid #828282c2;
  border-radius: 5px;
  outline: none;
  font-size: 10px;
`;
export const CartSubContainer = styled.div`
  background-color: transparent;
  width: 100%;
  height: 80vh;
  padding: 0 20px;
  margin: 20px 0;
  border: 0.5px solid #828282c2;
  border-radius: 5px;
`;
export const RightHeadContainer = styled.div`
  width: 100%;
  padding: 0px 20px;
  border-bottom: 0.5px solid #828282c2;
  height: 50px;
  /* background-color: #29a92e; */
  display: flex;
  align-items: center;
  @media (max-width: 850px) {
  }
`;
export const CartRightSubContainer = styled.div`
  position: relative;
  background-color: transparent;
  /* background-color: #29a92e; */
  width: 100%;
  height: 60vh;
  /* padding: 0 20px; */
  border: 0.5px solid #828282c2;
  border-radius: 5px;
`;
export const RightHead = styled.h3`
  color: #9a9a9a;
  font-size: 18px;
  font-weight: 500;
`;

export const RightPriceList = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;
export const PriceListItem = styled.p`
  color: #000000;
  font-size: 16px;
  font-weight: 400;
`;
export const PriceListItemOff = styled.p`
  color: #23a902;
  font-size: 16px;
  font-weight: 400;
`;
export const TotalAmtContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  border-top: 0.5px dashed #828282c2;
  border-bottom: 0.5px dashed #828282c2;
  margin-top: 10px;
`;
export const TotalAmt = styled.p`
  color: #000;
  font-size: 18px;
  font-weight: 500;
`;
export const DiscountDiscription = styled.p`
  color: #158e0c;
  font-size: 14px;
  font-weight: 500;
  padding: 10px;
`;
export const PlaceOrderBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 100%; */
  height: auto;
  /* background-color : #e0e000; */
  padding: 10px;
  position: absolute;
  bottom: 0;
  right :0;
`;

export const PlaceOrderBtn = styled.button`
  background-color: #e06100;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 10px 30px;
  font-size: 18px;
  font-weight: 500;
  border-radius: 5px;
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    opacity: 0.7;
  }
  /* span {
    font-size : 18px;
    font-weight : bold;
  } */
`;
