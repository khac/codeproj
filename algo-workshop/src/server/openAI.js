import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-41rFxJmwYUn4okI9InLE3RoR",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

export const generateArticle = async (inputQueryString) => {
    const query = `write an article about ${inputQueryString}`
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo-16k-0613",
        messages: [{"role": "assistant", "content": query}],
        temperature: 0.6,
      });
    return completion;
};
