import React from 'react';
import { useLoaderData } from 'react-router';
import Recipies from '../../Pages/Recipies';
import Recipe from '../../Pages/Recipe';

const Home = () => {
  const data = useLoaderData();
  const recipe=data.recipes;
//   console.log(recipe);
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='font-bold text-2xl justify-center text-center'>Recipies are here</h1>
           <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 items-center'>
            {
              recipe.map(item=><Recipe recipe={item}></Recipe>)
            }
           </div>
        </div>
    );
};

export default Home;