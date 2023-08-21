import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FaLeaf, FaBan, FaCheese, FaHeart } from 'react-icons/fa';

function Recipe() {
  const [recipe, setRecipe] = useState(null);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://api.spoonacular.com/recipes/${params.id}/information?includeNutrition=false&apiKey=724cf3206078445383fc9e7b852d40a1`)
      .then(response => setRecipe(response.data))
      .catch(error => console.log(error));
  }, [params.id]);

  if (!recipe) {
    return <p>Loading recipe...</p>;
  }
  return (
    <>
    <div className="containers">
        <div className="recipe">
          
            <div className='recipe_title'>
            
              <h1>{recipe.title}</h1>
            
              <ul className='properties'>
                <li>{recipe.vegan ? <><FaLeaf />Vegan</>: null}</li>
                <li>{recipe.glutenFree ? <><FaBan />Gluten Free</> : null}</li>
                <li>{recipe.dairyFree ?<><FaCheese />Dairy Free</>: null}</li>
                <li>{recipe.dairyFree ?<><FaCheese />Dairy Free</>: null}</li>
                <li><FaHeart /> {recipe.aggregateLikes}</li>
              </ul>

            </div>
            <img src={recipe.image} alt={recipe.title} />
        </div>
        {/* {recipe.summary} */}
        
        <div className='ingredients'>
            {recipe.extendedIngredients.map(ingredient=>(
                <div className="card" key={ingredient.id}>
                    <img src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} />{ingredient.originalString}
                    <h2>{ingredient.name}</h2>
                    <div>
                        
                        <h3>{ingredient.measures.us.amount} {ingredient.measures.us.unitShort}</h3>
                    </div>
                    
                </div>

            ))}
        </div>

        <div className='instructions'>
          <h2>Recipe Instructions:</h2>
          <div dangerouslySetInnerHTML={{__html: recipe.summary}} className='summary'></div>
            {recipe.instructions.length > 0 ? (
                <div className='step' dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
              ) : (
                <p>No instructions found for this recipe.</p>
              )
            }
        </div>
          
      </div>
  </>
  )
}

export default Recipe;