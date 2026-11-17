import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import MealPlan from './components/MealPlan';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  // Load saved meals from localStorage
  const [meals, setMeals] = useState(() => {
    const savedMeals = localStorage.getItem("myMeals");
    return savedMeals ? JSON.parse(savedMeals) : [];
  });

  // Fetch recipes from TheMealDB
  useEffect(() => {
    async function fetchRecipes() {
      if (searchTerm.trim() === "") {
        setRecipes([]);
        return;
      }

      setLoading(true);

      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(searchTerm)}`
        );

        const data = await response.json();
        setRecipes(data.meals || []);

      } catch (error) {
        console.log("Error fetching recipes:", error);
        setRecipes([]);

      } finally {
        setLoading(false);
      }
    }

    fetchRecipes();
  }, [searchTerm]);

  // Save meals whenever state changes
  useEffect(() => {
    localStorage.setItem("myMeals", JSON.stringify(meals));
  }, [meals]);

  // Add/Update meal
  function handleSaveMeal(meal) {
    if (meal.id) {
      setMeals((previousMeals) =>
        previousMeals.map((item) =>
          item.id === meal.id ? meal : item
        )
      );
    } else {
      setMeals((previousMeals) => [
        ...previousMeals,
        { ...meal, id: Date.now() }
      ]);
    }
  }

  function handleDeleteMeal(id) {
    setMeals((previousMeals) =>
      previousMeals.filter((meal) => meal.id !== id)
    );
  }

return (
    <>
        <Header />

        <main>
            <h2>Welcome to Your Recipe Book!</h2>

            <p>
                Find your next favorite meal or plan the next
                few meals for a stress free week!
            </p>

            <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />

            <h2>Search Results</h2>

            {loading && <p>Loading recipes...</p>}

            <RecipeList recipes={recipes} />
           <MealPlan
              meals={meals}
              onSaveMeal={handleSaveMeal}
              onDelete={handleDeleteMeal}
              recipes={recipes}
      />
        </main>

        <Footer />
    </>
);
}

export default App;