import { Stack, Typography } from "@mui/material";
import React from "react";
import { StyledButton } from "../UI/ButtonStyle";
import {
  LimitedTimeSubContainer,
  LimitedTimeMainContainer,
  LimitedTimeSubTitle,
  LimitedTimeTitle,
  TimeCountCircle,
  LimitedTimeImgContainer,
  LimitedTimeImg,
} from "../UI/LimtedTimeStyle";

export const LimtedTime = () => {
  return (
    <LimitedTimeMainContainer>
      <LimitedTimeSubTitle>Limited Time</LimitedTimeSubTitle>
      <LimitedTimeSubContainer>
        <Stack direction={"column"} spacing={3}>
          <LimitedTimeTitle>Enhance Your <br/> Music Experience</LimitedTimeTitle>
          <Stack direction={"row"} spacing={2} marginTop = "50px">
            <TimeCountCircle>
                <Typography variant="p" fontWeight={900} fontSize = {"18px"}>02</Typography>
                <Typography variant="p" fontWeight={400} fontSize = {"12px"}>Days</Typography>
            </TimeCountCircle>
            <TimeCountCircle>
                <Typography variant="p" fontWeight={900} fontSize = {"18px"}>16</Typography>
                <Typography variant="p" fontWeight={400} fontSize = {"12px"}>Hours</Typography>
            </TimeCountCircle>
            <TimeCountCircle>
                <Typography variant="p" fontWeight={900} fontSize = {"18px"}>49</Typography>
                <Typography variant="p" fontWeight={400} fontSize = {"12px"}>Minutes</Typography>
            </TimeCountCircle>
            <TimeCountCircle>
                <Typography variant="p" fontWeight={900} fontSize = {"18px"}>20</Typography>
                <Typography variant="p" fontWeight={400} fontSize = {"12px"}>Seconds</Typography>
            </TimeCountCircle>
          </Stack>
          <StyledButton $secondary>Buy now</StyledButton>
        </Stack>
        <LimitedTimeImgContainer>
        <LimitedTimeImg src="https://pngimg.com/d/wireless_speaker_PNG22.png"/>
        {/* https://pnglib.nyc3.cdn.digitaloceanspaces.com/uploads/2020/01/graphics-card_5e1b3fdb8eebe.png */}
        {/* https://freepngimg.com/thumb/computer/32745-9-gaming-computer-transparent.png */}
        </LimitedTimeImgContainer>
      </LimitedTimeSubContainer>
    </LimitedTimeMainContainer>
  );
};
