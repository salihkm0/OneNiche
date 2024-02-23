import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Cards from "./Cards";
import {
  CountDownBox,
  CountDownFS,
  FlashSaleH1,
  HeadFS,
  StyledFlashSale,
} from "../Ui/StyledFlashSale";
import { CardMainBox } from "../Ui/CardStyle";

export default function FlashSale() {
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
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </Stack>
          </Box>

        </Stack>
      </Box>
    </>
  );
}
