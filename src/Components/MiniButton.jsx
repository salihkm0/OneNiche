import React from "react";
import { Stack, Box, Typography } from "@mui/material";

export default function MiniButton({ text }) {
  return (
    <div>
      <Stack direction="row" sx={StackStyle}>
        <Box sx={BoxStyle}></Box>
        <Typography sx={TypoStyle}>{text}</Typography>
      </Stack>
    </div>
  );
}

// style

const StackStyle = {
  alignItems: "center",
  // margin: "70px 0 10px 0",
};

const BoxStyle = {
  height: "33px",
  width: "18px",
  backgroundColor: "rgb(204, 21, 21)",
  borderRadius: "3px",
  marginRight: "15px",

  "@media (max-width: 600px)": {
    /* Mobile styles */
    height: "25px",
    width: "10px",
    marginRight: "5px",
  },

  "@media (min-width: 601px) and (max-width: 1024px)": {
    /* Tablet styles */
    height: "25px",
    width: "10px",
    marginRight: "8px",
  },
};

const TypoStyle = {
  color: "rgb(204, 21, 21)",
  fontWeight: "bolder",
};
