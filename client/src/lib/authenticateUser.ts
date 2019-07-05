import axios from 'axios';

export const authenticateUser = async () => {
	const token = await localStorage.getItem('token');
	try {
		await axios.get(`${process.env.BACKEND_API_ENDPOINT}/authenticate`, {
			headers: { Authorization: `Bearer ${token}` }
		});

		return true;
	} catch (error) {
		return false;
	}
};
