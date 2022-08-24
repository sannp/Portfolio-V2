import React, { useContext, useEffect, useState } from "react";
import Context from "../utilities/Context";
import { useParams } from "react-router";
import Item from "./Item";

export default function Category() {
	const [displayList, setList] = useState([]);
	const [title, setTitle] = useState("");
	let { projects, list, getData } = useContext(Context);
	const { category } = useParams();
	useEffect(() => {
		if (!list || !projects) {
			getData();
		}
	}, []);
	useEffect(() => {
		const item = list.find((element) => element.value === category);
		if (item) {
			const id = item.category;
			setTitle(item.title);
			setList(projects.filter((item) => item.badges.includes(id)));
		}
	}, [projects, list, category]);
	return (
		<main>
			<h1 className="item-list-title">{title}</h1>
			<ul className="item-list-row">
				{displayList.map((element, index) => {
					return <Item {...element} key={element._id} />;
				})}
			</ul>
		</main>
	);
}
