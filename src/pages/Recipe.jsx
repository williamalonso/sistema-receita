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
  
  const getPopularData = localStorage.getItem('popularRecipes');
  const popularData = JSON.parse(getPopularData);

  const dispatch = useDispatch();
  const apiKey = process.env.REACT_APP_API_KEY;
  const searchedById = useSelector( (state) => state.searchByIdRecipe.searchById );
  const activeBtnRecipe = useSelector( (state) => state.activeBtnRecipe.initialBtnState);
  const { id } = useParams();

  // console.log('diet', dietData);
  // console.log('popular', popularData);
  // console.log(id);
  // console.log('conteudo', activeBtnRecipe);
  console.log('searchById', searchedById);

  useEffect( () => {
    searchById(dispatch, setSearchByIdState, apiKey, id);
  }, [dispatch, apiKey, id]);

  return(
    <Container className="mb-5">
      <Category></Category>
      {
        popularData && popularData.length > 0 ?
        popularData
        .filter( (item) => item.id === Number(id) )
        .map( (filteredItem, index) => {
          console.log(filteredItem);
          return(
            <div key={index} className="d-flex justify-content-center">
              <div className="d-flex flex-column col">
                <p className="mb-4">{filteredItem.title}</p>
                <img src={filteredItem.image} alt={filteredItem.title} className="img-fluid" width={400}/>
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
                      <h4 dangerouslySetInnerHTML={{__html: filteredItem.summary}} className="mt-4 mb-4"></h4>
                      <h4 dangerouslySetInnerHTML={{__html: filteredItem.instructions}}></h4>
                    </div>
                  )
                }
                {
                  activeBtnRecipe === "ingredientes" && (
                    <ul className="mt-4">
                      {
                        filteredItem.extendedIngredients.map( (ingredient) => {
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
          )
        })
        : <div>erro ao carregar dados</div>
      }
    </Container>
  )
}

export  default Recipe;