import jwtmod from "jsonwebtoken";

/**
 * Middleware to verify Keycloak JWT tokens
 * Add this to your Express routes that need authentication
 * 
 * Usage:
 * import verifyToken from './middleware/verifyToken.js';
 * app.get('/documents', verifyToken, getDocuments);
 */
export default async (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  const token = bearerHeader && bearerHeader.split(" ")[1];
  
  if (!token) {
    return res.sendStatus(401);
  }

  // Get the public key from Keycloak
  // You can get this from: http://localhost:8080/realms/lemici
  // Look for the public_key field
  const public_key = `-----BEGIN PUBLIC KEY-----\n${process.env.KEYCLOAK_PUBLIC_KEY}\n-----END PUBLIC KEY-----`;

  try {
    const decodedToken = jwtmod.verify(token, public_key, {
      algorithms: ["RS256"],
    });

    const { email, preferred_username, sub } = decodedToken;
    req.user = {
      email,
      username: preferred_username,
      id: sub,
    };
    
    next();
  } catch (error) {
    console.error("Token verification failed:", error);
    return res.sendStatus(403);
  }
};
