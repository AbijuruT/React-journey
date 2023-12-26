import { useState } from 'react';
export default function Player({ initialName, symbol }) {
	const [name, setName] = useState(initialName);
	const [isEditing, setIsEditing] = useState(false);
	function handleEditCLick() {
		setIsEditing((editing) => !editing);
	}
  function handleChange(event) {
    setName(event.target.value)
  }
	let playerName = <span className='player-name'>{name}</span>;
	// let btnCaption = 'Edit'
	if (isEditing) {
		playerName = <input type='text'onChange={handleChange} value={name} required />;
		// btnCaption = 'Save';
  }
	return (
		<li>
			<span className='player'>
				{playerName}
				<span className='player-symbol'>{symbol}</span>
			</span>
			<button onClick={handleEditCLick}>{isEditing ? 'Save' : 'Edit'}</button>
		</li>
	);
}
