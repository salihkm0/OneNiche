import React from "react";
import { Box, Rating, Stack, Typography } from "@mui/material";
// import Cards from "../Components/Cards";

import {
  BigImg,
  Buttons,
  Delivery,
  Discription,
  FBMainBox,
  Logo,
  MBLeftMost,
  OpDiscription,
  Option,
  PRBox,
  PRatingSt,
  Price,
  ProductName,
  SIMainBox,
  SmallImg,
} from "../UI/FBMainBox";
// import { RatingBox, RatingSt } from "../UI/CardStyle";
import { Star } from "@mui/icons-material";
import { BigImgData } from "../Data/ProductData";

export default function FirstBox() {
  return (
    <FBMainBox>          
        <BigImg src ={BigImgData[0].img} />
      <SIMainBox>
        <SmallImg />
        <SmallImg />
        <SmallImg />
        <SmallImg />
      </SIMainBox>
      <MBLeftMost>
        <Stack direction={"column"}>
          <ProductName>the name</ProductName>
          <Stack direction={"row"} spacing={1}>
            <Rating
                name="half-rating-read"
                defaultValue={Star}
                precision={0.5}
                sx={PRatingSt}
                readOnly
            />
          </Stack>
          <Price>123</Price>
          <Discription>
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </Discription>
          <Stack direction={"row"} sx={{justifyContent:"space-evenly",
                                        '@media (max-width:600px)': {
                                          padding:"5px",
                                          paddingBottom:"0px",
                                          paddingTop:"0px",
                                        }
                                      }}>
            <Buttons>Buy Now</Buttons>
            <Buttons>Add to Cart</Buttons>
          </Stack>
          <Stack direction={"column"} sx={{marginTop:"130px",
                                        '@media (max-width: 1380px)':{
                                          marginTop:"60px"
                                        },
                                        '@media (max-width:775px)': {
                                          marginTop:"50px",
                                        },
                                        '@media (max-width:600px)': {
                                          marginTop:"10px",
                                        }
                                      }}>
            <Delivery>
              <Logo />
              <Stack direction={"column"}>
                <Option>Free Delivery</Option>
                <OpDiscription>Enter your postal code for Delivery Availability</OpDiscription>
              </Stack>
            </Delivery>
            <Delivery>
              <Logo />
              <Stack direction={"column"} >
                <Option>Return Delivery</Option>
                <OpDiscription>Free 30 Days Delivery Returns. Details</OpDiscription>
              </Stack>
            </Delivery>
          </Stack>  
        </Stack>
      </MBLeftMost>
    </FBMainBox>
  );
}
