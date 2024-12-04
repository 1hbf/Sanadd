import React, { useState, useRef, useEffect } from 'react';
import { type Message, type BotResponse } from '../types/chatbot';
import { getBotResponse } from '../services/chatbot';
import ChatMessage from '../components/chatbot/ChatMessage';
import ChatInput from '../components/chatbot/ChatInput';
import References from '../components/chatbot/References';

const MedicalChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "Hello! I'm your medical assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [currentResponse, setCurrentResponse] = useState<BotResponse | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await getBotResponse(content);
      setCurrentResponse(response);

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: response.message,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error getting bot response:', error);
      // Handle error appropriately
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Medical Assistant
            </h1>
            <p className="text-gray-600 mb-6">
              Ask questions about your health concerns and get AI-powered insights
              backed by medical references. Remember, this is for informational
              purposes only and does not replace professional medical advice.
            </p>
            
            <div className="h-[400px] overflow-y-auto mb-6 space-y-4">
              {messages.map(message => (
                <ChatMessage key={message.id} message={message} />
              ))}
              <div ref={messagesEndRef} />
            </div>

            {currentResponse?.references && (
              <References references={currentResponse.references} />
            )}

            {currentResponse?.specialistOpinions && (
              <div className="mt-4 space-y-4">
                <h3 className="text-sm font-medium text-gray-900">
                  Specialist Opinions
                </h3>
                {currentResponse.specialistOpinions.map((opinion, index) => (
                  <div
                    key={index}
                    className="bg-blue-50 rounded-lg p-4 text-sm text-gray-800"
                  >
                    <p className="font-medium mb-1">
                      {opinion.doctorName} - {opinion.specialization}
                    </p>
                    <p>{opinion.opinion}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6">
              <ChatInput onSend={handleSendMessage} disabled={loading} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalChatbot;