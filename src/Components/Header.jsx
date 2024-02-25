import React from "react";
import { Topbar, TopbarHeader } from "../Ui/NavbarStyle";
import Navbar from "./Navbar";

export default function Header() {
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
      <Navbar />
    </>
  );
}
