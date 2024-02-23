import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Cards from "./Cards";
import {
  CountDownBox,
  CountDownFS,
  FlashSaleH1,
  HeadFS,
  StyledFlashSale,
} from "../Ui/FlashSaleStyled";
import { CardMainBox } from "../Ui/CardStyle";


export default function FlashSale() {
    const Img1 ="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/appleairpodsenginUntitled.jpg"
    const Img2 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvs-fUQPF6VCeFOp7Wx0jfzkKkeb_6UR5NQ&usqp=CAU"
    const Img3 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-b4rI5AW28iO23T7DkbHy4RXbLUhSgtTEIQ&usqp=CAU"
    const Img4 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0qsBkvANV-BhKx1dr1ym1umis0ALMauxPGg&usqp=CAU"
  return (
    <>
      <Box sx={StyledFlashSale}>
        <Stack direction={"column"}>
          <Box sx={HeadFS}>
            <Stack direction={"row"}>
              <Box sx={FlashSaleH1}>
                <Typography variant="h1" fontSize={22}>
                  Flash Sales
                </Typography>
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
                      03
                    </Typography>
                  </Stack>
                  <Stack>
                    <Typography variant="h1" fontSize={20} marginTop={1.5}>
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
                      23
                    </Typography>
                  </Stack>

                  <Stack>
                    <Typography variant="h1" fontSize={20} marginTop={1.5}>
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
                      19
                    </Typography>
                  </Stack>

                  <Stack>
                    <Typography variant="h1" fontSize={20} marginTop={1.5}>
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
                      56
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Box>

          <Box sx={CardMainBox}>
            <Stack direction={"row"}>
              <Cards imgSrc ={Img1} title= "AirPods Max" subtitle ="Founder"/>
              <Cards imgSrc ={Img2} title= "Mechanical Keyboard" subtitle ="CEO"/>
              <Cards imgSrc ={Img3} title= "Laptops"/>
              <Cards imgSrc ={Img4} title= "Watch Ultra"/>
            </Stack>
          </Box>

        </Stack>
      </Box>
    </>
  );
}
