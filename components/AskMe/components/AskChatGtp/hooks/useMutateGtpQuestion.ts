import { useMutation } from "@tanstack/react-query";

const fetchGtp = async (question: string) => {
  return await fetch("/api/gtp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ question }),
  }).then((res) => res.json());
};

export const useMutateGtpQuestion = () => {
  return useMutation(fetchGtp);
};
