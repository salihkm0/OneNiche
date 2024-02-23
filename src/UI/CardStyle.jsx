import styled from "styled-components"

export const CardMainBox = {
    // backgroundColor: "#090808", 
    height:"100%",
    minWidth:"100%",
    overflowX:"scroll",
    "&::-webkit-scrollbar": {
        display:"hidden"
    },
    '@media (max-width:600px)': {
        // height: '176px', // 220px * 0.8 = 176px
        width: '100%', // 100% * 0.8 = 80%
    },
 
    
}
export const CardInsideBox = {
    // backgroundColor: "#dc2b2b",
    // padding:"0 10px ",
    // border: "2px solid red",
    // borderColor: "#434241",
    height:"300px",
    width:"230px",
    marginLeft:"20px",
    marginTop:"10px",
    '@media (max-width:600px)': {
        height: '200px', // 180px * 0.8 = 144px
        width: '130px', // 150px * 0.8 = 120px
        marginLeft:"10px",
        marginTop:"16px",
    }
}

export const ProductImg = styled.img`
    height:200px;
    width:250px; 
    transform: scale(1.05);

    @media (max-width:600px){
        height: 150px ;// 180px * 0.8 = 144px
        width: 130px ;// 150px * 0.8 = 120px
        marginLeft:10px;
        marginTop:16px;
    }
`

export const CardImgCont = styled.div`
    /* background-Color:#3b3b3b56; */
    /* padding: 2px; */
    display:flex;
    align-items:center;
    justify-content:center;
    height:60%;
    width:100%;
    overflow: hidden;
`
export const CardTitle = styled.h1 `
    /* background-Color:#000000; */
        /* margin-left:15px; */
    font-size:20px;
    color:#000;
`
export const CardOGPrice = styled.p`
 /* background-Color:#000000; */
  Color:#0fd537;
`
export const CardOFPrice = styled.p`
    /* background-Color:#000000; */
    Color:#e42f0f;
    text-decoration: line-through;
`
export const BuyNow = styled.button`
    /* background-Color:#000000; */
    height:40px;
    width:120px;
`