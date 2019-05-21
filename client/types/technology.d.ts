interface ITechnology {
	id: string;
	name: string;
	iconUrl: string;
}

interface IProject {
	id: string;
	title: string;
	description: string;
	githubUrl: string;
	technologies: ITechnology[];
}
