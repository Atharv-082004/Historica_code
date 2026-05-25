import storage from "../../_storage";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { id } = req.query as { id: string };
  if (req.method === "POST") {
    try {
      const result = await storage.recordMonumentVisit(id);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ message: "Error recording monument visit" });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
