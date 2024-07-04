// import Lists from './Lists';
// export default function App() {
// 	// making a reusable lists

// 	const fruits = [
// 		{ id: 1, name: 'Apple', calories: 95 },
// 		{ id: 2, name: 'Orange', calories: 45 },
// 		{ id: 3, name: 'Pineapple', calories: 105 },
// 		{ id: 4, name: 'Straw berry', calories: 159 },
// 		{ id: 5, name: 'Coconut', calories: 37 },
// 	];
// 	const vegetables = [
// 		{ id: 6, name: 'Banana', calories: 75 },
// 		{ id: 7, name: 'Nuts', calories: 25 },
// 		{ id: 8, name: 'Potatoes', calories: 110 },
// 		{ id: 9, name: 'Pasta', calories: 90 },
// 		{ id: 10, name: 'pears', calories: 107 },
// 	];
// 	return (
// 		<>
// 			{/* {fruits.length > 0 ? <Lists items={fruits} category='fruits' /> : null}
// 			{vegetables.length > 0 ? (
// 				<Lists items={vegetables} category='Vegetables' />
// 			) : null} */}
// 			{/* short hand ternary with && */}
// 			{fruits.length > 0 && <Lists items={fruits} category='fruits' />}
// 			{vegetables.length > 0 && <Lists items={vegetables} category='Vegetables' />}
// 		</>
// 	);
// }
//Click handling
import Button from "./button";
export default function App() {
	return (
		<Button/>
	)
}
