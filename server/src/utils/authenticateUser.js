import jwt from 'jsonwebtoken';

export const authenticateUser = ({ request }) => {
	const header = request.headers.authorization;

	if (!header) {
		throw new Error('Authentication required.');
	}

	const token = header.replace('Bearer ', '');
	const decoded = jwt.verify(token, process.env.JWT_SECRET);

	return decoded.userId;
};
