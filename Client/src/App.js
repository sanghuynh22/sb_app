import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Friends from "./Friends";
import Watch from "./Watch";
import Marketplace from "./Marketplace";
import Error from "./Error";
function App() {
	return (
		<Routes>
			<Route path="" element={<Home />} />
			<Route path="friends" element={<Friends />} />
			<Route path="watch" element={<Watch />} />
			<Route path="marketplace" element={<Marketplace />} />
			<Route path="*" element={<Error />} />
		</Routes>
	);
}

export default App;
