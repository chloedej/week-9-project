import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import RecipeCard from './components/RecipeCard'
import RecipeList from './components/RecipeList'

function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <main>
        <h2>Welcome to Your Recipe Book!</h2>
        <p>Find your next favorite meal and plan the next few for a stress free week!</p>
      <h2>Featured Recipes</h2>
      <RecipeList recipes={[]} />
      </main>
      
      <Footer />
    </>
  )
}
export default App
