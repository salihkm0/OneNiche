import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "styled-components";

// export const CategoryContainer = styled(Stack)`
//   width: 100%;
//   height: 500px;
//   /* background : #ccc; */
//   padding: 50px 0;
// `;
// export const CategoryBox = styled(Box)`
//   width: 100%;
//   height: 100%;
//   background: #efefef;
//   padding: 10px;
//   margin: 0 10px;
// `;
// export const CategoryTitle = styled.h1`
//   color: #000;
//   font-size: 24px;
//   font-weight: 400;
// `;
// export const CategoryCard = styled(Box)`
//   margin-top: 60px;
//   background: #535353;
//   width: 100%;
//   height: 160px;
// `;

export const CategoryContainer = styled.div`
  width: 100%;
  height: 100%;
  /* background : #ccc; */
  padding: 20px 0;
  margin: 40px 0;
  display : flex;
  align-items :  center;
  justify-content : space-around;
  gap : 1rem;
  @media (max-width: 637px) {
    flex-wrap : wrap;
}
`;
export const CategoryCard = styled(Box)`
  background: #eaeaea;
  width: 300px;
  height: 100%;
  /* padding :10px; */
  border: 1px solid #000;
  @media (max-width: 1410px) {
    width: 270px;
  }
  @media (max-width: 1275px) {
    width: 240px;
  }
  @media (max-width: 1139px) {
    width: 210px;
  }
  @media (max-width: 1003px) {
    width: 190px;
  }
  @media (max-width: 917px) {
    width: 170px;
  }
  @media (max-width: 818px) {
    width: 150px;
  }
  @media (max-width: 732px) {
    width: 130px;
  }
  @media (max-width: 637px) {
    min-width : 200px; 
    max-width : 100%;
  }
  @media (max-width: 479px) {
    min-width : 180px; 
  }
  @media (max-width: 432px) {
    min-width : 150px; 
  }
  @media (max-width: 360px) {
    min-width : 130px; 
  }
`;

export const CategoryCardImgContainer = styled.div`
  height: 200px;
  width: 100%;
  background: #fff;
  display: grid;
  place-items: center;
  @media (max-width: 1275px) {
    height: 160px;
  }
  @media (max-width: 1003px) {
    height: 130px;
  }
  @media (max-width: 732px) {
    height: 110px;
  }
  @media (max-width: 360px) {
    height: 90px;
  }
`;
export const CategoryCardImg = styled.img`
  height: 200px;
  width: 100%;
  @media (max-width: 1275px) {
    height: 160px;
  }
  @media (max-width: 1003px) {
    height: 130px;
  }
  @media (max-width: 732px) {
    height: 110px;
  }
  @media (max-width: 360px) {
    height: 90px;
  }
`;
export const CategoryCardBody = styled.div`
  padding: 10px 0;
  display: grid;
  place-items: center;
`;
export const CategoryCardTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: #000000;
  @media (max-width: 732px) {
    font-size: 15px;
  }
`;
export const CategoryCardPrice = styled.h2`
  font-size: 15px;
  font-weight: 400;
  color: #000000;
  @media (max-width: 732px) {
    font-size: 12px;
  }
`;
