import { Box, Grid, List, Stack } from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import BeenhereOutlinedIcon from "@mui/icons-material/BeenhereOutlined";
export default function Feature() {
  return (
    <>
      <Box
        sx={{
          height: {
            lg: "350 px",
            md: "400px",
            xs: "210px",
          },
          width: "100%",
        }}
      >
        <Grid container direction="row" justifyContent="space-around">
          <Grid
            direction="column"
            justifyContent={"space-around"}
            item
            xs={4}
            lg={4}
          >
            <Stack
              sx={{
                paddingTop: { lg: "7em", xs: "2em" },
                marginLeft: { sm: "2em" },
              }}
            >
           
              <Box
                sx={{
                  height: { lg: "70px", xs: "50px" },
                  width: {
                    lg: "70px",
                    xs: "50px",
                  },
                  borderRadius: { lg: "70px", xs: "50px" },
                  backgroundColor: "rgb(0, 0, 0)",
                  marginLeft: {
                    lg: "8.2em",
                    xs: "1.4em",
                    sm: "7.6vh",
                  },
                }}
              >
                <Box
                  sx={{
                    height: { lg: "50px", xs: "30px" },
                    width: { lg: "50px", xs: "30px" },
                    borderRadius: { lg: "50px", xs: "30px" },
                    backgroundColor: "black",
                    marginLeft: ".6em",
                    marginTop: ".6em",
                  }}
                >
                  <LocalShippingOutlinedIcon
                    sx={{
                      marginLeft: { lg: ".1em", xs: ".2em" },
                      color: "white",
                      marginTop: { lg: ".1em", xs: ".2em" },
                      fontSize: { sm: "1.5em", lg: "2.6em" },
                    }}
                  />
                </Box>
              </Box>
              <List
                sx={{
                  // fontFamily: "Tahoma",
                  marginLeft: { lg: "4.5em", xs: "2em", sm: "5em" },
                  marginTop: { xs: "1em" },
                  fontStyle: "bold",
                  fontSize: { lg: "1em", xs: ".6em" },
                }}
              >
                <h4>FREE AND FAST DELIVERY</h4>
              </List>
              <List
                sx={{
                  // fontFamily: '"Courier New", Courier, monospace',
                  marginLeft: { xs: "2em" },
                  fontSize: { lg: "1em", xs: ".5em" },
                }}
              >
                <h4>Free delivery for all orders over $140</h4>
              </List>
            </Stack>{" "}
          </Grid>

          <Grid
            direction="column"
            justifyContent={"space-around"}
            item
            xs={4}
            lg={4}
          >
            <Stack
              sx={{
                paddingTop: { lg: "7em", xs: "2em" },
                marginLeft: { sm: "2.8em" },
              }}
            >
              {" "}
              <Box
                sx={{
                  height: { lg: "70px", xs: "50px" },
                  width: {
                    lg: "70px",
                    xs: "50px",
                  },
                  borderRadius: { lg: "70px", xs: "50px" },
                  backgroundColor: "rgb(0, 0, 0)",
                  marginLeft: {
                    lg: "9em",
                    xs: "2em",
                    sm: "6.3vh",
                  },
                }}
              >
                <Box
                  sx={{
                    height: { lg: "50px", xs: "30px" },
                    width: { lg: "50px", xs: "30px" },
                    borderRadius: { lg: "50px", xs: "30px" },
                    backgroundColor: "black",
                    marginLeft: ".64em",
                    marginTop: ".6em",
                  }}
                >
                  <SupportAgentOutlinedIcon
                    sx={{
                      marginLeft: { lg: ".1em", xs: ".1em" },
                      marginTop: { lg: ".1em", xs: ".1em" },
                      color: "white",
                      fontSize: { xs: "1.5em", lg: "2.6em" },
                    }}
                  />
                </Box>
              </Box>
              <List
                sx={{
                  // fontFamily: "Tahoma",
                  marginLeft: { lg: "4.5em", xs: "2.5em", sm: "4em" },
                  marginTop: { xs: "1em" },
                  fontStyle: "bold",
                  fontSize: { lg: "1em", xs: ".6em" },
                }}
              >
                <h4>27/7 CUSTOMER SERVICE</h4>
              </List>
              <List
                sx={{
                  // fontFamily: '"Courier New", Courier, monospace',
                  marginLeft: { lg: "2em", xs: "2.5em" },
                  fontSize: { lg: "1em", xs: ".5em" },
                }}
              >
                <h4>Friendly 24/7 customer support</h4>
              </List>
            </Stack>{" "}
          </Grid>

          <Grid
            direction="column"
            justifyContent={"space-around"}
            item
            xs={4}
            lg={4}
          >
            <Stack
              sx={{
                paddingTop: { lg: "7em", xs: "2em" },
                marginLeft: { sm: "2em" },
              }}
            >
              {" "}
              <Box
                sx={{
                  height: { lg: "70px", xs: "50px" },
                  width: {
                    lg: "70px",
                    xs: "50px",
                  },
                  borderRadius: { lg: "70px", xs: "50px" },
                  backgroundColor: "rgb(0, 0, 0)",
                  marginLeft: {
                    lg: "9em",
                    xs: "2em",
                    sm: "6.3vh",
                  },
                }}
              >
                <Box
                  sx={{
                    height: { lg: "50px", xs: "30px" },
                    width: { lg: "50px", xs: "30px" },
                    borderRadius: { lg: "50px", xs: "30px" },
                    backgroundColor: "black",
                    marginLeft: ".64em",
                    marginTop: ".6em",
                  }}
                >
                  <BeenhereOutlinedIcon
                    sx={{
                      marginLeft: { lg: ".1em", xs: ".1em" },
                      marginTop: { lg: ".2em", xs: ".2em", sm: ".2em" },
                      color: "white",
                      fontSize: { xs: "1.5em", lg: "2.5em" },
                    }}
                  />
                </Box>
              </Box>
              <List
                sx={{
                  // fontFamily: "Tahoma",
                  marginLeft: { lg: "5em", xs: "3em", sm: "3.5em" },
                  marginTop: { xs: "1em" },
                  fontStyle: "bold",
                  fontSize: { lg: "1em", xs: ".6em" },
                }}
              >
                <h4>MONEY BACK GUARANTEE</h4>
              </List>
              <List
                sx={{
                  // fontFamily: '"Courier New", Courier, monospace',
                  marginLeft: { lg: "3em", xs: "2.5em", sm: "1.5em" },
                  fontSize: { lg: "1em", xs: ".5em" },
                }}
              >
                <h4>We return money within 30 days</h4>
              </List>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
