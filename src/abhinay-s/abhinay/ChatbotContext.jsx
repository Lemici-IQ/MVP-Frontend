import React, { createContext, useContext, useState } from "react";

const ChatbotContext = createContext({ showChatbot: false, setShowChatbot: () => {} });

export const ChatbotProvider = ({ children }) => {
  const [showChatbot, setShowChatbot] = useState(false);
  return (
    <ChatbotContext.Provider value={{ showChatbot, setShowChatbot }}>
      {children}
    </ChatbotContext.Provider>
  );
};

export const useChatbot = () => useContext(ChatbotContext);
