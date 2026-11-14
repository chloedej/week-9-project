function Stats({ meals }) {

    const totalMeals = meals.length;

    const totalServings = meals.reduce((total, meal) => {
        return total + Number(meal.servings);
    }, 0);

    const totalDinners = meals.filter((meal) => {
        return meal.category === "Dinner";
    }).length;

    return (
        <div className="stats">

            <h3>My Meal Plan Statistics</h3>

            <p>Total Meals: {totalMeals}</p>

            <p>Total Servings: {totalServings}</p>

            <p>Total Dinners: {totalDinners}</p>

        </div>
    );
}
