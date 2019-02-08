import React, { FC, useState } from "react";
import { Mutation } from "react-apollo";
import { CREATE_TECHNOLOGY } from "../../../graphql/mutations";

interface Props {}

export const AddTechnology: FC<Props> = props => {
	const [name, setName] = useState("");
	const [iconUrl, setIconUrl] = useState("");

	function handleFormSubmit(e: any, addTechnology: Function) {
		e.preventDefault();
		addTechnology({ variables: { name, iconUrl } });
	}

	return (
		<Mutation mutation={CREATE_TECHNOLOGY}>
			{addTechnology => (
				<form onSubmit={e => handleFormSubmit(e, addTechnology)}>
					<label>
						Name:
						<input
							type="text"
							name="name"
							value={name}
							onChange={e => setName(e.target.value)}
						/>
					</label>
					<label>
						SVG URL:
						<input
							type="text"
							name="iconUrl"
							value={iconUrl}
							onChange={e => setIconUrl(e.target.value)}
						/>
					</label>
					<input type="submit" value="Add" />
				</form>
			)}
		</Mutation>
	);
};
