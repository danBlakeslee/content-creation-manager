import { createContext, useContext, useState, useEffect } from "react";

const TopicContext = createContext();

export const TopicsProvider = ({ children }) => {
  const [topics, setTopics] = useState([]);

  return (
    <TopicContext.Provider
      value={{
        topics,
        updateTopics: setTopics
      }}
    >
      {children}
    </TopicContext.Provider>
  );
};

export const useTopics = () => {
  const context = useContext(TopicContext);
  if (!context) {
    throw new Error(
      "useTopics must be used within a TopicsProvider"
    );
  }

  return context;
};
