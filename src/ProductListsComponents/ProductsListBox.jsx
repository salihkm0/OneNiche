import { Stack } from "@mui/system";
import { PLBox, PLBoxTop, ProductListContainer } from "../UI/ProductListStyle";
import PLCards from "./ProductListCards";

export default function ProductsListBox() {
  const Img1 =
    "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/appleairpodsenginUntitled.jpg";
  const Img2 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvs-fUQPF6VCeFOp7Wx0jfzkKkeb_6UR5NQ&usqp=CAU";
  const Img3 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-b4rI5AW28iO23T7DkbHy4RXbLUhSgtTEIQ&usqp=CAU";
  const Img4 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0qsBkvANV-BhKx1dr1ym1umis0ALMauxPGg&usqp=CAU";
  const Img5 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx-yZ8nf8gQFNKvCRr2iaf3enZz3Pswin4UQ&usqp=CAU";
  const Img6 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn4FmLD0c-H6iyemLJr9jI63636h5_f75Qr1u_5z43cWgh4XOi0UEhZ2Ogul9alC8J9ck&usqp=CAU";
  return (
    <ProductListContainer>
      <PLBoxTop></PLBoxTop>

      <PLBox>
        <Stack direction={"row"}>
          <PLCards plimgs={Img1} />
          <PLCards plimgs={Img2} />
          <PLCards plimgs={Img3} />
          <PLCards plimgs={Img4} />
        </Stack>
        <Stack direction={"row"}>
          <PLCards plimgs={Img5} />
          <PLCards plimgs={Img6} />
          <PLCards plimgs={Img4} />
          <PLCards plimgs={Img4} />
        </Stack>
        <Stack direction={"row"}>
          <PLCards plimgs={Img1} />
          <PLCards plimgs={Img2} />
          <PLCards plimgs={Img3} />
          <PLCards plimgs={Img4} />
        </Stack>
          <Stack direction={"row"}>
          <PLCards plimgs ={Img5}/>
          <PLCards plimgs ={Img6}/>
          <PLCards plimgs ={Img4}/>
          <PLCards plimgs ={Img4}/>
        </Stack>
      </PLBox>
    </ProductListContainer>
  );
}
