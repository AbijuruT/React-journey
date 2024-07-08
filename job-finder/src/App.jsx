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

const router = createBrowserRouter(
	//we are using index instead of path because we want to show homepage or a page
	//For instance <Route path='/about'/ element={<p>About</p>} />
	createRoutesFromElements(
		//Creating a layout
		<Route path='/' element={<MainLayout />}>
			<Route index element={<HomePage />} />
			<Route path='/jobs' element={<JobsPage />} />
			<Route path='/add-job' element={<AddJobPage />} />
			<Route path='/jobs/:id' element={<JobPage />} loader={jobLoader} />
			<Route path='*' element={<NotFound />} />
		</Route>
	)
);
const App = () => {
	return <RouterProvider router={router} />;
};
export default App;
