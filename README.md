# React + Vite
A beginner-friendly React application that helps users discover recipes and organize their weekly meals. Users can search for recipes using TheMealDB API, create their own meal plans, edit meals, delete meals, and keep their plans saved between visits.
✨ Features
- Recipe Search: Search for recipes using TheMealDB API.
- Recipe Display: View recipe names and photos.
- Loading Feedback: Display a loading message while recipes are being fetched.
- Personal Meal Planner: Add your own meals to a weekly plan.
- Recipe Suggestions: Choose from API recipe suggestions or type in a completely custom meal name.
- Meal Categories: Organize meals as Breakfast, Lunch, Dinner, or Snack.
- Day Selection: Assign meals to a day of the week.
- Servings: Enter the number of servings for each meal.
- Edit Meals: Update a meal after adding it.
- Delete Meals: Remove meals from your plan.
- Statistics: View information calculated from your planned meals.
- Local Storage: Save your meal plan in the browser so it remains available after refreshing the page.
- Responsive Styling: Use a flexible layout that adapts to smaller screens.
🛠️ Technologies Used
- React
- JavaScript
- HTML
- CSS
- TheMealDB API
- Browser Local Storage
- Vite
📁 Project Components
The application is organized into reusable React components:
- App.jsx – Main application component. Manages recipe search, API data, meal state, and saving or deleting meals.
- Header.jsx – Displays the application heading.
- Footer.jsx – Displays the footer.
- SearchBar.jsx – Allows users to enter a recipe search.
- RecipeList.jsx – Displays the recipes returned by the API.
- RecipeCard.jsx – Displays an individual recipe.
- MealPlan.jsx – Organizes the personal meal planner and connects its child components.
- AddMealForm.jsx – Allows users to add or edit meals.
- MealPlanCard.jsx – Displays an individual planned meal with Edit and Delete buttons.
- Stats.jsx – Displays statistics calculated from the meal plan.
🌐 API
This project uses TheMealDB to retrieve recipe information.

Example search endpoint:

https://www.themealdb.com/api/json/v1/1/search.php?s=chicken

The application uses recipe information such as:
- strMeal – Recipe name
- strMealThumb – Recipe image
- idMeal – Recipe ID
- strCategory – Recipe category
- strArea – Recipe cuisine or area
💾 Saving Meal Plans
Personal meals are stored in the browser using localStorage.

The application uses:
- JSON.stringify() to convert the meal array into a string when saving.
- JSON.parse() to turn the saved string back into an array when loading.
This allows the user's meal plan to remain available after refreshing the browser.
🚀 How to Run the Project
1. Clone or download the project from GitHub.
2. Open the project folder in VS Code.
3. Open the terminal.
4. Install the project dependencies:
   npm install
5. Start the development server:
   npm run dev
6. Open the local URL displayed in the terminal.
🎯 Project Goal
The goal of this project is to practice React fundamentals by building a useful application that combines an external API with user-created data. It demonstrates reusable components, props, state, effects, array methods, form handling, and browser storage.
👩‍💻 Author
Created as a React learning project.