const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: "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",
    // apiKey: "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",
});

const openai = new OpenAIApi(configuration);

const req = async () => {
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "hi",
        temperature: 0.1,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        max_tokens: 256,
        stop: ["Human:", "AI:", "Human:", "AI:"]
    });
    console.log(completion.data);
}

req();