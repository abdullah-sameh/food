import { useEffect, useState } from "react"
import Categories from "../component/Categories"

export default function Home() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((resp) => resp.json())
      .then((data) => setCategories(data.categories))
  }, [])
  return <>{categories && <Categories data={categories} />}</>
}
