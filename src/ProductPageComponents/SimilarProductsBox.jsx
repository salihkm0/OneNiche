import React from "react";
import { Box, Stack, Typography } from "@mui/material";
// import {Cards} from "../Components/Cards";
import { MHStart, MainHead } from "../UI/SPMainBox";
import { ProductName } from "../UI/FBMainBox";


export default function SimilarProductsBox(){
    const Img1 ="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/appleairpodsenginUntitled.jpg"
    const Img2 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvs-fUQPF6VCeFOp7Wx0jfzkKkeb_6UR5NQ&usqp=CAU"
    const Img3 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-b4rI5AW28iO23T7DkbHy4RXbLUhSgtTEIQ&usqp=CAU"
    const Img4 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0qsBkvANV-BhKx1dr1ym1umis0ALMauxPGg&usqp=CAU"
    const Img5 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx-yZ8nf8gQFNKvCRr2iaf3enZz3Pswin4UQ&usqp=CAU"
    const Img6 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn4FmLD0c-H6iyemLJr9jI63636h5_f75Qr1u_5z43cWgh4XOi0UEhZ2Ogul9alC8J9ck&usqp=CAU"  
    return(
        <MainHead>
            <MHStart />
            <ProductName>Users Also Buy</ProductName>
        </MainHead>
        // <Cards imgSrc ={Img1} title= "AirPods Max" star={3.5} price={1499}/>
        // <Cards imgSrc ={Img2} title= "Mechanical Keyboard" subtitle ="CEO" star={2} price={1000} />
        // <Cards imgSrc ={Img3} title= "Laptops" star={3} price={5000}/>
        // <Cards imgSrc ={Img4} title= "Watch Ultra" star={4.5} price={1299}/>
        // <Cards imgSrc ={Img5} title= "UHD 4K Tv" star={4.5} price={1000}/>
        // <Cards imgSrc ={Img6} title= "Refrigerators" star={3.5} price={7999}/>
    )
}