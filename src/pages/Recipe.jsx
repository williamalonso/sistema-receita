import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Container } from "react-bootstrap";
import Category from "../components/Category";
import { useParams } from "react-router-dom";
import StyledButton from "../components/StyledComponents/StyledButton";
import { setBtnState } from "../store";
import searchById from "../services/searchByIdService";
import { setSearchByIdState } from "../store";
import { useEffect } from "react";

function Recipe() {

  const dispatch = useDispatch();
  const apiKey = process.env.REACT_APP_API_KEY;
  const searchedById = useSelector( (state) => state.searchByIdRecipe.searchById );
  const activeBtnRecipe = useSelector( (state) => state.activeBtnRecipe.initialBtnState);
  const { id } = useParams();

  useEffect( () => {
    searchById(dispatch, setSearchByIdState, apiKey, id);
  }, [dispatch, apiKey, id]);

  return(
    <Container className="mb-5">
      <Category></Category>
      {
        searchedById ? (
          <div key={searchedById.id} className="d-flex justify-content-center">
            <div className="d-flex flex-column col">
              <p className="mb-4">{searchedById.title}</p>
              <img src={searchedById.image} alt={searchedById.title} className="img-fluid" width={400}/>
            </div>
            <div className="d-flex flex-column col">
              <div className="d-flex flex-row">
                <StyledButton 
                className={`${activeBtnRecipe === 'instrucoes' ? 'active' : ''} me-2`} 
                onClick={ () => dispatch(setBtnState('instrucoes')) }>
                  Instruções
                </StyledButton>
                <StyledButton 
                className={activeBtnRecipe === 'ingredientes' ? 'active' : ''} 
                onClick={ () => dispatch(setBtnState('ingredientes')) }>
                  Ingredientes
                </StyledButton>
              </div>
              {
                activeBtnRecipe === "instrucoes" && (
                  <div>
                    <h4 dangerouslySetInnerHTML={{__html: searchedById.summary}} className="mt-4 mb-4"></h4>
                    <h4 dangerouslySetInnerHTML={{__html: searchedById.instructions}}></h4>
                  </div>
                )
              }
              {
                activeBtnRecipe === "ingredientes" && (
                  <ul className="mt-4">
                    {
                      searchedById.extendedIngredients.map( (ingredient) => {
                        return(
                          <li key={ingredient.id}>{ingredient.original}</li>
                        );
                      })
                    }
                  </ul>
                )
              }
            </div>
          </div>
        ) : (
          <div style={{marginLeft:'auto',marginRight:'auto',textAlign:'center'}}><i className="fas fa-spinner fa-spin fa-3x"></i></div>
        )
      }
    </Container>
  )
}

export  default Recipe;