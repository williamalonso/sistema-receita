import { useEffect } from 'react';
import { setPopular } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import Home from './Home';

const Pages = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    // const dispatch = useDispatch();
    // const popularData = useSelector( (state)=> 
    //     state.popularRecipe.popularData
    // );

    useEffect( () => {
        getPopular();
    }, []);

    const getPopular = async() => {

        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=9`);

        const data = await api.json();
        console.log(data);

        // dispatch(setPopular(data.recipes));
    }

    return(
        <div>
            {/* {popularData.map( (recipe) => {
                return(
                    <div>
                        <p>{recipe.title}</p>
                    </div>
                );
            })} */}
            <p>ola</p>
        </div>
    );
}

export default Pages;