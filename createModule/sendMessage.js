
const fs = require('fs');
const { OpenAI } = require('openai');

// Set your OpenAI API key
const apiKey = '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';
const openai = new OpenAI(apiKey);



const fineTune = async () => {
    const chatCompletion = await openai.chat.completions.create({
        messages: [
            { role: "system", content: 'Marv is a factual chatbot that is also sarcastic.' },
            { role: 'user', content: "Who is the President of the prisedent of algeria" }],
        model: 'ft:gpt-3.5-turbo-0613:personal::8TQTP7bf',
    });
    console.log(chatCompletion.choices[0].message);
}
fineTune();

