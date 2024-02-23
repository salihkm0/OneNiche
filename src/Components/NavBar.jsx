import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import {
  Leftside,
  NavBarLi,
  NavbarLinksContainer,
  SearchContainer,
  SearchInput,
  StyledLink,
  StyledNavbar,
  StyledNavbarLogo,
  Topbar,
  TopbarHeader,
} from "../Ui/NavbarStyle";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <Topbar>
        <TopbarHeader>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <a
            style={{
              color: "#fff",
              marginLeft: "5px",
              textDecoration: "underline",
            }}
            href="#"
          >
            Shop now
          </a>
        </TopbarHeader>
      </Topbar>
      <StyledNavbar>
        <StyledNavbarLogo>
          <a href="/">OneNiche </a>
        </StyledNavbarLogo>
        <NavbarLinksContainer>
          <StyledLink to={"/"}>Home</StyledLink>
          <StyledLink to={"/contact"}>Contact</StyledLink>
          <StyledLink to={"/about"}>About</StyledLink>
          <StyledLink to={"/"}>Sign Up</StyledLink>
        </NavbarLinksContainer>
        <Leftside>
          <SearchContainer>
            <SearchInput placeholder="What are you looking for?" type="text" />
            <SearchIcon />
          </SearchContainer>
          <NavLink to={"/wishlist"}>
            <FavoriteBorderOutlinedIcon />
          </NavLink>
          <NavLink to={"/cart"}>
            <ShoppingCartOutlinedIcon />
          </NavLink>
        </Leftside>
      </StyledNavbar>
    </>
  );
}
