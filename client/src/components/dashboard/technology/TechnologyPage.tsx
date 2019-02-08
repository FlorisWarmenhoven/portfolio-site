import React from "react";
import TechnologyList from "./TechnologyList";
import { AddTechnology } from "./AddTechnology";

export default function TechnologyPage() {
	return (
		<div>
			<TechnologyList />
			<AddTechnology />
		</div>
	);
}
