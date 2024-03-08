import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductContainer = styled.div`
  background-color: #e9e9e9e7;
  height: 100%;
  width: 100%;
  /* margin-left: 20px; */
  display: flex;
  justify-content: center;
`;

//  Filter bOX Style in (Styled components)

export const FilterBoxPL = styled.div`
  /* background-color: #e9e9e9e7; */
  height: 100%;
  width: 190px;
  margin-top: 25px;
`;
export const FilterInsideBox = styled.div`
  /* background-color: #a52f2f53; */
  height: auto;
  padding-bottom: 10px;
  width: 170px;
  border-top: 1px solid;
`;

export const FilterHeading = styled.div`
  /* background-color: #9b4f4f53; */
  height: 65px;
  width: 170px;
  display: flex;
  justify-content: center;
`;

export const FilterInsideH1 = styled.h2`
  color: #2d2c2c;
  font-size: 15px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  margin-top: 10px;
  margin-left: 2px;
`;
export const FilterInsideH2 = styled(Link)`
  color: #464545d1;
  font-size: 12px;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  margin-top: 5px;
  margin-left: 5px;
`;

// Product list styling (Styled components)

export const ProductListContainer = styled.div`
  height: 100%;
  width: 1100px;
`;
export const PLBoxTop = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  height: 50px;
  width: 1100px;
  margin-top: 25px;
`;
export const PLBox = styled.div`
  /* background-color: #1d1c1cb5; */
  margin-top: 10px;
  height: 100%;
  width: 1100px;
`;

    // Product List Cards styling

export const ProductListCards = styled.div`
  background: #ffffff;
  height: 330px;
  width: 350px;
  padding: 3px;
  position : relative ;
  box-shadow: rgba(34, 108, 139, 0.603) 0px 2px 4px 0px rgba(61, 120, 145, 0.938) 0px 2px 16px 0px;


  &:hover {
    background-color: #f8f8f8f7;
    transform: translateY(-5px) scale(1.005) translateZ(0);
    box-shadow: 0 24px 36px rgba(0,0,0,0.11), 0 24px 46px var(--box-shadow-color);
    transition: transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
  }
`
export const PLimgContainer = styled.div`
  /* background: #74737392; */
  height: 220px;
  width: 100%;
`
export const PLcardBody =styled.div`
  padding: 5px 0;
  height: auto
`
export const PLtitle =styled.h2`
  font-size: 12px;
  font-weight: 600;
  color: #5a5a5ae5;
  line-height: 20px;
  margin-left: 5px;
`