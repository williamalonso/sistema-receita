import React from "react";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import Category from "../components/Category";
import { useParams } from "react-router-dom";

function Recipe() {

  const dietData = useSelector( (state) => state.dietRecipe.dietData);
  const popularData = useSelector( (state) => state.popularRecipe.popularData);
  const { id } = useParams();

  // console.log('diet', dietData);
  // console.log('popular', popularData);

  return(
    <Container>
      <Category></Category>
      Entrou na página {id}
      {
        dietData
        .filter( (item) => item.id === Number(id))
        .map( (filteredItem, index) => {
          console.log(filteredItem);
          return(
            <div key={index}>
              retornou item vegano
            </div>
          )
        })
      }
      {
        popularData
        .filter( (item) => item.id === Number(id) )
        .map( (filteredItem, index) => {
          console.log(filteredItem);
          return(
            <div key={index}>
              retornou item popular
            </div>
          )
        })
      }
    </Container>
  )
}

export  default Recipe;