const { getResponseFromNLP, queryKnowledgeBase } = require('../services/chatbotService');

exports.handleQuestion = async (req, res) => {
    const { question } = req.body;

    try {
        const nlpResponse = await getResponseFromNLP(question);
        const knowledgeResponse = queryKnowledgeBase(question);

        // Unificação das respostas
        const finalResponse = nlpResponse || knowledgeResponse || "Desculpe, não conseguimos identificar sua pergunta.";
        res.json({ response: finalResponse });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao processar a pergunta.' });
    }
};
