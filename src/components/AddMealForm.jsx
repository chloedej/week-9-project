
import { useState, useEffect } from "react";

function AddMealForm({ onSaveMeal, editingMeal, onCancel }) {

    const [name, setName] = useState("");
    const [category, setCategory] = useState("Breakfast");
    const [day, setDay] = useState("Monday");
    const [servings, setServings] = useState(1);

    useEffect(() => {

        if (editingMeal) {
            setName(editingMeal.name);
            setCategory(editingMeal.category);
            setDay(editingMeal.day);
            setServings(editingMeal.servings);
        } else {
            setName("");
            setCategory("Breakfast");
            setDay("Monday");
            setServings(1);
        }

    }, [editingMeal]);

    function handleSubmit(event) {

        event.preventDefault();

        if (name.trim() === "") {
            alert("Please enter a meal name!");
            return;
        }

        if (Number(servings) < 1) {
            alert("Please enter at least 1 serving!");
            return;
        }

        onSaveMeal({
            id: editingMeal ? editingMeal.id : null,
            name: name.trim(),
            category,
            day,
            servings: Number(servings)
        });

    }

    return (
        <form className="meal-form" onSubmit={handleSubmit}>

            <h3>{editingMeal ? "Edit Meal" : "Add Your Own Meal"}</h3>

            <div className="meal-form-fields">

                <input
                    className="meal-input"
                    type="text"
                    placeholder="Meal name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />

                <select
                    className="meal-select"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                >
                    <option>Breakfast</option>
                    <option>Lunch</option>
                    <option>Dinner</option>
                    <option>Snack</option>
                </select>

                <select
                    className="meal-select"
                    value={day}
                    onChange={(event) => setDay(event.target.value)}
                >
                    <option>Monday</option>
                    <option>Tuesday</option>
                    <option>Wednesday</option>
                    <option>Thursday</option>
                    <option>Friday</option>
                    <option>Saturday</option>
                    <option>Sunday</option>
                </select>

                <input
                    className="servings-input"
                    type="number"
                    min="1"
                    value={servings}
                    onChange={(event) => setServings(event.target.value)}
                />

                <button className="add-meal-button" type="submit">
                    {editingMeal ? "Save Changes" : "Add Meal"}
                </button>

                {editingMeal && (
                    <button
                        className="cancel-button"
                        type="button"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                )}

            </div>

        </form>
    );
}

export default AddMealForm;