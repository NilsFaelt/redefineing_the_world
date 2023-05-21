import { NextApiResponse, NextApiRequest } from "next";
import { z } from "zod";
import { fetchPriceCalculationGtp } from "../../../api/fetchPriceCalculationGtp";
const apiKey = process.env.API_KEY;

interface RequestBody {
  projectInfo: string;
}

const ApiKeySchema = z.string();

export default async function handler(
  req: NextApiRequest & { body: RequestBody },
  res: NextApiResponse
) {
  if (req.method === "POST") {
    console.log(req.body.projectInfo);
    const isApiKey = ApiKeySchema.safeParse(apiKey);
    if (!isApiKey.success) {
      res.status(404).json({ error: "Invalid API key" });
    } else {
      const response = await fetchPriceCalculationGtp(
        req.body.projectInfo,
        isApiKey.data
      );
      res.json(response);
    }
  } else {
    // Handle any other HTTP method
    res.status(405).json({ error: "Method not allowed" });
  }
}
