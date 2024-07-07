import { useState, useEffect } from 'react';
import SingleJobListing from './SingleJobListing';
import Spinner from './Spinner';
const JobListings = ({ isHome = false }) => {
	// This is in order to get 3 recent jobs from the listing
	// const jobListings = isHome ? jobs.slice(0, 3) : jobs;
	const [jobs, setJobs] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		// Creating async await,.
		const fetchJobs = async () => {
			const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
			//add try and catch
			try {
				const response = await fetch(apiUrl);
				const data = await response.json();
				setJobs(data);
			} catch (error) {
				console.log('Error fetching data', error);
			} finally {
				setLoading(false);
			}
		};
		fetchJobs();
	}, []);
	return (
		<section className='bg-blue-50 px-4 py-10'>
			<div className='container-xl lg:container m-auto'>
				<h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
					{isHome ? 'Recent Jobs' : 'Browse Jobs'}
				</h2>

				{loading ? (
					<Spinner loading={loading} />
				) : (
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						{jobs.map((job) => (
							<SingleJobListing key={job.id} job={job} />
						))}
					</div>
				)}
			</div>
		</section>
	);
};
export default JobListings;
