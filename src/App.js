import "./styles.css";
import {
	createHashRouter,
	RouterProvider
} from "react-router-dom";
import Index from "./pages/Index";
import Promo from "./pages/Promo";
import About from "./pages/About";
import Articles from "./pages/Articles";
import Study from "./pages/Study";
import Travelling from "./pages/Travelling";
import WhereToGo from "./pages/WhereToGo";
import Profile from "./pages/Profile";

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
]);

export default function App() {
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}
