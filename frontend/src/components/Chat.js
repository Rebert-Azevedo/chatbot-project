import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:5000/api/ask', { question });
        setResponse(res.data.response);
    };

    return (
        <div className="p-4 max-w-md mx-auto">
            <form onSubmit={handleSubmit}>
                <textarea
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Digite sua pergunta"
                    className="w-full p-2 border rounded"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
                    Enviar
                </button>
            </form>
            {response && <p className="mt-4">{response}</p>}
        </div>
    );
};

export default Chat;
