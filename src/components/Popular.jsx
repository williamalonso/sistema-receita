import React from 'react';
import { useEffect } from 'react';
import { setPopular } from '../store';
import StyledCard from './StyledComponents/StyledCard';
import StyledGradient from './StyledComponents/StyledGradient';
import StyledH3 from './StyledComponents/StyledH3';
import { useSelector, useDispatch } from 'react-redux';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import popularRecipesService from '../services/popularRecipesService';
import '@splidejs/splide/css';
import { Container } from 'react-bootstrap';

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
        <Container className="mb-5">
            <StyledH3>Pratos populares</StyledH3>
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
        </Container>
    );
}

export default Popular;