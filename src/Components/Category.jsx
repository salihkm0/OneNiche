// import { Stack } from "@mui/system";
// import React from "react";
// import {
//   CategoryBox,
//   CategoryCard,
//   CategoryContainer,
//   CategoryTitle,
// } from "../UI/CategoryStyle";

import { Link } from "react-router-dom";
import { categoryData } from "../Data/CategoryData";
import {
  CategoryCard,
  CategoryCardBody,
  CategoryCardImg,
  CategoryCardImgContainer,
  CategoryCardPrice,
  CategoryCardTitle,
  CategoryContainer,
} from "../UI/CategoryStyle";

// export const Category = () => {
//   return (
//     <CategoryContainer
//       direction={"row"}
//       alignItems={"center"}
//       justifyContent={"space-evenly"}
//     >
//       <CategoryBox>
//         <CategoryTitle>Deals on keyboard, mouse & more</CategoryTitle>
//         <Stack direction={"row"} spacing={"5px"} marginTop = {"10px"}>
//             <CategoryCard>
//                     tyui
//             </CategoryCard>
//             <CategoryCard>
//                     tyui
//             </CategoryCard>
//         </Stack>
//         <Stack direction={"row"} spacing={"5px"} margin={"5px 0"}>
//             <CategoryCard>
//                     tyui
//             </CategoryCard>
//             <CategoryCard>
//                     tyui
//             </CategoryCard>
//         </Stack>
//       </CategoryBox>
//       <CategoryBox>
//         <CategoryTitle>Buy Again</CategoryTitle>
//         <Stack direction={"row"} spacing={"5px"} marginTop = {"10px"}>
//             <CategoryCard>
//                     tyui
//             </CategoryCard>
//             <CategoryCard>
//                     tyui
//             </CategoryCard>
//         </Stack>
//         <Stack direction={"row"} spacing={"5px"} margin={"5px 0"}>
//             <CategoryCard>
//                     tyui
//             </CategoryCard>
//             <CategoryCard>
//                     tyui
//             </CategoryCard>
//         </Stack>
//       </CategoryBox>
//       <CategoryBox>
//         <CategoryTitle>Continue shopping for</CategoryTitle>
//         <Stack direction={"row"} spacing={"5px"} marginTop = {"10px"}>
//             <CategoryCard>
//                     tyui
//             </CategoryCard>
//             <CategoryCard>
//                     tyui
//             </CategoryCard>
//         </Stack>
//         <Stack direction={"row"} spacing={"5px"} margin={"5px 0"}>
//             <CategoryCard>
//                     tyui
//             </CategoryCard>
//             <CategoryCard>
//                     tyui
//             </CategoryCard>
//         </Stack>
//       </CategoryBox>
//     </CategoryContainer>
//   );
// };

export const Category = () => {
  return (
    <CategoryContainer
    >
      {categoryData.map((category) => (
        <Link to={`/product/${category.Name}`}>
        <CategoryCard key={category.id}>
          <CategoryCardImgContainer>
            <CategoryCardImg src={category.img} alt = "Category Image" />
          </CategoryCardImgContainer>
          <CategoryCardBody>
            <CategoryCardTitle>{category.Name}</CategoryCardTitle>
            <CategoryCardPrice>Starting ${category.Starting_Price}</CategoryCardPrice>
          </CategoryCardBody>
        </CategoryCard>
        </Link>
      ))}
    </CategoryContainer>
  );
};
