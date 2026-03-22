import jwt from "jsonwebtoken";


export const authenticate = (userId) => {
    try {
        if (!userId) {
           
            throw new Error("User ID is required to generate a token");
        }

        const token = jwt.sign(
            { id: userId },
            process.env.JWT_SECRET,
            { expiresIn: "24h" }
        );

        return token;
    } catch (error) {
        
        console.error("JWT Generation Error:", error.message);
        return null;
    }
};


export const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET)
}


