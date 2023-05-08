export const fetchQuestionToGtp = async (question: string, key: string) => {
  const questionRules = {
    role: "system",
    content: "answer in the style of dalai lama",
  };
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        questionRules,
        {
          role: "user",
          content: question,
        },
      ],

      max_tokens: 100,
      temperature: 0.7,
      // n: 1,
      // stop: ["\n"],
    }),
  })
    .then((data) => data.json())
    .catch((err) => {
      console.log(err);
    });
  console.log(response, "in here boroter");
  return response;
};
