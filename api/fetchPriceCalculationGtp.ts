export const fetchPriceCalculationGtp = async (
  question: string,
  key: string
) => {
  const questionRules = {
    role: "system",
    content:
      "you are a price advisory for a software company, and you will be asked for a price for a project",
  };
  const asistant = {
    role: "assistant",
    content: "Answer in the style of dalai lama ",
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
        asistant,
        {
          role: "user",
          content: question,
        },
      ],

      max_tokens: 250,
      temperature: 0.4,
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
