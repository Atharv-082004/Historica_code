import storage from "../_storage";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "GET") {
    try {
      const monuments = await storage.getAllMonuments();
      res.status(200).json(monuments);
    } catch (err) {
      res.status(500).json({ message: "Error fetching monuments" });
    }
  } else {
    res.setHeader("Allow", "GET");
    res.status(405).end("Method Not Allowed");
  }
}
