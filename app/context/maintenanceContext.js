import { createContext, useContext, useState, useEffect } from "react";
import getAllEpisodeTypes from "../actions/getAllEpisodeTypes";
import getAllStatusTypes from "../actions/getAllStatusTypes";
import getAllTopicKingdoms from "../actions/getAllTopicKingdoms";
import getAllTopicSubtypes from "../actions/getAllTopicSubtypes";
import getAllDataBackupTypes from "../actions/getAllDataBackupTypes";


const MaintenanceContext = createContext();

export const MaintenanceProvider = ({ children }) => {
  const [episodeTypes, setEpisodeTypes] = useState([]);
  const [statusTypes, setStatusTypes] = useState([]);
  const [topicKingdoms, setTopicKingdoms] = useState([]);
  const [topicSubtypes, setTopicSubtypes] = useState([]);
  const [dataBackupTypes, setDataBackupTypes] = useState([]);

  useEffect(() => {
    const fetchEpisodeTypes = async () => {
      const episodeTypes = await getAllEpisodeTypes();
      setEpisodeTypes(episodeTypes);
    };

    const fetchStatusTypes = async () => {
      const statusTypes = await getAllStatusTypes();
      setStatusTypes(statusTypes);
    };

    const fetchTopicKingdoms = async () => {
      const topicKingdoms = await getAllTopicKingdoms();
      setTopicKingdoms(topicKingdoms);
    }

    const fetchTopicSubtypes = async () => {
      const topicSubtypes = await getAllTopicSubtypes();
      setTopicSubtypes(topicSubtypes);
    }

    const fetchDataBackupTypes = async () => {
      const dataBackupTypes = await getAllDataBackupTypes();
      setDataBackupTypes(dataBackupTypes);
    }

    fetchEpisodeTypes();
    fetchStatusTypes();
    fetchTopicKingdoms();
    fetchTopicSubtypes();
    fetchDataBackupTypes();
  }, []);

  return (
    <MaintenanceContext.Provider
      value={{
        episodeTypes,
        statusTypes,
        topicKingdoms,
        topicSubtypes,
        dataBackupTypes
      }}
    >
      {children}
    </MaintenanceContext.Provider>
  );
};

export const useMaintenance = () => {
  const context = useContext(MaintenanceContext);
  if (!context) {
    throw new Error(
      "useMaintenance must be used within an MaintenanceProvider"
    );
  }

  return context;
};
