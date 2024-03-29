import { Topbar, TopbarHeader } from "../UI/NavbarStyle";
import Navbar from "./NavBar";

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
