import { Stack } from "@mui/material";
import Slider from "react-slick";
import {
  BestSellingCardContainer,
  BestSellingContainer,
  BestSellingHead,
  BestSellingHeadContainer,
} from "../UI/BestSellingStyle";
import { StyledButton } from "../UI/ButtonStyle";
import { MainCard } from "./MainCard";
import MiniButton from "./MiniButton";

export const FlashSale = () => {
  const Img1 =
    "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/appleairpodsenginUntitled.jpg";
  const Img2 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvs-fUQPF6VCeFOp7Wx0jfzkKkeb_6UR5NQ&usqp=CAU";
  const Img3 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-b4rI5AW28iO23T7DkbHy4RXbLUhSgtTEIQ&usqp=CAU";
  const Img4 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0qsBkvANV-BhKx1dr1ym1umis0ALMauxPGg&usqp=CAU";
  // const Img5 =
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx-yZ8nf8gQFNKvCRr2iaf3enZz3Pswin4UQ&usqp=CAU";
  // const Img6 =
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn4FmLD0c-H6iyemLJr9jI63636h5_f75Qr1u_5z43cWgh4XOi0UEhZ2Ogul9alC8J9ck&usqp=CAU";
  var settings = {
    // className: "center",
    // centerMode: true,
    centerPadding: "-10px",
    // fade: true,
    dots: false, 
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    // autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    // pauseOnHover: false,
    // focusOnSelect: true,

    responsive: [
      {
        breakpoint: 2200,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1519,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1357,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1013,
        settings: {
          slidesToShow: 2.8,
          slidesToScroll: 1,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 818,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 677,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "-40px",

          // initialSlide: 2,
        },
      },
      {
        breakpoint: 462,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // centerMode: true,
          // centerPadding: "-40px",
        },
      },
    ],
  };
  return (
    <>
      <BestSellingContainer>
        <MiniButton text={"Today's"} />
        <BestSellingHeadContainer>
          <BestSellingHead>Hurry Up!</BestSellingHead>
        </BestSellingHeadContainer>
        <BestSellingCardContainer>
          <Slider {...settings}>
            <MainCard id={"1"} isNew={true}  imgSrc={Img1}  inFlashSale = {true} flashSaleOff = {25}/>
            <MainCard id={"2"} isNew={false} imgSrc={Img2}  inFlashSale = {true} flashSaleOff = {50}/>
            <MainCard id={"3"} isNew={false} imgSrc={Img3}  inFlashSale = {true} flashSaleOff = {10}/>
            <MainCard id={"4"} isNew={true}  imgSrc={Img4}  inFlashSale = {true} flashSaleOff = {30}/>
          </Slider>
        </BestSellingCardContainer>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          marginTop = {"80px"}
        >
          <StyledButton $primary>View All</StyledButton>
        </Stack>
      </BestSellingContainer>
    </>
  )
}
