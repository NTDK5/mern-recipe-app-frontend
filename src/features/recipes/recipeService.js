import axios from "axios";

const API_URI = 'https://mern-recipe-app-api-e8iz.onrender.com/api/recipes/'




// Create new goal
const createRecipe = async (recipeData, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.post(API_URI, recipeData, config)
  
    return response.data
  }

//Get user Recipes
const getRecipes = async(token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    const response = await axios.get(API_URI, config)

    return response.data

}

//Delete user Recipe
const deleteRecipe = async (recipeId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URI + recipeId, config)

  return response.data
}

const recipeService = {
    createRecipe,
    getRecipes,
    deleteRecipe
}

export default recipeService
