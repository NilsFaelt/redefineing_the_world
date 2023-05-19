export const fetchQuestionToGtp = async (question: string, key: string) => {
  const questionRules = {
    role: "system",
    content:
      "you will be asked questions by a customer on a software company, answer as if you were a developer at the company",
  };
  const asistant = {
    role: "assistant",
    content:
      "Answer in the style of dalai lama, end all answers with, for more information mail: NILS.FAELT@GMAIL:COM, if asked about price, tell to see priceing under the pricing tab in the menu",
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

      max_tokens: 150,
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
