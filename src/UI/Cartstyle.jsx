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
  }
`;
export const CartRightContainer = styled.div`
  width: 60%;
  padding: 0 20px;
  /* border: 0.5px solid #828282c2; */
  /* border-radius: 5px; */
  /* height: 50vh; */
  /* background-color: #29a92e; */
  @media (max-width: 850px) {
    width: 100%;
    height: 40vh;
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
  margin :  20px 0;
  border: 0.5px solid #828282c2;
  border-radius: 5px;
`;
