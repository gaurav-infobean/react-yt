const Card=(props)=>{
  return(
    <div className="card">
      <h2>{props.user}</h2>
      <p>{props.age}</p>
    </div>
  )
}

export default Card;