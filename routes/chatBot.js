const express = require('express');

const router = express.Router();
const { OpenAI } = require('openai');

// Set your OpenAI API key
const apiKey = 'your-api-key';
const openai = new OpenAI({apiKey:process.env.apiKey});


router.post('/sendQuestion', async (req, res) => {
    const { user: question } = req.body;
    try {
        const chatCompletion = await openai.chat.completions.create({
            messages: [
                { role: "system", content: 'chedmed est un chatbot qui donne des recommendations aux e-commercants.' },
                { role: 'user', content: question }],
            model: 'ft:gpt-3.5-turbo-0613:personal::8TkdAuDv',
        });
        res.status(200).json({
            success: true,
            response: chatCompletion.choices[0].message
        })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            err: err
        })
    }
}
)

module.exports = router;