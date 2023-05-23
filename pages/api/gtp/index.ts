import { NextApiResponse, NextApiRequest } from "next";
import { fetchQuestionToGtp } from "../../../api/fetchQuestionToGtp";
import { z } from "zod";
const apiKey = process.env.API_KEY;
const ApiKeySchema = z.string();

interface RequestBody {
  questionRules: { role: string; content: string };
  assistant: { role: string; content: string };
  question: { role: string; content: string };
}

export default async function handler(
  req: NextApiRequest & { body: RequestBody },
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const isApiKey = ApiKeySchema.safeParse(apiKey);
    if (!isApiKey.success) {
      res.status(404).json({ error: "Invalid API key" });
    } else {
      const response = await fetchQuestionToGtp(
        req.body.question,
        isApiKey.data,
        req.body.questionRules,
        req.body.asistant
      );
      res.json(response);
    }
  } else {
    // Handle any other HTTP method
    res.status(405).json({ error: "Method not allowed" });
  }
}
