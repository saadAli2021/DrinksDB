import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
const url = "www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const SingleCocktail = () => {
  const { state } = useLocation();
  const cocktail = state && state.cocktail;

  let instructions = cocktail.instructions.split(".");

  return (
    <section className="section shadow">
      <article className="singleCoctail">
        <img className="bigImg" src={cocktail.img} alt="image" />
        <div className="singleCoctailDetails">
          <h3>{cocktail.name}</h3>
          <p>{cocktail.alcohol}</p>
          <p>{cocktail.category}</p>
          <p>{cocktail.glass}</p>
          <h3>Instructions</h3>
          <ol>
            {instructions.map((element) => {
              if (element !== "") return <li>{`${element}.`}</li>;
            })}
          </ol>
        </div>
      </article>
    </section>
  );
};

export default SingleCocktail;
