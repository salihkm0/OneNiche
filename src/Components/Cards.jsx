import { Box, Stack } from '@mui/material'
import React from 'react'
import { BuyNow, CardImgCont, CardInsideBox, CardOFPrice, CardOGPrice, CardTitle, ProductImg,CardMainBox, AddtoCart, SpanHover } from "../Ui/CardStyle";

export default function Cards({title,imgSrc}) {
  return (
    <>
      <Box sx={CardInsideBox}>
        <CardImgCont>
          <ProductImg src={imgSrc} />
        </CardImgCont>
          <CardTitle>{title}</CardTitle>
          <Stack spacing={2} direction={'row'}>
             <CardOGPrice>$20</CardOGPrice>
             <CardOFPrice>$40</CardOFPrice>
          </Stack>
          <Stack direction={"row"}>
           <BuyNow><SpanHover>Buy Now </SpanHover></BuyNow>
           <AddtoCart><SpanHover> Add to Cart</SpanHover></AddtoCart>
        </Stack>
      </Box>
    </>
  );
}
