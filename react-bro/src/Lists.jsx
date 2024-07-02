export default function Lists() {
  const fruits = [
    { id: 1,name:"Apple", calories: 95},
    { id: 2,name: "Orange", calories: 45},
    { id: 3,name:"Pineapple", calories:105},
    { id: 4,name:"Straw berry", calories:159},
    { id: 5,name:"Coconut", calories:37}
  ];
  // Sorting
  fruits.sort((a, b) => a.name.localeCompare(b.name)) //Alphabetical
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
  
  const lisItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; <b>{ fruit.calories}</b></li>)
  return (
    <>
      <ul>{lisItems }</ul>
      {/* <ol>{filterdList }</ol> */}
    </>
  )
}