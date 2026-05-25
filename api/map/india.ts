import storage from "../_storage";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  try {
    const mapData = await storage.getIndiaMapData();
    res.status(200).json(mapData);
  } catch (err) {
    res.status(500).json({ message: "Error fetching map data" });
  }
}
