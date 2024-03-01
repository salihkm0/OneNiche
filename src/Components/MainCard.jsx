import { Rating, Stack, Typography } from "@mui/material";
import {
  CardBody,
  CardImg,
  CardImgContainer,
  CardOffPrice,
  CardOgPrice,
  CardRatingCount,
  CardRatingStar,
  CardTitle,
  FavoriteIconContainer,
  StyledCard,
} from "../UI/MainCardStyle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";

export const MainCard = () => {
  const [favorite, setFavorite] = useState(false);
  return (
    <StyledCard>
      <FavoriteIconContainer>
        {favorite ? (
          <FavoriteIcon onClick={() => setFavorite(!favorite)} sx = {{color : 'red'}}/>
        ) : (
          <FavoriteBorderIcon onClick={() => setFavorite(!favorite)} />
        )}
      </FavoriteIconContainer>
      <CardImgContainer>
        <CardImg src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-keyboard-rgb-gaming-white-small-bluetooth-png-vektor-transparent-background-png-image_5824348.png" />
      </CardImgContainer>
      <CardBody>
        <CardTitle>RK ROYAL KLUDGE RK61 Mechanical Keyboard</CardTitle>
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
      </CardBody>
    </StyledCard>
  );
};
