import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const StyledButton = styled(Link)`
  /* background-color:#ff7300;  */
  background-color: ${(props) => (props.$primary ? "#ff7300" : "#00ff66")};
  color: #fff;
  border: none;
  height: 50px;
  width: 120px;
display:grid;
  place-items: center;
  font-size: 12px;
  border-radius: 5px;
  &:hover {
    font-size: 13px;
    background-color: ${(props) => (props.$primary ? "#e86b05" : "#05e35e")};
  }
  @media (max-width: 1023px) {
    height: 40px;
    width: 100px;
  }
  @media (max-width: 800px) {
    height: 30px;
    width: 80px;
    font-size: 10px;
    &:hover {
    font-size: 12px;
    background-color: ${(props) => (props.$primary ? "#e86b05" : "#05e35e")};
  }
  }
  @media (max-width: 600px) {
    width: 60px;
  }
`;

