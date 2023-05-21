export const fetchPriceCalculationGtp = async (
  question: string,
  key: string
) => {
  const questionRules = {
    role: "system",
    content:
      "you will get some information which you will use to calculate a price for building a website/app. If they provide a deisgn the app will be less complex. If they want to implement ai the app will be around 20 000 sek more expensive. If they want to implement payments methods it will be  20 000 - 30 000 sek more expensive. if they only want ai its 15 000 - 40 000 sek ",
  };
  const asistant = {
    role: "assistant",
    content:
      "Answer in the style of dalai lama. and say that for a correct price  you need to mail or call Fango Solutions,  a small non complex app will be around 50 000 sek and a big complex app will be 500 000 sek, a webstore is about 200 00 sek  and a simple website for displaying information is 50 000 sek",
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
      temperature: 0.2,
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
