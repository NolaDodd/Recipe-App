import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"
// TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
// TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  
function App() {
  
  const [recipes, setRecipes] = useState(RecipeData);
  
  const createRecipe = (newRecipe) => {
    setRecipes((currentRecipes) => [...currentRecipes, newRecipe])
  }
  
  const deleteRecipe = (indexToDelete) => {
    setRecipes((currentRecipes) => currentRecipes.filter((blank, index) => index !== indexToDelete))
  }
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate createRecipe={createRecipe}/>
    </div>
  );
}

export default App;
