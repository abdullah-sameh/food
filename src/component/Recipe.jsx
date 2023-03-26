import PopDiv from "./PopDiv"

export default function Recipe(props) {

  return (
    <section>
      <img src={props.imgSrc} alt="img" />
      <h3>{props.name}</h3>
      <button
        onClick={() => {
          props.setVisibility(true)
          props.setPopDiv(
            <PopDiv
              setVisibilty={props.setVisibility}
              link={props.popDiv[0]}
              ingredients={props.popDiv[1]}
              measures={props.popDiv[2]}
              details={props.popDiv[3]}
            />
          )
        }}
      >
        how to make it
      </button>
    </section>
  )
}
