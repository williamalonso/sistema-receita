import React from 'react';
import Category from '../components/Category';
import Popular from '../components/Popular';
import Veggie from '../components/Veggie';

function Home() {
    return(
        <div>
            <Category></Category>
            <Veggie></Veggie>
            <Popular></Popular>
        </div>
    );
}

export default Home;