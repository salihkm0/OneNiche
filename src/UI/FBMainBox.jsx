import styled from "styled-components";



export const FBMainBox = styled.div`
    // background-color:#000000;
    border:.5px solid red;
    height:600px;
    display:flex;
    justify-content:center;
    overflow:hidden;
    margin-top:50px;
    margin-bottom:50px;
    @media (max-width: 600px) {
        height:760px;
        margin-top:10px;
        flex-wrap:wrap;
        justify-content:start;
    }
`
export const MBLeftMost = styled.div`
    border:.5px solid red;
    background-color:#ffffff;
    padding:20px;
    height:600px;
    width:400px;
    @media (max-width: 600px) {
        max-width:600px;
        padding:5px;
        max-width:342px;
    }

`
export const BigImg = styled.img`
    border:.5px solid red;
    height:600px;
    min-width:500px;
    @media (max-width: 600px) {
        height:342px;
        object-fit:cover;
        min-width:335px;
    }

`
export const SIMainBox = styled.div`
    border:.5px solid red;
    display:flex;
    flex-wrap:wrap;
    width:200px;
    @media (max-width: 600px) {
        flex-wrap:nowrap;
        min-width:342px;
        height:80px;
        align-items:center;
    }

`
export const SmallImg = styled.img`
    background-color:#ffffff;
    border:.5px solid red;
    height:135px;
    width:160px;
    margin:20px;
    margin-top:0px;
    @media (max-width: 600px) {
        margin:2px;
        height:75px;
    }

`
export const ProductName = styled.h1`
    @media (max-width: 600px) {
        font-size:16px;
    }

`
export const PRatingSt = {
    fontSize:" 14px",
}
export const Price = styled.h1`
    @media (max-width: 600px) {
        font-size:16px;
    }
`
export const Discription = styled.div`
    padding-bottom:10px;
    margin-bottom:20px;
    border-bottom:2px solid #000000;
    @media (max-width: 600px) {
        margin-bottom:10px;
        font-size:12px;
    }

`
export const Buttons = styled.button`
    width:170px;
    height:55px;
    border-radius:5px;
    @media (max-width: 600px) {
        width:155px;
        height:45px;
        border-radius:3px;
    }
    
`
export const Delivery = styled.div`
    display:flex;
    height:65px;
`
export const Logo = styled.img`
    display:flex;
    object-fit:cover;
    height:65px;
    width:65px
`
export const Option = styled.div`
    border:.5px solid red;
    height:32.5px;
    width:293px;
    @media (max-width: 600px) {
        width:265px;
    }
`
export const OpDiscription = styled.div`
    border:.5px solid red;
    height:32.5px
`