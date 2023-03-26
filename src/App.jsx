import { useState } from "react"
import { Link, Route, Routes, useNavigate } from "react-router-dom"
import "./App.css"
import Result from "./pages/Result"
import Home from "./pages/Home"
import Category from "./pages/Category"
import "animate.css"
import { getRandom, searchForRecipe } from "./component/tools"

export default function App() {
  const [results, setResults] = useState([])
  const [searchTxt, setSearchTxt] = useState("")
  const navigate = useNavigate()

  return (
    <>
      <nav>
        <Link to="/">Categories</Link>
      </nav>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          searchTxt && searchForRecipe(navigate, searchTxt, setResults)
          setSearchTxt("")
        }}
      >
        <input
          type="search"
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
          placeholder="Enter to get recipe"
        />
        <button type="submit">search</button>
        <Link // get random recipe
          to="/result"
          type="button"
          onClick={() => {
            (getRandom(setResults))
          }}
        >
          get random recipes
        </Link>
      </form>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result results={results} />} />
        <Route path="/categorys/:name" element={<Category />} />
      </Routes>

      <footer>all rights served for abdullah sameh</footer>
    </>
  )
}
