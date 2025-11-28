import React from "react";
import { useLoaderData } from "react-router";

const Recipies = () => {
  const recipe = useLoaderData();
  const {
    name,
    ingredients,
    instructions,
    prepTimeMinutes,
    cookTimeMinutes,
    servings,
    difficulty,
    cuisine,
    caloriesPerServing,
    tags,
    image,
    rating,
    reviewCount,
    mealtype,
  } = recipe;
  return (
    <div className="w-11/12 mx-auto rounded-lg flex pt-5 gap-5">
      <div className="">
        <img className="w-70" src={image} alt="" />
      </div>

      <div className="mx-auto">
        <h1 className="text-2xl font-bold">{name}</h1>
        <div className="flex justify-between mt-5 gap-20 ">
          <div>
            <h2 className="text-xl font-semibold">Ingredients</h2>
            <ul>
              {ingredients.map((items, indx) => (
                <li key={indx}>
                  {indx+1}.{items}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Ingredients</h2>
            <ul>
              {instructions.map((items, indx) => (
                <li key={indx}>
                  {indx+1}.{items}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipies;
