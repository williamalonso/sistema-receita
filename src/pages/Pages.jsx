// import { useEffect } from 'react';
// import { setPopular } from '../store';
import styled from 'styled-components';
// import { useSelector, useDispatch } from 'react-redux';
// import Home from './Home';

const Wrapper = styled.div`
    margin : 4rem 0rem;
`;

const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
`;

const Pages = () => {
    // const apiKey = process.env.REACT_APP_API_KEY;
    // const dispatch = useDispatch();
    // const popularData = useSelector( (state)=> 
    //     state.popularRecipe.popularData
    // );

    // useEffect( () => {
    //     getPopular();
    // }, []);

    // const getPopular = async() => {

    //     const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=9`);

    //     const data = await api.json();
    //     console.log(data);

    //     dispatch(setPopular(data.recipes));
    // }
    // console.log('dados: ',popularData);
    return(
        <div>
            {/* {
                Object.keys(popularData).map( (key) => (
                    <div key={key}>
                        <h3>{popularData[key].title}</h3>
                    </div>
                ))
            } */}

            <Wrapper>
                <h3>Receitas Populares</h3>
                <Card>
                    <p>Título da Receita</p>
                </Card>
            </Wrapper>
        </div>
    );
}

export default Pages;