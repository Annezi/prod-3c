import "./styles.css";
import {
	createHashRouter,
	RouterProvider
} from "react-router-dom";
import Index from "./pages/Index";
import Promo from "./pages/Promo";
import About from "./pages/About";
import ArticleDetail from "./pages/ArticleDetail";
import Articles from "./pages/Articles";
import Study from "./pages/Study";
import Travelling from "./pages/Travelling";
import WhereToGo from "./pages/WhereToGo";
import Profile from "./pages/Profile";
import Landing from "./pages/Landing";
import Styleguide from "./pages/Styleguide/Styleguide";
import { HelmetProvider } from 'react-helmet-async';

const router = createHashRouter([
	{
		path: "/",
		element: <Index />,
	},
	{
		path: "/promo",
		element: <Promo />,
	},
	{
		path: "/about",
		element: <About />,
	},
	{
		path: "/articles",
		element: <Articles />,
	},
	{
		path: "/article/:id",
		element: <ArticleDetail />,
	},
	{
		path: "/study",
		element: <Study />,
	},
	{
		path: "/travelling",
		element: <Travelling />,
	},
	{
		path: "/where-to-go",
		element: <WhereToGo />,
	},
	{
		path: "/profile",
		element: <Profile />,
	},
	{
		path: "/landing",
		element: <Landing />,
	},
	{
		path: "/styleguide",
		element: <Styleguide />,
	},
]);

export default function App() {
	return (
		<div className="App">
			<HelmetProvider>
				<RouterProvider router={router} />
			</HelmetProvider>
		</div>
	);
}
