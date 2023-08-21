import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {useSelector , useDispatch} from 'react-redux'
import RecipeForm from "../components/RecipeForm"
import RecipeItem from "../components/RecipeItem"
import Spinner from '../components/Spinner'
import { getRecipes, reset } from "../features/recipes/recipeSlice"
import {toast} from 'react-toastify'

function Myrecipe() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state)=> state.auth)
  const {recipes, isLoading, isError, message } = useSelector((state)=>state.recipe)
  
  useEffect(()=>{
    if(isError){
      toast.error(message)
      console.log(message)
    }
    
    dispatch(getRecipes())
    
    return()=>{
      dispatch(reset())
    }
  }, [isError, dispatch, message])

  
  if(isLoading){
    return<Spinner />
  }

  return (
    <>
      <section className="heading">
        <h1>welcome {user && user.name}</h1>
      </section>
      <RecipeForm />
      
      <section className="content">
        {recipes?.length>0? (
          <div className="recipes">
            {recipes?.map((recipe)=>(
              <RecipeItem key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ): (<h3>you have not set any recipes</h3>)}
      </section>
    </>
  )
}

export default Myrecipe