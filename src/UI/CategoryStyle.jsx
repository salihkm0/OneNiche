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

export const CategoryContainer = styled(Stack)`
  width: 100%;
  height: 100%;
  /* background : #ccc; */
  padding: 20px 0;
  margin : 40px 0;
  /* overflow-x: scroll;
  display : flex;
  align-items :  center;
  justify-content : space-around;
  gap : 1rem; */
`;
export const CategoryCard = styled(Box)`
  background: #eaeaea;
  width: 300px;
  height: 100%;
  /* padding :10px; */
  border : 1px solid #000;
`;
export const CategoryCardImgContainer = styled.div`
  height: 200px;
  width: 100%;
  background: #fff;
  display: grid;
  place-items: center;
`;
export const CategoryCardImg = styled.img`
  max-height: 200px;
  max-width: 100%;
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
`;
export const CategoryCardPrice = styled.h2`
  font-size: 15px;
  font-weight: 400;
  color: #000000;
`;
