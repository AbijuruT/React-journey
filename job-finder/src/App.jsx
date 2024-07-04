const App = () => {
  const list = ['Brad', 'Mary', 'Joe', 'Sara'];
  const loggedIn = true;
	return (
		<>
			<div className='text-5xl'>App</div>
			<p>Helloo</p>
			<ul>
				{list.map((name, index) => (
					<li key={index}>{name}</li>
				))}
			</ul>
			{loggedIn && <h1> Hello member</h1>}
		</>
	);
};
export default App;
