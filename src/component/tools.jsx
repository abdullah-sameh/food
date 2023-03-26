export const searchForRecipe = async (navigate, searchTxt, setResults) => {
  navigate("/result")
  const api = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTxt}`
  )
  const data = await api.json()
  setResults(data.meals)
}

export const getRandom = async (setResults) => {
  const api = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
  const data = await api.json()
  setResults(data.meals)
}
