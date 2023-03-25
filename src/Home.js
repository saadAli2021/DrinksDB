import React from "react";
import CocktailList from "./CocktailList";
import Loading from "./Loading";
import SearchForm from "./SearchForm";

const Home = () => {
  return (
    <main>
      <SearchForm />
      <section className="section shadow ">
        {/* <Loading /> */}

        <CocktailList />
      </section>
    </main>
  );
};

export default Home;
