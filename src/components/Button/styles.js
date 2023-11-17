import styled from 'styled-components';

export const Click = styled.button`

  cursor: pointer;
  border: none;
  border-radius: 40px;
  color: #000000;
  font-size: 20px;
  padding: 10px;
  text-align: center;
  border: 2px solid grey;

  width: 10vw;
  height: 10vh;

  &:hover {
    background: #230548;
    color: #ffffff;
    transition: width 2s, height 2s, transform 2s;
    transform: rotate(360deg);
    opacity: 0.9;
  }
`;
