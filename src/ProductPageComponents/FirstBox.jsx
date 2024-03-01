import React from "react";
import { Box, Rating, Stack, Typography } from "@mui/material";
import Cards from "../Common_Componets/Cards";
import { BigImg, FBMainBox, MBLeftMost, ProductName, SmallImg } from "../Ui/FBMainBox";
import { RatingBox, RatingSt } from "../Ui/CardStyle";
import { Star } from "@mui/icons-material";



export default function FirstBox(){
    return(
        <FBMainBox>
            <Stack direction={"column"}>
                <SmallImg style={{marginTop:"0px"}}>img</SmallImg>
                <SmallImg>img</SmallImg>
                <SmallImg>img</SmallImg>
                <SmallImg>img</SmallImg>
            </Stack>
            <BigImg>IMG</BigImg>
            <MBLeftMost>
                <Stack direction={"column"}>
                    <ProductName>the name</ProductName>
                    <RatingBox>
                        <Stack direction={"row"} spacing={1}>
                            <Rating name="half-rating-read" defaultValue={Star} precision={0.5} sx={RatingSt} readOnly/>
                        </Stack>
                    </RatingBox>
                </Stack>
            </MBLeftMost>
        </FBMainBox>

    )
}