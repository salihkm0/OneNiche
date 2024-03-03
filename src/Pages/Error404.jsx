import React from "react";
import styled from "styled-components";

const mobileBreakpoint = "450px";
const tabletBreakpoint = "750px";

export default function NotFoundPage() {
  return (
    <CenteredContainer>
      <Page404Container>
        <Heading1>404 </Heading1>
        <FourZeroFourBg />
        <Heading2>Looks like you're lost</Heading2>
        <Heading3>The page you are looking for is not available!</Heading3>
        <Link404 href="#" className="home-link">
          Go Home
        </Link404>
      </Page404Container>
    </CenteredContainer>
  );
}
//
// styles
const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;

  @media (max-width: ${tabletBreakpoint}) {
    height: auto;
  }
`;

const Page404Container = styled.div`
  background: #fff;
  text-align: center;
`;

const FourZeroFourBg = styled.div`
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
  height: 300px;
  width: 800px;
  background-position: center;
  background-size: cover;
  @media (max-width: ${mobileBreakpoint}) {
    width: 450px;
  }
`;

const Heading1 = styled.h1`
  font-size: 100px;
  font-family: "Audiowide", sans-serif;
  text-shadow: 3px 3px 3px #ababab;
  color: #333131;
  @media (min-width: ${tabletBreakpoint}) {
    font-size: 110px;
  }
  @media (max-width: ${mobileBreakpoint}) {
    font-size: 70px;
    padding-top: 20px;
  }
`;

const Heading2 = styled.h2`
  font-size: 40px;
  font-family: "Courier New", Courier, monospace;
  font-weight: 600;

  @media (max-width: ${mobileBreakpoint}) {
    font-size: 24px;
  }
  @media (min-width: ${tabletBreakpoint}) {
    font-size: 44px;
  }
`;

const Heading3 = styled.h3`
  font-size: 40px;
  font-family: Copperplate, Papyrus, fantasy;
  @media (max-width: ${mobileBreakpoint}) {
    font-size: 16.6px;
  }
`;

const Link404 = styled.a`
  color: #fff;
  padding: 10px 20px;
  background: #39ac31;
  border-radius: 3px;
  margin: 10px 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  font-weight: 600;
  cursor: pointer;

  @media (max-width: ${mobileBreakpoint}) {
    font-size: 15px;
    padding: 8px 16px;
  }

  &:hover {
    background: #0b9c10;
  }
`;
