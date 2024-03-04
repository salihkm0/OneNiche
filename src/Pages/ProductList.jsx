import React from 'react'
import { LFHBoXH1, LFInsideBoxs, LeftFilterBox, ProductCardsBox, ProductContainer } from '../Ui/ProductListStyle'

export default function () {
  return (
    <>
        <ProductContainer>
            <LeftFilterBox>
              <LFInsideBoxs>
                <LFHBoXH1>Category</LFHBoXH1>
                <LFHBoXH1>Mobile accessory</LFHBoXH1>
                <LFHBoXH1>Electronics</LFHBoXH1>
                <LFHBoXH1>Smartphones</LFHBoXH1>
                <LFHBoXH1>Modern tech</LFHBoXH1>
              </LFInsideBoxs>

              <LFInsideBoxs></LFInsideBoxs>
              <LFInsideBoxs></LFInsideBoxs>
              <LFInsideBoxs></LFInsideBoxs>
              <LFInsideBoxs></LFInsideBoxs>
              <LFInsideBoxs></LFInsideBoxs>

            </LeftFilterBox>
    
             <ProductCardsBox>
             </ProductCardsBox>  
        </ProductContainer>

    </>
  )
}
