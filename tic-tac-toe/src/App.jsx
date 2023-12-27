import { useState } from 'react';
import Player from './components/player';
import GameBoard from './components/GameBoard';
function App() {
	const [activePlayer, setActivePlayer] = useState('X');
	function handleSelectedSquare() {
		setActivePlayer((curActivePlayer) => (curActivePlayer === 'X' ? 'O' : 'X'));
	}

	return (
		<main>
			<div id='game-container'>
				{/* Players */}
				<ol id='players' className='highlight-player'>
					<Player
						initialName='Player 1'
						symbol='X'
						isActive={activePlayer === 'X'}
					/>
					<Player
						initialName='Player 2'
						symbol='O'
						isActive={activePlayer === 'O'}
					/>
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
        <GameBoard onSelectSquare={handleSelectedSquare} activePlayerSymbol={ activePlayer} />
			</div>
			{/* Log */}
		</main>
	);
}

export default App;
