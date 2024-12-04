import React from 'react';
import { Bot, User } from 'lucide-react';
import { type Message } from '../../types/chatbot';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isBot = message.type === 'bot';
  
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
      <div className={`flex max-w-[80%] ${isBot ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className={`flex-shrink-0 ${isBot ? 'mr-3' : 'ml-3'}`}>
          {isBot ? (
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <Bot className="w-5 h-5 text-blue-600" />
            </div>
          ) : (
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-gray-600" />
            </div>
          )}
        </div>
        <div
          className={`rounded-lg px-4 py-2 ${
            isBot
              ? 'bg-white text-gray-800 shadow-sm'
              : 'bg-blue-600 text-white'
          }`}
        >
          <p className="text-sm">{message.content}</p>
          <span className="text-xs opacity-75 mt-1 block">
            {message.timestamp.toLocaleTimeString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;