import { Stack } from "@mui/system";
import { CardImg, CardOffPrice, CardOgPrice, CardRatingCount, CardRatingStar } from "../UI/MainCardStyle";
import { PLcardBody, PLimgContainer, PLtitle, ProductListCards } from "../UI/ProductListStyle";
import { Rating, Typography } from "@mui/material";

export default function PLCards({plimgs}) {
  return (
   
    <ProductListCards>

         <PLimgContainer>
         <CardImg src={plimgs} />
         </PLimgContainer>

         <PLcardBody>
            <PLtitle>RK ROYAL KLUDGE RK61 Mechanical Keyboard</PLtitle>

            <Stack
          direction={"row"}
          spacing={2}
          alignItems={"center"}
          marginTop={"5px"}
        >
          <CardOffPrice>$39.99</CardOffPrice>
          <CardOgPrice>$69.99</CardOgPrice>

        </Stack>
        <Stack 
          direction={"row"}
          spacing={1}
          alignItems={"center"}
          marginTop={"5px"}
        >
          <Rating
            name="half-rating-read"
            defaultValue={3}
            precision={0.5}
            sx={CardRatingStar}
            readOnly
          />
          <Typography variant="p" sx={CardRatingCount}>
            (488)
          </Typography>
        </Stack>
         </PLcardBody>

    </ProductListCards>
  );
}
