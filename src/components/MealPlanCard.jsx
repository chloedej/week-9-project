function MealPlanCard({ meal, onEdit, onDelete }) {

    return (
        <div className="meal-card">

            <h3>{meal.name}</h3>

            <p>Category: {meal.category}</p>

            <p>Day: {meal.day}</p>

            <p>Servings: {meal.servings}</p>

            <button onClick={() => onEdit(meal)}>
                Edit
            </button>

            <button onClick={() => onDelete(meal.id)}>
                Delete
            </button>

        </div>
    );
}

export default MealPlanCard;
