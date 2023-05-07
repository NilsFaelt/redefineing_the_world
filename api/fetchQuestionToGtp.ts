export const fetchQuestionToGtp = async (question: string, key: string) => {
  const questionRules = {
    answerStyle: "asnwer in the style of dalai lama",
    answerLength: "answer in 100 word",
  };
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      prompt: `Question: ${question} ${questionRules.answerStyle} ${questionRules.answerLength}\nAnswer:`,
      max_tokens: 100,
      temperature: 0.7,
      n: 1,
      stop: ["\n"],
    }),
  });

  if (!response.ok) throw new Error("bad response");

  return { response };
};
