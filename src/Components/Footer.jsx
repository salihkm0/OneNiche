import React from "react";
import styled from "styled-components";
import Divider from "@mui/material/Divider";
import { Grid, InputAdornment } from "@mui/material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const mobileBreakpoint = "450px";
const tabletMinWidth = "768px";
const tabletMaxWidth = "1224px";

export default function Footer() {
  return (
    <StyledFooter>
      <GridContainer container>
        <Grid item xs={6} lg={3}>
          <SecondDiv>
            <FirstHeading>Account</FirstHeading>
            <SubHeading>My Account</SubHeading>
            <SubHeading>Login / Register</SubHeading>
            <SubHeading>Cart</SubHeading>
            <SubHeading>Wishlist</SubHeading>
            <SubHeading>Shop</SubHeading>
          </SecondDiv>
        </Grid>
        <Grid item xs={6} lg={3}>
          <SecondDiv>
            <FirstHeading>Exclusive</FirstHeading>
            <SubHeading>Subscribe</SubHeading>
            <SubHeading>Get 10% off your first order</SubHeading>

            <EmailInputContainer>
              
              <EmailInput placeholder="Enter your email " type="text" />
              <SendOutlinedIcon sx={{ fontSize:{
                lg: 'large',xs:'small',sm:'medium'
              }}} />
            </EmailInputContainer>
          </SecondDiv>
        </Grid>

        <Grid item xs={6} lg={3}>
          <SecondDiv>
            <FirstHeading>Support</FirstHeading>
            <SubHeading>
             
              111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.
            </SubHeading>
            <SubHeading>exclusive@gmail.com</SubHeading>
            <SubHeading> +88015-88888-9999</SubHeading>
          </SecondDiv>
        </Grid>

        <Grid item xs={6} lg={3}>
          <SecondDiv>
            <FirstHeading>Privacy Policy</FirstHeading>
            <SubHeading> Terms Of Use</SubHeading>
            <SubHeading>FAQ</SubHeading>
            <SubHeading>Cart</SubHeading>
            <SubHeading>Contact</SubHeading>
          </SecondDiv>
        </Grid>
      </GridContainer>

      <Divider
        sx={{
          marginTop: { lg: "20px", xs: "2vh" },
          backgroundColor: "rgb(171, 171, 171)",
        }}
      />
      <CopyRight>© Copyright Rimel 2024. All right reserved</CopyRight>
    </StyledFooter>
  );
}

// Styled Components
const StyledFooter = styled.div`
  background-color: black;
  width: 100%;
  height: 37vh;

  @media (min-width: ${tabletMinWidth}) and (max-width: ${tabletMaxWidth}) {
    height: 45vh;
  }
  @media (max-width: ${mobileBreakpoint}) {
    height: 45vh;
  }
`;

const GridContainer = styled(Grid)`
  @media (max-width: ${mobileBreakpoint}) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

const SecondDiv = styled.div`
  color: white;
  list-style-type: none;
  padding: 20px 0px 0px 20px;
`;

const FirstHeading = styled.ul`
  font-size: 3.3vh;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin-left: 10vh;

  @media (max-width: ${mobileBreakpoint}) {
    font-size: 1.5vh;
    margin-left: 3vh;
  }
@media(min-width: ${tabletMinWidth}) and (max-width: ${tabletMaxWidth}){
  font-size: 1.8vh;
}
`;

const SubHeading = styled.li`
  font-size: 2.2vh;
  font-family: "Lucida Sans Unicode";
  margin-top: 1vh;

  margin-left: 10vh;

  @media (max-width: ${mobileBreakpoint}) {
    font-size: 1.2vh;
    margin-left: 3vh;
  }
  @media (min-width: ${tabletMinWidth}) and (max-width: ${tabletMaxWidth}) {
    font-size: 1.3vh;
  }
`;


const CopyRight = styled.p`
  font-size: larger;
  font-weight: 600;
  color: grey;
  justify-content: center;
  display: flex;
  margin-top: 1vh;
  @media (max-width: ${mobileBreakpoint}) {
    font-size: smaller;
    margin-top: 8px;
  }
`;

const EmailInput = styled.input`
  background-color: transparent;
width:100%;
height:100%;
border:none;
outline: none;
color: white;
font-size:2.2vh;
@media (max-width:${mobileBreakpoint}) {
  font-size:1.3vh;
}
    @media (min-width: ${tabletMinWidth}) and (max-width: ${tabletMaxWidth}) {
    font-size:1.7vh;

  }
  
`;
const EmailInputContainer = styled.div`
display:flex;
justify-content: space-between;
align-items:center;
border:1px solid white;
  height: 5vh;
  width: 25vh;
  margin-top: 2vh;
  margin-left: 10vh;
  border-radius: 3px;
  padding:0 5px ;
  @media (max-width:${mobileBreakpoint}) {
    height: 3vh;
  width: 16vh;
  margin-top: 2vh;
  margin-left: 2.4vh;
  border-radius: 3px;}

    @media (min-width: ${tabletMinWidth}) and (max-width: ${tabletMaxWidth}) {
    height: 2.6vh;
  width: 17vh;
  margin-top: 1vh;
  margin-left: 9.5vh;
  border-radius: 3px;
  
  }

  
`