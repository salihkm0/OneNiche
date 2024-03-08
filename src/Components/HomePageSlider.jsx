import {Stack, Typography } from "@mui/material";
import Slider from "react-slick";
import { cardData } from "../Data/SliderData";
import { CardName, CardTitle, SlideCard, SlideCardImg, SlideCardImgContainer, SlideCardLink, SlideCardLogo, SlideContainer, SliderMainStack } from "../UI/HomeSliderStyle";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

export default function HomePageSlider() {
  var settings = {
    // className: "center",
    // centerMode: true,
    // centerPadding: "-100px",
    fade: true,
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    // focusOnSelect: true,
  };
  return (
    <>
      <SlideContainer>
        <Slider {...settings}>
          {cardData.map((card) => (
            <SlideCard key={card.id}>
              <Stack
            direction="row"
            sx ={SliderMainStack}
          >
            <Stack spacing={2} zIndex={5}>
              <Stack direction={"row"} spacing={2} alignItems="center">
                <SlideCardLogo src={card.SlideLogo} />
                <CardName>
                  {card.Name}
                </CardName>
              </Stack>
              <CardTitle>
                {card.Title1} <br /> {card.Title2}
              </CardTitle>
              <Stack
                direction={"row"}
                spacing={1}
                color="#fff"
                alignItems={"center"}
              >
                <SlideCardLink href="/">Shop Now</SlideCardLink>
                <ArrowForwardOutlinedIcon fontSize="30px" />
              </Stack>
            </Stack>
            <SlideCardImgContainer>
            <SlideCardImg src={card.SlideCardImg} />
            </SlideCardImgContainer>
          </Stack>
            </SlideCard>
          ))}
        </Slider>
      </SlideContainer>
    </>
  );
}
