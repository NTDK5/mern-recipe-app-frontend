import { useState } from "react"
import { useDispatch } from "react-redux"
import { createRecipe } from '../features/recipes/recipeSlice'

function RecipeForm() {
    const dispatch = useDispatch()
    const [recipeData, setRecipeData] = useState({
      title: "",
      description: "",
      ingredients: [],
      instructions: "",
      cookTime: "",
      prepTime: "",
      servings: "",
    })

    const { title, description, ingredients, instructions, cookTime, prepTime, servings } = recipeData
    const onChange = (e) => {
      setRecipeData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }))
    }
    const onSubmit  = e =>{
      e.preventDefault()
      const recipeData = {title, description, ingredients, instructions,servings, cookTime, prepTime}
      dispatch(createRecipe(recipeData))
      setRecipeData({
        title: "",
        description: "",
        ingredients: [],
        instructions: "",
        cookTime: "",
        prepTime: "",
        servings: "",
      })
      console.log(recipeData)
    }
  return (
    <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="title">Recipe Name</label>
            <input 
            type="text" 
            name='title' 
            id='text' 
            value={title} 
            onChange={onChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input 
            type="text" 
            name='description' 
            id='description' 
            value={description} 
            onChange={onChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="Instruction">Instructions</label>
            <input type="text" 
            name='instructions' 
            id='instructions' 
            value={instructions} 
            onChange={onChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="ingredients">Ingredients</label>
            <input 
            type="text" 
            name='ingredients' 
            id='ingredients' 
            value={ingredients} 
            onChange={onChange}/>
          </div>
          {/* <div className="form-group">
            <label htmlFor="image">Image</label>
            <input type="image" name='image' alt="image" id='image' value={image} onChange={onChange}/>
          </div> */}
          <div className="form-group">
            <label htmlFor="cookTime">CookTime</label>
            <input 
            type="number" 
            name='cookTime' 
            id='cookTime' 
            value={cookTime} 
            onChange={onChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="prepTime">PrepTime</label>
            <input 
            type="number" 
            name='prepTime' 
            id='prepTime' 
            value={prepTime} 
            onChange={onChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="servings">Servings</label>
            <input 
            type="number" 
            name='servings' 
            id='servings' 
            value={servings} 
            onChange={onChange}/>
          </div>
          <div className="form-group">
            <button className="btn btn-block" type="submit">
              Create Recipe
            </button>
          </div>
        </form>
    </section>
  )
}

export default RecipeForm