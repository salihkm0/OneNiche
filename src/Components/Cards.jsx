import { Box, Rating, Stack, Typography } from '@mui/material'
import React from 'react'
import { BuyNow, CardImgCont, CardInsideBox, CardOFPrice, CardOGPrice, CardTitle, ProductImg, AddtoCart, CardBottmMain, RatingBox, RatingSt } from "../Ui/CardStyle";

export default function Cards({title,imgSrc,star,rating}) {
  return (
    <>
      <Box sx={CardInsideBox}>
        <CardImgCont>
          <ProductImg src={imgSrc} />
        </CardImgCont>
          <CardTitle>{title}</CardTitle>
          
            <RatingBox>
               <Stack direction={"row"} spacing={1}>
                    <Rating name="half-rating-read" defaultValue={star} precision={0.5} sx={RatingSt} readOnly/>
                    <Typography variant="p">({rating})</Typography>
               </Stack>
            </RatingBox>

          <Stack  direction={'row'}>
             <CardOGPrice>₹200</CardOGPrice>
             <CardOFPrice>₹400</CardOFPrice>
            </Stack>
            <Stack direction={"row"}>
              <BuyNow>Buy Now</BuyNow>
            </Stack>
      </Box>
    </>
  );
}
