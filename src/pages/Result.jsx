import { useState } from "react"
import Recipe from "../component/Recipe"

export default function Result({ results }) {
  const [popDiv, setPopDiv] = useState()
  const [visibility, setVisibility] = useState(true)
  return results ? (
    <div className="results">
      {results &&
        results.map((recipe, i) => {
          const keys = Object.keys(recipe)
          const arr1 = []
          const arr2 = []
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

          return (
            <Recipe
              key={i}
              name={recipe.strMeal}
              imgSrc={recipe.strMealThumb}
              setVisibility={setVisibility}
              setPopDiv={setPopDiv}
              popDiv={[
                recipe.strYoutube,
                arr1,
                arr2,
                recipe.strInstructions.split("."),
              ]}
            />
          )
        })}
      {visibility && popDiv}
    </div>
  ) : (
    <p className="no-results">there is no result</p>
  )
}
