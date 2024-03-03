import { styled } from "styled-components";

export const LimitedTimeMainContainer = styled.div`
  background: #000000;
  width: 100%;
  height: auto;
  padding: 20px 60px;
  margin-top: 100px;
`;
export const LimitedTimeSubContainer = styled.div`
  color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10%;
  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
  gap: 2rem;
    margin-top : 30px;
  }
`;
export const LimitedTimeSubTitle = styled.h3`
  font-size: 14px;
  color: #00ff66;
`;
export const LimitedTimeTitle = styled.h1`
  font-size: 48px;
  font-weight: 600;
  line-height: 55px;
  color: #ffffff;
`;
export const TimeCountCircle = styled.div`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000;
`;
export const LimitedTimeImgContainer = styled.div`
  height: 300px;
  width: auto;
  border-radius: 10px;
  /* background: #3f3f3f3d; */
  /* backdrop-filter :  blur(30px); */
  /* filter: blur(1.5rem); */
  /* box-shadow: rgba(235, 235, 235, 0.35) 0px 10px 20px; */
`;
export const LimitedTimeImg = styled.img`
  height: 100%;
  width: auto;
`;
