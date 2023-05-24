export const fetchPriceCalculationGtp = async (
  question: string,
  key: string
) => {
  const questionRules = {
    role: "system",
    content:
      "you are a working as customer service for a software company, and you will be asked for a price for a software-project based on theese guidlines:project-type proce for a portfoolio: 50 000 - 60 000sek,price for a  webstore 200 000 - 250 000sek, price for a website 60 000 - 300 000 depending on the website, price for social-media 500 000 or more, big systems 500 000 sek or more,  price fora mobile-app 150 000 - 300 000sek depending on complexity, design: none provided 15000 - 20000sek extra, ai: basic = 15 000 sek extra, more advanced ai 30 000 sek, payment: 20 000 - 40 000 depending on complexity, no content 20 000 sek - 40 000 sek more",
  };
  const asistant = {
    role: "assistant",
    content:
      "give the price you think is accurate with the information you get and, end with the accumilated price, in max 30 words. ",
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
