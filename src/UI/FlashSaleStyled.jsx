import styled from "styled-components";

export const StyledFlashSale = {
    backgroundColor: "#d4d4d48f",
    // margin:"100px",
    display:"flex",
    alignItems:"center",
    height:"500px", 
    width:"100%",
    borderRadius:" 10px",
    overflow:"hidden", //removed X
    '@media(max-width:600px)':{
        height:"320px",
        width:"85vw", //added width 
    }
}
export const FlashSaleH1 = {
    // backgroundColor: "#34797e",
    height:"45px", 
    width:"170px",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    '@media (max-width:600px)': {
        height:"62px", 
        width:"120px",
        alignItems:"center",
    }

}



export const FSTypoH1=styled.h1`
    font-size:22px;
    font-weight:300;
    @media (max-width: 600px) {
        font-size:15px;
    }
`
export const HeadFS = {
    // width:"100%",
    // backgroundColor: "#17c2ce",
    height:"45px", 
    color:"#000000",
}
export const CountDownBox ={
    marginLeft:"10px",
}
export const ConDSpacer = {
    fontSize:"22px",
    marginTop:"10px",
    marginRight:"5px",
    '@media (max-width:600px)': {
        marginTop:"18px",
        marginRight:"1px",
    }
}
export const CountDownFS ={
    // marginLeft:"10px",
    // backgroundColor: "#b91818",
    height:"45px",
    width:"40px",
    color:"#000000",
    '@media (max-width:600px)': {
        marginTop:"7px",
        height:"30px",
        width:"25px",
    }


}


