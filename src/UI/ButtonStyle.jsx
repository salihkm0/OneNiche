import { styled } from "styled-components";


export const StyledButton = styled.button`
  /* background-color:#ff7300;  */
  background-color:${props => props.$primary ? "#ff7300" : "#00ff66"}; 
  color: #fff;
  border: none;
  height: 50px;
  width:120px;
  font-size: 12px;
  margin-top:7px;
  border-radius: 5px;
  @media (max-width:600px) {
    height: 40px;
    width:80px;
    margin-bottom:10px;
  }
  &:hover {
    background-color: #ff7300d7;
    color: #010101;
    font-size: 13px;
  }
  

`;