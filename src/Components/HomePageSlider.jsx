import {Stack, Typography } from "@mui/material";
import Slider from "react-slick";
import { cardData } from "../Data/SliderData";
import { SlideCard, SlideCardImg, SlideCardLink, SlideCardLogo, SlideContainer } from "../Ui/HomeSliderStyle";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";


export default function HomePageSlider() {
  var settings = {
    // className: "center",
    centerMode: true,
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
    // pauseOnHover: false,
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
            justifyContent="center"
            alignItems="center"
            height="100%"
            gap={'150px'}
          >
            <Stack spacing={2} zIndex={5}>
              <Stack direction={"row"} spacing={2} alignItems="center">
                <SlideCardLogo src={card.SlideLogo} />
                <Typography variant="p" color="#fff">
                  {card.Name}
                </Typography>
              </Stack>
              <Typography
                variant="h1"
                color="#fff"
                fontSize="45px"
                fontWeight={700}
              >
                {card.Title1} <br /> {card.Title2}
              </Typography>
              <Stack
                direction={"row"}
                spacing={1}
                color="#fff"
                alignItems={"center"}
              >
                <SlideCardLink>Shop Now</SlideCardLink>
                <ArrowForwardOutlinedIcon fontSize="30px" />
              </Stack>
            </Stack>
            <SlideCardImg src={card.SlideCardImg} />
          </Stack>
            </SlideCard>
          ))}
        </Slider>
      </SlideContainer>
    </>
  );
}
