import React from "react";
import { Box, Rating, Stack, Typography } from "@mui/material";
import Cards from "../Common_Componets/Cards";
import {
  BigImg,
  Discription,
  FBMainBox,
  MBLeftMost,
  Price,
  ProductName,
  SIMainBox,
  SmallImg,
} from "../Ui/FBMainBox";
import { RatingBox, RatingSt } from "../Ui/CardStyle";
import { Star } from "@mui/icons-material";
import { BigImgData } from "../Data/ProductData";
import { url } from "inspector";

export default function FirstBox() {
  return (
    <FBMainBox>
        {
                <BigImg background={url(BigImgData[0].img)} />
        }
      <SIMainBox>
        <SmallImg style={{ marginTop: "0px" }}>img</SmallImg>
        <SmallImg>img</SmallImg>
        <SmallImg>img</SmallImg>
        <SmallImg>img</SmallImg>
      </SIMainBox>
      <MBLeftMost>
        <Stack direction={"column"}>
          <ProductName>the name</ProductName>
          <RatingBox>
            <Stack direction={"row"} spacing={1}>
              <Rating
                name="half-rating-read"
                defaultValue={Star}
                precision={0.5}
                sx={RatingSt}
                readOnly
              />
            </Stack>
          </RatingBox>
          <Price>123</Price>
          <Discription>
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </Discription>
        </Stack>
      </MBLeftMost>
    </FBMainBox>
  );
}
