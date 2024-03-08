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
  TimerNumber,
  TimerText,
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
                <TimerNumber>02</TimerNumber>
                <TimerText>Days</TimerText>
            </TimeCountCircle>
            <TimeCountCircle>
                <TimerNumber>16</TimerNumber>
                <TimerText>Hours</TimerText>
            </TimeCountCircle>
            <TimeCountCircle>
                <TimerNumber>49</TimerNumber>
                <TimerText>Minutes</TimerText>
            </TimeCountCircle>
            <TimeCountCircle>
                <TimerNumber>20</TimerNumber>
                <TimerText>Seconds</TimerText>
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
