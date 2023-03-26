export default function PopDiv({
  setVisibilty,
  link,
  ingredients,
  measures,
  details,
}) {
  return (
    <div className="bg">
      <div className="popDiv">
        <button onClick={() => setVisibilty(false)}>x</button>
        <a href={link} target="_blank" rel="noreferrer">
          Click to get explian with video
        </a>
        <h3>first, ingredient & measure:</h3>
        <ul>
          {ingredients.map((ingredient, i) => {
            return (
              <li key={i}>
                {ingredient}: {measures[i]}
              </li>
            )
          })}
        </ul>
        <h3>steps</h3>
        {details.map((detail, i) => {
          return detail && <p key={i}>{detail}</p>
        })}
      </div>
    </div>
  )
}
