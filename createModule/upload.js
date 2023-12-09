const fs = require('fs');
const { OpenAI } = require('openai');

// Set your OpenAI API key
const apiKey = 'your_api_key';
const openai = new OpenAI(apiKey);

const uploadFile = async () => {
    const file = await openai.files.create({
        file: fs.createReadStream('./dataset.jsonl'),
        purpose: "fine-tune"
    })
    console.log(file);
}
uploadFile();
