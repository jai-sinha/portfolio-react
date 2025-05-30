import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "../App";
import Landing from "../pages/Landing"
import Gallery from "../pages/Gallery"
import About from "../pages/About"
import NoMatch from "../pages/NoMatch"

export default function PortfolioRouter() {
	return <BrowserRouter>
		<Routes>
			<Route path="/" element={<App />}>
				<Route index element={<Landing />} />
				<Route path="gallery" element={<Gallery />} />
				<Route path="about" element={<About />} />
				<Route path="*" element={<NoMatch />} />
			</Route>
		</Routes>
	</BrowserRouter>
}