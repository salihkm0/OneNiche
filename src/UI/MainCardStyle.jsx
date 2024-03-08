import { styled } from "styled-components";

export const StyledCard = styled.div`
  height: 350px;
  width: 270px;
  margin: 10px 0;
  position : relative ;
`;
export const CardImgContainer = styled.div`
  background: #f1f1f196;
  height: 250px;
  width: 100%;
`;
export const CardImg = styled.img`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
`;
export const CardBody = styled.div`
  /* background: #ebebebd7; */
  padding: 5px 0;
  height: auto;
`;
export const CardTitle = styled.h2`
  font-size: 15px;
  font-weight: 600;
  color: #5a5a5ae5;
  line-height: 18px;
`;
export const CardOffPrice = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: #c11111ee;
  margin-top: 5px;
 

`;
export const CardOgPrice = styled.p`
  font-size: 10px;
  font-weight: 400;
  text-decoration: line-through;
  color: #5a5a5ae5;

`;
export const CardRatingStar = {
  fontSize: " 15px",
};
export const CardRatingCount = {
  fontSize: " 10px",
  color: "#5a5a5ae5",
};
export const FavoriteIconContainer = styled.div`
    position : absolute;
    right : 10px ;
    top : 10px;
    cursor: pointer;
    height :50px;
    width : 50px;
    border-radius : 50%;
    background: #fff;
    display : grid;
    place-items : center;
`
