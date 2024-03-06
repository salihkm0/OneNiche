import { styled } from "styled-components";

export const SlideContainer = styled.div`
  background: #000;
  height: 300px;
  width: 100%;
  margin: 20px 0;
  overflow: hidden;

  position: relative;
  @media screen and (max-width: 1054px) {
    height: 250px;
  }
  @media screen and (max-width: 877px) {
    height: 210px;
  }
  @media screen and (max-width: 745px) {
    height: 190px;
  }
  @media screen and (max-width: 627px) {
    
  }
  @media screen and (max-width: 600px) {
    padding : 20px 0;
  }
`;

export const SlideCard = styled.div`
  width: 100%;
  height: 100%;
  
`;
export const SlideCardLogo = styled.img`
  width: 60px;
  height: 50px;
  @media screen and (max-width: 1054px) {
    width: 45px;
    height: 35px;
  }
  @media screen and (max-width: 877px) {
    width: 35px;
    height: 25px;
  }
`;
export const CardName = styled.p`
  color: #fff;
  font-size: 22px;
  @media screen and (max-width: 1054px) {
    font-size: 18px;
  }
  @media screen and (max-width: 877px) {
    font-size: 15px;
  }
  @media screen and (max-width: 745px) {
    font-size: 12px;
  }
`;
export const CardTitle = styled.h1`
  color: #fff;
  font-size: 45px;
  font-weight: 700;
  @media screen and (max-width: 1054px) {
    font-size: 35px;
  }
  @media screen and (max-width: 877px) {
    font-size: 28px;
  }
  @media screen and (max-width: 745px) {
    font-size: 22px;
  }
`;

export const SlideCardLink = styled.a`
  color: #fff;
  font-size: 12px;
  font-weight: 300;
  border-bottom: 1px solid #fff;
  width: 60px;
  padding-bottom: 1px;
  @media screen and (max-width: 1054px) {
    font-size: 9px;
  }
  @media screen and (max-width: 877px) {
    width: 45px;
  }
  @media screen and (max-width: 600px) {
    width: 65px;
  }
`;
export const SlideCardImgContainer = styled.div`
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
export const SlideCardImg = styled.img`
  width: 350px;
  height: 300px;
  @media screen and (max-width: 1054px) {
    width: 280px;
    height: 240px;
  };
  @media screen and (max-width: 877px) {
    width: 240px;
    height: 200px;
  };
  @media screen and (max-width: 745px) {
    width: 220px;
    height: 180px;
  };
  @media screen and (max-width: 627px) {
    display: none;
    /* position : absolute;
    z-index : 4;
    width: 100%;
    height: 100%;
    top : 25px; */
  }
`;

export const SliderMainStack = {
  justifyContent: "center",
  alignItems: "center",
  gap: "150px",
  "@media screen and (max-width: 877px) ": {
    gap: "100px",
  },
};
