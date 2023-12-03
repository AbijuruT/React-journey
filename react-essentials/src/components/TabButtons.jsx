export default function TabButtons({ children, isSelected, onSelect }) {
	//using obj destructuring
	return (
		<li>
			<button className={isSelected ? 'active': undefined} onClick={onSelect}>
				{children}
			</button>
		</li>
	);
}