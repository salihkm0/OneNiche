import { Stack } from "@mui/material";
import { StyledButton } from "../UI/ButtonStyle";
import {
  OurProductsCardContainer,
  OurProductsContainer,
  OurProductsHead,
  OurProductsHeadContainer,
} from "../UI/OurProductsStyle";
import { MainCard } from "./MainCard";
import MiniButton from "./MiniButton";

export const OurProducts = () => {
  return (
    <>
      <OurProductsContainer>
        <MiniButton text={"Our Products"} />
        <OurProductsHeadContainer>
          <OurProductsHead>Keep shopping</OurProductsHead>
        </OurProductsHeadContainer>
        <OurProductsCardContainer>
          <MainCard isNew={true}/>
          <MainCard isNew={false}/>
          <MainCard isNew={true}/>
          <MainCard isNew={false}/>
          <MainCard isNew={false}/>
          <MainCard isNew={true}/>
          <MainCard isNew={false}/>
          <MainCard isNew={true}/>
        </OurProductsCardContainer>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StyledButton $primary>View All</StyledButton>
        </Stack>
      </OurProductsContainer>
    </>
  );
};
