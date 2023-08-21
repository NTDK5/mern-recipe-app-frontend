import { FaClock, FaSearch, FaUtensils } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteRecipe } from '../features/recipes/recipeSlice';

function RecipeItem({recipe}) {
  const dispatch = useDispatch()
  return (
    <div className='box' key={recipe.id}>
         <img /> 
        <div className='info'>
          <div className='title'>
            <h3>{recipe.title}</h3>
            <button onClick={() => dispatch(deleteRecipe(recipe._id))} className='close'>
                X
            </button>
            
          </div>
            
            <div className='texts'>
                <h3><FaUtensils /> {recipe.servings}</h3>
                <h3><FaClock />{recipe.cookTime}</h3>
            </div>
            <p>{recipe.description}</p>
        </div>
                      
    </div>
  )
}

export default RecipeItem