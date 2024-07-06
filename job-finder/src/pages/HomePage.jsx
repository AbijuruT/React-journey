import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewAll from '../components/ViewAll';

const HomePage = () => {
	return (
		<>
			<Hero />
			<HomeCards />
			<JobListings />
			<ViewAll />
		</>
	);
};

export default HomePage;
