import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import RecipeCard from './RecipeCard'

function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <main>
        <h2>Welcome to Your Recipe Book!</h2>
        <p>Find your next favorite meal and plan the next few for a stress free week!</p>
      </main>
      <Footer />
    </>
  )
}
export default App
