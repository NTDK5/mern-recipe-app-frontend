import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaClock, FaSearch, FaUtensils } from 'react-icons/fa';
import heroImage from '../Group 13.png';
import { Link } from 'react-router-dom';


function Discover() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchQuery !== '') {
      setIsLoading(true);
      axios
        .get(`https://api.spoonacular.com/recipes/search?query=${searchQuery}&number=10&apiKey=724cf3206078445383fc9e7b852d40a1&page=${pageNumber}`)
        .then(response => {
          setSearchResults(prevResults => [...prevResults, ...response.data.results]);
          setIsLoading(false);
        })
        .catch(error => console.log(error));
    }
  }, [searchQuery, pageNumber]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
    setSearchResults([]);
    setPageNumber(1);
  }

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      setPageNumber(prevPageNumber => prevPageNumber + 1);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className='hero'>
        <div className="hero_text">
          <h1>Best Recipes for your Meals</h1>
          <div className="search-box">
            <button className="btn-search"><FaSearch /></button>
            <input type="text" className="input-search" placeholder="search by dishes, ingredients ...etc" value={searchQuery} onChange={handleInputChange} />
          </div>
        </div>
        <div className="hero_img">
          <img src={heroImage} alt="" />
        </div>
      </div>
      
          
            {searchResults.length > 0 && (
              <>
              <div className='search_results'>
                {searchResults.length>0 && (<h1>Search Results ...</h1>)}
                <div className='search_item'>
                {searchResults.map(result => (
                  
                    <div className='box' key={result.id}>
                      
                        <img src={`https://spoonacular.com/recipeImages/${result.image}`} alt={result.title} />
                        
                        <div className='info'>
                          <Link to={`/recipe/${result.id}`}>
                            <h3>{result.title}</h3>
                          </Link>
                        <div className='texts'>
                          <h3><FaUtensils /> {result.servings}</h3>
                          <a href={result.sourceUrl}>source</a>
                          <h3><FaClock />{result.readyInMinutes}</h3>
                          <p>{result.summary}</p>
                        </div>
                        </div>
                      
                    </div>
                 
              
                ))}
                </div>
                </div>
              </>  
            )}
            
            {isLoading && <p>Loading more recipes...</p>}
          
        
    </>
  )
}

export default Discover;