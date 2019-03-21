interface Technology {
	id: string;
	name: string;
	iconUrl: string;
}

interface Project {
	id: string;
	title: string;
	description: string;
	githubUrl: string;
	technologies: Technology[];
}
