import { useEffect, useState } from "react"
import PopDiv from "./PopDiv"

export default function CategoryItems({ id, setPopDiv, setVisibility }) {
  const [recipe, setRecipe] = useState()

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((resp) => resp.json())
      .then((data) => setRecipe(data.meals[0]))
  }, [id])

  const arr1 = []
  const arr2 = []
  
  if (recipe) {
    console.log(recipe)
    const keys = Object.keys(recipe)
    for (let i = 9; i <= 28; i++) {
      const item = recipe[keys[i]]
      if (!item) break
      arr1.push(item)
    }
    for (let i = 29; i <= 48; i++) {
      const item = recipe[keys[i]]
      if (!item) break
      arr2.push(item)
    }
  }

  return (
    recipe && (
      <section>
        <img src={recipe.strMealThumb} alt="" />
        <h3>{recipe.strMeal}</h3>
        <button
          onClick={() => {
            setVisibility(true)
            setPopDiv(
              <PopDiv
                setVisibilty={setVisibility}
                link={recipe.strYoutube}
                ingredients={arr1}
                measures={arr2}
                details={recipe.strInstructions.split(".")}
              />
            )
          }}
        >
          how to make it
        </button>
      </section>
    )
  )
}
