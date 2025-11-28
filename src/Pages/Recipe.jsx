import React from 'react';

const Recipe = ({recipe}) => {
    const { id, name, image } = recipe;
    return (
      <div onClick={``} className="p-5 rounded-lg bg-[#f7f7f7] text-center cursor-pointer">
        <img className="w-70" src={image} alt="" />
        <span className="bg-[#edb654] text-center text-white p-2 rounded-lg font-bold">{name}</span>
      </div>
    );
};

export default Recipe;