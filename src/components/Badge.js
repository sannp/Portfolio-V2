import React, { useContext } from "react";
import Context from "../utilities/Context";
import PropTypes from "prop-types";

function Badge(props) {
	const { badges } = useContext(Context);
	let item = badges.find((item) => item.id === props.id);

	return (
		<div
			className="badge"
			style={{
				backgroundColor: item ? item.bgColor : "#fffff",
				color: item ? item.color : "#fffff",
			}}
		>
			{item ? item.title : "N/A"}
		</div>
	);
}
Badge.propTypes = {
	id: PropTypes.string.isRequired,
};
Badge.defaultProps = {
	id: "0",
};
export default Badge;
