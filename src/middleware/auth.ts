import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

interface AuthenticatedRequest extends NextApiRequest {
  user?: {
    id: number;
    role: "USER" | "ADMIN";
  };
}

export const withAuth =
  (handler: NextApiHandler, allowedRoles: ("USER" | "ADMIN")[] = []) =>
  async (req: AuthenticatedRequest, res: NextApiResponse) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    try {
      const decoded = jwt.verify(token, JWT_SECRET) as {
        id: number;
        role: "USER" | "ADMIN";
      };

      req.user = {
        id: decoded.id,
        role: decoded.role,
      };

      if (!allowedRoles.includes(decoded.role)) {
        return res.status(403).json({ error: "Access denied" });
      }

      return handler(req, res);
    } catch (err) {
      return res.status(401).json({ error: "Invalid or expired token" });
    }
  };
