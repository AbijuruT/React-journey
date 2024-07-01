export default function Food() {
	const food1 = 'Burger';
	const food2 = 'Salade';
	return (
		<ul>
			<li>Apple</li>
			<li>{food1}</li>
			<li>{food2.toUpperCase()}</li>
		</ul>
	);
}
