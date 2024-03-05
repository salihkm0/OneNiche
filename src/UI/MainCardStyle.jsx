import { styled } from "styled-components";

export const StyledCard = styled.div`
  height: 350px;
  width: 270px;
  margin: 10px 0;
  position: relative;
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
export const LimitedTitle = styled.p`
  font-size: 12px;
  font-weight: 400;
  padding : 2px 4px; 
  color: #fff;
  border-radius: 2px;
  background: #ff0000;
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
  position: absolute;
  right: 10px;
  top: 5px;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: #fff;
  display: grid;
  place-items: center;
`;
export const NewTimeTag = styled.p`
  position: absolute;
  left: 10px;
  top: 10px;
  height: 20px;
  width: 40px;
  font-size: 12px;
  border-radius: 2px;
  background: #48ff00;
  color: #fff;
  display: grid;
  place-items: center;
`;
