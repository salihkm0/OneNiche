import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  MainSearchCloseIcon,
  MainSearchCloseIconContainer,
  MobileNavClose,
  MobileNavOpen,
  Nav,
  NavLinks,
  NavLogo,
  NavSearch,
  NavSearchInput,
  SearchCloseIcon,
  SearchIcon,
  SubSearchCloseIconContainer,
} from "../Ui/NavbarStyle";
import DehazeOutlinedIcon from "@mui/icons-material/DehazeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Stack } from "@mui/material";
import { useRef } from "react";

export default function Navbar() {
  const [openSearch, setOpenSearch] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  const searchRef = useRef()

  useEffect(() => {
    const mobileNavHandler = (e) => {
      setMobileNav(false);
    }
    const openSearchHandler = (e) => {
      if(!searchRef.current.contains(e.target)){
        setOpenSearch(false);
      }
    }
    document.addEventListener("mousedown", mobileNavHandler)
    document.addEventListener("mousedown", openSearchHandler)
  })
  
  return (
    <>
      <Nav>
        <MobileNavOpen>
          <DehazeOutlinedIcon onClick={() => setMobileNav(!mobileNav)} />
        </MobileNavOpen>
        <NavLogo>
          <NavLink to="/">OneNiche</NavLink>
        </NavLogo>
        <NavLinks openSearch={openSearch} mobileNav={mobileNav}>
          {/* <MobileNavClose>
            <CloseOutlinedIcon onClick={() => setMobileNav(!mobileNav)} />
          </MobileNavClose> */}
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/">Sign Up</NavLink>
          </li>
        </NavLinks>
        <Stack
          alignItems={"center"}
          spacing={2}
          direction={"row"}
          height={"100%"}
        >
          {openSearch ? (
            <MainSearchCloseIconContainer
              openSearch={openSearch}
            >
              <CloseOutlinedIcon
                onClick={() => setOpenSearch(!openSearch)}
                sx={MainSearchCloseIcon}
              />
            </MainSearchCloseIconContainer>
          ) : (
            <div>
              <SearchOutlinedIcon
                onClick={() => setOpenSearch(!openSearch)}
                sx={{
                  color: "#000",
                  fontSize: "30px",
                  cursor: "pointer",
                  top: "-10px",
                }}
              />
            </div>
          )}
          <NavSearch openSearch={openSearch} ref = {searchRef}>
            <SearchOutlinedIcon sx={SearchIcon} />
            <NavSearchInput type="text" placeholder="Search here..." />
            <SubSearchCloseIconContainer openSearch={openSearch}>
              <CloseOutlinedIcon
                sx={SearchCloseIcon}
                onClick={() => setOpenSearch(!openSearch)}
              />
            </SubSearchCloseIconContainer>
          </NavSearch>
          <NavLink to={"/wishlist"}>
            <FavoriteBorderOutlinedIcon />
          </NavLink>
          <NavLink to={"/cart"}>
            <ShoppingCartOutlinedIcon />
          </NavLink>
        </Stack>
      </Nav>
    </>
  );
}
