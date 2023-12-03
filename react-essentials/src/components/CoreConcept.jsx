export default function CoreConcept({ image, title, description }) {
	//Using object destructuring
	return (
		// <li>
		// 	<img src={props.image} alt={props.title} />
		// 	<h3>{props.title}</h3>
		// 	<p>{props.description}</p>
		// </li>
		<li>
			<img src={image} alt={title} />
			<h3>{title}</h3>
			<p>{description}</p>
		</li>
	);
}
