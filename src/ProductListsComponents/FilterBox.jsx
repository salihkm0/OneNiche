import { Box, Stack } from "@mui/system";
import {
  FilterBoxPL,
  FilterHeading,
  FilterInsideBox,
  FilterInsideH1,
  FilterInsideH2,
} from "../UI/ProductListStyle";
import Slider from "@mui/material/Slider";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import MuiInput from '@mui/material/Input';
import { styled } from '@mui/material/styles';
import { useParams } from "react-router";

const Input = styled(MuiInput)`
  width: 42px;
`;

function valuetext(value) {
  return `${value}°C`;
}

export default function FilterBox() {
  const {catagory,filter} = useParams()

  const [value, setValue] = useState([20, 37]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? 0 : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };
  return (
    <FilterBoxPL>
      <FilterHeading>
        <FilterInsideH1>Filter</FilterInsideH1>
      </FilterHeading>
      <FilterInsideBox>
        <Stack direction={"column"}>
          <FilterInsideH1>Catagory</FilterInsideH1>
          <FilterInsideH2>Mobile accessory</FilterInsideH2>
          <FilterInsideH2>Electronics</FilterInsideH2>
          <FilterInsideH2>Smartphones </FilterInsideH2>
          <FilterInsideH2>Modern tech</FilterInsideH2>
          <FilterInsideH2>View all</FilterInsideH2>
        </Stack>
      </FilterInsideBox>
      <FilterInsideBox>
        <Stack direction={"column"}>
          <FilterInsideH1>Brands</FilterInsideH1>
          <FilterInsideH2>Samsung</FilterInsideH2>
          <FilterInsideH2>Apple</FilterInsideH2>
          <FilterInsideH2>Huawei </FilterInsideH2>
          <FilterInsideH2>Pocco</FilterInsideH2>
          <FilterInsideH2>Lenovo</FilterInsideH2>
          <FilterInsideH2>View all</FilterInsideH2>
        </Stack>
      </FilterInsideBox>
      <FilterInsideBox>
        <Stack direction={"column"}>
          <FilterInsideH1>Features</FilterInsideH1>
          <FilterInsideH2>Metallic</FilterInsideH2>
          <FilterInsideH2>8GB Ram</FilterInsideH2>
          <FilterInsideH2>Super power</FilterInsideH2>
          <FilterInsideH2>Large Memory</FilterInsideH2>
          <FilterInsideH2>View all</FilterInsideH2>
        </Stack>
      </FilterInsideBox>

      <FilterInsideBox>
        <FilterInsideH1>Price range </FilterInsideH1>

        <Box sx={{ width: 170,margin:"2px" }} padding={'0 10px'}>
          
          <Slider
            getAriaLabel={() => "Price range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            max={9999}
            getAriaValueText={valuetext}
          />
        </Box>
        <Stack sx={{marginLeft:"10px"}} direction={"row"} spacing={2}>
           <p>Min {value[0]}</p>
           <p>Max {value[1]}</p>
        </Stack>
        <Stack sx={{display:"flex"}}  spacing={2}>

           </Stack>
           <Button sx={{width:"150px",height:"25px",marginLeft:"10px"}} variant="contained" disableElevation>Apply</Button>
      </FilterInsideBox>

      <FilterInsideBox>
        <Stack direction={"column"}>
          <FilterInsideH1>Features</FilterInsideH1>
          <FilterInsideH2>Metallic</FilterInsideH2>
          <FilterInsideH2>8GB Ram</FilterInsideH2>
          <FilterInsideH2>Super power</FilterInsideH2>
          <FilterInsideH2>Large Memory</FilterInsideH2>
          <FilterInsideH2>View all</FilterInsideH2>
        </Stack>
      </FilterInsideBox>
      <FilterInsideBox>
        <Stack direction={"column"}>
          <FilterInsideH1>Features</FilterInsideH1>
          <FilterInsideH2>Metallic</FilterInsideH2>
          <FilterInsideH2>8GB Ram</FilterInsideH2>
          <FilterInsideH2>Super power</FilterInsideH2>
          <FilterInsideH2>Large Memory</FilterInsideH2>
          <FilterInsideH2>View all</FilterInsideH2>
        </Stack>
      </FilterInsideBox>

    </FilterBoxPL>
  );
}
