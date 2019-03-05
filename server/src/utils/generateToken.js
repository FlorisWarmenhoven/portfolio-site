import jwt from "jsonwebtoken";

export const generateToken = id => {
	return jwt.sign({ userId: id }, process.env.JWT_SECRET, {
		expiresIn: "7 days"
	});
};
