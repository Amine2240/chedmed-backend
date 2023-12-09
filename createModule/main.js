const fs = require('fs');
const { OpenAI } = require('openai');

// Set your OpenAI API key
const apiKey = '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';
const openai = new OpenAI(apiKey);


const id = "file-f9vnNsiWBgbaxl6OwfBiD1qe"

const fineTune = async () => {
    const FINETUNE = await openai.fineTuning.jobs.listEvents("ftjob-OazisNEfV7EIUDMDOjI1g3Cy");
    console.log(FINETUNE);
}
fineTune();

