import React, { FC, useState } from 'react';

interface IProps {
	handleCreate: Function;
}

export const CreateProject: FC<IProps> = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [technologies, setTechnologies] = useState('');

	const handleFormSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// CreateProject();
	};

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
