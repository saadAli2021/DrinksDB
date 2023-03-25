import React, { useContext, useEffect, useState } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("a");
  const [itemList, setItemList] = useState([]);

  const getCocktailByID = (id) => {
    setLoading(true);

    let drink = itemList.find((drink) => drink.id === id);
    setLoading(false);

    return drink;
  };
  const fetchItems = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchQuery}`);
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        const newitems = drinks.map((item) => {
          const {
            idDrink,
            strDrinkThumb,
            strDrink,
            strCategory,
            strAlcoholic,
            strGlass,
            strInstructions,
          } = item;

          return {
            id: idDrink,
            img: strDrinkThumb,
            name: strDrink,
            category: strCategory,
            alcohol: strAlcoholic,
            glass: strGlass,
            instructions: strInstructions,
          };
        });

        setItemList(newitems);
      } else {
        setItemList([]);
      }
      setLoading(false);
    } catch (error) {
      alert(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [searchQuery]);
  return (
    <AppContext.Provider
      value={{
        loading,
        searchQuery,
        itemList,
        setSearchQuery,
        getCocktailByID,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const UseGlobalContext = () => {
  return useContext(AppContext);
};
