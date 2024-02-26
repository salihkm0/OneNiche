import { styled } from "styled-components";

export const Topbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  width: 100%;
  height: 30px;
  padding : 10px;
  /* border : 1px solid #000; */
`;

export const TopbarHeader = styled.p`
  font-size: 12px;
  color: #fff;
  margin-right: 10px;
  @media screen and (max-width: 578px) {
    font-size: 8px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 15px 6%;
  @media screen and (max-width: 1160px) {
  }
`;
export const NavLogo = styled.div`
  font-size: 22px;
  font-weight: 500;
  transition: all 0.2s linear;
  color: #000;
  cursor : pointer;
`;
export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  column-gap: 20px;
  list-style: none;
  color: #000;
  @media screen and (max-width: 1220px) {
    display: ${(props) => (props.openSearch ? "none" : "flex")};
  }
  @media screen and (max-width: 946px) {
    display: flex;
  }
  @media screen and (max-width: 700px) {
    position: fixed;
    top: 0;
    left: ${(props) => (props.mobileNav ? "0" : "-100%")};
    height: 100%;
    max-width: 180px;
    width: 100%;
    padding-top: 100px;
    row-gap: 30px;
    flex-direction: column;
    background-color: #7c7c7c;
    /* backdrop-filter: blur(10px); */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.4s ease;
    z-index: 100;
  }
`;
export const NavSearch = styled.div`
  position: absolute;
  right: 200px;
  height: 45px;
  top: 40px;
  border-radius: 5px;
  width: 260px;
  height: 40px;
  opacity: ${(props) => (props.openSearch ? 1 : 0)};
  pointer-events: ${(props) => (props.openSearch ? "auto" : "none")};
  transition: all 0.2s linear;
  @media screen and (max-width: 1220px) {
    max-width: 555px;
    width: 100%;
  }
  @media screen and (max-width: 946px) {
    top: 85px;
    max-width: 70%;
    right: 47%;
    transform: translateX(50%);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    z-index: 99;
  }
`;
export const NavSearchInput = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 6px;
  background-color: #9090907e;
  color: #101010;
  padding: 0 15px 0 45px;
  @media screen and (max-width: 946px) {
    color: #ffffff;
    background-color: #020202;
  }
`;

export const MobileNavOpen = styled.div`
  display: none;
  @media screen and (max-width: 700px) {
    display: block;
  }
`;
export const MobileNavClose = styled.div`
  display: none;
  @media screen and (max-width: 700px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
    color: #131212;
    font-size: 20px;
    cursor: pointer;
  }
`;

export const SearchIcon = {
  position: "absolute",
  left: "15px",
  top: "50%",
  color: "#f76a4a",
  transform: "translateY(-50%)",
  transition: "all 0.2s linear",
};
export const MainSearchCloseIconContainer = styled.div`
  @media screen and (max-width: 946px) {
    display: ${(props) => (props.openSearch ? "none" : "block")};
  }
`;
export const SubSearchCloseIconContainer = styled.div`
  @media screen and (min-width: 947px) {
    display: ${(props) => (props.openSearch ? "none" : "block")};
  }
`;
export const MainSearchCloseIcon = {
  color: "#000000",
  fontSize: "30px",
  cursor: "pointer",
  top: "-10px",
};
export const SearchCloseIcon = {
  position: "absolute",
  right: "10px",
  top: "50%",
  color: "#f76a4a",
  transform: "translateY(-50%)",

  //   '@media screen and (max-width: 946px)':{
  //     color: '#222222',
  //     }
};
