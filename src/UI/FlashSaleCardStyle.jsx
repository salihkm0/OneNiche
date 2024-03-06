// import styled from "styled-components";


// export const CardMainBox = {
//   // backgroundColor: "#090808ad",
//   overflowX: "scroll",
//   width: "72vw",
//   padding: "10px",
//   paddingRight:"20px",
//   display:"flex",
//   alignItems:" center",
//   justifyContent:"start",
//   '@media (min-width:1920px)': {
//     // width: "57vw",
//   },
//   '@media (max-width:600px)': {
//    width:"370px",
//    height:"410px",
//    paddingRight:"35px",
//    marginLeft:"10px",
//    display:"flex",
//    flexDirection:"column",
//    flexWrap:" wrap",
//    alignItems:"start",

//   },
//   '@media (min-width:1920px)': {
//     justifyContent:"center",

//   },

//   "&::-webkit-scrollbar": {
//     display: "hidden",
//   },
// }
// export const CardInsideBox = {
//   // backgroundColor: "#dcdcdcf7",
//   // borderColor: "#434241",
//     // width: "230px",
//   boxShadow:` rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
//               rgba(14, 30, 37, 0.32) 0px 2px 16px 0px`,
//   height: "100%",
//   marginLeft: "10px",
//   marginRight: "10px",
//   borderRadius:" 10px",
//   '@media (max-width:600px)': {
//     height: "180px",
//     width: "150px",
//     paddingBottom:"10px",
//     margin:"2.5px",
//     marginLeft:"10px",
//     // marginRight: "5px",
//     marginBottom:"10px",
//   },

//   '@media (min-width:601px)': {
//     '&:hover': {
//       backgroundColor: '#f8f8f8f7',
//       transform: "translateY(-5px) scale(1.005) translateZ(0)",
//       boxShadow:" 0 24px 36px rgba(0,0,0,0.11) 0 24px 46px var(--box-shadow-color)",
//       transition: "transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out",
//     },
//   }
  
// }

// export const ProductImg = styled.img`
//   height: 165px;
//   width: 250px;
//   object-fit:cover;
//   transform: scale(1.05);

//   @media (max-width: 600px) {
//     height: 125px;
//     width: 165px;
//     object-fit:cover;
//     // margin-left: 10px;
//     // margin-top: 16px;
//   }
// `;

// export const CardImgCont = styled.div`
//   /* background-Color:#3b3b3b56; */
//   /* padding: 2px; */
//   /* border-radius: 10px; */
//   border-top-left-radius:10px;
//   border-top-right-radius:10px;
//   border-top: 5px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 60%;
//   width: 100%;
//   overflow: hidden;
//   @media(max-width:600px){
//     height: 75%;
//     margin-bottom:6px;
//   }
// `;
// export const CardTitle = styled.h1`
//   /* background-Color:#000000; */
//     /* margin-left: 10px; */
//   font-size: 15px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-top: 6px;
//   font-family: Arial, Helvetica, sans-serif;
//   font-weight: 200;
//   color: #000000cf;
//   @media (max-width:600px) {
//     margin-top: 2px;
//     font-size: 13px;
//   }

// `;
// export const CardOGPrice = styled.p`
//   /* background-Color:#000000;  */
//     /* margin-left: 10px; */
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 14px;
//   margin-bottom: 10px;
//   font-family: Arial, Helvetica, sans-serif;
//   color: #000000;
//   @media (max-width:600px) {
//     font-size: 15px;
//     align-items:center;
//     justify-content:center;
//     margin-bottom: 5px;
//   }
// `;
// // export const CardOFPrice = styled.p`
// //   /* background-Color:#000000; */
// //   font-size: 12px;
// //   margin-left: 10px;
// //   color: #e42f0f;
// //   text-decoration: line-through;
// //   @media (max-width:600px) {
// //     font-size: 10px;
// //     align-items: center;
// //     justify-content: center;
// //   }
// // `;
// // export const BuyNow = styled.button`
// //   color: #ffffff;
// //   font-size: 15px;
// //   cursor: pointer;
// //   background-color: #010101;
// //   border: none;
// //   height: 44px;
// //   width: 100%;
// //   transition: all 0.5s  ease-in-out;
// //   border-radius: 5px;

// //   &:hover {
// //     background-color: #c9c9c9cd;
// //     color: #010101;
// //     font-size: 18px;
// //   }
// //   @media (max-width:600px) {
// //     height: 36px;
// //   }
// // `;

// export const RatingBox = styled.div`
//   font-size: 10px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `
// export const RatingSt = {
//     fontSize:" 10px",
// }
// export const CardButtonContainer = styled.div`
//   /* background-color:#0c0c0ccd;  */
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 100%;
//   width: 100%;
//   /* margin-left:20px; */
// `;

export const StyledFlashCard = styled.div`
  height: 350px;
  width: 350px;
  margin: 10px 0;
  position: relative;
  @media (max-width: 1733px) {
    height: 350px;
    width: 300px;
  }
  @media (max-width: 1507px) {
    /* height: 350px; */
    width: 100%;
  }
  @media (max-width: 1106px) {
    /* height: 320px; */
    width: 100%;
  }
  @media (max-width: 677px) {
    /* height: 300px; */
    width: 100%;
  }
  @media (max-width: 462px) {
    /* height: 300px; */
    width: 100%;
  }
`;