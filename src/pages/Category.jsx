import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CategoryItems from "../component/CategoryItems"

export default function Category() {
  const { name } = useParams()
  const [results, setResults] = useState([])
  const [popDiv, setPopDiv] = useState()
  const [visibility, setVisibility] = useState(true)

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
      .then((resp) => resp.json())
      .then((data) => setResults(data.meals))
  }, [name])

  return (
    <div className="cItems">
      {results?.map((result, i) => {
        return (
          <CategoryItems
            key={i}
            id={result.idMeal}
            setPopDiv={setPopDiv}
            setVisibility={setVisibility}
          />
        )
      })}
      {visibility && popDiv}
    </div>
  )
}
