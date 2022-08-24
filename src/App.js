import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Context from "./utilities/Context";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import ItemsList from "./components/ItemsList";
import Category from "./components/Category";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Loader from "./components/Loader";

const App = () => {
	const baseUrl = process.env.REACT_APP_API_URL;
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);
	const [badges, setBadges] = useState([]);
	const [categories, setCategories] = useState([]);

	const getItems = async (url) => {
		setLoading(true);
		const response = await fetch(url);
		const items = await response.json();
		return items;
	};
	const getAllData = () => {
		getItems(baseUrl + "projects/all").then((data) => {
			setLoading(false);
			if (data.success) {
				setData(data.data);
			}
		});
		getItems(baseUrl + "categories/all").then((categorydata) => {
			setLoading(false);
			if (categorydata.success) {
				setCategories(categorydata.data);
			}
		});
		getItems(baseUrl + "badges/all").then((badgesdata) => {
			setLoading(false);
			if (badgesdata.success) {
				setBadges(badgesdata.data);
			}
		});
	};
	useEffect(() => {
		getAllData();
	}, []);

	return (
		<Router>
			{loading && <Loader />}
			<Context.Provider
				value={{
					badges: badges,
					projects: data,
					list: categories,
					url: baseUrl,
					getData: getAllData,
					loader: setLoading,
				}}
			>
				<Navigation />
				<main>
					<Switch>
						<Route path="/" exact>
							<Header />
							<ul>
								{categories.map((ele, index) => {
									return (
										<ItemsList
											title={ele.title}
											value={ele.value}
											category={ele.category}
											key={index}
										/>
									);
								})}
							</ul>
						</Route>
						<Route path="/categories/:category">
							<Category />
						</Route>
						<Route path="/profile">
							<Profile />
						</Route>
						<Route path="*">
							<Error />
						</Route>
					</Switch>
				</main>
				<Footer />
			</Context.Provider>
		</Router>
	);
};

export default App;
