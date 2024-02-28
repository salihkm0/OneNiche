import { styled } from "styled-components";

export const SlideContainer = styled.div`
  background: #000;
  height: 300px;
  width: 100%;
  margin: 20px 0;
  overflow : hidden;
  position : relative;
  @media screen and (max-width: 600px) {
    height: 300px;
  }
`

export const SlideCard = styled.div`
  width: 100%;
  height: 100%;
`
export const SlideCardLogo = styled.img`
  width: 60px;
  height: 50px;
`;
export const SlideCardLink = styled.a`
  color: #fff;
  font-size: 12px;
  font-weight: 300; 
  border-bottom: 1px solid #fff;
  width : 60px;
  padding-bottom : 1px;
  @media screen and (max-width: 600px) {
    width : 65px;
  }
`;
export const SlideCardImg = styled.img`
  width: 350px;
  height: 300px;

  @media screen and (max-width: 600px) {
    /* display : none; */
    position : absolute;
    z-index : 4;
    width: 100%;
    height: 100%;
    top : 25px;
  }
`;