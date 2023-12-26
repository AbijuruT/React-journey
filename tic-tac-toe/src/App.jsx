import Player from "./components/player";
import GameBoard from "./components/GameBoard";
function App() {
  

  return (
		<main>
			<div id='game-container'>
				{/* Players */}
				<ol id='players'>
					<Player initialName="Player 1" symbol="X" />
					<Player initialName="Player 2" symbol="O" />
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
        <GameBoard />
			</div>
			{/* Log */}
		</main>
	);
}

export default App
