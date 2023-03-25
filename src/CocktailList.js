import React from "react";
import { UseGlobalContext } from "./context";
import Loading from "./Loading";
import SingleCocktail from "./SingleCocktail";
import { useNavigate } from "react-router-dom";

const CocktailList = () => {
  const { itemList, loading } = UseGlobalContext();
  const navigate = useNavigate();

  const ShowCocktailWithID = (id, item) => {
    // navigate(`/cocktail/${id}`);
    navigate(`/cocktail/${id}`, { state: { cocktail: item } });
  };

  if (loading) {
    return <Loading />;
  }
  if (itemList.length < 1) {
    return (
      <h1 style={{ textAlign: "center", marginTop: "8rem" }}>
        No cocktails found
      </h1>
    );
  }
  return (
    <>
      <div className="heading">
        <h3>Available Coctails</h3>
      </div>
      <section className="itemList">
        {itemList.map((item) => {
          return (
            <article
              key={item.id}
              className="card shadowDark"
              onClick={() => ShowCocktailWithID(item.id, item)}
            >
              <img
                className="cardimg shadowDark"
                src={item.img}
                alt={item.name}
              />
              <h4 className="name ">{item.name}</h4>
              <div className="details">
                <p className="detail alcohol">{item.alcohol}</p>
                <p className="detail category">{item.category}</p>
                <p className="detail glass">{item.glass}</p>
              </div>
              {/* <p className="instructions">{instructions}</p> */}
            </article>
          );
        })}
      </section>
    </>
  );
};

export default CocktailList;
