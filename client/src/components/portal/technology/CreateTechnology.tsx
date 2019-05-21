import React, { FC, useState } from "react";

interface IProps {
	handleCreate: Function;
}

export const CreateTechnology: FC<IProps> = props => {
	const [name, setName] = useState("");
	const [iconUrl, setIconUrl] = useState("");

	function handleFormSubmit(e: React.FormEvent) {
		e.preventDefault();
		props.handleCreate({ variables: { name, iconUrl } });
		setName("");
		setIconUrl("");
	}

	return (
		<form onSubmit={e => handleFormSubmit(e)}>
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
			<input type="submit" value="Add Technology" />
		</form>
	);
};
