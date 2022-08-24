import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../utilities/Context";
import PropTypes from "prop-types";
import Item from "./Item";

const ItemsList = React.memo((props) => {
	const { projects } = useContext(Context);
	const [displayList, setdisplayList] = useState([]);
	console.count("Rendered");
	useEffect(() => {
		setdisplayList(
			projects.filter((item) => item.badges.includes(props.category))
		);
	}, [projects, props.category]);
	return (
		<li className="item-list-container">
			<div className="item-list-title-container">
				<span className="item-list-title">{props.title}</span>
				{displayList.length > 4 ? (
					<Link
						to={{
							pathname: "/categories/" + props.value,
							id: props.category,
							title: props.title,
						}}
					>
						<button className="view-all-btn ripple">
							<span className="view-all-btn-text">View All</span>
							<svg
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-arrow-right-circle"
								viewBox="0 0 16 16"
							>
								<path
									fillRule="evenodd"
									d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
								/>
							</svg>
						</button>
					</Link>
				) : (
					<></>
				)}
			</div>
			<ul className="item-list-row">
				{displayList.slice(0, 4).map((element, index) => {
					return <Item {...element} key={element._id} />;
				})}
			</ul>
		</li>
	);
});

ItemsList.propTypes = {
	title: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
};
ItemsList.defaultProps = {
	title: "List",
};
export default ItemsList;
