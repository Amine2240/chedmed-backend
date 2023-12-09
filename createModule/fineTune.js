const fs = require('fs');
const { OpenAI } = require('openai');

// Set your OpenAI API key
const apiKey = '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';
const openai = new OpenAI(apiKey);


const id = "file-7jSVVMpiSc4Jem8ZbCqdmjX9"

const fineTune = async () => {
    const FINETUNE = await openai.fineTuning.jobs.create({
        training_file: id,
        model: "gpt-3.5-turbo"
    });
    console.log(FINETUNE);
}
fineTune();
