import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { whiteColor } from './StyledComponents/StyledGlobal';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setInput } from '../store';

const FormStyle = styled.form`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  width: 50%;
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: ${whiteColor};
    padding: 0.5rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 2%;
    transform: translateY(-50%);
    color: ${whiteColor};
  }
`;

function Search() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const input = useSelector( (state) => state.searchWord.input);

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input);
  }

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    dispatch(setInput(newValue));
  }

  return(
    <Container className="mt-5">
      <FormStyle className="d-flex justify-content-center align-items-center" onSubmit={submitHandler}>
        <FaSearch></FaSearch>
        <input type="text" onChange={ handleInputChange }></input>
      </FormStyle>
    </Container>
  )
}

export default Search;