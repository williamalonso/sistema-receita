import React from 'react';
import { useEffect } from 'react';
import { setPopular } from '../store';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';

const Wrapper = styled.div`
    margin : 4rem 0rem;
    background-color: red;
    /* width: 50%;
    margin-left: auto;
    margin-right: auto; */
`;

const Card = styled.div`
    /* min-height: 25rem; */
    border-radius: 2rem;
    /* width: 100%; */
    /* margin-left: auto;
    margin-right: auto; */
    background-color: blue;
    position: relative;
    overflow: hidden;

    img {
        border-radius: 2rem;
        width: 100%;
        height: auto;
    }
    p {
        position: absolute;
        z-index: 20;
        margin-left: auto;
        margin-right: auto;
        bottom: 0;
        width: 100%;
        color: #fff;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
    }
`;

const Gradient = styled.div`
    z-index: 11;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.5));
`;

const Popular = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const dispatch = useDispatch();
    const popularData = useSelector( (state)=> 
        state.popularRecipe.popularData
    );

    useEffect( () => {
        getPopular();
    }, []);

    const getPopular = async() => {

        const check = localStorage.getItem('popularRecipes');

        if(check) {
            dispatch(setPopular(JSON.parse(check)));
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=9`);
            const data = await api.json();
            // console.log(data);
            localStorage.setItem('popularRecipes', JSON.stringify(data.recipes));
            dispatch(setPopular(data.recipes));
        }
    }
    
    // console.log('dados: ',popularData);

    return(
        <div>
            <Wrapper>
                <h3>Pratos populares</h3>
                <Splide aria-label="Popular Picks" options={{perPage:4,arrows:false,pagination:false,drag:'free',gap:'5rem'}} >
                {
                    Object.keys(popularData).map( (key) => (
                        <SplideSlide key={key}>
                            <Card>
                                <p>{popularData[key].title}</p>
                                <img src={popularData[key].image} alt={popularData[key].title} />
                                <Gradient />
                            </Card>
                        </SplideSlide>
                    ))
                }
                </Splide>
            </Wrapper>
        </div>
    );
}

export default Popular;