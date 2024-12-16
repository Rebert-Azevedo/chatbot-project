const axios = require('axios');
const knowledgeBase = require('../../base-conhecimento/base.json');

exports.getResponseFromNLP = async (question) => {
    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: "gpt-4",
            messages: [{ role: "user", content: question }]
        }, {
            headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` }
        });
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error("Erro na integração com o NLP:", error);
        return null;
    }
};

exports.queryKnowledgeBase = (question) => {
    const result = knowledgeBase.find(entry => question.includes(entry.key));
    return result ? result.answer : null;
};
