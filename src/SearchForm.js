import React, { useRef } from "react";
import { UseGlobalContext } from "./context";

const SearchForm = () => {
  const { setSearchQuery } = UseGlobalContext();
  const searchValue = useRef("");
  const onSearchQueryChange = () => {
    setSearchQuery(searchValue.current.value);
  };
  return (
    <section className="sectionSmall shadow searchSection">
      <form className="searchForm">
        <input
          ref={searchValue}
          type="text"
          className="searchTF "
          placeholder="Search Coctail..."
          onChange={onSearchQueryChange}
        />
      </form>
    </section>
  );
};

export default SearchForm;
