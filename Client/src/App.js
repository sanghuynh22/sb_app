import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Friends from "./Friends";
import Watch from "./Watch";
import Marketplace from "./Marketplace";
import Error from "./Error";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import Register from "./components/Register";
import Story from "./components/Story";
import Profile from "./components/Profile";
function App() {
	const { currentUser } = useSelector((state) => state.user.auth);
	return (
		<Routes>
			{currentUser ? (
				<>
					<Route path="" element={<Home />} />
					<Route path="profile/:userId" element={<Profile />} />
				</>
			) : (
				<Route path="" element={<Login />} />
			)}
			{}
			<Route path="register" element={<Register />} />
			<Route path="story" element={<Story />} />
			<Route path="story/:userId" element={<Story />} />
			<Route path="friends" element={<Friends />} />
			<Route path="watch" element={<Watch />} />
			<Route path="marketplace" element={<Marketplace />} />
			<Route path="*" element={<Error />} />
		</Routes>
	);
}

export default App;
