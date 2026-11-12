function RecipeCard({ recipe }) {
    return (
        <div className="recipe-card">
            <img src={recipe.image} alt={recipe.name} />
            <h3>{recipe.name}</h3>
            <p>Cuisine: {recipe.cusine}</p>
            <p>Rating: * {recipe.rating}</p>
            <p>Cooking Time: {recipe.cookTimeMinutes} minutes</p>
        </div>
    );
}

export default RecipeCard;
