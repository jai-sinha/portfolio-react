import { Outlet } from "react-router-dom";
import PortfolioNav from "./nav/PortfolioNav";

function App() {
	return (
		<>
			<PortfolioNav />
			<div style={{marginTop:'4rem'}}>
				<Outlet />
			</div>
		</>
  )
}

export default App
