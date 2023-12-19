export default function TabButtons({ children, isSelected, ...props }) {
	//using obj destructuring
	return (
		<li>
			<button className={isSelected ? 'active': undefined} {...props}>
				{children}
			</button>
		</li>
	);
}