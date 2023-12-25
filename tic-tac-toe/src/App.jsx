import Player from "./components/player";

function App() {
  

  return (
		<main>
			<div id='game-container'>
				{/* Players */}
				<ol id='players'>
					<Player />
					<Player />
					{/* 
          Since we are repeating ourselves it's better to use component for that repeating part
          <li>
						<span className='player'>
							<span className='player-name'>Player 1</span>
							<span className='player-symbol'>X</span>
						</span>
						<button>Edit</button>
					</li>
					<li>
						<span className='player'>
							<span className='player-name'>Player 2</span>
							<span className='player-symbol'>O</span>
						</span>
						<button>Edit</button>
					</li> */}
				</ol>
				{/* Game board */}
			</div>
			{/* Log */}
		</main>
	);
}

export default App
