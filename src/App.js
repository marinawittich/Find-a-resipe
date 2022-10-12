import { useEffect, useState } from 'react';

import search from './search.png'
import './App.css';
import MyRecipeComponent from './MyRecipesComponent';

function App() {
  const API_ID = "718ed688";
  const API_KEY = "92c0717b5baf4ab264962c7f6b002a04";

//Search user input
const [mySearch, setmysearch] = useState('');
//Display recipes
const [myRecipes, setMyMyRecipes] = useState([]);
//Display results, when tape "Enter" button
const [worldSubmitted, setWorldSubmitted] = useState("avocado")


 useEffect(() =>{
  const getRecipe = async()=>{
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${worldSubmitted}&app_id=${API_ID}&app_key=${API_KEY}`);
    const data = await response.json();
    setMyMyRecipes(data.hits)
    console.log(data.hits)
  }
  getRecipe()
   
 },[worldSubmitted])

 const finalSearch = (e) =>{
  e.preventDefault();
  setWorldSubmitted(mySearch)
  
 }

 const myRecipeSearch = (e) =>{
  setmysearch(e.target.value)
 }

  return (
    <div className="App">
  <div className="container">
  <div>
    <img className='bodyImage' src="https://images.unsplash.com/photo-1505682750263-f3f9e519c565?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>
  </div>
  <h1>Find a Recipe</h1>
  </div>
  <div>
    <form onSubmit={finalSearch}>
      <input placeholder='Search...' onChange={myRecipeSearch} value={mySearch}>
      </input>
      <button className='searchIcon' onClick={finalSearch}><img src={search} width="30px" alt="search" /></button>
    </form>
  </div >
  <div className='componentCont'>
  {myRecipes.map(item => (
    <MyRecipeComponent label={item.recipe.label} image={item.recipe.image} cuisine={item.recipe.cuisineType} mealType={item.recipe.mealType} calories={item.recipe.calories} protein={item.recipe.totalNutrients.PROCNT.quantity} fat={item.recipe.totalNutrients.FAT.quantity} carbs={item.recipe.totalNutrients.CHOCDF
      .quantity} ingredients={item.recipe.ingredientLines} url={item.recipe.url} webSite={item.recipe.source}/>
  ))}
  </div>
  </div>
  );
}

export default App;
