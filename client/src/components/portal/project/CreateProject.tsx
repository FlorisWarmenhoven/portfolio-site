import React, { FC, useState } from "react";

interface Props {
	handleCreate: Function;
}

export const CreateProject: FC<Props> = props => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [technologies, setTechnologies] = useState("");

	function handleFormSubmit(e: any) {
		e.preventDefault();
		// CreateProject();
	}

	return (
		<form onSubmit={e => handleFormSubmit(e)}>
			<label>
				Title:
				<input
					type="text"
					name="title"
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
			</label>

			<label>
				Description:
				<input
					type="text"
					name="description"
					value={description}
					onChange={e => setDescription(e.target.value)}
				/>
			</label>
			<label>
				Image URL:
				<input
					type="text"
					name="imageUrl"
					value={imageUrl}
					onChange={e => setImageUrl(e.target.value)}
				/>
			</label>

			<label>
				Technologies:
				<input
					type="text"
					name="technologies"
					value={technologies}
					onChange={e => setTechnologies(e.target.value)}
				/>
			</label>
			<input type="submit" value="Create Project" />
		</form>
	);
};