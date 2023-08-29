import styled from "styled-components";

const StyledCards = styled.div`
  /* min-height: 25rem; */
  border-radius: 2rem;
  /* width: 100%; */
  /* margin-left: auto;
  margin-right: auto; */
  /* background-color: blue; */
  position: relative;
  overflow: hidden;
  cursor: pointer;
  img {
    border-radius: 2rem;
    width: 100%;
    height: auto;
  }
  p {
    position: absolute;
    z-index: 20;
    margin-left: auto;
    margin-right: auto;
    bottom: 0;
    width: 100%;
    color: #fff;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
  }
  &:hover {
    transform: scale(1.1);
    transition: ease 1s;
  }
`;

export default StyledCards;