const App = () => {
  const list = ['Brad', 'Mary', 'Joe', 'Sara'];
  
	return (
		<>
			<div className='text-5xl'>App</div>
			<p>Helloo</p>
			<ul>
				{list.map((name, index) => (
					<li key={index}>{name}</li>
				))}
			</ul>
		</>
	);
};
export default App;
