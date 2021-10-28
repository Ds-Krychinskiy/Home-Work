import styled from "styled-components";

export const LoaderIcon = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  .lds-default {
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.06);
    border-radius: 32px;
    display: inline-block;
    position: relative;
    width: 51px;
    height: 51px;
  }
  .lds-default div {
    animation: flickerAnimation 1s infinite;
    position: absolute;
    width: 6px;
    height: 6px;
    background: #4E5A61;
    border-radius: 50%;
    top: 14px;
    left: 22px;
  }
    .lds-default div:nth-child(1) {
    animation-delay: 0s;
    top: 17px;
    left: 29px;
  } 
  .lds-default div:nth-child(2) {
    animation-delay: -0.1s;
    top: 24px;
    left: 31px;
  }
  .lds-default div:nth-child(3) {
    animation-delay: -0.2s;
    top: 30px;
    left: 28px;
  }
  .lds-default div:nth-child(4) {
    animation-delay: -0.3s;
    top: 33px;
    left: 22px;
  } 
   .lds-default div:nth-child(5) {
    animation-delay: -0.4s;
    top: 30px;
    left: 15px;
  }
  .lds-default div:nth-child(6) {
    animation-delay: -0.6s;
    top: 23px;
    left: 13px;
  }
  .lds-default div:nth-child(7) {
    animation-delay: -0.8s;
    top: 17px;
    left: 16px;
  }/*
  .lds-default div:nth-child(8) {
    animation-delay: -0.7s;
    top: 52px;
    left: 11px;
  }
  .lds-default div:nth-child(9) {
    animation-delay: -0.8s;
    top: 62px;
    left: 22px;
  } */ 

  @keyframes flickerAnimation {
  0%   { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:1; }
}
`;
