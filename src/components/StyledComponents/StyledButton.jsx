import { styled } from "styled-components";

const StyledButton = styled.div`
  padding: 1rem 2rem;
  height: 50px;
  color: #313131;
  background: #fff;
  border: 2px solid black;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &.active {
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
  }
`;

export default StyledButton;