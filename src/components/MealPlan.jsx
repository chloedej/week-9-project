import { useState } from "react";

import Stats from "./Stats";
import AddMealForm from "./AddMealForm";
import MealPlanCard from "./MealPlanCard";

function MealPlan({ meals, onSaveMeal, onDelete }) {

    const [editingMeal, setEditingMeal] = useState(null);

    function handleEdit(meal) {
        setEditingMeal(meal);
    }

    function handleSave(mealData) {
        onSaveMeal(mealData);
        setEditingMeal(null);
    }

    return (
        <section>

            <h2>My Personal Meal Plan</h2>

            <Stats meals={meals} />

            <AddMealForm
                onSaveMeal={handleSave}
                editingMeal={editingMeal}
                onCancel={() => setEditingMeal(null)}
            />

            {meals.length === 0 ? (

                <p>You haven't added any meals yet!</p>

            ) : (

                <div className="meal-list">

                    {meals.map((meal) => (
                        <MealPlanCard
                            key={meal.id}
                            meal={meal}
                            onEdit={handleEdit}
                            onDelete={onDelete}
                        />
                    ))}

                </div>

            )}

        </section>
    );
}

export default MealPlan;
