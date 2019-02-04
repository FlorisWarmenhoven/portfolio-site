import axios from "axios";

export default async () => {
	const token = await localStorage.getItem("token");
	const response = await axios.get("http://localhost:8000/api/authenticate", {
		headers: { Authorization: `Bearer ${token}` },
	});

	if (response.status === 200) {
		return true;
	}

	return false;
};
