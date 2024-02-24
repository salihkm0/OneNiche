import styled from "styled-components";


export const CardMainBox = {
  // backgroundColor: "#090808ad",
  height: "100%",
  width: "100%",
  padding: "10px",
  overflowX: "scroll",
  "&::-webkit-scrollbar": {
    display: "hidden",
//   borderRadius:" 10px"

  },
};
export const CardInsideBox = {
  // backgroundColor: "#dcdcdcf7",
  // border: "2px solid red",
  // borderColor: "#434241",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
  height: "300px",
  width: "230px",
  marginLeft: "10px",
  marginRight: "10px",
  borderRadius:" 10px"
};

export const ProductImg = styled.img`
  height: 200px;
  width: 250px;
  transform: scale(1.05);

  @media (max-width: 600px) {
    height: 150px; // 180px * 0.8 = 144px
    width: 130px; // 150px * 0.8 = 120px
    margin-left: 10px;
    margin-top: 16px;
  }
`;

export const CardImgCont = styled.div`
  background-Color:#3b3b3b56;
  /* padding: 2px; */
  /* border-radius: 10px; */
  border-top-left-radius:10px;
  border-top-right-radius:10px;
  border-top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60%;
  width: 100%;
  overflow: hidden;
`;
export const CardTitle = styled.h1`
  /* background-Color:#000000; */
  font-size: 15px;
  margin-left: 10px;
  margin-top: 6px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 200;
  color: #000000cf;
`;
export const CardOGPrice = styled.p`
  /* background-Color:#000000;  */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  margin-left: 10px;
  font-family: Arial, Helvetica, sans-serif;
  color: #000000;
`;
export const CardOFPrice = styled.p`
  /* background-Color:#000000; */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  margin-left: 10px;
  color: #e42f0f;
  text-decoration: line-through;
`;
export const BuyNow = styled.button`
  color: #ffffff;
  font-size: 15px;
  cursor: pointer;
  background-color: #010101;
  border: none;
  height: 44px;
  width: 100%;
  transition: all 0.5s  ease-in-out;
  border-radius: 5px;

  &:hover {
    background-color: #c9c9c9cd;
    color: #010101;
    font-size: 18px;
  }
`;
export const CardBottmMain = styled.div`
  /* background-color:#0c0c0ccd;  */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 100%px;
  /* margin-left:20px; */
`;
export const ViewAll = styled.button`
  /* background-color: #ff7300; */
  background-color:${props => props.$primary ? "#ff7300" : "#BF4F74"}; 
  border: none;
  height: 50px;
  width:120px;
  font-size: 12px;
  border-radius: 5px;
  /* &:hover {
    background-color: #d92f2fa0;
    color: #010101;
    font-size: 13px;

  } */
`;
export const RatingBox = styled.div`
  font-size: 13px;
  margin-left: 9px;
`
export const RatingSt = {
    fontSize:" 13px",
}
