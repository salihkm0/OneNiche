import { styled } from "styled-components";

export const BestSellingContainer = styled.div`
  /* background: #ccc; */
  width: 100%;
  height: 342px;
  padding: 10px 0;
  /* margin-top: 40px; */
`;
export const BestSellingHeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;
export const BestSellingHead = styled.h1`
  font-size: 30px;
  font-weight : 400;
  @media (max-width: 1023px) {
    font-size: 25px;
  }
  @media (max-width: 800px) {
    font-size: 20px;
  }
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
export const BestSellingCardContainer = styled.div`
  /* background: #552828; */
  width: 100%;
  height: 100%;
  padding: 30px 0px;
`;
