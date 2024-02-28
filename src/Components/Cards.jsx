import { Box, Rating, Stack, Typography } from '@mui/material'
import { BuyNow, CardImgCont, CardInsideBox, CardOFPrice, CardOGPrice, CardTitle, ProductImg, AddtoCart, CardBottmMain, RatingBox, RatingSt, RatingNu } from "../Ui/CardStyle";

export default function Cards({title,imgSrc,star,price}) {
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
               </Stack>
            </RatingBox>

            <Stack justifyContent={"center"}  direction={'row'}>
            <CardOGPrice>From ₹{price}</CardOGPrice>
            </Stack>
            
            {/* <CardOFPrice>₹400</CardOFPrice> */}
            {/* <Stack direction={"row"}>
              <BuyNow>Buy Now</BuyNow>
            </Stack> */}

      </Box>
    </>
  );
}
