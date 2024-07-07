import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import JobPage from './pages/JobPage';
import NotFound from './pages/NotFound';
const router = createBrowserRouter(
	//we are using index instead of path because we want to show homepage or a page
	//For instance <Route path='/about'/ element={<p>About</p>} />
	createRoutesFromElements(
		//Creating a layout
		<Route path='/' element={<MainLayout />}>
			<Route index element={<HomePage />} />
			<Route path='/jobs' element={<JobsPage />} />
			<Route path='/jobs/:id' element={<JobPage />} />
			<Route path='*' element={<NotFound />} />
		</Route>
	)
);
const App = () => {
	return <RouterProvider router={router} />;
};
export default App;
