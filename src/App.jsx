import { useState, useEffect } from 'react';
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import RecipeList from './components/RecipeList'
import CategoryFilter from './components/CategoryFilter'

function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("All");

useEffect(() => {

  async function fetchCategories() {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );

      const data = await response.json();

      setCategories(data.categories || []);

    } catch (error) {
      console.error("Error loading categories:", error);
    }
  }

  fetchCategories();

}, []); 


  return (
    <>
      <Header />

            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />

      <main>
        <h2>Welcome to Your Recipe Book!</h2>
        
        <p>Find your next favorite meal or plan the next few meals for a stress free week!</p>
      <h2>Featured Recipes</h2>

      <CategoryFilter
      category={category}
      setCategory={setCategory}
      categories={categories}
       />

      <RecipeList recipes={[]} />

      </main>

      <Footer />
    </>
  )
}
export default App
