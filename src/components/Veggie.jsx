import React from 'react';
import { useEffect } from 'react';
import { setDiet } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import StyledCard from './StyledComponents/StyledCard';
import StyledGradient from './StyledComponents/StyledGradient';
import StyledH3 from './StyledComponents/StyledH3';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import dietRecipesService from '../services/dietRecipesService';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Veggie = () => {

    const apiKey = process.env.REACT_APP_API_KEY;
    const dispatch = useDispatch();
    const dietData = useSelector( (state) => state.dietRecipe.dietData);

    useEffect( () => {
        dietRecipesService(dispatch, setDiet, apiKey);
    }, [dispatch, apiKey]);

    return(
        <Container className="mb-5">
            <StyledH3>Pratos Veganos</StyledH3>
            <Splide aria-label="Popular Picks" options={{perPage:3,arrows:false,pagination:false,drag:'free',gap:'5rem'}}>
                {
                    Object.keys(dietData).map( (key) => (
                        <SplideSlide key={key}>
                            <Link to={'/recipe/' + dietData[key].id}>
                                <StyledCard>
                                    <p>{dietData[key].title}</p>
                                    <img src={dietData[key].image} alt={dietData[key].title} />
                                    <StyledGradient />
                                </StyledCard>
                            </Link>
                        </SplideSlide>
                    ))
                }
            </Splide>
        </Container>
    );
}

export default Veggie;