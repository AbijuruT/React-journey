import profilePic from "../assets/thor.jpeg";
export default function Card(props) {
  return (
    <div className="card">
      <img className="card__img"src={profilePic} alt="Thor profile picture" />
      <h2>{ props.name}</h2>
      <p>{ props.description}</p>
    </div>
  )
}