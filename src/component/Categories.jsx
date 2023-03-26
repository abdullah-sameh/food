import { Link } from "react-router-dom"

export default function Categories({ data }) {
  return (
    <div className="categories">
      {data.map((categories, i) => {
        const imgSrc = categories.strCategoryThumb
        const name = categories.strCategory
        const desc = categories.strCategoryDescription
        return (
          <section key={i}>
            <img src={imgSrc} alt="img" />
            <h3>{name}</h3>
            <p>{desc}</p>
            <Link to={"/categorys/" + name}>more about this</Link>
          </section>
        )
      })}
    </div>
  )
}
