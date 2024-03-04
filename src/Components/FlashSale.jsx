import { Box, Stack, Typography } from "@mui/material";
import Cards from "./FlahSaleCards";
import {
  ConDSpacer,
  CountDownBox,
  CountDownFS,
  FSTypoH1,
  FlashSaleH1,
  HeadFS,
  StyledFlashSale,
} from "../UI/FlashSaleStyled";
import { CardButtonContainer, CardMainBox} from "../UI/FlashSaleCardStyle";
import { StyledButton } from "../UI/ButtonStyle";
import { CardImg, CardImgContainer } from "../UI/MainCardStyle";

export default function FlashSale({days,hours,minutes,seconds}) {
    const Img1 ="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/appleairpodsenginUntitled.jpg"
    const Img2 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvs-fUQPF6VCeFOp7Wx0jfzkKkeb_6UR5NQ&usqp=CAU"
    const Img3 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-b4rI5AW28iO23T7DkbHy4RXbLUhSgtTEIQ&usqp=CAU"
    const Img4 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0qsBkvANV-BhKx1dr1ym1umis0ALMauxPGg&usqp=CAU"
    const Img5 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx-yZ8nf8gQFNKvCRr2iaf3enZz3Pswin4UQ&usqp=CAU"
    const Img6 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn4FmLD0c-H6iyemLJr9jI63636h5_f75Qr1u_5z43cWgh4XOi0UEhZ2Ogul9alC8J9ck&usqp=CAU"  
  return (
    <>
      <Box sx={StyledFlashSale}>
        <Stack direction={"column"}>
          <Box sx={HeadFS}>
            <Stack direction={"row"}>
              <Box sx={FlashSaleH1}>
                <FSTypoH1>
                Flash Sales
                </FSTypoH1>
                {/* <Typography variant="h1" sx={FSTypoH1}>
                  Flash Sales
                </Typography> */}
              </Box>
              <Box sx={CountDownBox}>
                <Stack direction={"row"}>
                  <Stack sx={CountDownFS} direction={"column"}>
                    <Typography
                      variant="h1"
                      fontSize={7}
                      marginLeft={1.3}
                      marginTop={1}
                    >
                      Day
                    </Typography>
                    <Typography variant="h1" fontSize={18} marginLeft={1.3}>
                      {days}
                    </Typography>
                  </Stack>
                  <Stack>
                    <Typography variant="h1" sx={ConDSpacer}>
                      :
                    </Typography>
                  </Stack>

                  <Stack sx={CountDownFS} direction={"column"}>
                    <Typography
                      variant="h1"
                      fontSize={7}
                      marginLeft={1.3}
                      marginTop={1}
                    >
                      Hours
                    </Typography>
                    <Typography variant="h1" fontSize={18} marginLeft={1.3}>
                      {hours}
                    </Typography>
                  </Stack>

                  <Stack>
                  <Typography variant="h1" sx={ConDSpacer}>
                      :
                    </Typography>
                  </Stack>

                  <Stack sx={CountDownFS} direction={"column"}>
                    <Typography
                      variant="h1"
                      fontSize={7}
                      marginLeft={1.3}
                      marginTop={1}
                    >
                      Minutes
                    </Typography>
                    <Typography variant="h1" fontSize={18} marginLeft={1.3}>
                      {minutes}
                    </Typography>
                  </Stack>

                  <Stack>
                  <Typography variant="h1" sx={ConDSpacer}>
                      :
                    </Typography>
                  </Stack>

                  <Stack sx={CountDownFS} direction={"column"}>
                    <Typography
                      variant="h1"
                      fontSize={7}
                      marginLeft={1.3}
                      marginTop={1}
                    >
                      Seconds
                    </Typography>
                    <Typography variant="h1" fontSize={18} marginLeft={1.3}>
                      {seconds}
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Box>

          <Box sx={CardMainBox} justifyContent={"space-around"}>
            <Stack direction={"row"}>
            <CardImg src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-keyboard-rgb-gaming-white-small-bluetooth-png-vektor-transparent-background-png-image_5824348.png" />
            <CardImg src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-keyboard-rgb-gaming-white-small-bluetooth-png-vektor-transparent-background-png-image_5824348.png" />
            <CardImg src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-keyboard-rgb-gaming-white-small-bluetooth-png-vektor-transparent-background-png-image_5824348.png" />
            <CardImg src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-keyboard-rgb-gaming-white-small-bluetooth-png-vektor-transparent-background-png-image_5824348.png" />
              {/* <Cards imgSrc ={Img1} title= "AirPods Max" star={3.5} price={1499}/>
              <Cards imgSrc ={Img2} title= "Mechanical Keyboard" subtitle ="CEO" star={2} price={1000} />
              <Cards imgSrc ={Img3} title= "Laptops" star={3} price={5000}/>
              <Cards imgSrc ={Img4} title= "Watch Ultra" star={4.5} price={1299}/> */}
            </Stack>    
          </Box>



          <CardButtonContainer>
              <StyledButton $primary>View All</StyledButton>
            </CardButtonContainer>
        </Stack>
      </Box>
    </>
  );
}
