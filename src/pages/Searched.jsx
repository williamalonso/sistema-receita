import React from 'react';
import { useEffect } from 'react';
import { setSearchRecipe } from '../store';
import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import searchService from '../services/searchService';
import Category from '../components/Category';
import StyledCard from '../components/StyledComponents/StyledCard';
import StyledGradient from '../components/StyledComponents/StyledGradient';
import { Link } from 'react-router-dom';

function Searched() {

  const dispatch = useDispatch();
  const apiKey = process.env.REACT_APP_API_KEY;
  const searchWord = useSelector( (state) => state.searchWord.input );
  const searchRecipe = useSelector( (state) => state.searchRecipe.initialSearchRecipe );

  useEffect( () => {
    searchService(dispatch, setSearchRecipe, apiKey, searchWord);
  }, [dispatch, apiKey, searchWord]);

  return(
    <>
      <Category></Category>
        <Container className="d-flex justify-content-start align-items-center flex-wrap">
          {
            searchRecipe.length > 0 ? (
                searchRecipe.map( (item) => (
                  <Link to={'/recipe/' + item.id}>
                    <StyledCard key={item.id} className="mb-5 ms-5 me-5">
                        <p>{item.title}</p>
                        <img src={item.image} alt={item.title} />
                        <StyledGradient />
                    </StyledCard>
                  </Link>
                ))
                ) : (
                    <div style={{marginLeft:'auto',marginRight:'auto'}}><i className="fas fa-spinner fa-spin fa-3x"></i></div>
                )
          }
        </Container>
    </>
  )
}

export default Searched;