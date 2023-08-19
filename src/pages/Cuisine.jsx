import React from 'react';
import Category from '../components/Category';
import cuisineRecipesService from '../services/cuisineRecipesService';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCuisine } from '../store';
import StyledWrapper from '../components/StyledComponents/StyledWrapper';
import StyledCard from '../components/StyledComponents/StyledCard';
import StyledGradient from '../components/StyledComponents/StyledGradient';
import StyledH3 from '../components/StyledComponents/StyledH3';
import '@splidejs/splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';

function Cuisine() {

    const params = useParams();
    const cuisineType = params['*'];
    const apiKey = process.env.REACT_APP_API_KEY;
    const dispatch = useDispatch();
    const cuisineData = useSelector( (state) => 
        state.cuisineRecipe.cuisineData
    );

    useEffect( () => {
        cuisineRecipesService(dispatch, setCuisine, apiKey, cuisineType);
    }, [dispatch, apiKey, cuisineType]);

    console.log(cuisineData);
    
    return(
        <div>
            <h1>Cuisine</h1>
            <Category></Category>
            <StyledWrapper>
                <StyledH3>Pratos populares</StyledH3>
                <Splide aria-label="Popular Picks" options={{perPage:4,arrows:false,pagination:false,drag:'free',gap:'5rem'}} >
                {
                    Object.keys(cuisineData).map( (key) => (
                        <SplideSlide key={key}>
                            <StyledCard>
                                <p>{cuisineData[key].title}</p>
                                <img src={cuisineData[key].image} alt={cuisineData[key].title} />
                                <StyledGradient />
                            </StyledCard>
                        </SplideSlide>
                    ))
                }
                </Splide>
            </StyledWrapper>
        </div>
    );
}

export default Cuisine;