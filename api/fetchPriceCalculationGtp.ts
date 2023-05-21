export const fetchPriceCalculationGtp = async (
  question: string,
  key: string
) => {
  const questionRules = {
    role: "system",
    content:
      "you are a working as customer service for a software company, and you will be asked for a price for a software-project, give the price you think is accurate with the information you get and use theese guidlines:project-type:portfoolio: 50 000 - 60 000sek, webstore 200 000 - 250 000sek, social-media 500 000 or more, app 150 000 - 300 000sek depending on complexity, design: none provided 15000 - 20000sek extra, ai: basic = 15 000 sek extra, more advanced ai 30 000 sek, payment: 20 000 - 40 000 depending on complexity, end with the accumilated price  ",
  };
  const asistant = {
    role: "assistant",
    content: "answer in the style of Dalai Lama",
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
