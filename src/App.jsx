import { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import RecipeList from "./components/RecipeList";
import MealPlan from "./components/MealPlan";

function App() {

    const [recipes, setRecipes] = useState([]);

    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("All");
    const [categories, setCategories] = useState([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [meals, setMeals] = useState(() => {
        const savedMeals = localStorage.getItem("myMeals");
        return savedMeals ? JSON.parse(savedMeals) : [];
    });

    // TheMealDB Recipes
useEffect(() => {

    async function fetchRecipes() {

        setLoading(true);
        setError("");

        try {

            let url;

            if (category !== "All") {

                // Get recipes from the selected category
                url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(category)}`;

            } else if (searchTerm.trim() !== "") {

                // Search recipes by name
                url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(searchTerm.trim())}`;

            } else {

                // Show starter recipes when the app first opens
                url = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";

            }

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Failed to fetch recipes");
            }

            const data = await response.json();

            setRecipes(data.meals || []);

        } catch (error) {

            setError("We couldn't load recipes. Please try again later.");

        } finally {

            setLoading(false);

        }

    }

    fetchRecipes();

}, [searchTerm, category]);

    useEffect(() => {

        async function fetchCategories() {

            try {

                const response = await fetch(
                    "https://www.themealdb.com/api/json/v1/1/categories.php"
                );

                if (!response.ok) {
                    throw new Error("Failed to load categories");
                }

                const data = await response.json();

                setCategories(data.categories || []);

            } catch (error) {

                console.log("Could not load categories.");

            }
        }

        fetchCategories();

    }, []);

    useEffect(() => {

        localStorage.setItem("myMeals", JSON.stringify(meals));

    }, [meals]);

    const filteredRecipes = recipes.filter((recipe) => {

        return recipe.strMeal
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

    });

    function handleSaveMeal(mealData) {

        if (mealData.id) {

            setMeals((previousMeals) =>
                previousMeals.map((meal) =>
                    meal.id === mealData.id ? mealData : meal
                )
            );

        } else {

            const newMeal = {
                ...mealData,
                id: Date.now()
            };

            setMeals((previousMeals) => [
                ...previousMeals,
                newMeal
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
                    Find your next favorite meal and plan
                    the next few for a stress-free week!
                </p>

                {/* Browse API recipes */}
                <section>

                    <h2>Browse Recipes</h2>

                    <SearchBar
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                    />

                    <CategoryFilter
                        category={category}
                        setCategory={setCategory}
                        categories={categories}
                    />

                    {loading && <p>Loading recipes...</p>}

                    {error && <p>{error}</p>}

                    {!loading && !error && (
                        <>
                            <p>
                                Recipes found: {filteredRecipes.length}
                            </p>

                            <RecipeList recipes={filteredRecipes} />
                        </>
                    )}

                </section>

                <section>

                    <MealPlan
                        meals={meals}
                        onSaveMeal={handleSaveMeal}
                        onDelete={handleDeleteMeal}
                    />

                </section>

            </main>

            <Footer />

        </>
    );
}

export default App;
