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
        height:700px;
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
        max-width:600px
    }

`
export const BigImg = styled.div`
    border:.5px solid red;
    background-color:#ffffff;
    height:600px;
    min-width:500px;
    @media (max-width: 600px) {
        height:350px;
    }

`
export const SIMainBox = styled.div`
    border:.5px solid red;
    display:flex;
    flex-wrap:wrap;
    width:200px;
    @media (max-width: 600px) {
        flex-wrap:nowrap;
        max-width:600px;
    }

`
export const SmallImg = styled.div`
    background-color:#ffffff;
    border:.5px solid red;
    height:135px;
    width:160px;
    margin:20px;
    margin-bottom:0px;
`
export const ProductName = styled.h1`

`
export const Price = styled.h1`

`
export const Discription = styled.div`
    padding-bottom:10px;
    border-bottom:2px solid #000000;
`
