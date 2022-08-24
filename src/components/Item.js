import React, { useContext } from "react";
import Context from "../utilities/Context";
import PropTypes from "prop-types";
import Badge from "./Badge.js";
function Item(props) {
	const { url } = useContext(Context);
	return (
		<li className="item">
			<div className="item-title">{props.title}</div>
			<div className="item-image-container">
				<img
					className="item-image"
					src={url + "files/image/" + props.imageUrl}
					alt={props.imageAlt}
				/>
			</div>
			<div className="badge-row">
				{props.badges.map((item, index) => {
					return <Badge id={item} key={index} />;
				})}
			</div>
			<p className="item-description">{props.description}</p>
			<div className="item-buttons">
				{props.button1 && (
					<a
						className="item-button ripple"
						target="_blank"
						href={props.button1Url}
						rel="noreferrer"
					>
						{props.button1}
					</a>
				)}
				{props.button2 && (
					<a
						className="item-button"
						target="_blank"
						href={props.button2Url}
						rel="noreferrer"
					>
						{props.button2}
					</a>
				)}
			</div>
		</li>
	);
}

Item.propTypes = {
	imageUrl: PropTypes.string.isRequired,
	imageAlt: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	badges: PropTypes.array,
};
Item.defaultProps = {
	imageUrl: "https://via.placeholder.com/250",
	imageAlt: "placeholder",
	title: "Title",
	badges: ["N/A"],
	description:
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae accusantium, earum sit at est deleniti veritatis nisi corrupti consequatur doloremque?",
};
export default Item;
