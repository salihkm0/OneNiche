import { styled } from "styled-components";

export const Topbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  width: 100%;
  height: 30px;
  /* border : 1px solid #000; */
`;

export const TopbarHeader = styled.p`
font-size : 12px;
color : #fff;
margin-right : 10px;
`

export const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: transparent;
  width: 100%;
  height: 70px;
  /* border : 1px solid #000; */
`;
export const StyledNavbarLogo = styled.h1`
  font-size: 20px;
  color: #000;
`;

export const NavbarLinksContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30%;
  height: 100%;
  list-style: none;
`;

const NavBarLi = styled.li`
  color: #000000;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  /* transition: all 0.2s ease-in;
  &:hover {
    transform: scale(.8);
    color: #000;
  } */
`;

export const StyledLink = ({ children, to }) => (
  <NavBarLi>
    <a href={to}>{children}</a>
  </NavBarLi>
);

export const SearchContainer = styled.div`
    background-color : #e6e5e5ae;
    border-radius : 5px;
    color : #605c5c;
    width : 260px;
    height : 40px;
    padding : 0px 10px;
    display : flex;
    align-items : center;
`;
export const Leftside = styled.div`
    display : flex;
    justify-content : space-evenly;
    align-items : center;
    gap : 2em;
`
export const SearchInput = styled.input`
    width :100%;
    height : 100%;
    background: transparent;
    border : none;
    outline : none;
    
`
