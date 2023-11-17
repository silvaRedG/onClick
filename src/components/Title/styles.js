import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000000;

  height: 100vh;
  width: 100vw;
`;



export const H1 = styled.h1`
  margin: 10px;
  color: white;
`
;

export const P = styled.p`
  color: white;
  font-size: 15px;
  font-weight: bolder;
  margin: 10px;
  text-align: center;
`;
export const Input = styled.input`
  display: flex;
  margin: 10px;
  padding: 10px;

  border-radius: 15px;
  width: 50%;

  &:hover {
    background: gray;
    transition: 1s;
    color: #ffffff;
  }
`;

const glowing = keyframes`
  0% { background-position: 0 0; }
  50% { background-position: 400% 0; }
  100% { background-position: 0 0; }
`;

export const Newbutton = styled.button`
  margin-left: 10px;
  margin-top: 10px;
  width: 10vw;
  cursor: pointer;
  border-radius: 20px;
  border: groove 1px #fff;

  

  ${({ glow }) =>
    glow &&
    css`
      width: 220px; 
      height: 50px;
      outline: none;
      color: #fff;
      background: #111;
      cursor: pointer;
      position: relative;
      z-index: 0;
      border-radius: 10px;

      &:before {
        content: '';
        background: linear-gradient(
          45deg,
          #ff0000,
          #ff7300,
          #fffb00,
          #48ff00,
          #00ffd5,
          #002bff,
          #7a00ff,
          #ff00c8,
          #ff0000
        );
        position: absolute;
        top: -2px;
        left: -2px;
        background-size: 400%;
        z-index: -1;
        filter: blur(5px);
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        animation: ${glowing} 20s linear infinite;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
        border-radius: 10px;
      }

      &:active {
        color: #000;
      }

      &:active:after {
        background: transparent;
      }

      &:hover:before {
        opacity: 1;
      }

      &:after {
        z-index: -1;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: #111;
        left: 0;
        top: 0;
        border-radius: 10px;
      }
      
    `};
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px;
  padding: 50px;
  
 
  
`;


