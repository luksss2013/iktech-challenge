import React, { useState } from "react";
import "./History.css";

const History: React.FC = () => {
  const [searchHistory] = useState<string[]>(() => {
    const searchHistoryStorage = localStorage.getItem("searchHistory");
    return JSON.parse(searchHistoryStorage!);
  });

  return (
    <ul className="history-list">
        <h2>Search history</h2>
      {searchHistory.map((searchItem, index) => (
        <li key={index}>{`${index} - ${searchItem}`}</li>
      ))}
    </ul>
  );
};

export default History;
