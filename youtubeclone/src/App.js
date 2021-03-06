import "./App.css";
import Header from "./components/Header";
import RecommendedVideos from "./components/RecommendedVideos";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";

function App() {
	return (
		<div className="app">
			<Router>
				<Header />
				<Switch>
					{/* this will match any url  route and it will render it out*/}
					<Route path="/search/:searchTerm">
						<div className="app__page">
							<Sidebar />
							<SearchPage />
						</div>
					</Route>
					<Route path="/">
						<div className="app__page">
							<Sidebar />
							<RecommendedVideos />
						</div>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
