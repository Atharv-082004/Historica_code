import storage from "../_storage";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { id } = req.query as { id: string };
  if (req.method === "GET") {
    try {
      const monument = await storage.getMonumentById(id);
      if (!monument) return res.status(404).json({ message: "Monument not found" });
      res.status(200).json(monument);
    } catch (err) {
      res.status(500).json({ message: "Error fetching monument details" });
    }
  } else {
    res.setHeader("Allow", "GET");
    res.status(405).end("Method Not Allowed");
  }
}
