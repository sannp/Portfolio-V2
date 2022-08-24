import { useState, useEffect } from "react";

export const useFetch = (url) => {
	const [loading, setLoading] = useState(true);
	const [items, setItems] = useState([]);
	const getItems = async () => {
		const response = await fetch(url);
		const items = await response.json();
		setItems(items);
		setLoading(false);
	};
	useEffect(() => {
		getItems();
	}, [url]);
	return { loading, items };
};
