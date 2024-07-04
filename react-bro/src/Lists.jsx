import PropTypes from 'prop-types';
export default function Lists(props) {
	const category = props.category;
	const itemList = props.items;
	// Sorting
	// fruits.sort((a, b) => a.name.localeCompare(b.name)) //Alphabetical
	//fruits.sort((a, b) => b.name.localeCompare(a.name)); //reversed
	// fruits.sort((a, b) => b.calories - a.calories); //numerical order

	// const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
	// const highCalFruits = fruits.filter((fruit) => fruit.calories >= 100);
	// const filterdList = lowCalFruits.map((lowCalFruit) => (
	// 	<li key={lowCalFruit.id}>
	// 		{lowCalFruit.name}: &nbsp; <b>{lowCalFruit.calories}</b>
	// 	</li>
	// ));
	// const filterdList = highCalFruits.map((highCalFruit) => (
	// 	<li key={highCalFruit.id}>
	// 		{highCalFruit.name}: &nbsp; <b>{highCalFruit.calories}</b>
	// 	</li>
	// ));
	//Without props
	// const lisItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; <b>{ fruit.calories}</b></li>)
	//With props
	const lisItems = itemList.map((item) => (
		<li key={item.id}>
			{item.name}: &nbsp; <b>{item.calories}</b>
		</li>
	));

	return (
		<>
			<h3>{category}</h3>
			<ul>{lisItems}</ul>
			{/* <ol>{filterdList }</ol> */}
		</>
	);
}
Lists.prototype = {
	category: PropTypes.string,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			name: PropTypes.string,
			calories: PropTypes.number,
		})
	),
};
