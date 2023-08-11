import React from 'react';
import { useEffect } from 'react';
import { setPopular } from '../store';
import StyledWrapper from './StyledComponents/StyledWrapper';
import StyledCard from './StyledComponents/StyledCard';
import StyledGradient from './StyledComponents/StyledGradient';
import { useSelector, useDispatch } from 'react-redux';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import popularRecipesService from '../services/popularRecipesService';
import '@splidejs/splide/css';

const Popular = () => {

    const apiKey = process.env.REACT_APP_API_KEY;
    const dispatch = useDispatch();
    const popularData = useSelector( (state) => 
        state.popularRecipe.popularData
    );

    useEffect( () => {
        popularRecipesService(dispatch, setPopular, apiKey);
    }, [dispatch, apiKey]);

    return(
        <StyledWrapper>
            <h3>Pratos populares</h3>
            <Splide aria-label="Popular Picks" options={{perPage:4,arrows:false,pagination:false,drag:'free',gap:'5rem'}} >
            {
                Object.keys(popularData).map( (key) => (
                    <SplideSlide key={key}>
                        <StyledCard>
                            <p>{popularData[key].title}</p>
                            <img src={popularData[key].image} alt={popularData[key].title} />
                            <StyledGradient />
                        </StyledCard>
                    </SplideSlide>
                ))
            }
            </Splide>
        </StyledWrapper>
    );
}

export default Popular;