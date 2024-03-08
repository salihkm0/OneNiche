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
  margin-top: 10px;
  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
    gap: 2rem;
    margin-top: 30px;
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
  @media (max-width: 1239px) {
    font-size: 38px;
  }
  @media (max-width: 1016px) {
    font-size: 30px;
    line-height: 45px;
  }
  @media (max-width: 839px) {
    font-size: 25px;
    line-height: 30px;
  }
  @media (max-width: 689px) {
    font-size: 20px;
    line-height: 22px;
  }
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
  @media (max-width: 1239px) {
    height: 50px;
    width: 50px;
  }
  @media (max-width: 839px) {
    height: 35px;
    width: 35px;
  }
`;
export const TimerNumber = styled.p`
  font-weight: 900;
  font-size: 18px;
  @media (max-width: 1239px) {
    font-size: 13px;
  }
  @media (max-width: 839px) {
    font-size: 10px;
  }
`;
export const TimerText = styled.p`
  font-weight: 400;
  font-size: 12px;
  @media (max-width: 1239px) {
    font-size: 8px;
  }
  @media (max-width: 839px) {
    font-size: 6px;
  }
`;
export const LimitedTimeImgContainer = styled.div`
  height: 300px;
  width: auto;
  @media (max-width: 1239px) {
    height: 250px;
  }
  @media (max-width: 1016px) {
    height: 150px;
  }
`;
export const LimitedTimeImg = styled.img`
  height: 100%;
  width: auto;
`;
