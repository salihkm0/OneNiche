import { Box, Stack } from '@mui/material'
import React from 'react'
import { BuyNow, CardImgCont, CardInsideBox, CardOFPrice, CardOGPrice, CardTitle, ProductImg,CardMainBox } from "../Ui/CardStyle";

export default function Cards({title,imgSrc}) {
  return (
    <>
      <Box sx={CardInsideBox}>
        <CardImgCont>
          <ProductImg src={imgSrc} />
        </CardImgCont>
        <Stack direction={"row"}>
        <BuyNow>Buy Now</BuyNow>
        <BuyNow> Add to Cart</BuyNow>
        </Stack>
          <CardTitle>{title}</CardTitle>
          <Stack spacing={2} direction={'row'}>
             <CardOGPrice>$20</CardOGPrice>
             <CardOFPrice>$40</CardOFPrice>
          </Stack>
      </Box>
    </>
  );
}
