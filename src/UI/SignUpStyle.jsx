import styled from 'styled-components';

export const Container = styled.div`
 background-color: #fff;
 border-radius: 10px;
 box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
 position: relative;
 overflow: hidden;
 width: 800px;
 max-width: 100%;
 min-height: 500px;

margin: 10vh 0vh 10vh 18% ;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0vh 20% 10% 0vh;
    min-height: 330px;
  }
    @media (min-width: 768px) and (max-width:1000px) {
      margin:20px 0px 20px 10px;
    width: 800px;
    height: 500px;
    min-height: 350px;
  }

 `;

export const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
    @media (max-width: 768px) {
    width: 100%;
  }
  ${props => props.signinIn !== true ? `
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
  `
    : null}
 `;


export const SignInContainer = styled.div`
 position: absolute;
 top: 0;
 height: 100%;
 transition: all 0.6s ease-in-out;
 left: 0;
 width: 50%;
 z-index: 2;
 ${props => (props.signinIn !== true ? `transform: translateX(100%);` : null)}
 `;

export const Form = styled.form`
 background-color: #ffffff;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 padding: 0 50px;
 height: 100%;
 text-align: center;
 `;

export const Title = styled.h1`
 font-weight: bold;
 margin: 0;
 @media (max-width:790px){
  font-size:larger;
 }
 `;

export const Input = styled.input`
 background-color: #eee;
 border: none;
 padding: 12px 15px;
 margin: 8px 0;
 width: 100%;
  @media (max-width: 768px) {
    width: 140%;
font-size: 1.8vh;
    height: 17px;
  }
 `;


export const Button = styled.button`
    border-radius: 10px;
    border: 1px solid #d56102;
    background-color: #ff7300;
    box-shadow: 0 12px 22px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 1px 5px;
    letter-spacing: 1px;
    height: 50px;
width:110px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
         @media (max-width: 768px) {
font-size: 7px;
height: 40px;
width:70px;
 padding: 0px 5px;
  }
    &:active{
        transform: scale(0.95);
    }
    &:focus {
        outline: none;
 }
 `;
export const GhostButton = styled(Button)`
 background-color: transparent;
 border-color: #ffffff;
 `;
export const Anchor = styled.a`
 color: #333;
 font-size: 14px;
 text-decoration: none;
 margin: 15px 0;
            @media (max-width: 768px) {
font-size: 10px;

  }
 `;
export const OverlayContainer = styled.div`
position: absolute;
top: 0;
left: 50%;
width: 50%;
height: 100%;
overflow: hidden;
transition: transform 0.6s ease-in-out;
z-index: 100;
${props =>
    props.signinIn !== true ? `transform: translateX(-100%);` : null}
`;

export const Overlay = styled.div`
background: #ff003c;
background: -webkit-linear-gradient(to right, #ff4b2b, #fa003a);
background: linear-gradient(to right, #cf5d00, #ff7300);
background-repeat: no-repeat;
background-size: cover;
background-position: 0 0;
color: #ffffff;
position: relative;
left: -100%;
height: 100%;
width: 200%;
transform: translateX(0);
transition: transform 0.6s ease-in-out;
${props => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
`;

export const OverlayPanel = styled.div`
     position: absolute;
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
     padding: 0 40px;
     text-align: center;
     top: 0;
     height: 100%;
     width: 50%;
     transform: translateX(0);
     transition: transform 0.6s ease-in-out;
 `;

export const LeftOverlayPanel = styled(OverlayPanel)`
   transform: translateX(-20%);
   ${props => props.signinIn !== true ? `transform: translateX(0);` : null}
 `;

export const RightOverlayPanel = styled(OverlayPanel)`
     right: 0;
     transform: translateX(0);
     ${props => props.signinIn !== true ? `transform: translateX(20%);` : null}
 `;

export const Paragraph = styled.p`
 font-size: 14px;
   font-weight: 100;
   line-height: 20px;
   letter-spacing: 0.5px;
   margin: 20px 0 30px;
           @media (max-width: 768px) {
font-size: 10px;

  }
 `;