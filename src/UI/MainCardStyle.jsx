import { styled } from "styled-components";

export const StyledCard = styled.div`
  height: 370px;
  width: 270px;
  margin: 10px 0;
  position: relative;
  @media (max-width: 1028px) {
    height: 300px;
    width: 220px;
  }
  @media (max-width: 600px) {
    height: 240px;
    width: 122px;
  }
`;
export const StyledBSCard = styled.div`
  height: 350px;
  width: 350px;
  margin: 10px 0;
  position: relative;
  @media (max-width: 1733px) {
    height: 350px;
    width: 300px;
  }
  @media (max-width: 1507px) {
    width: 100%;
  }
`;

export const CardImgContainer = styled.div`
  background: #f1f1f196;
  height: 250px;
  width: 100%;
  @media (max-width: 1028px) {
    height: 180px;
  }
  @media (max-width: 600px) {
    height: 130px;
  }
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
export const LimitedOff = styled.p`
  font-size: 12px;
  font-weight: 500;
  padding: 2px 4px;
  color: #fff;
  border-radius: 2px;
  background: #ff0000;
  width: 40px;
  display: grid;
  place-items: center;
`;
export const LimitedTitle = styled.p`
  font-size: 13px;
  font-weight: 700;
  color: #ff0000;
`;
export const CardTitle = styled.h2`
  font-size: 15px;
  font-weight: 600;
  color: #5a5a5ae5;
  line-height: 18px;
  @media (max-width: 1028px) {
    font-size: 12px;
    line-height: 15px;
  }
  @media (max-width: 600px) {
    line-height: 12px;
    font-size: 10px;
  }
`;
export const CardOffPrice = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: #c11111ee;
  margin-top: 5px;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
export const CardOgPrice = styled.p`
  font-size: 10px;
  font-weight: 400;
  text-decoration: line-through;
  color: #5a5a5ae5;

`;
export const CardRatingStar = {
  fontSize: " 15px",
  "@media (max-width: 600px)": {
    fontSize: "12px",
  },
};
export const CardRatingCount = {
  fontSize: " 10px",
  color: "#5a5a5ae5",
  "@media (max-width: 600px)": {
    fontSize: "8px",
  },
};
export const FavoriteIconContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 5px;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: #ffffff;
  display: grid;
  place-items: center;
  /* @media (max-width: 600px) {
    height: 10px;
  width: 10px;
  right: 20px;
  } */
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
  @media (max-width: 600px) {
    height: 12px;
    width: 25px;
    font-size: 8px;
  }
`;
