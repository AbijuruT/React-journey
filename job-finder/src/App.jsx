import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFound from './pages/NotFound';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';

const App = () => {
	//Function to add job received as a prop
	const addJob = async (newJob) => {
		const res = await fetch('/api/jobs', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newJob),
		});
		return;
	};
	//Delete job
	const deleteJob = async (id) => {
		const res = await fetch(`/api/jobs/${id}`, {
			method: 'DELETE',
		});
		return;
	};
	//Function to edit job received as a prop
	const updateJob = async (job) => {
		const res = await fetch(`/api/jobs/${job.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(job),
		});
		return;
	};
	const router = createBrowserRouter(
		//we are using index instead of path because we want to show homepage or a page
		//For instance <Route path='/about'/ element={<p>About</p>} />
		createRoutesFromElements(
			//Creating a layout
			<Route path='/' element={<MainLayout />}>
				<Route index element={<HomePage />} />
				<Route path='/jobs' element={<JobsPage />} />
				<Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
				<Route
					path='/edit-job/:id'
					element={<EditJobPage updateJobSubmit={updateJob} />}
					loader={jobLoader}
				/>
				<Route
					path='/jobs/:id'
					element={<JobPage deleteJob={deleteJob} />}
					loader={jobLoader}
				/>
				<Route path='*' element={<NotFound />} />
			</Route>
		)
	);
	return <RouterProvider router={router} />;
};
export default App;
