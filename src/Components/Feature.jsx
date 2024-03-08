import { Box, Grid, List, Stack } from "@mui/material";
import React from "react";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import BeenhereOutlinedIcon from "@mui/icons-material/BeenhereOutlined";
export default function Feature() {
  return (
    <>
      <Box
        sx={{paddingTop: {
          md: '4em',
          xs: '3em',
          lg: '6em',
          sm:'4em'
        }, marginLeft: {
        lg:'2em'
      },
          height: {
            
            xs: "250px",
            lg: '350px',
            xl: '450px',
            md:'300px'
         
          },
          width: "100%",
        }
      }
      >
        <Grid container direction="row" justifyContent="space-between">
          <Grid
            direction="column"
            justifyContent={"space-around"}
            item
            xs={4}
            lg={4}
          >
            <Stack
              sx={{
               
                marginLeft: { sm: "1em" },
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
                    lg: "10em",
                    xs: "2em",
                    sm: "9vh",
                    md:'14vh'
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
                  marginLeft: { lg: "6em", xs: "2em", sm: "3em",md:'6em' },
                  marginTop: { xs: "1em" },
                  fontStyle: "bold",
                  fontSize: { lg: "1em", xs: ".6em",md:'.8em' },
                }}
              >
                <h4>FREE AND FAST DELIVERY</h4>
              </List>
              <List
                sx={{
                  // fontFamily: '"Courier New", Courier, monospace',
                  marginLeft: { xs: "2em",lg:'9.5vh',md:'5em' },
                  fontSize: { lg: "1em", xs: ".5em",md:'.7em' },
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
              
                marginLeft: { sm: "2.8em" },
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
                    lg: "9em",
                    xs: "3em",
                    sm: "3em",
                    md:'6em'
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
                  marginLeft: { lg: "5em", sm: "3em",xs:'2em' },
                  marginTop: { xs: "1em" },
                  fontStyle: "bold",
                  fontSize: { lg: "1em", xs: ".6em" ,md:'.8em'},
                }}
              >
                <h4>27/7 CUSTOMER SERVICE</h4>
              </List>
              <List
                sx={{
                  // fontFamily: '"Courier New", Courier, monospace',
                  marginLeft: { xs: "2.5em", sm: "2.4em",lg:'3em' },
                  fontSize: { lg: "1em", xs: ".5em",md:'.7em' },
                }}
              >
                <h4>Friendly 24/7 customer support</h4>
              </List>
            </Stack>
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
                    lg: "9em",
                  xs:'3em',
                    sm: "3.5em",
                    md:'15vh'
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
                  marginLeft: { lg: "5em", xs: "4em", sm: "4em" },
                  marginTop: { xs: "1em" },
                  fontStyle: "bold",
                  fontSize: { lg: "1em", xs: ".6em",md:'.8em' },
                }}
              >
                <h4>MONEY BACK GUARANTEE</h4>
              </List>
              <List
                sx={{
                  // fontFamily: '"Courier New", Courier, monospace',
                  marginLeft: { lg: "3em", xs: "4em", sm: "4.4em" },
                  fontSize: { lg: "1em", xs: ".5em",md:'.7em' },
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
