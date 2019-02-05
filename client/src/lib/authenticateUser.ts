import axios from "axios";

export default async () => {
	const token = await localStorage.getItem("token");
	try {
		await axios.get("http://localhost:8000/api/authenticate", {
			headers: { Authorization: `Bearer ${token}` },
		});

		return true;
	} catch (error) {
		return false;
	}
};
