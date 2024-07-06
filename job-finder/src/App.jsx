import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
const router = createBrowserRouter(
	//we are using index instead of path because we want to show homepage or a page
	//For instance <Route path='/about'/ element={<p>About</p>} />
	createRoutesFromElements(
		<Route path='/' element={<MainLayout />}>
			<Route index element={<HomePage />} />
		</Route>
	)
);
const App = () => {
	return <RouterProvider router={router} />;
};
export default App;
