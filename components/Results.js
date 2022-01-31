import React from "react";
import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

const Results = ({ data }) => {
	const results = data.results || [];

	return (
		<FlipMove className="p-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:flex flex-wrap justify-center gap-3 gap-y-5">
			{results.map((result, index) => (
				<Thumbnail key={result.id} result={result} />
			))}
		</FlipMove>
	);
};

export default Results;
