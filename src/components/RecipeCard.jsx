function RecipeCard({ recipe }) {
    return (
        <div className="recipe-card">
            <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
            />

            <h3>{recipe.strMeal}</h3>

            <p>
                Category: {recipe.strCategory || "See recipe"}
            </p>

            <p>
                Cuisine: {recipe.strArea || "See recipe"}
            </p>

            <p>
                Recipe ID: {recipe.idMeal}
            </p>

            <a
                href={`https://www.themealdb.com/meal/${recipe.idMeal}`}
                target="_blank"
                rel="noreferrer"
            >
                View Recipe
            </a>
        </div>
    );
}

export default RecipeCard;