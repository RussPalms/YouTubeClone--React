import "./App.css";
import Header from "./components/Header";
import RecommendedVideos from "./components/RecommendedVideos";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			{/* <h1>Youtube Clone</h1> */}

			<Header />
			<div className="app__page">
				<Sidebar />
				<RecommendedVideos />
			</div>
		</div>
	);
}

export default App;
