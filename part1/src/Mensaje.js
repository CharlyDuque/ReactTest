const Mensaje = (props) => {
  return (

    <h1 style=
      {
        { color: props.color }
      }
    >
      Hello
      {props.name}
    </h1>

  )
}

export default Mensaje