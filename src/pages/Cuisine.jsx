import React from 'react';
import Category from '../components/Category';
import cuisineRecipesService from '../services/cuisineRecipesService';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCuisine } from '../store';
import StyledGradient from '../components/StyledComponents/StyledGradient';
import StyledCard from '../components/StyledComponents/StyledCard';
import { Container } from 'react-bootstrap';
import '@splidejs/splide/css';

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
    
    return(
        <div>
            <Category></Category>
                <Container className="d-flex justify-content-start align-items-center flex-wrap">
                {
                    cuisineData.length > 0 ? (
                        cuisineData.map( (item) => (
                                <StyledCard key={item.id} className="mb-5 ms-5 me-5">
                                    <p>{item.title}</p>
                                    <img src={item.image} alt={item.title} />
                                    <StyledGradient />
                                </StyledCard>
                        ))
                        ) : (
                            <div style={{marginLeft:'auto',marginRight:'auto'}}><i className="fas fa-spinner fa-spin fa-3x"></i></div>
                        )
                }
                </Container>
        </div>
    );
}

export default Cuisine;