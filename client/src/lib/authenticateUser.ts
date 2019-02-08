import axios from "axios";

export async function authenticateUser() {
	const token = await localStorage.getItem("token");
	try {
		await axios.get("http://localhost:8000/api/authenticate", {
			headers: { Authorization: `Bearer ${token}` },
		});

		return true;
	} catch (error) {
		return false;
	}
}
